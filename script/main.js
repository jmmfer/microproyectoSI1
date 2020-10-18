function carrusel() {
    imagenes= ["img/pexels-photo-115655.jpeg","img/pexels-photo-461064.jpeg","img/pexels-photo-930530.jpeg"];
    i=0;
    window.setInterval(function(){
        document.getElementById("showcase").style.backgroundImage="url('"+imagenes[i]+"')";
        i++;
        if(i>2) i=0;
    },8000);
}