import Image from "next/image";
import Link from "next/link";

import { ImagesContainer, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Head from "next/head";

interface SuccessProps {
  customerName: string,
  products: {
    price: {
      product: {
        name: string,
        images: string
      }
    }
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {

  const items = products.map((product) => ({
    name: product.price.product.name,
    imageUrl: product.price.product.images[0]
  }))
  
  const quantity = items.length

  return (
    <>
      <Head>
        <title>Compra efetuada! - Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImagesContainer>
          {
            items.map((item) => (
              <div>
                <Image src={item.imageUrl} alt="" width={120} height={110} />
              </div>
            ))
          }
        </ImagesContainer>

        <h1>Compra efetuada!</h1>

        <p>
          {customerName}, sua compra de {quantity} {quantity > 1 ? 'camisetas' : 'camiseta'} já está 
          a caminho da sua casa.
        </p>

        <Link href='/'>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = query.session_id && String(query.session_id);

  if (!sessionId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['customer_details','line_items', 'line_items.data.price.product']
  })

  const products = session.line_items.data

  const customerName = session.customer_details.name

  return {
    props: {
      customerName,
      products
    }
  }
}