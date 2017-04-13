var video = document.getElementById("video"),
    btnPlay = document.getElementById("btnPlay"),
    icono = document.getElementById("icono"),
    tiempo = document.getElementById('tiempo'),
    volume = document.getElementById("volumen");
  // Inicializando variables

tiempo.setAttribute('max',video.duration); //Linea de tiempo llegue al final en funcion a la duracion del tiempo

btnPlay.addEventListener('click',function(){
    //condicional para iniciar o pausar el video
  if (icono.className == "fa fa-play") {
    video.play();
    var intervalo = setInterval(barraTiempo,1); //refrescando la barra de tiempo
  }else{
    video.pause();
  }
  icono.classList.toggle('fa-play');
  icono.classList.toggle('fa-pause');
});

tiempo.addEventListener('change',function(){
  video.currentTime = tiempo.value; //Cuando haya un cambio en el input range entregar el valor al current time del video
});

function barraTiempo(){
  //funcion que determina el tiempo en la barra tiempo asignando el current time a la variable tiempo
  tiempo.value = video.currentTime;
  if (video.ended) {
    icono.className = 'fa fa-play';
  }
}

//control de volumen
volume.addEventListener('change', function(){
  video.volume = volumen.value;
});
