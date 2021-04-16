// ====== ONE-PROGRESS 7 MUSIC--CONTAINER.



//====== SONG-CONTAINER ======
/* const songContainer = document.getElementById(`song-container`); 
const playBtn = document.getElementById(`play`); 
const prevBtn = document.getElementById(`prev`); 
const nextBtn = document.getElementById(`next`); 

const audio = document.getElementById(`song-audio`); 

const songProgress = document.getElementById(`song-progress`); 
const progressContainer = document.getElementById(`song-progress_container`); 

const songTitle = document.getElementById(`song-title`); 
const cover = document.getElementById(`cover`); 

// Song Titles
const songs = [`hey`, `summer`, `ukulele`]; 

// Keep Track of song 
const songIndex = 2; 

// Initially load song details into Dom
loadSong(songs[songIndex]); 

// Update Songs Details
function loadSong(song) {
    songTitle.innerText = song; 
    audio.src = `../assets/music/${song}.mp3`; 
    cover.src = `../ssets/images/${song}.jpg`; 
}

//Play Song
function playSong() {
    songContainer.classList.add(`play`); 
    playBtn.querySelector(`i.fas`).classList.remove(`fa-play`); 
    playBtn.querySelector(`i.fas`).classList.add(`fa.add`); 

    audio.play(); 
}

// Pause Song
function pauseSong() {
    songContainer.classList.remove(`play`); 
    playBtn.querySelector(`i.fas`).classList.add(`fa-play`); 
    playBtn.querySelector(`i.fas`).classList.remove(`fa-pause`); 

    audio.pause(); 
} */

//Three 

const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');

const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['hey', 'summer', 'ukulele'];

// Keep track of song
let songIndex = 2;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `../assets/images/fabio-oyXis2kALVg-unsplash.jpg`;
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);
