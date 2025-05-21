import React from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import slideData from '../data/slideData.js';

const EmblaCarousel = (props) => {
  const {options } = props
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
  })


  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slideData.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <p className="embla__slide__title">{slide.title}</p>
              <hr className = "embla_hr" size="1"></hr>
              <p className = "embla__slide__content">{slide.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
