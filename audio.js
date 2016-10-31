var playMain = document.querySelector('#play-main');
var audioMain = document.querySelector('#main');
var playBtn = document.querySelector('#play-btn');
var volume = document.querySelector('#volume');
var progressBar = document.querySelector('#progress-bar');
var progress = document.querySelector('#progress');

var audioTalking = document.querySelector('#talking');
var audioPages = document.querySelector('#pages');
var audioHorn = document.querySelector('#horn');
var audioRain = document.querySelector('#rain');
var audioLeaves = document.querySelector('#leaves');
var audioSewer = document.querySelector('#sewer');
var audioWalking = document.querySelector('#walking');
var audioBirds = document.querySelector('#birds');

playMain.addEventListener('click', function() {
	if (audioMain.paused) {
		audioMain.play();
		playBtn.src = "pause.png";
	} else {
		audioMain.pause();
		playBtn.src = "play.png";
	}
});

volume.addEventListener('change', function() {
	audioMain.volume =  this.value / 100;
	audioTalking.volume =  this.value / 100;
	audioPages.volume =  this.value / 100;
	audioHorn.volume =  this.value / 100;
	audioRain.volume =  this.value / 100;
	audioLeaves.volume =  this.value / 100;
	audioSewer.volume =  this.value / 100;
	audioWalking.volume =  this.value / 100;
	audioBirds.volume =  this.value / 100;
});

audioMain.addEventListener('timeupdate', function() {
	var ratio = audioMain.currentTime / audioMain.duration;
	progress.style.right = progressBar.offsetWidth - ( ratio*progressBar.offsetWidth ) + "px";
});

progressBar.addEventListener('click', function(ev) {
	var ratio = ev.offsetX / progressBar.offsetWidth;
	audioMain.currentTime = ratio * audioMain.duration;
});

audioMain.addEventListener('ended', function() {
	playBtn.src = "play.png";
});

var playTalking = document.querySelector('#play-talking');
var talkingBtn = document.querySelector('#talking-btn');
playTalking.addEventListener('click', function() {
	if (audioTalking.paused) {
		audioTalking.play();
		talkingBtn.src = "talkingON.png";
	} else {
		audioTalking.pause();
		talkingBtn.src = "talkingOFF.png";
	}
});

var playPages = document.querySelector('#play-pages');
var pagesBtn = document.querySelector('#pages-btn');
playPages.addEventListener('click', function() {
	if (audioPages.paused) {
		audioPages.play();
		pagesBtn.src = "pagesON.png";
	} else {
		audioPages.pause();
		pagesBtn.src = "pagesOFF.png";
	}
});

var playHorn = document.querySelector('#play-horn');
var hornBtn = document.querySelector('#horn-btn');
playHorn.addEventListener('click', function() {
	if (audioHorn.paused) {
		audioHorn.play();
		hornBtn.src = "hornON.png";
	} else {
		audioHorn.pause();
		hornBtn.src = "hornOFF.png";
	}
});

var playRain = document.querySelector('#play-rain');
var rainBtn = document.querySelector('#rain-btn');
playRain.addEventListener('click', function() {
	if (audioRain.paused) {
		audioRain.play();
		rainBtn.src = "rainON.png";
	} else {
		audioRain.pause();
		rainBtn.src = "rainOFF.png";
	}
});

var playLeaves = document.querySelector('#play-leaves');
var leavesBtn = document.querySelector('#leaves-btn');
playLeaves.addEventListener('click', function() {
	if (audioLeaves.paused) {
		audioLeaves.play();
		leavesBtn.src = "leavesON.png";
	} else {
		audioLeaves.pause();
		leavesBtn.src = "leavesOFF.png";
	}
});

var playSewer = document.querySelector('#play-sewer');
var sewerBtn = document.querySelector('#sewer-btn');
playSewer.addEventListener('click', function() {
	if (audioSewer.paused) {
		audioSewer.play();
		sewerBtn.src = "sewerON.png";
	} else {
		audioSewer.pause();
		sewerBtn.src = "sewerOFF.png";
	}
});

var playWalking = document.querySelector('#play-walking');
var walkingBtn = document.querySelector('#walking-btn');
playWalking.addEventListener('click', function() {
	if (audioWalking.paused) {
		audioWalking.play();
		walkingBtn.src = "walkingON.png";
	} else {
		audioWalking.pause();
		walkingBtn.src = "walkingOFF.png";
	}
});

var playBirds = document.querySelector('#play-birds');
var birdsBtn = document.querySelector('#birds-btn');
playBirds.addEventListener('click', function() {
	if (audioBirds.paused) {
		audioBirds.play();
		birdsBtn.src = "birdsON.png";
	} else {
		audioBirds.pause();
		birdsBtn.src = "birdsOFF.png";
	}
});