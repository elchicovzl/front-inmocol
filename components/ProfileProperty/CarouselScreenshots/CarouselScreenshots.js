import React, { useState } from "react";
import { Image, Modal } from "semantic-ui-react";
import Slider from "react-slick";
import { map } from "lodash";

const settings = {
  className: "carousel-gallery",
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  swipeToSlider: true,
};

export default function CarouselScreenshots(props) {
  const { gallery } = props;
  const [showModal, setShowModal] = useState(false);
  const [urlImage, setUrlImage] = useState(null);

  const openImage = (url) => {
    setUrlImage(url);
    setShowModal(true);
  };

  return (
    <div>
      {gallery == null && (
        <Image className="mt-10 mb-10" src="/no-image.png" centered />
      )}

      {gallery !== null && (
        <>
          <Slider {...settings}>
            {map(gallery, (picture, index) => (
              <Image
                key={index}
                className="pl-3 pr-3"
                src={picture.attributes.url}
                onClick={() => openImage(picture.attributes.url)}
              />
            ))}
          </Slider>
          <Modal
            open={showModal}
            onClose={() => setShowModal(false)}
            size="large"
          >
            <Image src={urlImage} />
          </Modal>
        </>
      )}
    </div>
  );
}
