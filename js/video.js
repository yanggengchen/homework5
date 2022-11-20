// Add js here.

// Identify HTML Elements
var videoPlayer = document.getElementById ("videoplayer");
var playBtn = document.getElementById ("play");
var pauseBtn = document.getElementById ("pause");
var slowerBtn = document.getElementById ("slower");
var fasterBtn = document.getElementById("faster");
var skipBtn = document.getElementById("skip");
var muteBtn = document.getElementById("mute");
var slider = document.getElementById("slider");
var volumnText = document.getElementById("volume");

var speed = [0.5, 1, 2];
var speedPtr = 1;
var videoMuted = false;

// Define Functions
function updateSpeed() {
    videoPlayer.playbackRate = speed[speedPtr];
}

function pageLoad() {
    console.log('pageLoad');
    videoPlayer.autoplay = false;
    videoPlayer.loop = false;

    volumnText.textContent = slider.value;
    videoPlayer.volume = slider.value / 100;
}

function playButton() {
    console.log('play');
    videoPlayer.play();
}

function pauseButton() {
    console.log('pause');
    videoPlayer.pause();
}

function slowDown() {
    console.log('slowDown');
    if (speedPtr != 0) {
        speedPtr -= 1
        updateSpeed();
    }
    else {
        alert("Video is at slowest speed!");
    }

}

function speedUp() {
    console.log('speedUp');
    if (speedPtr != 2) {
        speedPtr += 1
        updateSpeed();
    }
    else {
        alert("Video is at fastest speed!");
    }
}

function skipAhead() {
    console.log('skipAhead');
    if (videoPlayer.currentTime + 15 > videoPlayer.duration) {
        videoPlayer.currentTime = 0;
    }
    else {
        videoPlayer.currentTime += 15;
    }
}

function mute() {
    console.log('mute');
    if (videoMuted === false){
        videoMuted = true;
        videoPlayer.muted = true;
        muteBtn.textContent = 'Unmute';
    }
    else {
        videoMuted = false;
        videoPlayer.muted = false;
        muteBtn.textContent = 'Mute';
    }

}

function volumnSlider() {
    console.log('volumnSlider');
    volumnText.textContent = slider.value;
    videoPlayer.volume = slider.value / 100;
}

// Add Event Listeners
playBtn.addEventListener('click', playButton);
pauseBtn.addEventListener('click', pauseButton);
slowerBtn.addEventListener('click', slowDown);
fasterBtn.addEventListener('click', speedUp);
skipBtn.addEventListener('click', skipAhead);
muteBtn.addEventListener('click', mute);
slider.addEventListener('input', volumnSlider);

pageLoad();