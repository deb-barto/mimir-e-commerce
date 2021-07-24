gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1, x: -200 });
gsap.from(".hero-content h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero-content h1", { opacity: 0, duration: 1, delay: 2.3, y: -45 });
gsap.from(".hero-content a", { opacity: 0, duration: 1, delay: 2, y: 50 });
gsap.from(".banner2", { opacity: 0, duration: 1, delay: 2.2, y: 50 });
gsap.from(".banner3", { opacity: 0, duration: 1, delay: 3, y: 50 });

let carts = document.querySelectorAll('.add-cart');

let products =[
    {
       name:'kigurumi Pokemon',
       tag:"kigurumi-1",
       price: 110.10 ,
       inCart: 0,
    },
    {
        name:'kigurumi Panda',
        tag:"kigurumi-2",
        price: 100.0 ,
        inCart: 0,
     },
     {
        name:'kigurumi Stitch',
        tag:"kigurumi-3",
        price: 200.0 ,
        inCart: 0,
     },
     {
        name:'kigurumi Jigglypuff',
        tag:"kigurumi-4",
        price: 250.0 ,
        inCart: 0,
     },
     {
        name:'kigurumi Pokemon kid',
        tag:"kigurumi-5",
        price: 100.0 ,
        inCart: 0,
     },
     {
        name:'kigurumi Panda kid',
        tag:"kigurumi-6",
        price: 100.00 ,
        inCart: 0,
     },    {
        name:'kigurumi Unicorn Kid',
        tag:"kigurumi-7",
        price: 150.0 ,
        inCart: 0,
     },
     {
        name:'kigurumi Jigglypuff',
        tag:"kigurumi-8",
        price: 100.0 ,
        inCart: 0,
     },
]
for (let i=0; i< carts.length; i++){
    carts[i] .addEventListener('click',()=>{
        cartNumbers();
    })
    }
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers ;
    }
}

function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
   
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector ('.cart span').textContent = productNumbers + 1;
    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
}

onLoadCartNumbers() 