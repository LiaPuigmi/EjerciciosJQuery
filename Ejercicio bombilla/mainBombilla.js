let changeButon=document.getElementById('change');
let bombi=document.getElementById('bombi');
let interruptor=document.getElementById('interruptor');
let encendido=false;
changeButon.onclick=function(){
    if(encendido==false){
        bombi.src='./on.png';
        interruptor.src='./bon.jpg';
        encendido=true;
    }else{
        bombi.src='./off.png';
        interruptor.src='./boff.jpg';
        encendido=false;
    }
}
/* Modificar pq hay 2 sliders mi loko */
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}