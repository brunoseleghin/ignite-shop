import { AppProps } from "next/app";
import Image from "next/image";

import { Handbag } from "@phosphor-icons/react";

import logo from '../assets/logo.svg'

import { globalStyles } from "../styles/global";
import { Container, Header, IconContainer } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Image src={logo} alt="" />

        <IconContainer>
          <Handbag color="#C4C4CC" size={24} weight="bold" />
        </IconContainer>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
