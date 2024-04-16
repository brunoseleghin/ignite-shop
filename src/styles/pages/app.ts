import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '0 0 0 2rem'
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto'
})

export const IconContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',

  padding: '12px',
  backgroundColor: '$gray800',
  border: 0,
  borderRadius: 6,
  
  cursor: 'pointer',
})