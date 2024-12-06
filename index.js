const row = document.querySelector('.row');
const colum = document.querySelector('.col');
const home  = document.querySelector('.home');
const image = document.querySelector('.card-image-top');

const desc = document.querySelector('.desc');

// console.log(desc);
const newdesc = desc.textContent
console.log(newdesc.slice(0,18));
desc.textContent= `${newdesc.slice(0,18)}...`;

const prod = document.querySelector('.prod');
console.log(prod);

row.addEventListener('click', function(ev){
    console.log(ev.target.dataset);
    if(ev.target.id === "cart"){
        console.log("Item Added to cart");
    //     home.innerHTML = `
    //     <div class="alert alert-success alert-dismissible fade show" role="alert">Trouser added to cart!
    //     <button  class="btn-close" data-bs-dismiss="alert" ></button>
    //   </div>
    //     `
    }else if(ev.target.classList.contains('card-image-top') || ev.target.classList.contains('card-body') || ev.target.classList.contains('card-text') ||ev.target.classList.contains('oldprice')|| ev.target.classList.contains('price')){
        // console.log(location.href );
        console.log(ev.target.src);
        // location.href = 'http://localhost/product.html';
        location.href = `http://127.0.0.1:5500/product.html?image=${ev.target.src}`;
    }
});
