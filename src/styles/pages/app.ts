import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "..";
import { useRouter } from "next/router";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '0 0 0 2rem'
})

export const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  a: {
    display: 'flex',
    position: 'relative',
    
    span: {
      width: '25px',
      height: '25px',
      display: 'flex',

      justifyContent: 'center',
      backgroundColor: '$green300',

      position: 'absolute',
      top: '0px',
      right: '0px',
      transform: 'translate(50%, -50%)',

      border: '2px solid rgba(0, 0, 0, 3)',
      borderRadius: '50%',

      textAlign: 'center',
      fontSize: '14px',
      fontWeight: 'bold',
      lineHeight: 1.6
    }

  }
})

export const IconContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',

  padding: '12px',
  backgroundColor: '$gray800',
  border: 0,
  borderRadius: 6,
  
  cursor: 'pointer',
})

export const DialogContent = styled(Dialog.Content, {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '$gray800',
  borderRadius: '6px',
  position: 'fixed',
  height: '100vh',
  left: '100%',
  transform: 'translate(-100%, -100%)',
  width: '480px',
  maxWidth: '480px',
  padding: '24px'
})

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0
})

export const ContainerContent = styled('div', {
  padding: '48px 24px',
  width: '100%',
})

export const DialogTitle = styled(Dialog.Title, {
  fontSize: '$lg',
  color: '$gray100',
})

export const CardsContainer = styled('div', {
  margin: '32px 0' ,
  maxHeight: '100px',
  height: '100px'
})

export const Card = styled('div', {
  display: 'flex',
  gap: '20px',
  width: '100%',
  marginBottom: '24px'
})

export const CardImage = styled('div', {
  width: '100%',
  maxWidth: 94,
  height: 94,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})

export const CardInfo = styled('div', {
  div: {
    marginBottom: '8px',
  },

  p: {
    fontSize: '$md',
    color: '$gray300',
    lineHeight: 1.6
  },

  span: {
    fontSize: '$md',
    color: '$gray100',
    fontWeight: 'bold',
    lineHeight: 1.6
  },

  button: {
    backgroundColor: 'transparent',
    border: 0,
    fontSize: '1rem',
    fontWeight: 'bold',
    lineHeight: 1.6,
    color: '$green300',
    cursor: 'pointer',

    transition: "all 0.2s ease-in-out",
    '&:hover': {
      color: '$green500'
    }
  }
})

export const TotalContainer = styled('div', {
  position: 'fixed',
  bottom: 0,
  width: '80%',
  marginBottom: '48px',

  button: {
    backgroundColor: '$green300',
    width: '100%',
    border: 0,
    padding: '20px 32px',
    borderRadius: '8px',

    fontSize: '$md',
    color: '$white',

    transition: "all 0.2s ease-in-out",
    '&:hover': {
      backgroundColor: '$green500',
      cursor: 'pointer'
    }
  }
})

export const TotalInfo = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    span: {
      textAlign: 'right',
      lineHeight: 1.6
    }
  },
  marginBottom: '48px'
})

export const Amount = styled('span', {
  fontSize: '$md',
  fontWeight: 'bold',
  lineHeight: 1.6
})

export const Value = styled('span', {
  fontSize: '$lg',
  textAlign: 'right',
  fontWeight: 'bold',
  lineHeight: 1.6
})