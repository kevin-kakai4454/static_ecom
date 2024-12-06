const home  = document.querySelector('#home');
const item = document.querySelector('.card-image-top');
const subItem = document.querySelector('.smallimg');
const cart = document.querySelector(".cart");
const order = document.querySelector(".order");
let item_image;

const params = new URLSearchParams(window.location.search);
const image = params.get('image');
console.log(image);
item.src=image;



home.addEventListener('click', function(ev){
    location.href= "http://127.0.0.1:5500/index.html";
})

subItem.addEventListener('click', function(ev){
    const clicked = ev.target.src;
    console.log(clicked);
    item.src = clicked;
})

cart.addEventListener('click', function(ev){
    item_id = ev.target.dataset.id;
    console.log(item_id);
})

order.addEventListener('click', function(ev){
    item_id = ev.target.dataset.id;
    console.log(item_id);
})