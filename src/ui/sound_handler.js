import Tone from 'tone';
const SoundHandler = {

  toggleMute() {
    Tone.Master.mute = !Tone.Master.mute;
    return Tone.Master.mute;
  }

}

module.exports = SoundHandler