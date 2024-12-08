const submit = document.querySelector('.submit');
const prod_name = document.querySelector('.prod_name');
const prod_price = document.querySelector('.prod_price');
const prod_desc = document.querySelector('.prod_desc');
const prod_size = document.querySelector('.prod_size');
const prod_image = document.querySelector('.prod_image');
let items = [];
let product = {};

const image = function(img){
    const reader =  new FileReader();
    reader.readAsDataURL(img[0]);
    reader.addEventListener('load', function(){
    console.log(reader.result);
    console.log(reader);
    images=reader.result
    })
}


prod_image.addEventListener('upload', function(ev){
    console.log(prod_image.files);
})

submit.addEventListener('click', function(ev){
    ev.preventDefault();
    image(prod_image.files);
    console.log(prod_image.files);
    console.log(prod_image.value);
    product = {
        prod_name : prod_name.value,
        prod_price : prod_price.value,
        prod_desc : prod_desc.value,
        prod_size : prod_size.value,
        prod_image : prod_image.files[0]
    }
    // console.log(product.prod_image);
    // product.prod_image = JSON.parse(product.prod_image);
    items.push(JSON.stringify(product))
    console.log(items);
    // localStorage.setItem("products", items);
});