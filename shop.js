function listItems(){
    fetch("https://secret-ridge-68291.herokuapp.com/list-prod/")
    .then((response) => response.json())
    .then((lad) =>{
        console.table(lad);
        let bada = document.getElementById("merch");
        console.log(bada)
        lad.forEach(item => {
            let merches =` <div class="tab-content">
            <div class="tab-pane active" id="viewed">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="single-new-product mt-40 category-new-product">
                            <div class="product-img">
                                <a href="product-details.html">
                                    <h4>${item.productname}</h4>
                                    <img src=${item.picture}
                                    
                                </a>
                                <div class="new-product-action">
                                     <a href="#"><span class="lnr lnr-sync"></span></a> 
                                     <a onclick="add()"><span class="lnr lnr-cart cart_pad"></span>Add to Cart</a>
                                    <a href="wishlist.html"><span class="lnr lnr-heart"></span></a>
                                </div>
                            </div>
                            <div class="product-content text-center">
                                <a href="product-details.html" onclick="Show()><h3>View</h3></a>
                                
                                <div class="price">
                                    <h4>${item.price}</h4> 
                                </div>
                            </div>
                        </div>
                    </div>`

            
            
        });
    })
}