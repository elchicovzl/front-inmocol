import React from "react";
import Slider from "react-slick";
import { Image, Icon } from "semantic-ui-react";

const settings = {
    className: "testimonial-gallery",
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    swipeToSlider: true,
  };

export default function Testimonial(props) {
    const slider = React.useRef(null);
    return(
        <>
            <div className="pt-10 text-white pb-20 flex justify-between">
                <div>
                    <h4 className="uppercase">Testimonios</h4>
                    <h2 className="mt-5 text-4xl font-bold w-2/3 mb-5 leading-10">Lo que Nuestros Clientes Dicen Acerca de Nosotros</h2>
                </div>
                <div className="mb-5 flex justify-end">
                    <button className="text-white" onClick={() => slider?.current?.slickPrev()}><Icon name="arrow left" size="large" /></button>
                    <button className="text-white" onClick={() => slider?.current?.slickNext()}><Icon name="arrow right" size="large" /></button>
                </div>
            </div>
            
            
            <Slider ref={slider} {...settings}>
                <div className="card-image-text">
                    <Image
                        key="1"
                        className="h-64 pl-3 pr-14"
                        src="/avatar-men.jpg"
                    />
                    <div>
                        <h2 className="text-2xl text-white">Jose Kusuna</h2>
                        <p className="text-lg text-gray-500 w-4/5 mt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                    </div>
                </div>
                <div className="card-image-text">
                    <Image
                        key="2"
                        className="h-64 pl-3 pr-14"
                        src="/avatar-woman.jpg"
                    />
                    <div>
                        <h2 className="text-2xl text-white">Jose Kusuna</h2>
                        <p className="text-lg text-gray-500 w-4/5 mt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                    </div>
                </div>
                <div className="card-image-text">
                    <Image
                        key="3"
                        className="h-64 pl-3 pr-14"
                        src="/avatar-woman.jpg"
                    />
                    <div>
                        <h2 className="text-2xl text-white">Jose Kusuna</h2>
                        <p className="text-lg text-gray-500 w-4/5 mt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                    </div>
                </div>
            </Slider>
            
        </>
    )
}