import { DialogContent, DialogOverlay,  DialogTitle, ContainerContent, CardsContainer, CardImage, Card, CardInfo, TotalContainer, TotalInfo, Amount, Value } from "../Cart/styles";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

import { X } from "@phosphor-icons/react";

import { useContext } from "react";
import { DialogContext, StatusType } from "../../context/DialogContext";
import { CartContext } from "../../context/CartContext";
import axios from "axios";

export function Cart() {

  const { status, setStatusDialog } = useContext(DialogContext)
  const { productsOnCart, removeProductFromCart } = useContext(CartContext)
  
  const quantity = productsOnCart.length === 1 ? productsOnCart.length + ' item' : productsOnCart.length + ' itens'

  const totalPrice = productsOnCart.reduce((acc, product) => product.numberPrice + acc, 0)
  const total = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})

  function handleStatusDialog(status: StatusType) {
    if (status === 'open') {
      setStatusDialog('close')
    } else {
      setStatusDialog('open')
    }
  }

  async function handleCheckout() {
    console.log(productsOnCart);

    try {

      const response = await axios.post('/api/checkout', {
        products: [...productsOnCart]
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Dialog.Root open={status === 'open'} onOpenChange={() => handleStatusDialog('open')}>
      <Dialog.Trigger asChild>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <ContainerContent>
            <DialogTitle>Sacola de compras</DialogTitle>
          
            <CardsContainer>
              { productsOnCart.map(product => {
                return (
                  <Card key={product.id}>
                    <CardImage>
                      <Image src={product.imageUrl} alt="" width={94} height={94} />
                    </CardImage>

                    <CardInfo>
                      <div>
                        <p>{product.name}</p>
                        <span>{product.price}</span>
                      </div>

                      <button onClick={() => removeProductFromCart(product)}>Remover</button>
                    </CardInfo>
                  </Card>
                )
              }) }
            </CardsContainer>

            <TotalContainer>
              <TotalInfo>
                <div>
                  <span>Quantidade</span>
                  <Amount>Valor total</Amount>
                </div>

                <div>
                  <span>{quantity}</span>
                  <Value>{total}</Value>
                </div>
              </TotalInfo>

              <button onClick={handleCheckout}>Finalizar compra</button>
            </TotalContainer>
          </ContainerContent>

          <Dialog.Close asChild>
            <X size={24} />
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}