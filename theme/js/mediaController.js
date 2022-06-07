let campFireAudio = new Audio("sound/fire.mp3");
let thunderAudio = new Audio("sound/thunder.mp3");
let forestAudio = new Audio("sound/mixkit-european-forest-ambience-1213.wav");
let seaWavesAudio = new Audio("sound/mixkit-sea-waves-ambience-1189.wav");
let swampAudio = new Audio("sound/mixkit-swamp-and-jungle-birds-ambience-325.wav");

//DEFAULT VOLUME

let defaultVolume = 0.5;
campFireAudio.volume = defaultVolume;
thunderAudio.volume = defaultVolume;
forestAudio.volume = defaultVolume;
seaWavesAudio.volume = defaultVolume;
swampAudio.volume = defaultVolume;

let playButton, stopButton;

/**
 * CAMP FIRE REGION
 */
campFirePlayButton = $("#campFirePlayButton");
campFireStopButton = $("#campFireStopButton");
campFireStopButton.hide();

function campFireSlider(volume) {
    let sliderValue = $("#camp-fire-slider").val();
    $(".camp-fire-slider-text").text(parseInt(sliderValue * 100));

    campFireAudio.volume = volume;
}

function campFirePlay() {
    campFireAudio.play();
    campFireAudio.loop = true;

    campFirePlayButton.hide();
    campFireStopButton.show();

}

function campFireStop() {
    campFireAudio.pause();

    campFirePlayButton.show();
    campFireStopButton.hide();

}


/**
 * THUNDER REGION
 */
thunderPlayButton = $("#thunderPlayButton");
thunderStopButton = $("#thunderStopButton");
thunderStopButton.hide();

function thunderSlider(volume) {
    let sliderValue = $("#thunder-slider").val();
    $(".thunder-slider-text").text(parseInt(sliderValue * 100));

    thunderAudio.volume = volume;
}

function thunderPlay(){
    thunderAudio.play();
    thunderAudio.loop = true;

    thunderPlayButton.hide();
    thunderStopButton.show();
}

function thunderStop() {
    thunderAudio.pause();

    thunderPlayButton.show();
    thunderStopButton.hide();
}


/**
 * FOREST REGION
 */
forestPlayButton = $("#forestPlayButton");
forestStopButton = $("#forestStopButton");
forestStopButton.hide();

function forestSlider(volume) {
    let sliderValue = $("#forest-slider").val();
    $(".forest-slider-text").text(parseInt(sliderValue * 100));

    forestAudio.volume = volume;
}

function forestPlay() {
    forestAudio.play();
    forestAudio.loop = true;

    forestPlayButton.hide();
    forestStopButton.show();
}

function forestStop() {
    forestAudio.pause();

    forestPlayButton.show();
    forestStopButton.hide();
}


/**
 * SEA WAVES REGION
 */
seaWavesPlayButton = $("#seaWavesPlayButton");
seaWavesStopButton = $("#seaWavesStopButton");
seaWavesStopButton.hide();

function seaWavesSlider(volume) {
    let sliderValue = $("#sea-waves-slider").val();
    $(".sea-waves-slider-text").text(parseInt(sliderValue * 100));

    seaWavesAudio.volume = volume;
}

function seaWavesPlay() {
    seaWavesAudio.play();
    seaWavesAudio.loop = true;

    seaWavesPlayButton.hide();
    seaWavesStopButton.show();
}

function seaWavesStop() {
    seaWavesAudio.pause();

    seaWavesPlayButton.show();
    seaWavesStopButton.hide();
}


/**
 * SWAMP REGION
 */
swampPlayButton = $("#swampPlayButton");
swampStopButton = $("#swampStopButton");
swampStopButton.hide();

function swampSlider(volume) {
    let sliderValue = $("#swamp-slider").val();
    $(".swamp-slider-text").text(parseInt(sliderValue * 100));

    swampAudio.volume = volume;
}

function swampPlay() {
    swampAudio.play();
    swampAudio.loop = true;

    swampPlayButton.hide();
    swampStopButton.show();
}

function swampStop() {
    swampAudio.pause();

    swampPlayButton.show();
    swampStopButton.hide();
}