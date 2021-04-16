// ====== ONE-PROGRESS 7 MUSIC--CONTAINER.



//====== SONG-CONTAINER ======
const songContainer = document.getElementById(`song-container`); 
const playBtn = document.getElementById(`play`); 
const prevBtn = document.getElementById(`prev`); 
const nextBtn = document.getElementById(`next`); 

const audio = document.getElementById(`audio`); 

const songProgress = document.getElementById(`song-progress`); 
const progressContainer = document.getElementById(`song-progress_container`); 

const songTitle = document.getElementById(`song-title`); 
const cover = document.getElementById(`cover`); 

// Song Titles
const songs = ["hey", "summer", "ukulele"]; 

// Keep Track of song 
const songIndex = 2; 