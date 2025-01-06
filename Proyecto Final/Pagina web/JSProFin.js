//Inicio
//Carrusel de imagenes
$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel({interval: 2000});
      
    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
      $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
      $("#myCarousel").carousel(3);
    });
      
    // Enable Carousel Controls
    $(".left").click(function(){
      $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
      $("#myCarousel").carousel("next");
    });
});


//CONOCENOS



//Ubicacion
function geoFindMe() {
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');

    mapLink.href = '';
    mapLink.textContent = '';

    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;

      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}
document.querySelector('#find-me').addEventListener('click', geoFindMe);
//DOCENTES



//CONTACTANOS
function subido(){
  alert("Ya se ha subido tu comentario, gracias");
}
//blog
function iniciar(){
    var boton=document.getElementById('grabar');
    boton.addEventListener('click',nuevoitem,false);
    mostrar();
}

function nuevoitem(){
    var clave=document.getElementById('clave').value;
    var valor = document.getElementById('texto').value;
    localStorage.setItem(clave,valor);
    mostrar();
    document.getElementById('clave').value='';
    document.getElementById('texto').value='';
}

function eliminarTodo(){
    if(confirm('Estas seguro?')){
        localStorage.clear();
        mostrar();
    }
}

function mostrar(){
    var cajadatos = document.getElementById('cajadatos');
    cajadatos.innerHTML = '';
    for(var f=0; f<localStorage.length;f++){
        var clave = localStorage.key(f);
        var valor = localStorage.getItem(clave);
        cajadatos.innerHTML += '<div>'+clave+' - '+valor+'</div>';
    }
}

window.addEventListener('load',iniciar,false);


//ALUMNOS





//CUESTIONARIO
function leer()
    {var total=0;
    	for (var x=1;x<=10;x++)
    	{
        var res=0;
        var nom="r"+x;
        var resul=document.getElementsByName(nom);
        for(var i=0;i<resul.length;i++) 
        {
            if(resul[i].checked==true) 
                res=parseInt(resul[i].value);
        }
        total=total+res;
        document.getElementById("total").innerHTML="Total: "+total;
        }
        if(total==10)
        	document.getElementById("comentario").innerHTML="Excelente obtuviste 10 aciertos correctos";
        else
        	if(total==9)
        	document.getElementById("comentario").innerHTML="Muy bien obtuviste 9 aciertos correctos";
        else
        	if(total==8)
        		document.getElementById("comentario").innerHTML="Muy bien obtuviste 8 aciertos correctos";
        else
          if(total==7)
        	document.getElementById("comentario").innerHTML="Muy bien obtuviste 7 aciertos correctos";
        else
          if(total==6)
        	document.getElementById("comentario").innerHTML="Regular obtuviste 6 aciertos correctos";
        else
          if(total==5)
        	document.getElementById("comentario").innerHTML="Regular otuviste 5 aciertos correctos";
        else
          if(total==4)
        	document.getElementById("comentario").innerHTML="Solo obtuviste 4 aciertos correctos";
        else
          if(total==3)
        	document.getElementById("comentario").innerHTML="Solo obtuviste 3 aciertos correctos";
        else
          if(total==2)
        	document.getElementById("comentario").innerHTML="Solo obtuviste 2 aciertos correctos";
        else
          if(total==1)
        	document.getElementById("comentario").innerHTML="Solo obtuviste 1 acierto correcto";
        else
        	document.getElementById("comentario").innerHTML="Todas tus respuestas han sido incorrectas";
    }
    