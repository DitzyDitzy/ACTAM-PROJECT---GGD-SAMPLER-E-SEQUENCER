# ACTAM-PROJECT---GGD-SAMPLER-E-SEQUENCER

GGD a Drum Sampler 

# General info
GGD is a sampler designed primarily for drum or percussive sounds but having the ability to insert your own samples makes it possible to use it with many other types of sounds. Our goal was to create a virtual instrument that can simplify the user experience by providing simple graphics but with the ability to create complex rhythms. In this way anyone can approach our instrument even without having a solid musical background.
To create our sampler, we used the programming languages HTML, Javascript and CSS while taking advantage of the Tone.js library to create the effects, sequencer and player. Tone.js is a Web Audio framework for creating interactive music in the browser. This allowed us to use an existing library that we adapted to our needs: specifically, we used the Tone.ui file within which were written many graphical objects such as the sequencer and player that we used. Finally, the Input-knobs library was used to create the knobs of the effects player.

STRUCTURE
The drum-sampler consist of: ​
a player.​
a step sequencer with corresponding volumes per channel​.
5 effect​ (pitch, distortion, bitcrusher, delay, reverb).
one compressor on the master.
 a section where samples can be loaded.

Possible implementation: ​
Different types of compression on the Master​.
Multiband equalizer on the master or individual channels​.
Choice of number of steps to create odd rhythms​.
Possibility of adding additional audio channels​.
