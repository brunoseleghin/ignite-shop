import { AppProps } from "next/app";
import Image from "next/image";

import { Handbag, X } from "@phosphor-icons/react";

import logo from '../assets/logo.svg'
import shirt from '../assets/shirt.svg'

import { globalStyles } from "../styles/global";
import { Container, Header, IconContainer, DialogContent, DialogOverlay,  DialogTitle, ContainerContent, CardsContainer, CardImage, Card, CardInfo, TotalContainer, TotalInfo, Amount, Value, Centered } from "../styles/pages/app";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [quantity, setQuantity] = useState(3)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { pathname } = useRouter()
  
  return (
    <Container>
      <Header>
        { pathname !== '/success' ? (
            <>
              <Link href='/'>
                <Image src={logo} alt="" />
              </Link>

              <a onClick={() => setIsDialogOpen(true)}>
                <IconContainer>
                  <Handbag color="#C4C4CC" size={24} weight="bold" />
                </IconContainer>
                {quantity > 0 ? <span>{quantity}</span> : null}
              </a>
            </>
          ) : (
            <Centered>
              <Link href='/'>
                <Image src={logo} alt="" />
              </Link>
            </Centered>
          )
        }
      </Header>

      <>
        <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <Dialog.Trigger asChild>
          </Dialog.Trigger>
          <Dialog.Portal>
            <DialogOverlay />
            <DialogContent>
              <ContainerContent>
                <DialogTitle>Sacola de compras</DialogTitle>
              
                <CardsContainer>
                  <Card>
                    <CardImage>
                      <Image src={shirt} alt="" width={94} height={94} />
                    </CardImage>

                    <CardInfo>
                      <div>
                        <p>Camiseta Beyond the Limits</p>
                        <span>R$ 79,90</span>
                      </div>

                      <button>Remover</button>
                    </CardInfo>
                  </Card>

                  <Card>
                    <CardImage>
                      <Image src={shirt} alt="" width={94} height={94} />
                    </CardImage>

                    <CardInfo>
                      <div>
                        <p>Camiseta Ignite Lab | ReactJS</p>
                        <span>R$ 89,90</span>
                      </div>

                      <button>Remover</button>
                    </CardInfo>
                  </Card>

                  <Card>
                    <CardImage>
                      <Image src={shirt} alt="" width={94} height={94} />
                    </CardImage>

                    <CardInfo>
                      <div>
                        <p>Camiseta Explorer</p>
                        <span>R$ 62,90</span>
                      </div>

                      <button>Remover</button>
                    </CardInfo>
                  </Card>
                </CardsContainer>

                <TotalContainer>
                  <TotalInfo>
                    <div>
                      <span>Quantidade</span>
                      <Amount>Valor total</Amount>
                    </div>

                    <div>
                      <span>3 itens</span>
                      <Value>R$ 270,00</Value>
                    </div>
                  </TotalInfo>

                  <button>Finalizar compra</button>
                </TotalContainer>
              </ContainerContent>

              <Dialog.Close asChild>
                <X size={24} />
              </Dialog.Close>
            </DialogContent>
          </Dialog.Portal>
        </Dialog.Root>

        <Component {...pageProps} />
      </>
    </Container>
  );
}
