var song = new Audio("assets/2.mp3");
let playing = false;
song.play();

song.addEventListener('loadedmetadata', function() {
    var duration = song.duration;

    var minutos = Math.floor(duration / 60);
    var segundos = Math.floor(duration % 60);

    var formattedDuration = minutos + ":" + (segundos < 10 ? "0" + segundos : segundos);

    document.querySelector(".song-total-time").innerText = formattedDuration;

})

song.addEventListener('timeupdate', function(){
    var currentTime = song.currentTime;

    var minutosAtual = Math.floor(currentTime / 60);
    var segundosAtual = Math.floor(currentTime % 60);

    var formattedCurrentTime = minutosAtual + ":" + (segundosAtual < 10 ? "0" + segundosAtual : segundosAtual);

    document.querySelector(".current-time").innerText = formattedCurrentTime;

    var progress = (currentTime / song.duration) * 100;
    document.querySelector(".filled-time-bar").style.width = progress + '%';

    document.querySelector(".progress-spot").style.left = 36 + progress / 3.7 + '%';

    if(formattedCurrentTime == formattedDuration){
        (formattedCurrentTime) = '0:00';
    }
})

function ppBtn(){
    var songimg = document.querySelector(".song-img");
    var playIcon = document.getElementById("playIcon").querySelector(".play-btn");
    
    if(playing){
        song.play();
        songimg.classList.remove('stop-rotation');
        playIcon.classList.add('fa-pause');
        playIcon.classList.remove('fa-play');
        playing = false;
    }else{
        song.pause();
        songimg.classList.add('stop-rotation');
        playIcon.classList.add('fa-play');
        playIcon.classList.remove('fa-pause');
        playing = true;
        
    }
}

