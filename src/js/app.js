const musicContainer = document.getElementById("music-container"); 
const playBtn = document.getElementById("play"); 
const prevBtn = document.getElementById("prev"); 
const nextBtn = document.getElementById("next"); 

const audio = document.getElementById("audio"); 

const progress = document.getElementById("progress"); 
const progressContainer =  document.getElementById("progress-container"); 

const title = document.getElementById("title"); 
const cover = document.getElementById("cover"); 

// SONG TITLES
const songs = ["hey", "summer", "ukulele"]

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
  musicContainer.classList.add("play")
  playBtn.querySelector(`i.fas`).classList.remove("play"); 
  playBtn.querySelector(`i.fas`).classList.add("fa-pause"); 

  audio.play(); 
  }
// PAUSE SONG
 function pauseSong() {
     musicContainer.classList.remove("play"); 
     playBtn.querySelector(`i.fas`).classList.add("play");
     playBtn.querySelector(`i.fas`).classList.remove("fa-pause");  
   
     audio.pause(); 
 }

 // Previous Song
  function prevSong() {
   songIndex--; 

   if(songIndex < 0) {
       songIndex = songs.length-1; 
   }
   loadSong(songs[songIndex]); 

   playSong(); 
  }
// NEXT SONG
function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
  }


// UPDATE PROGRESS BAR
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }

// SET PROGRESS BAR
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
  }
  
// EVENT lISTENER
 playBtn.addEventListener("click", () => {
     const isPLaying = musicContainer.classList.contains("play")
     
     if(isPLaying) {
         pauseSong()
     }else {
         playSong()
     }

 })
// CHANGE SONG
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// TIME/SONG UPDATE
audio.addEventListener('timeupdate', updateProgress);
//CLICK ON PROGRESS BAR
progressContainer.addEventListener('click', setProgress);
// SONG ENDS
audio.addEventListener('ended', nextSong);