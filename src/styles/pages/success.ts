import { styled } from '..';

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100'
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    lineHeight: 1.4,
    marginTop: '2rem',
  },

  a: {
    display: 'block',
    marginTop: '5rem',

    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$green300',
    textDecoration: 'none',

    '&:hover': {
      color: '$green500',
    }
  },

})

export const ImagesContainer = styled('div', {

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  div: {
    width: '100%',
    maxWidth: 130,
    height: 130,
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: '1000px',
    padding: '0.25rem',
    boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',

    marginBottom: '3rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
      objectFit: 'cover',
    },

    '&:not(:first-child)': {
      marginLeft: '-50px'
    }
  }
})