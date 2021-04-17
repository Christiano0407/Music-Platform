const musicContainer = document.getElementById(`music-container`); 
const playBtn = document.getElementById(`play`); 
const prevBtn = document.getElementById(`prev`); 
const nextBtn = document.getElementById(`next`); 

const audio = document.getElementById(`audio`); 

const progress = document.getElementById(`progress`); 
const progressContainer =  document.getElementById(`progress-container`); 

const title = document.getElementById(`title`); 
const cover = document.getElementById(`cover`); 

// SONG TITLES
const songs = [`hey`, `summer`, `ukelele`]

// KEEP TRACK OF SONG
let songIndex = 2
// INITIALLY LOAD SONG DETAILS INTO DOM
loadSong(songs[songIndex])
// UPDATE SONG DETAILS
function loadSong(song) {
 title.innerText = song
  audio.src = `../assets/music/${song}.mp3`;
  cover.src = `../assets/images/${song}.jpg`;
}
// PLAY SONG
  function playSong() {
  musicContainer.classList.add(`play`)
  playBtn.querySelector(`i.fas`).classList.remove(`fa-play`); 
  playBtn.querySelector(`i.fas`).classList.add(`fa-pause`); 

  audio.play(); 
  }
// PAUSE SONG
 function pauseSong() {
     musicContainer.classList.remove(`play`); 
     playBtn.querySelector(`i.fas`).classList.add(`play`);
     playBtn.querySelector(`i.fas`).classList.remove(`fa-pause`);  
   
     audio.pause(); 
 }
// NEXT SONG

// UPDATE PROGRESS BAR

// SET PROGRESS BAR

// EVENT lISTENER
 playBtn.addEventListener(`click`, () => {
     const isPLaying = musicContainer.classList.contains(`play`)
     
     if(isPLaying) {
         pauseSong()
     }else {
         playSong()
     }

 })
// CHANGE SONG

// TIME/SONG UPDATE

//CLICK ON PROGRESS BAR

// SONG ENDS