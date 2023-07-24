'use strict'

class NoteUpload extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  render() {
    const _text = document.createElement('p')
    _text.style.display = 'inline-block'
    _text.style.margin = '10px'

    const _inputFile = document.createElement('input')
    _inputFile.type = 'file'
    _inputFile.onchange = () => {
      const selectedFile = _inputFile.files[0]
      const fileUrl = URL.createObjectURL(selectedFile)

      _text.innerText = `${selectedFile.name}`

      this._onchange?.(fileUrl)
    }

    const _button = document.createElement('a')
    _button.innerText = `Upload ${this.attributes.name?.value || ''}`
    _button.onclick = () => {
      _inputFile.click()
    }

    this.shadowRoot.innerHTML = `
    <style>
    a {
      display: inline-block;
      padding:0.35em 1.2em;
      border:0.1em solid #031b3d;
      margin:0 0.3em 0.3em 0;
      border-radius:3px;
      box-sizing: border-box;
      text-decoration:none;
      font-weight:400;
      color:black;
      text-align:center;
      transition: all 0.2s;
    }
    a:hover {
      color:white;
      background-color:#031b3d;
    }
    @media all and (max-width:30em) {
      a {
        display:block;
        margin:0.4em auto;
      }
    }
    </style>
    `
    this.shadowRoot.appendChild(_button)
    this.shadowRoot.appendChild(_text)
  }

  attributeChangedCallback() {
    this.render()
  }

  set onchange(cb) {
    this._onchange = cb
    this.render()
  }

  connectedCallback() {
    this.render()
  }

  static observedAttributes = ['name']
}

customElements.define('note-upload', NoteUpload)