import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import axios from 'axios'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'

import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'
import { useContext, useState } from 'react'
import Head from 'next/head'
import { CartContext } from '../../context/CartContext'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string,
    numberPrice: number,
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  const { existProductOnCart, addProductToCart } = useContext(CartContext)

  if (isFallback) {
    return <p>Loading...</p>
  }

  async function handleBuyProduct() {
    const exist = existProductOnCart(product.id)

    if (!exist) {
      addProductToCart(product)
    }
  }

  const title = `${product.name} - Ignite Shop`

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt='' />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>
        
          <button onClick={handleBuyProduct}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  ) 
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_PssUSv32XWbgdE' } }
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: { 
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100),
        numberPrice: price.unit_amount / 100,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}