"use client";
import React, { createContext, useContext, useState } from "react";

interface PaymentModalContextType {
  isPaymentModalOpen: boolean;
  openPaymentModal: () => void;
  closePaymentModal: () => void;
}

const PaymentModalContext = createContext<
  PaymentModalContextType | undefined
>(undefined);

export const usePaymentModalContext = () => {
  const context = useContext(PaymentModalContext);
  if (!context) {
    throw new Error(
      "usePaymentModalContext must be used within a PaymentModalProvider"
    );
  }
  return context;
};

export const PaymentModalProvider = ({ children }) => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const openPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  return (
    <PaymentModalContext.Provider
      value={{ isPaymentModalOpen, openPaymentModal, closePaymentModal }}
    >
      {children}
    </PaymentModalContext.Provider>
  );
};
