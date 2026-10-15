var volIcon = document.querySelector('.volume')

var volBox = document.querySelector('.volume-box')

var volumeRange = document.querySelector('.volume-range')

var volumeDown = document.querySelector('.volume-down')

var volumeUp = document.querySelector('.volume-up')



function handleVolume() {

    volIcon.classList.toggle('active')

    volBox.classList.toggle('active')

}



volumeDown.addEventListener('click', handleVolumeDown);

volumeUp.addEventListener('click', handleVolumeUp);



function handleVolumeDown() {

    volumeRange.value = Number(volumeRange.value) - 20

    music.volume = volumeRange.value / 100

}

function handleVolumeUp() {

    volumeRange.value = Number(volumeRange.value) + 20

    music.volume = volumeRange.value / 100

}