import React from "react";
import { Icon } from "semantic-ui-react";
import Link from "next/link";

export default function RealState(props) {
  const { attributes } = props;

  const urlForImage = (imagen, type) => {
    const { formats } = imagen.data.attributes;

    return formats[type].url;
  };

  const getTipoUsoField = (typeUse, field) => {
    return typeUse.data.attributes[field];
  };

  return (
    <Link href={`/propiedades/${attributes.url}`}>
      <a>
        <div className="border rounded-lg cursor-pointer group overflow-hidden">
          <img
            className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
            src={urlForImage(attributes.imagen, "small")}
            alt=""
          />
          <div className="flex justify-between p-5 bg-white">
            <div>
              <p className="text-lg font-bold w-full">
                Desde ${attributes.precio.toLocaleString()} cop
              </p>
              <p className="text-sm font-bold text-teal-700 w-full">
                {attributes.area}m²{"  "}x{"  "} {attributes.habitaciones}
                Hab <Icon name="bed" /> {attributes.sanitarios}Ba{" "}
                <Icon name="shower" />
              </p>

              <p className="text-sm font-bold text-teal-700 w-full">
                {attributes.direccion}
              </p>
              <hr className="mt-2 mb-2" />
              <p className="text-sm font-bold text-teal-700">
                {attributes.titulo}
              </p>
            </div>
            <div>
              <h3 className="text-white text-xs bg-teal-600 px-4 py-1 rounded-full">
                {getTipoUsoField(attributes.tipo_uso, "titulo")}
              </h3>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
