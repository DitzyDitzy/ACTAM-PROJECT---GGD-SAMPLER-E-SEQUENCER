"use strict";

window.addEventListener("load", main);

const notes = {
  "kick": "./kick.[wav]",
  "snare": "./snare.[wav]",
  "hat": "./hat.[wav]",
  "clap": "./clap.[wav]",
  "perc": "./perc.[wav]",
  "ride": "./ride.[wav]",
}

const playersSettings = {
  "volume": -10,
  "fadeOut": "64n",
}

//setup a polyphonic sampler
function main() {
  // setup the players
  const noteNames = Object.keys(notes);
  let keys = new Tone.Players(notes, playersSettings);



  // set sliders volume on change
  const volumeSliders = ['#slider0', '#slider1', '#slider2', '#slider3', '#slider4', '#slider5'];
  volumeSliders.forEach((sliderId, index) => {
    const slider = document.querySelector(sliderId)
    slider.addEventListener('input', () => {
      keys.get(noteNames[index]).volume.value = slider.value
    })
  })

  // pitch
  const pitchSliders = ['#pitchSlider0', '#pitchSlider1', '#pitchSlider2', '#pitchSlider3'];
  pitchSliders.forEach((sliderId, index) => {
    const slider = document.querySelector(sliderId);
    slider.addEventListener('input', () => {
      const pitchValue = parseFloat(slider.value);
      keys.get(noteNames[index]).playbackRate = Math.pow(2, pitchValue / 12);
    });
  });
 // master section

 const comp = new Tone.Compressor({
  threshold : 10,
  ratio: 1,
  attack: 0.003,
  release: 0.25,
 });


  // effect section 0(kick)
  var bypass = 1 ;

  const delay0 = new Tone.FeedbackDelay({
    delayTime : 0,
    feedback : 0,
  });
  const reverb0 = new Tone.Freeverb({
    roomSize : 0,
  });
  const distortion0 = new Tone.Distortion({
    distortion : 0.1,});
  const bitcrusher0 = new Tone.BitCrusher({
    bits : 7,});

  keys.get(noteNames[0]).connect(distortion0);
  distortion0.connect(bitcrusher0);
  bitcrusher0.connect(delay0);
  delay0.connect(reverb0);
  reverb0.connect(comp);
 
  
 

  const distortionSlider0 = document.querySelector("#distortionSlider0");
  const bitcrusherSlider0 = document.querySelector("#bitcrusherSlider0");
  const delaySlider0 = document.querySelector("#delaySlider0");
  const reverbSlider0 = document.querySelector("#reverbSlider0");
  const distortionGainSlider0 = document.querySelector("#distortionGainSlider0");
  const bitcrusherBitsSlider0 = document.querySelector("#bitcrusherBitsSlider0");
  const delayTimeSlider0 = document.querySelector("#delayTimeSlider0");
  const delayFeedbackSlider0 = document.querySelector("#delayFeedbackSlider0");
  const reverbRoomSizeSlider0 = document.querySelector("#reverbRoomSizeSlider0");


  distortion0.wet.value = 0;
  bitcrusher0.wet.value = 0;
  delay0.wet.value = 0;
  reverb0.wet.value =0;
  


  distortionSlider0.addEventListener('input', () => {
    distortion0.wet.value = distortionSlider0.value;
  });

  bitcrusherSlider0.addEventListener('input', () => {
    bitcrusher0.wet.value = bitcrusherSlider0.value;
  });

  delaySlider0.addEventListener('input', () => {
    delay0.wet.value = delaySlider0.value;
  });

  reverbSlider0.addEventListener('input', () => {
    reverb0.wet.value = reverbSlider0.value;
  });

  distortionGainSlider0.addEventListener('input', () => {
    distortion0.set().distortion = distortionGainSlider0.value;
  });
  bitcrusherBitsSlider0.addEventListener('input', () => {
    bitcrusher0.set().bits = 8-bitcrusherBitsSlider0.value;
  });
  delayTimeSlider0.addEventListener('input', () => {
    delay0.delayTime.value = delayTimeSlider0.value;
  });
  delayFeedbackSlider0.addEventListener('input', () => {
    delay0.feedback.value = delayFeedbackSlider0.value;
  });
  reverbRoomSizeSlider0.addEventListener('input', () => {
    reverb0.roomSize.value = reverbRoomSizeSlider0.value;
  });



  // effect section 1(snare)
  const delay1 = new Tone.FeedbackDelay({
    delayTime : 0,
    feedback : 0,
  });
  const reverb1 = new Tone.Freeverb({
    roomSize : 0,
  });
  const distortion1 = new Tone.Distortion({
    distortion : 0.1,});
  const bitcrusher1 = new Tone.BitCrusher({
    bits : 7,});

  keys.get(noteNames[1]).connect(distortion1);
  distortion1.connect(bitcrusher1);
  bitcrusher1.connect(delay1);
  delay1.connect(reverb1);
  reverb1.connect(comp);
  


  const distortionSlider1 = document.querySelector("#distortionSlider1");
  const bitcrusherSlider1 = document.querySelector("#bitcrusherSlider1");
  const delaySlider1 = document.querySelector("#delaySlider1");
  const reverbSlider1 = document.querySelector("#reverbSlider1");
  const distortionGainSlider1 = document.querySelector("#distortionGainSlider1");
  const bitcrusherBitsSlider1 = document.querySelector("#bitcrusherBitsSlider1");
  const delayTimeSlider1 = document.querySelector("#delayTimeSlider1");
  const delayFeedbackSlider1 = document.querySelector("#delayFeedbackSlider1");
  const reverbRoomSizeSlider1 = document.querySelector("#reverbRoomSizeSlider1");



  distortion1.wet.value = 0;
  bitcrusher1.wet.value = 0;
  delay1.wet.value = 0;
  reverb1.wet.value =0;
  reverb1.connect(comp);
  

  distortionSlider1.addEventListener('input', () => {
    distortion1.wet.value = distortionSlider1.value;
  });

  bitcrusherSlider1.addEventListener('input', () => {
    bitcrusher1.wet.value = bitcrusherSlider1.value;
  });

  delaySlider1.addEventListener('input', () => {
    delay1.wet.value = delaySlider1.value;
  });

  reverbSlider1.addEventListener('input', () => {
    reverb1.wet.value = reverbSlider1.value;
  });


  distortionGainSlider1.addEventListener('input', () => {
    distortion1.set().distortion = distortionGainSlider1.value;
  });
  bitcrusherBitsSlider1.addEventListener('input', () => {
    bitcrusher1.set().bits = 8-bitcrusherBitsSlider1.value;
  });
  delayTimeSlider1.addEventListener('input', () => {
    delay1.delayTime.value = delayTimeSlider1.value;
  });
  delayFeedbackSlider1.addEventListener('input', () => {
    delay1.feedback.value = delayFeedbackSlider1.value;
  });
  reverbRoomSizeSlider1.addEventListener('input', () => {
    reverb1.roomSize.value = reverbRoomSizeSlider1.value;
  });



 // effect section 2
 const delay2 = new Tone.FeedbackDelay({
  delayTime : 0,
  feedback : 0,
});
const reverb2 = new Tone.Freeverb({
  roomSize : 0,
});
const distortion2 = new Tone.Distortion({
  distortion : 0.1,});
const bitcrusher2 = new Tone.BitCrusher({
  bits : 7,});

 keys.get(noteNames[2]).connect(distortion2);
 distortion2.connect(bitcrusher2);
 bitcrusher2.connect(delay2);
 delay2.connect(reverb2);
 reverb2.connect(comp);


 const distortionSlider2 = document.querySelector("#distortionSlider2");
 const bitcrusherSlider2 = document.querySelector("#bitcrusherSlider2");
 const delaySlider2 = document.querySelector("#delaySlider2");
 const reverbSlider2 = document.querySelector("#reverbSlider2");
 const distortionGainSlider2 = document.querySelector("#distortionGainSlider2");
 const bitcrusherBitsSlider2 = document.querySelector("#bitcrusherBitsSlider2");
  const delayTimeSlider2 = document.querySelector("#delayTimeSlider2");
  const delayFeedbackSlider2 = document.querySelector("#delayFeedbackSlider2");
  const reverbRoomSizeSlider2 = document.querySelector("#reverbRoomSizeSlider2");


 distortion2.wet.value = 0;
 bitcrusher2.wet.value = 0;
 delay2.wet.value = 0;
 reverb2.wet.value =0;

 distortionSlider2.addEventListener('input', () => {
   distortion2.wet.value = distortionSlider2.value;
 });

 bitcrusherSlider2.addEventListener('input', () => {
   bitcrusher2.wet.value = bitcrusherSlider2.value;
 });

 delaySlider2.addEventListener('input', () => {
   delay2.wet.value = delaySlider2.value;
 });

 reverbSlider2.addEventListener('input', () => {
   reverb2.wet.value = reverbSlider2.value;
 });
 distortionGainSlider2.addEventListener('input', () => {
    distortion2.set().distortion = distortionGainSlider2.value;
  });
  bitcrusherBitsSlider2.addEventListener('input', () => {
    bitcrusher2.set().bits = 8-bitcrusherBitsSlider2.value;
  });
  delayTimeSlider2.addEventListener('input', () => {
    delay2.delayTime.value = delayTimeSlider2.value;
  });
  delayFeedbackSlider2.addEventListener('input', () => {
    delay2.feedback.value = delayFeedbackSlider2.value;
  });
  reverbRoomSizeSlider2.addEventListener('input', () => {
    reverb2.roomSize.value = reverbRoomSizeSlider2.value;
  });


  // effect section 3
  const delay3 = new Tone.FeedbackDelay({
    delayTime : 0,
    feedback : 0,
  });
  const reverb3 = new Tone.Freeverb({
    roomSize : 0,
  });
  const distortion3 = new Tone.Distortion({
    distortion : 0.1,});
  const bitcrusher3 = new Tone.BitCrusher({
    bits : 7,});

  keys.get(noteNames[3]).connect(distortion3);
  distortion3.connect(bitcrusher3);
  bitcrusher3.connect(delay3);
  delay3.connect(reverb3);
  reverb3.connect(comp);


  const distortionSlider3 = document.querySelector("#distortionSlider3");
  const bitcrusherSlider3 = document.querySelector("#bitcrusherSlider3");
  const delaySlider3 = document.querySelector("#delaySlider3");
  const reverbSlider3 = document.querySelector("#reverbSlider3");
  const distortionGainSlider3 = document.querySelector("#distortionGainSlider3");
  const bitcrusherBitsSlider3 = document.querySelector("#bitcrusherBitsSlider3");
  const delayTimeSlider3 = document.querySelector("#delayTimeSlider3");
  const delayFeedbackSlider3 = document.querySelector("#delayFeedbackSlider3");
  const reverbRoomSizeSlider3 = document.querySelector("#reverbRoomSizeSlider3");

  distortion3.wet.value = 0;
  bitcrusher3.wet.value = 0;
  delay3.wet.value = 0;
  reverb3.wet.value =0;


  distortionSlider3.addEventListener('input', () => {
    distortion3.wet.value = distortionSlider3.value;
  });

  bitcrusherSlider3.addEventListener('input', () => {
    bitcrusher3.wet.value = bitcrusherSlider3.value;
  });

  delaySlider3.addEventListener('input', () => {
    delay3.wet.value = delaySlider3.value;
  });

  reverbSlider3.addEventListener('input', () => {
    reverb3.wet.value = reverbSlider3.value;
  });
  distortionGainSlider3.addEventListener('input', () => {
    distortion3.set().distortion = distortionGainSlider3.value;
  });
  bitcrusherBitsSlider3.addEventListener('input', () => {
    bitcrusher3.set().bits = 8-bitcrusherBitsSlider3.value;
  });
  delayTimeSlider3.addEventListener('input', () => {
    delay3.delayTime.value = delayTimeSlider3.value;
  });
  delayFeedbackSlider3.addEventListener('input', () => {
    delay3.feedback.value = delayFeedbackSlider3.value;
  });
  reverbRoomSizeSlider3.addEventListener('input', () => {
    reverb3.roomSize.value = reverbRoomSizeSlider3.value;
  });




   // effect section 4
   const delay4 = new Tone.FeedbackDelay({
    delayTime : 0,
    feedback : 0,
  });
  const reverb4 = new Tone.Freeverb({
    roomSize : 0,
  });
  const distortion4 = new Tone.Distortion({
    distortion : 0.1,});
  const bitcrusher4 = new Tone.BitCrusher({
    bits : 7,});
 
   keys.get(noteNames[4]).connect(distortion4);
   distortion4.connect(bitcrusher4);
   bitcrusher4.connect(delay4);
   delay4.connect(reverb4);
   reverb4.connect(comp);
  
 
 
   const distortionSlider4 = document.querySelector("#distortionSlider4");
   const bitcrusherSlider4 = document.querySelector("#bitcrusherSlider4");
   const delaySlider4 = document.querySelector("#delaySlider4");
   const reverbSlider4 = document.querySelector("#reverbSlider4");
   const distortionGainSlider4 = document.querySelector("#distortionGainSlider4");
   const bitcrusherBitsSlider4 = document.querySelector("#bitcrusherBitsSlider4");
   const delayTimeSlider4 = document.querySelector("#delayTimeSlider4");
   const delayFeedbackSlider4 = document.querySelector("#delayFeedbackSlider4");
   const reverbRoomSizeSlider4 = document.querySelector("#reverbRoomSizeSlider4");
 
   distortion4.wet.value = 0;
   bitcrusher4.wet.value = 0;
   delay4.wet.value = 0;
   reverb4.wet.value =0;
 
 
   distortionSlider4.addEventListener('input', () => {
     distortion4.wet.value = distortionSlider4.value;
   });
 
   bitcrusherSlider4.addEventListener('input', () => {
     bitcrusher4.wet.value = bitcrusherSlider4.value;
   });
 
   delaySlider4.addEventListener('input', () => {
     delay4.wet.value = delaySlider4.value;
   });
 
   reverbSlider4.addEventListener('input', () => {
     reverb4.wet.value = reverbSlider4.value;
   });
   distortionGainSlider4.addEventListener('input', () => {
    distortion4.set().distortion = distortionGainSlider4.value;
  });
  bitcrusherBitsSlider4.addEventListener('input', () => {
    bitcrusher4.set().bits = 8-bitcrusherBitsSlider4.value;
  });
  delayTimeSlider4.addEventListener('input', () => {
    delay4.delayTime.value = delayTimeSlider4.value;
  });
  delayFeedbackSlider4.addEventListener('input', () => {
    delay4.feedback.value = delayFeedbackSlider4.value;
  });
  reverbRoomSizeSlider4.addEventListener('input', () => {
    reverb4.roomSize.value = reverbRoomSizeSlider4.value;
  });

 // effect section 5
 const delay5 = new Tone.FeedbackDelay({
  delayTime : 0,
  feedback : 0,
});
const reverb5 = new Tone.Freeverb({
  roomSize : 0,
});
const distortion5 = new Tone.Distortion({
  distortion : 0.1,});
const bitcrusher5 = new Tone.BitCrusher({
  bits : 7,});

 keys.get(noteNames[5]).connect(distortion5);
 distortion5.connect(bitcrusher5);
 bitcrusher5.connect(delay5);
 delay5.connect(reverb5);
 reverb5.connect(comp);
 comp.toMaster();



  


 const distortionSlider5 = document.querySelector("#distortionSlider5");
 const bitcrusherSlider5 = document.querySelector("#bitcrusherSlider5");
 const delaySlider5 = document.querySelector("#delaySlider5");
 const reverbSlider5 = document.querySelector("#reverbSlider5");
 const distortionGainSlider5 = document.querySelector("#distortionGainSlider5");
 const bitcrusherBitsSlider5 = document.querySelector("#bitcrusherBitsSlider5");
 const delayTimeSlider5 = document.querySelector("#delayTimeSlider5");
 const delayFeedbackSlider5 = document.querySelector("#delayFeedbackSlider5");
 const reverbRoomSizeSlider5 = document.querySelector("#reverbRoomSizeSlider5");

 const compTresholdSlider = document.querySelector("#compTresholdSlider");
 const compRatioSlider = document.querySelector("#compRatioSlider");
 const compAttackSlider = document.querySelector("#compAttackSlider");
 const compReleaseSlider = document.querySelector("#compReleaseSlider");




 distortion5.wet.value = 0;
 bitcrusher5.wet.value = 0;
 delay5.wet.value = 0;
 reverb5.wet.value =0;



 

 distortionSlider5.addEventListener('input', () => {
   distortion5.wet.value = distortionSlider5.value;
 });

 bitcrusherSlider5.addEventListener('input', () => {
   bitcrusher5.wet.value = bitcrusherSlider5.value;
 });

 delaySlider5.addEventListener('input', () => {
   delay5.wet.value = delaySlider5.value;
 });

 reverbSlider5.addEventListener('input', () => {
   reverb5.wet.value = reverbSlider5.value;
 });
 distortionGainSlider5.addEventListener('input', () => {
  distortion5.set().distortion = distortionGainSlider5.value;
});
bitcrusherBitsSlider5.addEventListener('input', () => {
  bitcrusher5.set().bits = 8-bitcrusherBitsSlider5.value;
});
delayTimeSlider5.addEventListener('input', () => {
  delay5.delayTime.value = delayTimeSlider5.value;
});
delayFeedbackSlider5.addEventListener('input', () => {
  delay5.feedback.value = delayFeedbackSlider5.value;
});
reverbRoomSizeSlider5.addEventListener('input', () => {
  reverb5.roomSize.value = reverbRoomSizeSlider5.value;
});

compTresholdSlider.addEventListener('input', () => {
  comp.threshold.value = compTresholdSlider.value;
});
compTresholdSlider.addEventListener('input', () => {
  comp.ratio.value = compRatioSlider.value;
});
compTresholdSlider.addEventListener('input', () => {
  comp.attack.value = compAttackSlider.value;
});
compTresholdSlider.addEventListener('input', () => {
  comp.release.value = compReleaseSlider.value;
});



  // setup the sequence
  const sequenceSteps = [...Array(16).keys()];
  const sequence = new Tone.Sequence((time, colIndex) => {
    // set the highlighted column at the given time
    Tone.Draw.schedule(() => {
      document.querySelector("tone-step-sequencer").setAttribute("highlight", colIndex);
    }, time);

    // play the selected rows at given time
    const column = document.querySelector("tone-step-sequencer").currentColumn;
    column.forEach((row, i) => {
      if (row) {
        keys.get(noteNames[i]).start(time, 0, "16n", 0, 0, 2);
      }
    });
  }, sequenceSteps, "16n");
  sequence.start(0);

  //bind the interface
  document.querySelector("tone-transport").bind(Tone.Transport);

  // notes upload
  noteNames.forEach(note => {
    const uploadElement = document.createElement("note-upload")
    uploadElement.setAttribute("name", note)
    uploadElement.onchange = fileURL => {
      notes[note] = fileURL
      keys = new Tone.Players(notes, playersSettings);
      keys.get(noteNames[0]).connect(distortion0);
      keys.get(noteNames[1]).connect(distortion1);
      keys.get(noteNames[2]).connect(distortion2);
      keys.get(noteNames[3]).connect(distortion3);
      keys.get(noteNames[4]).connect(distortion4);
      keys.get(noteNames[5]).connect(distortion5);
    }

    document.body.appendChild(uploadElement)
  })


  
}
