let changeButon=document.getElementById('change') as HTMLInputElement;
let bombi=document.getElementById('bombi') as HTMLInputElement;
let interruptor=document.getElementById('interruptor') as HTMLInputElement;
let encendido=false;

let slider = document.getElementById("myRange") as HTMLInputElement;
let output = document.getElementById("demo") as HTMLInputElement;
let imageBody=document.getElementById('imagen') as HTMLInputElement;

let slider2 = document.getElementById("myRange2") as HTMLInputElement;
let output2 = document.getElementById("demo2") as HTMLInputElement;


let slider3 = document.getElementById("myRange3") as HTMLInputElement;
let output3 = document.getElementById("demo3") as HTMLInputElement;


output.innerHTML = slider.value;
output2.innerHTML = slider2.value;
output3.innerHTML = (parseFloat(slider3.value)/2).toFixed(2).toString();

function bombill(rotation:String, light:String, zoom:String){
  bombi.setAttribute("style", `filter:brightness(${light} transform:rotate(${rotation} transform:scale(${zoom})`);
}

slider.oninput = function() {
  output.innerHTML = slider.value;
  let output2 = document.getElementById("demo2") as HTMLInputElement;
  let output3 = document.getElementById("demo3") as HTMLInputElement;

  bombill(output2.value.toString()+'deg',output.value.toString(),output3.value.toString());
  imageBody.setAttribute("style", `filter:brightness(${slider.value})`);
};

changeButon.onclick=function(){
  let output = document.getElementById("demo") as HTMLInputElement;
  let output2 = document.getElementById("demo2") as HTMLInputElement;
  let output3 = document.getElementById("demo3") as HTMLInputElement;

    if(encendido==false){
        bombi.src='./on.png';
        interruptor.src='./bon.jpg';
        slider.min='1';
        slider.max='3';
        output.innerHTML = slider.value;
        bombill(output2.value.toString()+'deg',output.value.toString(),output3.value.toString());
        imageBody.setAttribute("style", `filter:brightness(${slider.value})`);
        encendido=true;
    }else{
        bombi.src='./off.png';
        interruptor.src='./boff.jpg';
        slider.value='0';
        slider.max='0';
        slider.min='0';
        output.innerHTML = slider.value;
        bombill(output2.value.toString()+'deg','1',output3.value.toString());
        imageBody.setAttribute("style", `filter:brightness(${slider.value})`);
        encendido=false;
    }
};


slider2.oninput = function() {
  output2.innerHTML = slider2.value;
  let output = document.getElementById("demo") as HTMLInputElement;
  let output3 = document.getElementById("demo3") as HTMLInputElement;
  bombill(output2.value.toString()+'deg',output.value.toString(),output3.value.toString());
};



slider3.oninput = function() {
  let output = document.getElementById("demo") as HTMLInputElement;
  let output2 = document.getElementById("demo2") as HTMLInputElement;
  output3.innerHTML = (parseFloat(slider3.value)/3).toFixed(2).toString();
  bombill(output2.value.toString()+'deg',output.value.toString(),output3.value.toString());
};




