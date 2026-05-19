// Global singletons for audio to ensure they are created once and can be unlocked on mobile
const isMutedInitially = typeof window !== 'undefined' ? localStorage.getItem('knowsball_music_muted') === 'true' : false;
export const bgMusic = new Audio('/assets/bg music 5mins.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.3;
bgMusic.muted = isMutedInitially;

export const tickingAudio = new Audio('/assets/dragon-studio-clock-ticking-sfx-467486.mp3');
tickingAudio.loop = true;
tickingAudio.volume = 0.3;

export const correctAudio = new Audio('/assets/dragon-studio-correct-472358.mp3');
correctAudio.volume = 0.4;

export const incorrectAudio = new Audio('/assets/error sound.mp3');
incorrectAudio.volume = 0.4;

let isUnlocked = false;

export const unlockAndPlayAudio = () => {
  if (isUnlocked) return;
  isUnlocked = true;

  // Unmute/play background music
  bgMusic.play()
    .then(() => {
      console.log("Background music unlocked and playing successfully");
    })
    .catch(e => {
      console.log("Background music play blocked:", e);
      isUnlocked = false; // reset to try again on next interaction
    });
};
