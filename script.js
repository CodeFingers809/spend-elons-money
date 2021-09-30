//registering service worker
refreshCacheAndReload = () => {
  if ("serviceWorker" in navigator) {
    serviceWorkerRegistration.unregister();
    caches
      .keys()
      .then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          caches.delete(cacheName);
        });
      })
      .then(() => {
        serviceWorkerRegistration.register();
      });
  }
  setTimeout(function () {
    window.location.replace("");
  }, 300);
};
// code starts here
let priceOfProduct,
  numberOfProduct,
  currentProduct,
  totalAmount = 164e9,
  amountUsed = 0,
  amountLeft = 164e9,
  percentUsed = 0,
  products = [
    {
      valueNum: "prod1",
      name: "Nintendo Switch",
      image: "assets/prod1.webp",
      price: 299,
      number: 0,
    },
    {
      valueNum: "prod2",
      name: "PS5",
      image: "assets/prod2.webp",
      price: 499,
      number: 0,
    },
    {
      valueNum: "prod3",
      name: "Xbox series X",
      image: "assets/prod3.webp",
      price: 499,
      number: 0,
    },
    {
      valueNum: "prod4",
      name: "Iphone 12 pro max",
      image: "assets/prod4.webp",
      price: 1399,
      number: 0,
    },
    {
      valueNum: "prod5",
      name: "Apple Ipad Pro",
      image: "assets/prod5.webp",
      price: 2199,
      number: 0,
    },
    {
      valueNum: "prod6",
      name: "Ultimate Gaming PC",
      image: "assets/prod6.webp",
      price: 4950,
      number: 0,
    },
    {
      valueNum: "prod7",
      name: "Top Spec Laptop",
      image: "assets/prod7.webp",
      price: 3699,
      number: 0,
    },
    {
      valueNum: "prod8",
      name: "Apple Macbook Pro",
      image: "assets/prod8.webp",
      price: 2799,
      number: 0,
    },
    {
      valueNum: "prod9",
      name: "Top Spec Mac Pro",
      image: "assets/prod9.webp",
      price: 53247,
      number: 0,
    },
    {
      valueNum: "prod10",
      name: "Entire Steam Game Library",
      image: "assets/prod10.webp",
      price: 537192,
      number: 0,
    },
    {
      valueNum: "prod11",
      name: "Netflix premium for 100 years",
      image: "assets/prod11.webp",
      price: 21588,
      number: 0,
    },
    {
      valueNum: "prod12",
      name: "Spotify for 100 years",
      image: "assets/prod12.webp",
      price: 19200,
      number: 0,
    },
    {
      valueNum: "prod13",
      name: "Entire production of Nvidia GPUs for 2022",
      image: "assets/prod13.webp",
      price: 7e8,
      number: 0,
    },
    {
      valueNum: "prod14",
      name: "LG 88' OLED 8K ThinQ®",
      image: "assets/prod14.webp",
      price: 19999,
      number: 0,
    },
    {
      valueNum: "prod15",
      name: "Fiat 500",
      image: "assets/prod15.webp",
      price: 19e3,
      number: 0,
    },
    {
      valueNum: "prod16",
      name: "Toyota Camry",
      image: "assets/prod16.webp",
      price: 29e3,
      number: 0,
    },
    {
      valueNum: "prod17",
      name: "Tesla Model S Plaid",
      image: "assets/prod17.webp",
      price: 132e3,
      number: 0,
    },
    {
      valueNum: "prod18",
      name: "Ferrari F8",
      image: "assets/prod18.webp",
      price: 276e3,
      number: 0,
    },
    {
      valueNum: "prod19",
      name: "Lamborghini Aventador SVJ",
      image: "assets/prod19.webp",
      price: 512e3,
      number: 0,
    },
    {
      valueNum: "prod20",
      name: "Bugatti La Voiture Noire",
      image: "assets/prod20.webp",
      price: 11e6,
      number: 0,
    },
    {
      valueNum: "prod21",
      name: "1000 Acres of land",
      image: "assets/prod21.webp",
      price: 41e5,
      number: 0,
    },
    {
      valueNum: "prod22",
      name: "Private Island, Central America (medium size)",
      image: "assets/prod22.webp",
      price: 495e4,
      number: 0,
    },
    {
      valueNum: "prod23",
      name: "Eating out for 100 years (4 meals/day)",
      image: "assets/prod23.webp",
      price: 3e6,
      number: 0,
    },
    {
      valueNum: "prod24",
      name: "Diamond Ring (Tiffany - 1 carat)",
      image: "assets/prod24.webp",
      price: 17e3,
      number: 0,
    },
    {
      valueNum: "prod25",
      name: "Rolex Watch",
      image: "assets/prod25.webp",
      price: 12e3,
      number: 0,
    },
    {
      valueNum: "prod26",
      name: "Les Femmes d’Alger by Picasso",
      image: "assets/prod26.webp",
      price: 1794e5,
      number: 0,
    },
    {
      valueNum: "prod27",
      name: "Monalisa by Leonardo da Vinci (estimate)",
      image: "assets/prod27.webp",
      price: 869e6,
      number: 0,
    },
    {
      valueNum: "prod28",
      name: "Helicopter Bell 206",
      image: "assets/prod28.webp",
      price: 75e4,
      number: 0,
    },
    {
      valueNum: "prod29",
      name: "One week in EVERY country of the planet",
      image: "assets/prod29.webp",
      price: 795e3,
      number: 0,
    },
    {
      valueNum: "prod30",
      name: "Private Jet",
      image: "assets/prod30.webp",
      price: 17e6,
      number: 0,
    },
    {
      valueNum: "prod31",
      name: "Produce a Hollywood Movie",
      image: "assets/prod31.webp",
      price: 9e7,
      number: 0,
    },
    {
      valueNum: "prod32",
      name: "Regular Apartment (2 bd, 2 ba)",
      image: "assets/prod32.webp",
      price: 25e4,
      number: 0,
    },
    {
      valueNum: "prod33",
      name: "Paris Luxury Apartment(3 bd, 4 ba)",
      image: "assets/prod33.webp",
      price: 3e6,
      number: 0,
    },
    {
      valueNum: "prod34",
      name: "L.A Home (5 bd, 6 ba)",
      image: "assets/prod34.webp",
      price: 6e6,
      number: 0,
    },
    {
      valueNum: "prod35",
      name: "L.A Mega Mansion (8 bd, 20 ba)",
      image: "assets/prod35.webp",
      price: 52e6,
      number: 0,
    },
    {
      valueNum: "prod36",
      name: "Modern Building (35 condos + 10 Offices)",
      image: "assets/prod36.webp",
      price: 12e6,
      number: 0,
    },
    {
      valueNum: "prod37",
      name: "Sailboat",
      image: "assets/prod37.webp",
      price: 13e4,
      number: 0,
    },
    {
      valueNum: "prod38",
      name: "Mega Yacht",
      image: "assets/prod38.webp",
      price: 3e8,
      number: 0,
    },
  ];

//function to convert the data to cards
function prodToCards(products) {
  //going through the array
  products.forEach((product) => {
    //initializing a template
    const cardTemplate = `<div class="col-sm-4">
        <div class="card ${product.valueNum}">
          <img srcset="${product.image} 3x" loading="lazy" class="card-img-top" alt="Image" height="250" width="auto">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">$${product.price}</p>
            <div class="btnContainer">
              <button class="btn btn-danger sellBtn me-1" disabled=true>-1</button>
              <div class="buyNumber bg-light border border-secondary rounded m-2">${product.number}</div>
              <button class="btn btn-success buyBtn ms-1">+1</button>
              <button class="btn btn-success buyBtn buy5 ms-1">+5</button>
            </div>
          </div>
        </div>
      </div>`;
    //adding the template
    document.querySelector(".row").innerHTML += cardTemplate;
  });
  //adding the eventlisteners using the function
  addEvents();
}
//calling the function
prodToCards(products);

function addEvents() {
  //buybtn stuff
  const buyBtns = document.querySelectorAll(".buyBtn");
  buyBtns.forEach((btn) => {
    //adding event listener
    btn.addEventListener("click", (e) => {
      //finding the product
      currentProduct = products.find((product) => {
        return (
          product.valueNum ===
          e.target.parentElement.parentElement.parentElement.classList[1]
        );
      });
      //finding price
      priceOfProduct = currentProduct.price;
      //finding number
      numberOfProduct = currentProduct.number;

      //checking if add 5 or 1
      if (btn.classList.contains("buy5")) {
        //checking if affordable
        if (amountLeft >= priceOfProduct * 5) {
          //changing buynumber
          let buyNumber = parseInt(
            e.target.parentElement.querySelector(".buyNumber").innerText
          );
          e.target.parentElement.querySelector(".buyNumber").innerHTML =
            buyNumber + 5;
          //changing values
          amountUsed += priceOfProduct * 5;
          amountLeft -= priceOfProduct * 5;
          //changing the number bought
          products.find((product) => {
            return (
              product.valueNum ===
              e.target.parentElement.parentElement.parentElement.classList[1]
            );
          }).number += 5;
          //removing disabled from sellbtn
          e.target.parentElement
            .querySelector(".sellBtn")
            .removeAttribute("disabled");
          //changing the navbar text
          changeRemaining();
          changePercent();
          //playing audio
          const buySound = new Audio("./assets/cha-ching.mp3");
          buySound.load();
          buySound.play();
          //changing the receipt
          changeReceipt(currentProduct, "add");
        } else if (priceOfProduct > amountLeft) {
          cantAfford();
        }
      } else {
        //checking if affordable
        if (amountLeft >= priceOfProduct) {
          //changing buynumber
          let buyNumber = parseInt(
            e.target.parentElement.querySelector(".buyNumber").innerText
          );
          e.target.parentElement.querySelector(".buyNumber").innerHTML =
            ++buyNumber;
          //changing values
          amountUsed += priceOfProduct;
          amountLeft -= priceOfProduct;
          //changing the number bought
          products.find((product) => {
            return (
              product.valueNum ===
              e.target.parentElement.parentElement.parentElement.classList[1]
            );
          }).number++;
          //removing disabled from sellbtn
          e.target.parentElement
            .querySelector(".sellBtn")
            .removeAttribute("disabled");
          //changing the navbar text
          changeRemaining();
          changePercent();
          //playing audio
          const buySound = new Audio("./assets/cha-ching.mp3");
          buySound.load();

          buySound.play();
          //changing the receipt
          changeReceipt(currentProduct, "add");
        } else if (priceOfProduct > amountLeft) {
          cantAfford();
        }
      }
    });
  });

  //sellbtn stuff
  const sellBtns = document.querySelectorAll(".sellBtn");
  sellBtns.forEach((btn) => {
    //adding eventlistener
    btn.addEventListener("click", (e) => {
      //finding the product
      currentProduct = products.find((product) => {
        return (
          product.valueNum ===
          e.target.parentElement.parentElement.parentElement.classList[1]
        );
      });
      //finding price
      priceOfProduct = currentProduct.price;
      //finding number
      numberOfProduct = currentProduct.number;
      //selling product
      if (numberOfProduct > 0) {
        //changing buy number
        let buyNumber = parseInt(
          e.target.parentElement.querySelector(".buyNumber").innerText
        );
        e.target.parentElement.querySelector(".buyNumber").innerHTML =
          --buyNumber;
        //changing values
        amountUsed -= priceOfProduct;
        amountLeft += priceOfProduct;
        //changing the number bought
        products.find((product) => {
          return (
            product.valueNum ===
            e.target.parentElement.parentElement.parentElement.classList[1]
          );
        }).number--;
        //changing the number of prod
        numberOfProduct = products.find((product) => {
          return (
            product.valueNum ===
            e.target.parentElement.parentElement.parentElement.classList[1]
          );
        }).number;
        //disabling btn if sold all
        if (numberOfProduct === 0) {
          e.target.setAttribute("disabled", true);
        }
        //changing navbar text
        changeRemaining();
        changePercent();
        //playing audio
        const buySound = new Audio("./assets/cha-ching.mp3");
        buySound.load();
        buySound.play();
        //changing the receipt
        changeReceipt(currentProduct, "remove");
      }
    });
  });
}

//function to change amount left
function changeRemaining() {
  moneyLeft.innerHTML = amountLeft;
}

//function to change percentage of used amount
function changePercent() {
  percentUsed = ((amountUsed / totalAmount) * 100).toFixed(6);
  const sentenceTemplate = `You have used ${percentUsed}% of Elon's money so far!`;
  moneySpent.innerHTML = sentenceTemplate;
  if (amountUsed === 0)
    moneySpent.innerHTML = "You haven't spent a single dollar, start spending!";
}

//function if cant afford something
function cantAfford() {
  moneyLeft.innerHTML = "Can't afford that!";
  moneySpent.innerHTML = "Sell something!";
}

//function to change receipt
function changeReceipt(product, todo) {
  //checking if info message there
  if (
    receipt.innerHTML.trim() ===
      `<tr><td colspan="3">Nothing has been bought yet!</td></tr>` ||
    receipt.innerHTML ===
      `
    <tr><td colspan="3">Nothing has been bought yet!</td></tr>
  `
  ) {
    receipt.innerHTML = "";
  }

  //checking to add
  if (todo === "add") {
    //adding product amount if product exists
    if (receipt.querySelector("." + product.valueNum)) {
      let productRow = receipt.querySelector("." + product.valueNum);
      productRow.querySelector(".amount").innerHTML = "x" + product.number;
      productRow.querySelector(".price").innerHTML =
        "$" + product.number * product.price;
    } else {
      //adding product if doesn't exist
      let newRow = document.createElement("tr");
      newRow.setAttribute("class", product.valueNum);

      let nameCell = document.createElement("td");
      nameCell.appendChild(document.createTextNode(product.name));
      nameCell.setAttribute("class", "name");
      newRow.appendChild(nameCell);

      let amountCell = document.createElement("td");
      amountCell.appendChild(document.createTextNode("x" + product.number));
      amountCell.setAttribute("class", "amount");
      newRow.appendChild(amountCell);

      let priceCell = document.createElement("td");
      priceCell.appendChild(
        document.createTextNode("$" + product.number * product.price)
      );
      priceCell.setAttribute("class", "price");
      newRow.appendChild(priceCell);

      receipt.appendChild(newRow);
    }
  } else if (todo === "remove") {
    //removing product amount if product amount not zero
    if (receipt.querySelector("." + product.valueNum)) {
      if (product.number >= 1) {
        let productRow = receipt.querySelector("." + product.valueNum);
        productRow.querySelector(".amount").innerHTML = "x" + product.number;
        productRow.querySelector(".price").innerHTML =
          "$" + product.number * product.price;
      } else if (product.number === 0) {
        receipt.removeChild(receipt.querySelector("." + product.valueNum));
      }
      if (amountUsed === 0) {
        receipt.innerHTML = `<tr><td colspan="3">Nothing has been bought yet!</td></tr>`;
      }
    }
  }
  receiptTotal.innerText = amountUsed;
}
