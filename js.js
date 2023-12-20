let productsGird = document.getElementById('products-grid');
let productsArray = [];
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/RobocodeSchool/marketplace'


xhr.open('GET', url + '/products');
xhr.responseType = 'json';
xhr.onload = function(){
    let products = xhr.response;
    productsGird.innerHTML = null;
    products.forEach(element => {
        productsArray.push(element);
        let pElem = document.createElement('div');
        pElem.classList.add('product');
        pElem.innerHTML = `
        <h2 class="product-name">${element.name}</h2>
        <img class="product-photo" src="${element.photo_url}" alt="${element.name}">
        <p class="product-price>"><b>Price: </b>${element.price}</p>
        <p class="product-description>"><b>Description: </b>${element.description}</p>
        <a href="userProfile.html?id=${element.author_id}">Seller profile</a>
        <button>Buy</button>
        `;

        productsGird.append(pElem);
    });
}

xhr.send();