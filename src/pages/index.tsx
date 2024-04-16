import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import Stripe from "stripe";

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { stripe } from "../lib/stripe";
import { HomeContainer, Product, InfoContainer, IconContainer } from "../styles/pages/home";
import { Handbag } from "@phosphor-icons/react";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home - Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        { products.map(product => {
          return (
            <Product href={`/product/${product.id}`} key={product.id} className="keen-slider__slide" prefetch={false}>
              <Image src={product.imageUrl} width={570} height={480} alt="" />
              <footer>
                <InfoContainer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </InfoContainer>

                <IconContainer>
                  <Handbag color="#FFF" size={32} weight="bold" />
                </IconContainer>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100)
    }
  })
  
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
