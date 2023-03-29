var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

window.addEventListener("load", onloadFunc);

function onloadFunc() {
	video = document.getElementById("player1");

	video.autoplay = false;
	console.log("Auto play is set to false");
	
	video.loop = false;
	console.log("Loop is set to false");

	console.log("Onload works")
	document.getElementById("play").addEventListener("click", playVid);
	document.getElementById("pause").addEventListener("click", pauseVid);
	document.getElementById("slower").addEventListener("click", slowDown);
	document.getElementById("faster").addEventListener("click", speedUp);
	document.getElementById("skip").addEventListener("click", skipAhead);
	document.getElementById("mute").addEventListener("click", mute);
	document.getElementById("slider").addEventListener("change", volume);
	document.getElementById("vintage").addEventListener("click", oldSchool);
	document.getElementById("orig").addEventListener("click", original);

}

function playVid() {
	video = document.getElementById("player1");

	video.play();
	console.log("Play Video")
}
  
function pauseVid() {
	video = document.getElementById("player1");

	video.pause();
	console.log("Pause Video")
}

function slowDown() {
	video = document.getElementById("player1");

	video.playbackRate = video.playbackRate * 0.9;
	
	console.log("Slow down video")
	console.log("Speed is " + video.playbackRate);
}

function speedUp() {
	video = document.getElementById("player1");

	video.playbackRate = video.playbackRate / 0.9;
	
	console.log("Speed up video")
	console.log("Speed is " + video.playbackRate);
}

function skipAhead() {
	video = document.getElementById("player1");

	video.currentTime = video.currentTime + 10;
	
	console.log("Skip ahead")
	console.log("Video current time is " + video.currentTime);

	if(video.currentTime == video.duration) {
		video.currentTime = 0;
	}
}

function mute() {
	video = document.getElementById("player1");

	if(video.muted == false) {
		video.muted = true;
	}
	else {
		video.muted = false;
	}

	var button = document.getElementById("mute");
	console.log(button.innerHTML);

    if (button.innerHTML == "Mute") {
		button.innerHTML = "Unmute";
	}
    else {
		button.innerHTML = "Mute";
	}
}

function volume() {
	video = document.getElementById("player1");

	var sliderVal = document.getElementById("slider").value;

	video.volume = sliderVal / 100;
	document.getElementById("volume").innerHTML = sliderVal + "%";

	console.log("The current value is " + video.volume);
}

function oldSchool() {
	video = document.getElementById("player1");

	video.classList.add("oldSchool");
}

function original() {
	video = document.getElementById("player1");

	video.classList.remove("oldSchool");
}