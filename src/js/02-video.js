import throttle from "lodash.throttle";
import Player from "@vimeo/player"
   
const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

const listener = function (data) {
localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
console.log(localStorage)
}

player.on('timeupdate', throttle(listener, 1000))

const theme = localStorage.getItem("videoplayer-current-time") || 0;

player.setCurrentTime(theme)

console.log(localStorage)
