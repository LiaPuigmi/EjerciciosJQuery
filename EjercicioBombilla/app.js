"use strict";
let changeButon = document.getElementById('change');
let bombi = document.getElementById('bombi');
let interruptor = document.getElementById('interruptor');
let encendido = false;
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let imageBody = document.getElementById('imagen');
let slider2 = document.getElementById("myRange2");
let output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;
let slider3 = document.getElementById("myRange3");
let output3 = document.getElementById("demo3");
output3.innerHTML = (parseFloat(slider3.value) / 2).toFixed(2).toString();
output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = slider.value;
    bombi.setAttribute("style", `filter:brightness(${slider.value} transform:rotate(${slider2.value}deg)`);
    imageBody.setAttribute("style", `filter:brightness(${slider.value})`);
};
changeButon.onclick = function () {
    if (encendido == false) {
        bombi.src = './on.png';
        interruptor.src = './bon.jpg';
        slider.min = '1';
        slider.max = '3';
        output.innerHTML = slider.value;
        bombi.setAttribute("style", `filter:brightness(${slider.value})`);
        imageBody.setAttribute("style", `filter:brightness(${slider.value})`);
        encendido = true;
    }
    else {
        bombi.src = './off.png';
        interruptor.src = './boff.jpg';
        slider.value = '0';
        slider.max = '0';
        slider.min = '0';
        output.innerHTML = slider.value;
        bombi.setAttribute("style", 'filter:brightness(1)');
        imageBody.setAttribute("style", `filter:brightness(${slider.value})`);
        encendido = false;
    }
};
slider2.oninput = function () {
    output2.innerHTML = slider2.value;
    bombi.setAttribute("style", `transform:rotate(${slider2.value}deg)`);
};
slider3.oninput = function () {
    output3.innerHTML = (parseFloat(slider3.value) / 2).toFixed(2).toString();
    bombi.setAttribute("style", `transform:scale(${(parseFloat(slider3.value) / 2).toFixed(2)})`);
};
