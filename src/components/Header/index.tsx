import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Handbag } from "@phosphor-icons/react";

import logo from '../../assets/logo.svg'
import { HeaderContainer, IconContainer, Centered } from "../Header/styles"

import { CartContext } from "../../context/CartContext";
import { DialogContext } from "../../context/DialogContext";

export function Header() {
  const { pathname } = useRouter()
  const { productsOnCart } = useContext(CartContext)

  const quantity = productsOnCart && productsOnCart.length

  const { setStatusDialog } = useContext(DialogContext)

  return (
    <HeaderContainer>
      { pathname !== '/success' ? (
          <>
            <Link href='/'>
              <Image src={logo} alt="" />
            </Link>
            {
              quantity > 0 ? (
                <a onClick={() => setStatusDialog('open')} style={{ cursor: 'pointer' }}>
                  <IconContainer>
                    <Handbag color="#C4C4CC" size={24} weight="bold" />
                  </IconContainer>
                  {quantity > 0 ? <span>{quantity}</span> : null}
                </a>
              ) : (
                <IconContainer>
                  <Handbag color="#C4C4CC" size={24} weight="bold" />
                </IconContainer>
              )
            }
          </>
        ) : (
          <Centered>
            <Link href='/'>
              <Image src={logo} alt="" />
            </Link>
          </Centered>
        )
      }
    </HeaderContainer>
  )
}