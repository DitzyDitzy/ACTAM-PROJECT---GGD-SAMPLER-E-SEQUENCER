const FWC = Object.freeze({
  Props: Object.freeze({
    ATTRIBUTE_TYPE: 'attribute',
    INSTANCE_TYPE: 'instance',
    fromAttribute: (attributeName, mapping = x => x) => ({
      type: FWC.Props.ATTRIBUTE_TYPE,
      name: attributeName,
      mapping
    }),
    fromInstance: (fieldName, { readOnly = true, mapping = x => x } = {}) => ({
      type: FWC.Props.INSTANCE_TYPE,
      field: fieldName,
      readOnly,
      mapping
    }),
    DEFAULT: () => ({
      root: FWC.Props.fromInstance('shadowRoot'),
    }),
  }),

  define: (name, props, render) => {
    customElements.define(name, FWC.create(props, render))
  },

  create: (props, render) => {
    return class extends HTMLElement {
      constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        Object.values(props)
          .filter(({ type, field }) => type === FWC.Props.INSTANCE_TYPE && field !== 'shadowRoot')
          .forEach(({ field }) => {
            Object.defineProperty(this, field, {
              get: () => {
                return this[`_${field}`]
              },
              set: value => {
                this[`_${field}`] = value
                this.render()
              },
            })
          })
      }

      static observedAttributes = Object.values(props)
        .filter(({ type }) => type === FWC.Props.ATTRIBUTE_TYPE)
        .map(({ name }) => name)

      get props() {
        const mergedProps = {
          ...FWC.Props.DEFAULT(),
          ...props
        }

        return Object.fromEntries(
          Object.entries(mergedProps)
            .map(([key, { type, name, field, mapping, readOnly }]) => {
              if (type === FWC.Props.ATTRIBUTE_TYPE) {
                return [key, mapping(this.attributes[name]?.value)]
              }
              if (type === FWC.Props.INSTANCE_TYPE) {
                const mappedFieldValue = mapping(this[field])

                if (readOnly) {
                  return [key, mappedFieldValue]
                }

                return [key, [mappedFieldValue, value => { this[field] = value }]]
              }

              console.warn(new Error(`Unknown Property type "${key}"`))
              return []
            })
            .filter(entry => entry.length === 2)
        )
      }

      render() {
        console.info('render', this)
        render.call(this, this.props)
      }

      connectedCallback() {
        this.render()
      }

      attributeChangedCallback() {
        this.render()
      }
    }
  }
})

FWC.define('fwc-demo', {
  userName: FWC.Props.fromAttribute('user'),
  count: FWC.Props.fromInstance('count', { readOnly: false }),
}, props => {
  const { root, userName = 'MONDO!!' } = props
  const [count = 0, setCount] = props.count

  root.innerHTML = `
  <style>
  a {
    display: block;
    color: white;
    background-color: orange;
    text-align: center;
  }
  </style>
  `

  const link = document.createElement('a')
  link.onclick = () => {
    console.log('link clicked', props)
    setCount(count + 1)
  }
  link.innerText = `CIAONEEEE ${userName}, this link has been clicked ${count} times`
  root.appendChild(link)
})

FWC.define('fwc-demo-2', {
  userName: FWC.Props.fromAttribute('user'),
  count: FWC.Props.fromInstance('count'),
  gan: 0
}, function () {
  this.shadowRoot.innerHTML = `
  <style>
  a {
    display: block;
    color: white;
    background-color: black;
    text-align: center;
  }
  </style>
  `
  if (this.count === undefined) {
    this.count = 0
  }

  const link = document.createElement('a')
  link.onclick = () => {
    console.log('link clicked', this)
    this.count += 1
  }
  link.innerText = `CIAONEEEE ${this.attributes.user.value}, this link has been clicked ${this.count} times`
  this.shadowRoot.appendChild(link)
})