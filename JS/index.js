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
       price: 110.00 ,
       inCart: 1,
    },
    {
        name:'kigurumi Panda',
        tag:"kigurumi-2",
        price: 100.0 ,
        inCart: 1,
     },
     {
        name:'kigurumi Stitch',
        tag:"kigurumi-3",
        price: 200.0 ,
        inCart: 1,
     },
     {
        name:'kigurumi Jigglypuff',
        tag:"kigurumi-4",
        price: 250.0 ,
        inCart: 1,
     },
     {
        name:'kigurumi Pokemon kid',
        tag:"kigurumi-5",
        price: 100.0 ,
        inCart: 1,
     },
     {
        name:'kigurumi Panda kid',
        tag:"kigurumi-6",
        price: 100.00 ,
        inCart: 1,
     },    {
        name:'kigurumi Unicorn Kid',
        tag:"kigurumi-7",
        price: 150.0 ,
        inCart: 1,
     },
     {
        name:'kigurumi Jigglypuff',
        tag:"kigurumi-8",
        price: 100.0 ,
        inCart: 1,
     },
]
for (let i=0; i< carts.length; i++){
    carts[i] .addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers ;
    }
}

function cartNumbers(product){
    console.log("The product is", product);
    let productNumbers = localStorage.getItem('cartNumbers');
   
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector ('.cart span').textContent = productNumbers + 1;
    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}
let cartItems = localStorage.getItem('ProductsInCart');
cartItems = JSON.parse(cartItems);
function setItems(product){
    if (cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems ={
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart +=  1;
    } else {
        product.inCart = 2;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("ProductsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    let carCost = localStorage.getItem('totalCost');

    if(carCost != null){
        carCost = parseInt(carCost);
        localStorage.setItem("totalCost", carCost + product.price)
    }else{
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("ProductsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products-container");

    console.log(cartItems);

    if( cartItems && productContainer ){
        productContainer.innerHTML = '';
       
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML += `
                <div class="memes">
                <box-icon name='x-circle' type='solid' ></box-icon>
                <img src= "/site/assets/kigurumis/${item.tag}.jpg">
                <span>ola</span>
                <span>${item.name}</span>
                </div>

            `
        });

    }
}

const formClient = document.getElementById("client_form");
if (formClient != null) {
	formClient.addEventListener("submit", (event) => {
		event.preventDefault();

		let fullname = document.getElementById("fullname").value;
		let email = document.getElementById("email").value;
		let city = document.getElementById("city").value;
		let uf = document.getElementById("uf").value;
		let street = document.getElementById("street").value;
		let cep = document.getElementById("cep").value;

		if (fullname == '' || email == '' || city == '' || uf == '' || street == '' || cep == '') {
			returnMessage('warning', 'Ops, é necessário preencher todos os campos');
			return;
		}

		let client = {
			fullname: fullname,
			email: email,
			city: city,
			uf: uf,
			street: street,
			cep: cep
		};

		storeOnLocalStorage('clients', client);
		cleanField('fullname');
		cleanField('email');
		cleanField('city');
		cleanField('uf');
		cleanField('street');
		cleanField('cep');

	});
}

function storeOnLocalStorage(key, value) {
	let data = JSON.parse(localStorage.getItem(key));

	if (data) {
		data.push(value);
	} else {
		data = [ value ];
	}
	localStorage.setItem(key ,JSON.stringify(data));
}


function cleanField(fieldName) {
	document.getElementById(fieldName).value = '';
}

function redirect(location) {
	window.location.href=`/index.html`
}

onLoadCartNumbers();
displayCart();