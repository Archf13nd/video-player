const player = document.querySelector('.player')
const video = document.querySelector('video')
const progressRange = document.querySelector('.progress-range')
const progressBar = document.querySelector('.progress-bar')
const playBtn = document.getElementById('play-btn')
const volumeIcon = document.getElementById('volume-icon')
const volumeRange = document.querySelector('.volume-range')
const volumeBar = document.querySelector('.volume-bar')
const currentTime = document.querySelector('.time-elapsed')
const duration = document.querySelector('.time-duration')
const speed = document.querySelector('.speed')
const fullscreenBtn = document.querySelector('.fullscreen')

// Changes play icon to icon passed in as parameter
function changePlayIcon(state) {
    const states = {play: 'pause', pause: 'play'}
    playBtn.classList.replace(`fa-${states[state]}`, `fa-${state}`)
    state = state[0].toUpperCase() + state.slice(1, state.length + 1)
    playBtn.setAttribute('title', state)
}

// Play & Pause
function togglePlay() {
    if (video.paused) {
        video.play()
        changePlayIcon('pause')
    } else {
        video.pause()
        changePlayIcon('play')
    }
}

// Calculate display time format
function displayTime(time) {
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time % 60)
    minutes = minutes < 10 ? `0${minutes}` : minutes
    seconds = seconds > 9 ? seconds : `0${seconds}`
    return `${minutes}:${seconds}`
}

// Progress Bar
function updateProgress() {
    // console.log('currentTime', video.currentTime, 'duration', video.duration)
    progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`
    currentTime.textContent = `${displayTime(video.currentTime)} /`
    duration.textContent = `${displayTime(video.duration)}`
}

// Click duration bar to change time on video
function setProgress(e) {
    const newTime = e.offsetX / progressRange.offsetWidth
    progressBar.style.width = `${newTime * 100}%`
    video.currentTime = newTime * video.duration
}

// Volume Controls

// Keeps track of last volume value
let lastVolume = 1

function changeVolumeIcon(volume) {
     // Change icon depending on volume
     volumeIcon.className = ''
     console.log(volume)
     switch (true) {
         case volume > 0.7:
         volumeIcon.classList.add('fas', 'fa-volume-up')
         break;
         case volume <= 0.7 && volume > 0:
         volumeIcon.classList.add('fas', 'fa-volume-down')
         break;
         case volume === 0:
         volumeIcon.classList.add('fas', 'fa-volume-off')
         break;
     }
}

function adjustVolume(e) {
    let volume = e.offsetX / volumeRange.offsetWidth
    // Rounding volume up or down
    if (volume < 0.1) {
        volume = 0
    }
    if (volume > 0.9) {
        volume = 1
    }
    volumeBar.style.width = `${volume * 100}%`
    video.volume = volume

    changeVolumeIcon(volume)
    lastVolume = volume

}

// Mute / Unmute
function toggleMute() {
    if (video.volume) {
        lastVolume = video.volume
        video.volume = 0
        volumeBar.style.width = 0
        volumeIcon.className = ''
        volumeIcon.classList.add('fas', 'fa-volume-off')
        volumeIcon.setAttribute('title', 'Unmute')
    } else {
        video.volume = lastVolume
        volumeBar.style.width = `${lastVolume * 100}%`
        changeVolumeIcon(lastVolume)
        volumeIcon.setAttribute('title', 'Mute')
    }
}

// Playback speed -------------------------------------------

function changeSpeed() {
    video.playbackRate = speed.value
}


// Fullscreen -------------------------

// View in fullscreen
function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }

    video.classList.add('video-fullscreen')
  }
  
  /* Close fullscreen */
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
    video.classList.remove('video-fullscreen')
  }


  let fullscreen

  // Toggle fullscreen
  function toggleFullscreen() {
      if (!fullscreen) {
          openFullscreen(player)
      } else {
          closeFullscreen()
      }
      fullscreen = !fullscreen
  }
  

// Event Listeners

// Play or pause the video 
playBtn.addEventListener('click', togglePlay)
// On video end, change play icon
video.addEventListener('ended', () => changePlayIcon('play'))
// Update progress bar
video.addEventListener('timeupdate', updateProgress)
video.addEventListener('canplay', updateProgress)

// Set progress on video
progressRange.addEventListener('click', setProgress)
// Change volume
volumeRange.addEventListener('click', adjustVolume)
// Mute / Unmute volume
volumeIcon.addEventListener('click', toggleMute)
// Video speed change
speed.addEventListener('change', changeSpeed)
// Fullscreen
fullscreenBtn.addEventListener('click', toggleFullscreen)

