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