// Get data from localStorage
let cart = JSON.parse(localStorage.getItem("cart"))
cart ? cart : cart = [];

// function updateCartLink(){
//     document.getElementById('cart-link').innerHTML = `Cart(${ cart.length })`;
// }
// updateCartLink()

// Check if cart content is available

let cartContent = document.getElementById('cart-content');
console.log(cartContent);

function renderCart(){
    // Get data from localStorage
    let cart = JSON.parse(localStorage.getItem("cart"))
    cartContent.innerHTML='';
    if(cartContent){
        cartContent.innerHTML = `
            <h1 style="text-align:center;">Cart</h1>
            <table style="text-align: left">
                <thead style="background: #bebebe">
                    <tr class="test">
                        <th class=""imgcart">Image</th>
                        <th class="namecart">Name</th>
                        <th class="catcart">Category</th>
                        <th class="pricecart">Price</th>
                    </tr>
                </thead>
                <tbody>
                    ${ renderCartItems() }
                </tbody>
            </table>
        `
    }
    console.log("Cart Rendered");
}

renderCart()

function renderCartItems(){
    console.log("Rendering Cart Items");
    let content = ''
    cart.forEach(item => {
        content +=`
            <tr>
                <td><img src=${ item.image } alt=${ item.name }/></td>
                <td>${ item.name }</td>
                <td>${ item.category }</td>
                <td>${ item.price }</td>
                <td class="removeBtn"><button type="button" onclick="remove(${ item.id })"> Remove from cart </button></td>
            </tr>
            
        `
    })

    return content;
}


function add(items){
    let info = document.getElementById("itemCart");
    items.forEach((item) =>{
        info.innerHTML +=`
        <div class = "product-cart">
            <img src = ${item.image}>
            <h4>${item.name}</h4>
            <h4>${item.price}</h4>
        </div>

        `
    })

    // let cart = JSON.parse(localStorage.getItem("cart"));
    // cart ? cart : cart = [];
    // cart.push(selectedProduct);
    // console.log(cart);
    // document.getElementById("cart-link").innerHTML = `Cart(${ cart.length })`;
    // localStorage.setItem("cart",JSON.stringify(cart));
    // let img = '<img src="img/product/Silver Fancy Oval Claw & Cluster Cubic Zirconia Ring.jpg" class="first_img" alt="" />'
    // let descrip = 'Oval Silver Ring'
    // let price = 'R1573.00'
    // let table_data = document.getElementById("cart-table")
    // window.location.href = "./cart.html"

    // table_data.innerHTML += `
    <tr>
        <td class="product-thumbnail"><a href="#">${img}</a></td>
        <td class="product-name"><a href="#">${descrip}</a></td>
        <td class="product-price"><span class="amount">${price}</span></td>
        <td class="product-quantity"><input type="number" value="1" /></td>
        <td class="product-subtotal">${price}</td>
        <td class="product-remove"><a href="#"><i class="fa fa-times"></i></a></td>
    </tr>
    `
}

function remove(id){
    let cart = JSON.parse(localStorage.getItem("cart"));
    // cart = JSON.parse(cartItem);
    console.log(cart);

    let cartMinusItem = cart.filter(item => {
        return item.id !== id
    })

    localStorage.setItem("cart", JSON.stringify(cartMinusItem));

    console.log("Removing item from cart");
    renderCart()
    window.location.href = "./cart.html"
}

function clearCart(){
    localStorage.removeItem("cart");//clear local storage data
}



function createCart(){
    let inCart;

    let cart = localStorage.getItem("cart");
    console.log("Whats in your cart?", JSON.parse(cart));
}

function showCart(){
    let added = document.getElementById("cartItem");
}

// function renderCart(){
//     let cart = JSON.parse(localStorage.getItem("cart"));

//     fetch("http://127.0.0.1:5000/show-records/")
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             console.log(cart);
//             let cartItem = [];

//             data.forEach((dataItem) => {
//                 cart.forEach((cartItem) =>{
//                     if (dataItem.id == cartItem) {
//                         cartItem.push(dataItem);
//                     }
//                 });
//             });

//             console.log(cartItem);
//             cartItem.forEach((item) => {
//                 let cartItem = createCartItem(item);
//                 document.getElementById("").innerHTML += cartItem;
//             })
//             console.log(cartItem);
//         });

