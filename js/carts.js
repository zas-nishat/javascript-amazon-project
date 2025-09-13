export const carts = [];


// Add to carts function
export function addToCart(productId) {
    let matchedProducts;
    carts.forEach((item) => {
        if (productId === item.productId) {
            matchedProducts = item;
        }
    })
    if (matchedProducts) {
        matchedProducts.quantity++;
    } else {
        carts.push(
            {
                productId: productId,
                quantity: 1
            }
        )
    }
}


// Update cart quantity function
export function updateCartsQuantity() {

    const totalQuantity = document.querySelector(".cart-quantity");
    let cartsQuantity = 0;
    carts.forEach((quantity) => {
        cartsQuantity += quantity.quantity;
        totalQuantity.innerHTML = cartsQuantity;
    });
    console.log("total quantity:" + cartsQuantity)
}