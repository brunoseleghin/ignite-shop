import { useContext, useState } from "react";
import { AppProps } from "next/app";

import { globalStyles } from "../styles/global";
import { Container } from '../styles/pages/app'

import { Cart } from "../components/Cart";
import { CartContextProvider } from "../context/CartContext";
import { Header } from "../components/Header";
import { DialogContextProvider } from "../context/DialogContext";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DialogContextProvider>
      <CartContextProvider>
        <Container>
          <Header />
          <>
            <Cart />
            <Component {...pageProps} />
          </>
        </Container>
      </CartContextProvider>
    </DialogContextProvider>
  );
}
