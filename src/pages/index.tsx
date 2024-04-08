import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import shirtOne from '../assets/1.png'
import shirtTwo from '../assets/2.png'
import shirtThree from '../assets/3.png'

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,

    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirtOne} width={570} height={480} alt="" />
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirtTwo} width={570} height={480} alt="" />
        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      
      <Product className="keen-slider__slide">
        <Image src={shirtThree} width={570} height={480} alt="" />
        <footer>
          <strong>Camiseta 3</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirtThree} width={570} height={480} alt="" />
        <footer>
          <strong>Camiseta 3</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
