// trying to understand javascript to get an interactive equipment menu
//const axios = require('axios').default;
window.onload = function(){



    //probably squish this information into an array and loop through it to check 
     const helmet = document.querySelector(".helmet_img")
     const ammo = document.querySelector(".ammo_img")
     const neck = document.querySelector(".neck_img")
     const grid = document.querySelector(".equipment_grid")
     const chest = document.querySelector(".chest_img")
     const legs = document.querySelector(".legs_img")
     const gloves = document.querySelector(".gloves_img")
     const boots = document.querySelector(".boots_img")
     const ring = document.querySelector(".ring_img")
     const cape = document.querySelector(".cape_img")
     const weapon = document.querySelector(".weapon_img")
     const sheild = document.querySelector(".sheild_img")
    

    // checking to see if it is equal to any of the required fields 
    grid.addEventListener('click', event => {
        if (event.target !== helmet && event.target !== ammo && event.target !== neck && event.target != chest && event.target != weapon && event.target != sheild
            && event.target != legs && event.target != gloves && event.target != boots && event.target != ring && event.target != cape)
             {
             console.log("reeeee")
            }
        axios.get(event.target.getAttribute("alt"))
         .then(function (response) {
               
                console.log(response)
            })
         .catch(function (error) {
                console.log(error);
            })
         .then(function() {

             });
    
    });


    // using axios to call osrsbox API do something when item recived or if there is an error
    axios.get('https://www.osrsbox.com/osrsbox-db/items-json/73.json')
        .then(function (response) {
            //let the api you know you got the information
            console.log(response)
            // response.data.icon = 'data:image/png;base64, ' + response.data.icon
            testing = "data:image/jpeg;base64,"  + response.data.icon
            console.log(testing)
            document.getElementsByClassName("ammo_img")[0].setAttribute("src", "data:image/jpeg;base64,"  + response.data.icon)


            document.getElementsByClassName("ammo_img")[0]
                .setAttribute("onclick", console.log("clicked"))
             
        })
        .catch(function (error) {
            // handle an error from the api
            console.log(error);
        })
        .then(function () {
            // executes allways
            //i think this is where you put personal code for the request 
        });











};

