import React from "react";
import { Image, Icon } from "semantic-ui-react";

export default function OurServices(props) {
    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
            <Image className="mt-10 mb-10" src="/servicios.png" centered />
            <div className="pt-16">
                <h4 className="uppercase">Nuestros Servicios</h4>
                <h2 className="mt-5 text-4xl font-bold w-2/3 mb-5">Comodidad es la Máxima Prioridad para ti</h2>
                <p className="text-lg text-gray-500 mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                <Icon name="plane" /> <span>Estudios topográficos con drone</span>
                </div>
                <div>
                <Icon name="home" /> <span>Avalúos de propiedades</span>
                </div>
                <div>
                <Icon name="newspaper" /> <span>Estudios de títulos</span>
                </div>
                <div>
                <Icon name="area graph" /> <span>Planos y desenglobes</span>
                </div>
                <div>
                <Icon name="warehouse" /> <span>Hipotecas</span>
                </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mb-20">
            <div>
                <h2 className="mt-5 text-4xl font-bold w-2/3 mb-5">Buscas para comprar</h2>
            </div>
            <div className="">
                <h2 className="mt-5 text-4xl font-bold mb-5">Necesitas credito hipotecario</h2>
                <p className="text-lg text-gray-500 mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</p>
                <p className="text-lg text-gray-500 mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</p>
                <p className="text-lg text-gray-500 mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</p>
            </div>
        </div>
    </>
    );
}