const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    ratings: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    ratings: {
      stars: 4,
      count: 127
    },
    priceCents: 2095
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    ratings: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    ratings: {
      stars: 5,
      count: 2197
    },
    priceCents: 1899

  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    ratings: {
      stars: 4,
      count: 37
    },
    priceCents: 2067
  },
]

const productContainer = document.querySelectorAll(".product-container");
let productHtml = '';
products.forEach((product) => {
  productHtml += `
    <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" src="images/ratings/rating-${product.ratings.stars * 10}.png">
          <div class="product-rating-count link-primary">
            ${product.ratings.count}
          </div>
        </div>

        <div class="product-price">
          $${(product.priceCents / 100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary" data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>`;
  document.querySelector(".show-products").innerHTML = productHtml;
})

document.querySelectorAll(".add-to-cart-button").forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    let matchedProducts;
    carts.forEach((item) => {
      if (productId === item.productId) {
        matchedProducts = item
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

    console.log(carts)
  })
})