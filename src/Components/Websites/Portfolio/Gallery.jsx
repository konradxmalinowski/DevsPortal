import { useEffect, useRef, useState } from 'react';
import Modal from '../../Common components/Modal/Modal.jsx';

import image1 from '../../../assets/Gallery/image1.png';
import image2 from '../../../assets/Gallery/image2.png';
import image3 from '../../../assets/Gallery/image3.png';
import image4 from '../../../assets/Gallery/image4.png';
import image5 from '../../../assets/Gallery/image5.png';
import image6 from '../../../assets/Gallery/image6.png';
import arrow from '../../../assets/Gallery/left-arrow.png';
import closeIcon from '../../../assets/Gallery/close.png';

const imagesData = [image1, image2, image3, image4, image5, image6];

const Image = ({
  src,
  alt,
  modalRef,
  setIsOpen,
  currentIndex,
  setModalContent,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onClick={() => {
        setModalContent(imagesData[currentIndex]);
        setIsOpen(true);
        modalRef.current.open();
      }}
      aria-label={`Open image ${currentIndex + 1} in modal`}
      {...props}
    />
  );
};

const Gallery = ({ handleScrollIntoView }) => {
  const modalRef = useRef(null);
  const ref = useRef();
  const [modalContent, setModalContent] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = imagesData.map((src, index) => (
    <Image
      key={index}
      src={src}
      alt={`Gallery image ${index + 1}`}
      modalRef={modalRef}
      setIsOpen={setIsOpen}
      currentIndex={index}
      setModalContent={setModalContent}
    />
  ));

  useEffect(() => {
    if (currentIndex === 6) {
      setCurrentIndex(0);
    }

    if (currentIndex < 0) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);

  return (
    <div
      className="gallery-wrapper wrapper reveal"
      ref={ref}
      aria-label="Gallery Section"
    >
      <section aria-label="Gallery heading and images">
        <h1 aria-label="Gallery heading">Gallery</h1>
        <div className="gallery" aria-label="Gallery images">
          {images}
        </div>
      </section>

      <Modal
        ref={modalRef}
        className="gallery-modal"
        isFormShown={false}
        aria-label="Image modal"
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setIsOpen(false);
            modalRef.current.close();
          }

          if (event.key === 'ArrowLeft') {
            setCurrentIndex((prevIndex) => prevIndex - 1);
            setModalContent(imagesData[currentIndex]);
          }

          if (event.key === 'ArrowRight') {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setModalContent(imagesData[currentIndex]);
          }
        }}
      >
        <div className="gallery-modal-wrapper" aria-label="Modal content">
          <Image
            src={modalContent}
            alt="Modal content"
            className="clicked-image"
          />

          {isOpen && (
            <>
              <button
                className="arrow-left"
                onClick={() => {
                  setCurrentIndex((prevIndex) => prevIndex - 1);
                  setModalContent(imagesData[currentIndex]);
                }}
                aria-label="Previous image"
              >
                <img src={arrow} alt="arrow-left" />
              </button>
              <button
                className="arrow-right"
                onClick={() => {
                  setCurrentIndex((prevIndex) => prevIndex + 1);
                  setModalContent(imagesData[currentIndex]);
                }}
                aria-label="Next image"
              >
                <img src={arrow} alt="arrow-right" />
              </button>
              <button
                className="close-button"
                onClick={() => {
                  setIsOpen(false);
                  modalRef.current.close();
                }}
                aria-label="Close modal"
              >
                <img src={closeIcon} alt="close icon" />
              </button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
