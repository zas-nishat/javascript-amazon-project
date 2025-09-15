export const carts = [
    {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1

    },
    {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1

    },
    {

        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2

    },
    {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1

    }];


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