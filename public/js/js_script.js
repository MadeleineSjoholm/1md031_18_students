/*

'use strict';
//import * as io from 'socket.io-client';
const socket = io();

function MenuItem(nm, kcal, gl, la, veg, img) {
    this.name = nm; // The this keyword refers to the object itself
    this.kcal = kcal;
    this.gluten = gl;
    this.lactose = la;
    this.vegetarian = veg;
    this.image = img;
    this.burger = function() {
        return this.name + ' ' + this.kcal;
    };
}

function def_image(src, width, height, alt){
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    return img;
}




// Objects are then instantiated using the new keyword

/*
let bur1 = new MenuItem('The Original Techburger', 290, 'Gluten', 'Lactose', 'No veg', "https://lh3.googleusercontent.com/proxy/5UlNgmQiERZ5lhRHLoDvU0yoPRsNV-EFV0WF_X9nSXdMwedmjhtrjg6cDR3q6VVeOI_wW2CnVK0xrh0cXJIgxgYeNo9lbA");
let bur2 = new MenuItem('HalloumiTech', 250, 'Gluten', 'Lactose', 'Veg');
let bur3 = new MenuItem('ChickenTech', 265, 'Gluten', 'Lactose', 'No Veg');
let bur4 = new MenuItem('BarbqueTech', 295, 'Gluten', 'Lactose', 'No Veg');
let bur5 = new MenuItem('BeanTech', 250, 'Gluten', 'No Lactose', 'No Veg');
*/

//var burgers = [bur1, bur2, bur3, bur4, bur5];


/*

var burgers = food;


let myButton = document.getElementById('submitButton');
myButton.addEventListener("click", myFunction);

function myFunction() {
    console.log ("Button clicked!");
    var namnid = document.getElementById("fullname").value;
    console.log(namnid);
    var mailid = document.getElementById("email").value;
    console.log(mailid);
    var payment = document.getElementById("payment").value;
    console.log(payment);
    var checkBox = document.getElementById("dont");
    if(document.getElementById("dont").checked){
        console.log("Do not wish to provide");
        var gender = "Do not wish to provide";
    }
    if(document.getElementById("male").checked){
        console.log("Male");
        var gender = "Male";
    }
    if(document.getElementById("female").checked){
        console.log("Female");
        var gender = "Female";
    }
    if(document.getElementById("other").checked){
        console.log("Other");
        var gender = "Non-binary"
    }

    var buttonValues = [namnid, mailid, payment, gender];
    console.log(buttonValues);
}



let myElement = document.getElementById("burgerJs");
//for (var item in burgers)
for (i=0; i < 5; i++)
{
    item=burgers[i];
    console.log(item);
    //if (item.kcal > 260)
    {

        let burgerSection = document.createElement("div");
        let nameElement = document.createElement("h3");
        let imageElement = document.createElement("p");
        let kcalElement = document.createElement("li");
        let glutenElement = document.createElement("li");
        let lactoseElement = document.createElement("li");
        let vegetarianElement = document.createElement("li");


        let burgerButtonElement = document.createElement("input");
        burgerButtonElement.setAttribute('type', 'checkbox');


        let nameNode = document.createTextNode(burgers[i].name);
        let kcalNode = document.createTextNode(burgers[i].kcal);
        let glutenNode = document.createTextNode(burgers[i].gluten);
        let lactoseNode = document.createTextNode(burgers[i].lactose);
        let vegetarianNode = document.createTextNode(burgers[i].vegetarian);
        let burgerButtonNode = document.createTextNode(burgers[i].name);

        nameElement.appendChild(nameNode);
        //Image?
        imageElement.appendChild(def_image(burgers[i].img, 170, 130))
        kcalElement.appendChild(kcalNode);
        glutenElement.appendChild(glutenNode);
        lactoseElement.appendChild(lactoseNode);
        vegetarianElement.appendChild(vegetarianNode);
        burgerButtonElement.appendChild(burgerButtonNode);

        burgerSection.appendChild(nameElement);
        burgerSection.appendChild(imageElement);
        burgerSection.appendChild(kcalElement);
        burgerSection.appendChild(glutenElement);
        burgerSection.appendChild(lactoseElement);
        burgerSection.appendChild(vegetarianElement);
        burgerSection.appendChild(burgerButtonElement);
        myElement.appendChild(burgerSection);



    }
}

*/
