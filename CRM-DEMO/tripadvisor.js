$(document).ready(function(){
var h1 = document.createElement("h1");
var text = document.createTextNode("You might like these");
h1.appendChild(text);
document.getElementById("header").appendChild(h1);

const paratext = document.createElement("p");
paratext.innerHTML = "More places to stay in Chikmagalur";
document.getElementById("paragrp").appendChild(paratext);

const tripimages = [
    {
      url: 'images/beauty-of-nature-and.jpeg',
      title:"The Hidden Valley",
      link: '#',
      rating:10,
      price:1000
    },
    {
        url: 'images/devigiri-homestay.jpeg',
        title:"Hulivana",
        link: '#',
        rating:5,
        price:2000
    },
    {
        url: 'images/huli-vana.jpeg',
        title:"The Escort",
        link: '#',
        rating:2,
        price:3000
    },
    {
        url: 'images/beauty-of-nature-and.jpeg',
        title:"Trip Advisor",
        link: '#',
        rating:1,
        price:4000
    }    
  ];
  
  const tripHTML = tripimages.map(data => {
      return `<div class="tripimages"> <img src="${data.url}" alt="trip images"><a href="${data.link}">${data.title}</a><div class="rating">${data.rating}</div><div class="price">${data.price}</div></div>`
  }).join('');
  
  const tripdynamicimages = document.getElementById('tripdynamicimages');
  tripdynamicimages.innerHTML = tripHTML;

  $(".slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      touchThreshold: 100,
      draggable: true,
      infinite: false,
      responsive: [{
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              infinite: true
          }
      }, {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              dots: true
          }
      }, {
          breakpoint: 300,
          settings: "unslick" // destroys slick
      }]
  });

});
