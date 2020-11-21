


//'use strict';
//import * as io from 'socket.io-client';
//const socket = io();


/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#contact',
  data: {
    fullname: '',
    email: '',
    payment: 'Kortbetalning',
    male: '',
    female: '',
    other:  '',
    dont: 'Do not wish to provide',
    gender: '',
    orderedBurger: "",
    orders: {},
  }

  /* STEG 3, remove the created part ,
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  }

  */
  ,
  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },

    markDone: function(fullname, email, payment, male, female, other, dont) {
        console.log("Button clicked!");
        var myElement = document.getElementById("order");
        console.log(fullname);

        let burgers = vm1.getBurgers();
        let burgerid = document.createElement("p");
        burgerid.appendChild(document.createTextNode(burgers));
        this.orderedBurger = burgers;

        let ordertext = document.createElement("h3");
        ordertext.appendChild(document.createTextNode("Confirmation of order:"))
        let nameid = document.createElement("p");
        let emailid = document.createElement("p");
        let checkedid = document.createElement("p");
        let genderid = document.createElement("p");

        /*let maleid = document.createElement("p");
        let femaleid = document.createElement("p");
        let otherid = document.createElement("p");
        let dontid = document.createElement("p"); */

        nameid.appendChild(document.createTextNode("Name: " +fullname));
        emailid.appendChild(document.createTextNode("E-mail: " +email));
        checkedid.appendChild(document.createTextNode("Method of payment: " +payment));

        myElement.appendChild(ordertext);
        myElement.appendChild(nameid);
        myElement.appendChild(emailid);
        myElement.appendChild(checkedid);

        if (male) {
            genderid.appendChild(document.createTextNode("Gender: " + male));
            myElement.appendChild(genderid);
            this.gender = "Male";

        } else
        if (female) {
            genderid.appendChild(document.createTextNode("Gender: " + female));
            myElement.appendChild(genderid);
            this.gender = "Female";
        } else
        if (other) {
            genderid.appendChild(document.createTextNode("Gender: " + other));
            myElement.appendChild(genderid);
            this.gender = "Non-binary";
        } else
        if (dont) {
            genderid.appendChild(document.createTextNode("Gender: " + dont));
            myElement.appendChild(genderid);
            this.gender = "Do not wish to provide";
        }

        let ordersummary = document.createElement("h3");
        ordersummary.appendChild(document.createTextNode("Order summary:"));
        myElement.appendChild(ordersummary);

        myElement.appendChild(burgerid);


        console.log(myElement);
        var testarray = [fullname, email, payment, male, female, other, dont];
        console.log(testarray);
    },
    addOrder: function (event) {
      console.log("Button clickeddd!");

      /*var offset = {x: this.orders.x,
                    y: this.orders.y};   */

    /*  var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};  */
                    console.log(this.orders.T.details.x);
                    console.log(this.orders.T.details.y);
                    console.log(this.orderedBurger);



      socket.emit("addOrder", { orderId:  Math.floor(Math.random()*10), /*this.getNext(), verkar vara skräp i dispatcher */
                                details: { x: this.orders.T.details.x,
                                           y: this.orders.T.details.y,
                                           personalInfo: this.fullname+" ("+this.email+", "+this.gender+", "+this.payment+")"
                                         },
                                //orderItems: ["Beans", "Curry"]
                                  orderItems: [ this.orderedBurger ],
                                  //personalInfo: [this.fullname, this.email, this.gender, this.payment ]
                              });
                              console.log([this.fullname, this.email, this.gender, this.payment ]);
    },
    displayOrder: function (event) {
      console.log(this.orders);
          var T = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top
                    };

          this.orders = {
            "T": {
              details: {x: event.clientX - 10 - T.x,
                        y: event.clientY - 10 - T.y
                      }
                    }
          }
          console.log("displayorder:")
          console.log(this.orders);
    }


  }
});



const vm1 = new Vue({
    el: '#burgerVue',
    data: {
        burgermenu: food,
        burgers: []

    }, methods:{


        getBurgers: function(){

            return this.burgers;
        }

    }
})
