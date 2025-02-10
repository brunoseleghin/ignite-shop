import { styled } from "../../styles";

export const HeaderContainer = styled('header', {
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
      lineHeight: 1.6,
    }
  }
})

export const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})

export const IconContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',

  padding: '12px',
  backgroundColor: '$gray800',
  border: 0,
  borderRadius: 6,
})