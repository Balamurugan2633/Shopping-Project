

const discounts = [
    {
        "vendor": "vendor1",
        "tradea": 12,
        "tradeb": 12,
        "tradec": "N/A",
        "traded": 6
    },
    {
        "vendor": "vendor2",
        "tradea": 10,
        "tradeb": 8,
        "tradec": 20,
        "traded": "N/A"
    },
    {
        "vendor": "vendor3",
        "tradea": "N/A",
        "tradeb": 25,
        "tradec": 3,
        "traded": 16
    },
    {
        "vendor": "vendor4",
        "tradea": 9,
        "tradeb": "N/A",
        "tradec": 16,
        "traded": 30
    },
    {
        "vendor": "vendor5",
        "tradea": 5,
        "tradeb": 11,
        "tradec": "N/A",
        "traded": 30
    }
];

 const customProductNames = {
    1: "test product1",
    2: "test product2",
    3: "test product3",
    4: "test product4",
    5: "test product5",
    6: "test product6",
    7: "test product7",
    8: "test product8",
    9: "test product9",
    10: "test product10",
    11: "test product11",
    12: "test product12",
    13: "test product13",
    14: "test product14",
    15: "test product15",
    16: "test product16",
    17: "test product17",
    18: "test product18",
    19: "test product19",
    20: "test product20",
    21: "test product21",
    22: "test product22",
    23: "test product23",
    24: "test product24",
    25: "test product25",
    26: "test product26",
    27: "test product27",
};
 const discountPercentages = [
    {
        "productid": 1,
        "percentage": 5
    },
    {
        "productid": 2,
        "percentage": 0
    },
    {
        "productid": 3,
        "percentage": 3
    },
    {
        "productid": 4,
        "percentage": 20
    },
    {
        "productid": 5,
        "percentage": 6
    },
    {
        "productid": 6,
        "percentage": 0
    },
    {
        "productid": 7,
        "percentage": 0
    },
    {
        "productid": 8,
        "percentage": 30
    },
    {
        "productid": 9,
        "percentage": 16
    },
    {
        "productid": 10,
        "percentage": 8
    },
    {
        "productid": 11,
        "percentage": 12
    },
    {
        "productid": 12,
        "percentage": 0
    },
    {
        "productid": 13,
        "percentage": 30
    },
    {
        "productid": 14,
        "percentage": 30
    },
    {
        "productid": 15,
        "percentage": 5
    },
    {
        "productid": 16,
        "percentage": 12
    },
    {
        "productid": 17,
        "percentage": 20
    },
    {
        "productid": 18,
        "percentage": 16
    },
    {
        "productid": 19,
        "percentage": 0
    },
    {
        "productid": 20,
        "percentage": 11
    },
    {
        "productid": 21,
        "percentage": 0
    },
    {
        "productid": 22,
        "percentage": 20
    },
    {
        "productid": 23,
        "percentage": 0
    },
    {
        "productid": 24,
        "percentage": 6
    },
    {
        "productid": 25,
        "percentage": 30
    },
    {
        "productid": 26,
        "percentage": 5
    },
    {
        "productid": 27,
        "percentage": 8
    },


]

 const products = [
    // Insert your product data here
    {
        "id": 1,
        "name": "test product1",
        "price": 12.50,
        "tags": ["TRADE A", "ice"],
        "vendor": "Vendor 5",
        "discount": 0
    },
    {
        "id": 2,
        "name": "test product2",
        "price": 42.50,
        "tags": ["TRADE B", "ice2"],
        "vendor": "Vendor 4",
        "discount": 0
    },
    {
        "id": 3,
        "name": "test product3",
        "price": 200.00,
        "tags": ["TRADE C", "test"],
        "vendor": "Vendor 3",
        "discount": 3
    },
    {
        "id": 4,
        "name": "test product4",
        "price": 52.50,
        "tags": ["TRADE C", "test"],
        "vendor": "Vendor 2",
        "discount": 0
    },
    {
        "id": 5,
        "name": "test product5",
        "price": 712.50,
        "tags": ["TRADE D", "test"],
        "vendor": "Vendor 1",
        "discount": 0
    },
    {
        "id": 6,
        "name": "test product6",
        "price": 17.00,
        "tags": ["TRADE A", "test"],
        "vendor": "Vendor 3",
        "discount": 12
    },
    {
        "id": 7,
        "name": "test product7",
        "price": 55.00,
        "tags": ["TRADE A", "test"],
        "vendor": "Vendor 3",
        "discount": 12
    },
    {
        "id": 8,
        "name": "test product11",
        "price": 37.00,
        "tags": ["TRADE D", "test"],
        "vendor": "Vendor 4",
        "discount": 12
    },
    {
        "id": 9,
        "name": "test product9",
        "price": 82.00,
        "tags": ["TRADE C", "test"],
        "vendor": "Vendor 4",
        "discount": 34
    },
    {
        "id": 10,
        "name": "test product10",
        "price": 52.00,
        "tags": ["TRADE B", "test"],
        "vendor": "Vendor 2",
        "discount": 25
    },
    {
        "id": 11,
        "name": "test product22",
        "price": 102.00,
        "tags": ["TRADE B", "test"],
        "vendor": "Vendor 1",
        "discount": 25

    },
    {
        "id": 12,
        "name": "test product457",
        "price": 172.50,
        "tags": ["TRADE B", "test"],
        "vendor": "Vendor 4",
        "discount": 0
    },
    {
        "id": 13,
        "name": "test product15",
        "price": 100.00,
        "tags": ["TRADE D", "test"],
        "vendor": "Vendor 5",
        "discount": 12
    },
    {
        "id": 14,
        "name": "test product33",
        "price": 99.50,
        "tags": ["TRADE D", "test"],
        "vendor": "Vendor 5",
        "discount": 12
    },
    {
        "id": 15,
        "name": "test product85",
        "price": 87.50,
        "tags": ["TRADE A", "test"],
        "vendor": "Vendor 5",
        "discount": 0
    },
    {
        "id": 16,
        "name": "test product63",
        "price": 57.00,
        "tags": ["TRADE A", "test"],
        "vendor": "Vendor 1",
        "discount": 29
    },
    {
        "id": 17,
        "name": "test product74",
        "price": 10.00,
        "tags": ["TRADE C", "test"],
        "vendor": "Vendor 2",
        "discount": 0
    },
    {
        "id": 18,
        "name": "test product102",
        "price": 412.50,
        "tags": ["TRADE D", "test"],
        "vendor": "Vendor 3",
        "discount": 56
    },
    {
        "id": 19,
        "name": "test product358",
        "price": 112.50,
        "tags": ["TRADE B", "test"],
        "vendor": "Vendor 4",
        "discount": 0
    },
    {
        "id": 20,
        "name": "test product568",
        "price": 102.00,
        "tags": ["TRADE B", "test"],
        "vendor": "Vendor 5",
        "discount": 15
    },
    {
        "id": 21,
        "name": "test product475",
        "price": 52.00,
        "tags": ["TRADE A", "test"],
        "vendor": "Vendor 3",
        "discount": 12
    },
    {
        "id": 22,
        "name": "test product28",
        "price": 32.00,
        "tags": ["TRADE C", "test"],
        "vendor": "Vendor 2",
        "discount": 0
    },
    {
        "id": 23,
        "name": "test product1405",
        "price": 12.00,
        "tags": ["TRADE B", "test"],
        "vendor": "Vendor 4",
        "discount": 0
    },
    {
        "id": 24,
        "name": "test product389",
        "price": 584.50,
        "tags": ["TRADE D", "test"],
        "vendor": "Vendor 1",
        "discount": 0
    },
    {
        "id": 25,
        "name": "test product555",
        "price": 67.00,
        "tags": ["TRADE D", "test"],
        "vendor": "Vendor 5"
    },
    {
        "id": 26,
        "name": "test product444",
        "price": 132.50,
        "tags": ["TRADE A", "test"],
        "vendor": "Vendor 5",
        "discount": 0
    },
    {
        "id": 27,
        "name": "test product333",
        "price": 42.50,
        "tags": ["TRADE B", "test"],
        "vendor": "Vendor 2",
        "discount": 0
    }



];
document.addEventListener("DOMContentLoaded", function () {
    const productTable = document.getElementById("productTable");
    const discountTable = document.getElementById("discountTable");

    // Initialize the product table
    products.forEach((product) => {
        const row = productTable.insertRow();
        const productName = customProductNames[product.id] || product.name;
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${productName}</td>
            <td>${product.price.valueOf()}</td>
            <td>${product.tags.join(', ')}</td>
            <td>${product.vendor}</td>
            <td><button style="background-color:green;"
            onclick="addToCart(${product.id})">Add to Cart</button></td>
        `;
    });

    // Initialize the discount table
    discounts.forEach((discount) => {
        const row = discountTable.insertRow();
        row.innerHTML = `
            <td>${discount.vendor}</td>
            <td>${discount.tradea}</td>
            <td>${discount.tradeb}</td>
            <td>${discount.tradec}</td>
            <td>${discount.traded}</td>
        `;
    });
});

// Shopping cart functionality
var cartItems = {};
const ShoppingCartData = [];

function addToCart(productId) {
    if (cartItems[productId]) {
        cartItems[productId]++;
    }
    else {
        cartItems[productId] = 1;
    }
    updatePercentage();
}
function updatePercentage() {
    for (const product of products) {
        const matchingData = discountPercentages.find((data) => data.productid === product.id);
        if (matchingData) {
            product.discount = matchingData.percentage;
        }
    }
    updateCart();
}


function removeFromCart(productId) {
    if (cartItems[productId]) {
        cartItems[productId]--;
        if (cartItems[productId] === 0) {
            delete cartItems[productId];
        }
        updateCart();
    }
}

function updateCart() {
    const ShoppingCart = document.getElementById("ShoppingCart");
    ShoppingCart.innerHTML = '';

    let totalDiscountAmount = 0;
    // Create table header
    const headerRow = ShoppingCart.insertRow();
    headerRow.innerHTML = `
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Orginal Price</th>
            <th>Discount percentage</th>
            <th>Discount price</th>
            <th>Vendor</th>
            <th>Remove</th>
        `;

    // Create rows for cart items
    for (const productId in cartItems) {
        const product = products.find((p) => p.id === parseInt(productId));
        const productName = customProductNames[product.id] || product.name;
        ShoppingCartData.push(product);
        const row = ShoppingCart.insertRow();
        row.innerHTML = `
                <td>${product.id}</td>
                <td>${productName}</td>
                <td>${product.price}</td>
                <td>${product.discount}</td>
                <td>${(product.price - (product.price * product.discount / 100)).toFixed(2)}</td>
                <td>${product.vendor}</td>
                <td><button style="background-color:red;"onclick="removeFromCart(${productId})">Remove</button></td>
            `;

        const itemDiscount = (product.price - (product.price * product.discount / 100).toFixed(2));
        totalDiscountAmount += itemDiscount;

    }
    const totalDiscountElement = document.getElementById("totalDiscount");
    totalDiscountElement.textContent = `Total Discount: Rs:${totalDiscountAmount.toFixed(2)}`;

}



