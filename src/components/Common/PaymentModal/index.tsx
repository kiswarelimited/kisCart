"use client";
import React, { useEffect, useState } from "react";

import { usePaymentModalContext } from "@/app/context/PaymentModalContext";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import Image from "next/image";

const CardIcon = () => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.75" y="0.75" width="18.5" height="14.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M0.75 5H19.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5.5 11.5H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const LockIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 6.5H11V5C11 2.79 9.21 1 7 1C4.79 1 3 2.79 3 5V6.5H2.5C1.67 6.5 1 7.17 1 8V14C1 14.83 1.67 15.5 2.5 15.5H11.5C12.33 15.5 13 14.83 13 14V8C13 7.17 12.33 6.5 11.5 6.5ZM5 5C5 3.9 5.9 3 7 3C8.1 3 9 3.9 9 5V6.5H5V5ZM7 12.5C6.17 12.5 5.5 11.83 5.5 11C5.5 10.17 6.17 9.5 7 9.5C7.83 9.5 8.5 10.17 8.5 11C8.5 11.83 7.83 12.5 7 12.5Z"
      fill="currentColor"
    />
  </svg>
);

const PaymentModal = () => {
  const { isPaymentModalOpen, closePaymentModal } = usePaymentModalContext();
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);
  const [payment, setPayment] = useState("card");

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".modal-content")) {
        closePaymentModal();
      }
    }

    if (isPaymentModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isPaymentModalOpen, closePaymentModal]);

  const inputClasses =
    "w-full rounded-md border border-gray-3 bg-white placeholder:text-dark-4 py-3 px-5 outline-none duration-200 focus:border-transparent focus:ring-2 focus:ring-blue/30";

  return (
    <div
      className={`${
        isPaymentModalOpen ? "z-99999" : "hidden"
      } fixed top-0 left-0 overflow-y-auto no-scrollbar w-full h-screen bg-dark/70 sm:px-8 px-4 py-5`}
    >
      <div className="flex items-start sm:items-center justify-center min-h-full">
        <div className="w-full max-w-[600px] rounded-xl bg-white relative modal-content my-5 sm:my-0">
          {/* <!-- header --> */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-5 border-b border-gray-3">
            <div>
              <h3 className="font-medium text-dark text-lg sm:text-xl">
                Secure Checkout
              </h3>
              <p className="flex items-center gap-1.5 text-custom-xs text-dark-4 mt-1">
                <LockIcon />
                Payments are encrypted and secure
              </p>
            </div>

            <button
              onClick={() => closePaymentModal()}
              aria-label="button for close modal"
              className="flex items-center justify-center w-9 h-9 rounded-full ease-in duration-150 bg-gray-2 text-dark-5 hover:text-dark hover:bg-gray-3"
            >
              <svg
                className="fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.3586 7.47468C8.11452 7.2306 7.7188 7.2306 7.47472 7.47468C7.23064 7.71876 7.23064 8.11448 7.47472 8.35856L9.11612 9.99996L7.47474 11.6413C7.23066 11.8854 7.23066 12.2811 7.47474 12.5252C7.71882 12.7693 8.11454 12.7693 8.35862 12.5252L10 10.8838L11.6413 12.5251C11.8854 12.7692 12.2811 12.7692 12.5252 12.5251C12.7693 12.281 12.7693 11.8853 12.5252 11.6412L10.8838 9.99996L12.5252 8.35856C12.7693 8.11448 12.7693 7.71876 12.5252 7.47468C12.2811 7.2306 11.8854 7.2306 11.6413 7.47468L10 9.11608L8.3586 7.47468Z"
                  fill=""
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 1.04169C5.05246 1.04169 1.04167 5.05248 1.04167 10C1.04167 14.9476 5.05246 18.9584 10 18.9584C14.9476 18.9584 18.9583 14.9476 18.9583 10C18.9583 5.05248 14.9476 1.04169 10 1.04169ZM2.29167 10C2.29167 5.74279 5.74279 2.29169 10 2.29169C14.2572 2.29169 17.7083 5.74279 17.7083 10C17.7083 14.2572 14.2572 17.7084 10 17.7084C5.74279 17.7084 2.29167 14.2572 2.29167 10Z"
                  fill=""
                />
              </svg>
            </button>
          </div>

          <div className="px-5 sm:px-8 py-6">
            {/* <!-- order summary --> */}
            <div className="bg-gray-1 rounded-lg p-4 mb-6">
              <div className="flex flex-col gap-3 mb-4">
                {cartItems.map((item, key) => (
                  <div key={key} className="flex items-center gap-3">
                    <div className="flex items-center justify-center rounded-[5px] bg-white border border-gray-3 max-w-[46px] w-full h-11">
                      <Image
                        src={item.imgs?.thumbnails[0]}
                        alt={item.title}
                        width={40}
                        height={40}
                      />
                    </div>

                    <p className="flex-1 text-custom-sm text-dark line-clamp-1">
                      {item.title}
                    </p>

                    <p className="text-custom-sm text-dark-4">
                      ${item.discountedPrice * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-gray-3 pt-3">
                <p className="font-medium text-dark">Total</p>
                <p className="font-medium text-lg text-dark">${totalPrice}</p>
              </div>
            </div>

            {/* <!-- payment methods --> */}
            <p className="font-medium text-dark mb-3">Payment Method</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <button
                type="button"
                onClick={() => setPayment("card")}
                className={`flex items-center justify-center gap-2.5 rounded-md border py-3.5 px-4 ease-out duration-200 ${
                  payment === "card"
                    ? "border-blue bg-blue-light-5 text-blue"
                    : "border-gray-3 bg-white hover:bg-gray-2"
                }`}
              >
                <CardIcon />
                Card
              </button>

              <button
                type="button"
                onClick={() => setPayment("paypal")}
                className={`flex items-center justify-center gap-2.5 rounded-md border py-3.5 px-4 ease-out duration-200 ${
                  payment === "paypal"
                    ? "border-blue bg-blue-light-5"
                    : "border-gray-3 bg-white hover:bg-gray-2"
                }`}
              >
                <Image
                  src="/images/checkout/paypal.svg"
                  alt="PayPal"
                  width={75}
                  height={20}
                />
              </button>

              <button
                type="button"
                onClick={() => setPayment("cash")}
                className={`flex items-center justify-center gap-2.5 rounded-md border py-3.5 px-4 ease-out duration-200 ${
                  payment === "cash"
                    ? "border-blue bg-blue-light-5"
                    : "border-gray-3 bg-white hover:bg-gray-2"
                }`}
              >
                <Image
                  src="/images/checkout/cash.svg"
                  alt="Cash on delivery"
                  width={21}
                  height={21}
                />
                Cash
              </button>
            </div>

            {/* <!-- card details --> */}
            {payment === "card" && (
              <div className="space-y-4 mb-6">
                <div>
                  <label
                    htmlFor="cardName"
                    className="block mb-2 text-custom-sm"
                  >
                    Name on Card
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    id="cardName"
                    placeholder="John Doe"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="cardNumber"
                    className="block mb-2 text-custom-sm"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className={inputClasses}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="cardExpiry"
                      className="block mb-2 text-custom-sm"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="cardExpiry"
                      id="cardExpiry"
                      placeholder="MM/YY"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="cardCvc" className="block mb-2 text-custom-sm">
                      CVC
                    </label>
                    <input
                      type="text"
                      name="cardCvc"
                      id="cardCvc"
                      placeholder="123"
                      className={inputClasses}
                    />
                  </div>
                </div>
              </div>
            )}

            {payment === "paypal" && (
              <div className="rounded-md bg-blue-light-5 border border-blue/30 p-4 mb-6">
                <p className="text-custom-sm text-dark">
                  You will be redirected to PayPal to complete your payment of{" "}
                  <span className="font-medium text-blue">${totalPrice}</span>.
                </p>
              </div>
            )}

            {payment === "cash" && (
              <div className="rounded-md bg-blue-light-5 border border-blue/30 p-4 mb-6">
                <p className="text-custom-sm text-dark">
                  Please have{" "}
                  <span className="font-medium text-blue">${totalPrice}</span>{" "}
                  ready in cash when your order arrives.
                </p>
              </div>
            )}

            {/* <!-- pay button --> */}
            <button
              type="button"
              onClick={() => closePaymentModal()}
              className="w-full flex items-center justify-center gap-2 font-medium text-white bg-blue py-4 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark"
            >
              {payment === "card" && `Pay $${totalPrice}`}
              {payment === "paypal" && "Continue with PayPal"}
              {payment === "cash" && "Place Order"}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 1.5L7.5 8.5M14.5 1.5L9.75 14.5L7.5 8.5L1 6.25L14.5 1.5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
