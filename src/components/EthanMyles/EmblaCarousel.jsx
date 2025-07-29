import styles from './emblaHorizontal.module.css'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons.jsx'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
  const {options, slides } = props
  
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
    <section className={`embla ${styles.embla}`}>
      <div className={`embla__viewport`} ref={emblaRef}>
        <div className={`embla__container ${styles.embla__container}`}>
          {slides.map((slide, index) => (
            <div className={`embla__slide ${styles.embla__slide}`} key={index}>
              <p className={`embla__slide__title ${styles.embla__slide__title}`}>{slide.title}</p>
              <p className = {`embla__slide__content ${styles.embla__slide__content}`}>{slide.content}</p>
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
