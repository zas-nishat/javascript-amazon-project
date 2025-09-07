const products = [
    {
        name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
        image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
        price: 1090,
        ratings: {
            stars: 4.5,
            count: 87
        }
    },
    {
        name: 'Intermediate Size Basketball',
        image: 'images/products/intermediate-composite-basketball.jpg',
        price: 2095,
        ratings: {
            stars: 4.0,
            count: 127
        }
    },
    {
        name: '  Adults Plain Cotton T-Shirt - 2 Pack',
        image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        price: 799,
        ratings: {
            stars: 4.5,
            count: 56
        }
    },
    {
        name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
        image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
        price: 1090,
        ratings: {
            stars: 4.5,
            count: 87
        }
    },
    {
        name: 'Intermediate Size Basketball',
        image: 'images/products/intermediate-composite-basketball.jpg',
        price: 2095,
        ratings: {
            stars: 4.0,
            count: 127
        }
    },
    {
        name: '  Adults Plain Cotton T-Shirt - 2 Pack',
        image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        price: 799,
        ratings: {
            stars: 4.5,
            count: 56
        }
    },
    {
        name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
        image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
        price: 1090,
        ratings: {
            stars: 4.5,
            count: 87
        }
    },
    {
        name: 'Intermediate Size Basketball',
        image: 'images/products/intermediate-composite-basketball.jpg',
        price: 2095,
        ratings: {
            stars: 4.0,
            count: 127
        }
    },
    {
        name: '  Adults Plain Cotton T-Shirt - 2 Pack',
        image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        price: 799,
        ratings: {
            stars: 4.5,
            count: 56
        }
    }, {
        name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
        image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
        price: 1090,
        ratings: {
            stars: 4.5,
            count: 87
        }
    },
    {
        name: 'Intermediate Size Basketball',
        image: 'images/products/intermediate-composite-basketball.jpg',
        price: 2095,
        ratings: {
            stars: 4.0,
            count: 127
        }
    },
    {
        name: '  Adults Plain Cotton T-Shirt - 2 Pack',
        image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        price: 799,
        ratings: {
            stars: 4.5,
            count: 56
        }
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
          $${(product.price / 100).toFixed(2)}
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

        <button class="add-to-cart-button button-primary">
          Add to Cart
        </button>
      </div>`;
    document.querySelector(".show-products").innerHTML = productHtml;
})
