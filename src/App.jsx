import React, { useState } from "react";
import waffleDesktop from "./assets/images/image-waffle-desktop.jpg";
import waffleMobile from "./assets/images/image-waffle-mobile.jpg";
import waffleTablet from "./assets/images/image-waffle-tablet.jpg";
import waffleThumbnail from "./assets/images/image-waffle-thumbnail.jpg";
import creambruleeDesktop from "./assets/images/image-creme-brulee-desktop.jpg";
import creambruleeMobile from "./assets/images/image-creme-brulee-mobile.jpg";
import creambruleeTablet from "./assets/images/image-creme-brulee-tablet.jpg";
import creambruleeThumbnail from "./assets/images/image-creme-brulee-thumbnail.jpg";
import macronDesktop from "./assets/images/image-macaron-desktop.jpg";
import macronMobile from "./assets/images/image-macaron-mobile.jpg";
import macronTablet from "./assets/images/image-macaron-tablet.jpg";
import macronThumbnail from "./assets/images/image-macaron-thumbnail.jpg";
import tiramisuDesktop from "./assets/images/image-tiramisu-desktop.jpg";
import tiramisuMobile from "./assets/images/image-tiramisu-mobile.jpg";
import tiramisuTablet from "./assets/images/image-tiramisu-tablet.jpg";
import tiramisuThumbnail from "./assets/images/image-tiramisu-thumbnail.jpg";
import baklavaDesktop from "./assets/images/image-baklava-desktop.jpg";
import baklavaMobile from "./assets/images/image-baklava-mobile.jpg";
import baklavaTablet from "./assets/images/image-baklava-tablet.jpg";
import baklavaThumbnail from "./assets/images/image-baklava-thumbnail.jpg";
import meringueDesktop from "./assets/images/image-meringue-desktop.jpg";
import meringueMobile from "./assets/images/image-meringue-mobile.jpg";
import meringueTablet from "./assets/images/image-meringue-tablet.jpg";
import meringueThumbnail from "./assets/images/image-meringue-thumbnail.jpg";
import cakeDesktop from "./assets/images/image-cake-desktop.jpg";
import cakeMobile from "./assets/images/image-cake-mobile.jpg";
import cakeTablet from "./assets/images/image-cake-tablet.jpg";
import cakeThumbnail from "./assets/images/image-cake-thumbnail.jpg";
import brownieDesktop from "./assets/images/image-brownie-desktop.jpg";
import brownieMobile from "./assets/images/image-brownie-mobile.jpg";
import brownieTablet from "./assets/images/image-brownie-tablet.jpg";
import brownieThumbnail from "./assets/images/image-brownie-thumbnail.jpg";
import pannaCottaDesktop from "./assets/images/image-panna-cotta-desktop.jpg";
import pannaCottaMobile from "./assets/images/image-panna-cotta-mobile.jpg";
import pannaCottaTablet from "./assets/images/image-panna-cotta-tablet.jpg";
import pannaCottaThumbnail from "./assets/images/image-panna-cotta-thumbnail.jpg";
import cartIcon from "./assets/images/icon-add-to-cart.svg";
import increQuantity from "./assets/images/icon-increment-quantity.svg";
import decreQuantity from "./assets/images/icon-decrement-quantity.svg";
import removeItem from "./assets/images/icon-remove-item.svg";
import emptyCart from "./assets/images/illustration-empty-cart.svg";
import neutralIcon from "./assets/images/icon-carbon-neutral.svg";
import confirmCheckIcon from "./assets/images/icon-order-confirmed.svg";

const products = [
  {
    id: 1,
    name: "Waffle with Berries",
    price: 6.5,
    image: {
      desktop: waffleDesktop,
      mobile: waffleMobile,
      tablet: waffleTablet,
      thumbnail: waffleThumbnail,
    },
    category: "Waffle",
  },
  {
    id: 2,
    name: "Vanilla Bean Crème Brûlée",
    price: 7.0,
    image: {
      desktop: creambruleeDesktop,
      mobile: creambruleeMobile,
      tablet: creambruleeTablet,
      thumbnail: creambruleeThumbnail,
    },
    category: "Crème Brûlée",
  },
  {
    id: 3,
    name: "Macaron Mix of Five",
    price: 8.0,
    image: {
      desktop: macronDesktop,
      mobile: macronMobile,
      tablet: macronTablet,
      thumbnail: macronThumbnail,
    },
    category: "Macaron",
  },
  {
    id: 4,
    name: "Classic Tiramisu",
    price: 5.5,
    image: {
      desktop: tiramisuDesktop,
      mobile: tiramisuMobile,
      tablet: tiramisuTablet,
      thumbnail: tiramisuThumbnail,
    },
    category: "Tiramisu",
  },
  {
    id: 5,
    name: "Pistachio Baklava",
    price: 4.0,
    image: {
      desktop: baklavaDesktop,
      mobile: baklavaMobile,
      tablet: baklavaTablet,
      thumbnail: baklavaThumbnail,
    },
    category: "Baklava",
  },
  {
    id: 6,
    name: "Lemon Meringue Pie",
    price: 5.0,
    image: {
      desktop: meringueDesktop,
      mobile: meringueMobile,
      tablet: meringueTablet,
      thumbnail: meringueThumbnail,
    },
    category: "Pie",
  },
  {
    id: 7,
    name: "Red Velvet Cake",
    price: 4.5,
    image: {
      desktop: cakeDesktop,
      mobile: cakeMobile,
      tablet: cakeTablet,
      thumbnail: cakeThumbnail,
    },
    category: "Cake",
  },
  {
    id: 8,
    name: "Salted Caramel Brownie",
    price: 4.5,
    image: {
      desktop: brownieDesktop,
      mobile: brownieMobile,
      tablet: brownieTablet,
      thumbnail: brownieThumbnail,
    },
    category: "Brownie",
  },
  {
    id: 9,
    name: "Vanilla Panna Cotta",
    price: 6.5,
    image: {
      desktop: pannaCottaDesktop,
      mobile: pannaCottaMobile,
      tablet: pannaCottaTablet,
      thumbnail: pannaCottaThumbnail,
    },
    category: "Panna Cotta",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      setTotalPrice((prevTotal) => prevTotal + product.price);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      setTotalPrice((prevTotal) => prevTotal + product.price);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart
      .map((item) =>
        item.id === product.id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    setTotalPrice((prevTotal) => prevTotal - product.price);
  };

  const confirmOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Please add some items.");
    } else {
      setIsModalOpen(true);
    }
  };

  const resetOrder = () => {
    setCart([]);
    setTotalPrice(0);
    setIsModalOpen(false);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="p-4 min-h-screen">
      <h1 className="my-6 text-3xl lg:text-4xl font-bold">Desserts</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2 gap-6">
          {products.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);

            return (
              <div
                key={product.id}
                className="rounded-lg overflow-hidden relative"
              >
                <div className="relative">
                  <picture>
                    <source
                      srcSet={product.image.mobile}
                      media="(max-width: 639px)"
                    />
                    <source
                      srcSet={product.image.tablet}
                      media="(min-width: 640px) and (max-width: 1023px)"
                    />
                    <img
                      src={product.image.desktop}
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                  </picture>
                  <div className="absolute -bottom-7 left-0 right-0 p-2 flex justify-center">
                    {cartItem ? (
                      <div className="flex items-center space-x-2 mt-4 bg-cusred rounded-full px-1 ">
                        <button
                          className=" text-white px-3 py-1 rounded"
                          onClick={() => removeFromCart(product)}
                        >
                          <img
                            src={decreQuantity}
                            alt=""
                            className="border border-white rounded-full py-3 px-2"
                          />
                        </button>
                        <span className="text-white">{cartItem.quantity}</span>
                        <button
                          className=" text-white px-3 py-1 rounded "
                          onClick={() => addToCart(product)}
                        >
                          <img
                            src={increQuantity}
                            alt=""
                            className="border border-white rounded-full p-2"
                          />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="mt-4 bg-white text-black border border-cusred  py-2 px-4 rounded-full"
                        onClick={() => addToCart(product)}
                      >
                        <div className="flex gap-2">
                          <img src={cartIcon} alt="" />
                          <p className="text-xs">Add to Cart</p>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
                <div className="py-4">
                  <p className="text-gray-400">{product.category}</p>
                  <h2 className="text-sm font-semibold">{product.name}</h2>
                  <p className="font-bold text-lg text-cusred">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cart Confirmation on the Right (for lg and above) */}
        <div className="lg:col-span-1 p-6 bg-white rounded-lg ">
          <h2 className="text-xl text-cusred font-bold mb-4">
            Your Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
          </h2>

          <div
            className={`flex flex-col justify-center items-center ${
              cart.length > 0 ? "hidden" : ""
            }`}
          >
            <img src={emptyCart} alt="" />
            <p className="text-xs text-cusrose-500">
              Your added items will appear here
            </p>
          </div>

          {/* Cart Items */}
          <ul className={`space-y-4 ${cart.length > 0 ? "" : "hidden"}`}>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div className=" w-full">
                  <h4 className="text-xs">{item.name}</h4>
                  <span className="font-bold text-cusred text-xs">
                    {item.quantity}x
                  </span>
                  <span className="text-gray-400 text-xs ml-2">
                    ${item.price.toFixed(2)}
                  </span>
                  <span className="text-gray-500 text-xs ml-2">
                    ${(item.quantity * item.price).toFixed(2)}
                  </span>
                  <hr className="mt-2 border-t border-gray-300" />
                </div>
                <button
                  className=" text-white px-1 py-1 rounded-full border border-gray-300"
                  onClick={() => removeFromCart(item)}
                >
                  <img src={removeItem} alt="" />
                </button>
              </li>
            ))}
          </ul>

          <div className={`${cart.length > 0 ? "" : "hidden"}`}>
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-xs text-gray-500">
                Order Total
              </span>
              <span className="font-bold text-lg">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex bg-gray-50 py-2 px-4 justify-between rounded mt-4">
              <img src={neutralIcon} alt="neutral" />
              <p className="text-gray-500 text-xs">
                This is a{" "}
                <span className="text-black font-bold">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>
            <button
              className="mt-4 w-full bg-cusred text-white text-xs py-2 px-4 rounded-full"
              onClick={confirmOrder}
            >
              Confirm Order
            </button>
          </div>

          {/* modal box */}
          {isModalOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={closeModal} // Add the click event handler
            >
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <div>
                  <img
                    src={confirmCheckIcon}
                    alt="check-confirm"
                    className="mb-4"
                    onClick={closeModal}
                  />
                  <h2 className="text-2xl font-bold">Order Confirmed</h2>
                  <p className="mt-2 mb-4 text-xs text-gray-500">
                    We hope you enjoy your food!
                  </p>

                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center bg-cusrose-100 p-4 "
                    >
                      <div className="w-full flex justify-between items-center">
                        <img
                          src={item.image.thumbnail}
                          alt="confirm-modal-pdt-box"
                          className="w-1/5 mr-2 rounded"
                        />
                        <div className="w-full font-bold">
                          <h4 className="text-xs">{item.name}</h4>
                          <span className="font-bold text-cusred text-xs">
                            {item.quantity}x
                          </span>
                          <span className="text-gray-400 text-xs ml-2">
                            ${item.price.toFixed(2)}
                          </span>
                          <span className="text-gray-500 text-xs ml-2">
                            ${(item.quantity * item.price).toFixed(2)}
                          </span>
                          <hr className="mt-2 border-t border-cusrose-200" />
                        </div>
                        <div className="text-black text-xs ml-2">
                          ${(item.quantity * item.price).toFixed(2)}
                        </div>
                      </div>
                    </li>
                  ))}
                  <div className="flex justify-between items-center bg-cusrose-100 px-4 pb-4">
                    <span className="font-bold text-xs text-gray-500">
                      Order Total
                    </span>
                    <span className="font-bold text-lg">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>

                  <button
                    className="mt-6 w-full text-cusrose-100 bg-cusred  text-xs py-2 px-4 rounded-full"
                    onClick={resetOrder}
                  >
                    Start New Order
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
