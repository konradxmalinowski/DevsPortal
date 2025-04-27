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
}) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onClick={() => {
        setIsOpen(true);
        setModalContent(imagesData[currentIndex]);
        modalRef.current.open();
      }}
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
      isOpen={isOpen}
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
    <div className="gallery-wrapper wrapper reveal" ref={ref}>
      <section>
        <h1>Gallery</h1>
        <div className="gallery">{images}</div>
      </section>

      <Modal
        ref={modalRef}
        className="gallery-modal"
        isFormShown={false}
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
        <div className="gallery-modal-wrapper">
          {<Image src={modalContent} alt="Modal content" />}
          {isOpen && (
            <>
              <div
                className="arrow-left"
                onClick={() => {
                  setCurrentIndex((prevIndex) => prevIndex - 1);
                  setModalContent(imagesData[currentIndex]);
                }}
              >
                <img src={arrow} alt="arrow-left" />
              </div>
              <div
                className="arrow-right"
                onClick={() => {
                  setCurrentIndex((prevIndex) => prevIndex + 1);
                  setModalContent(imagesData[currentIndex]);
                }}
              >
                <img src={arrow} alt="arrow-right" />
              </div>

              <div
                className="close-button"
                onClick={() => {
                  setIsOpen(false);
                  modalRef.current.close();
                }}
              >
                <img src={closeIcon} alt="close icon" />
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
