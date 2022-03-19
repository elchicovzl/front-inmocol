import React from "react";
import { Icon } from "semantic-ui-react";

export default function BodyProperty(props) {
  const { attributes } = props;
  const { descripcion } = attributes;

  console.log(attributes);
  return (
    <div className="mt-5">
      <h2 className="text-xl font-bold mb-3">Descripcion General</h2>
      <p className="w-5/6">{descripcion}</p>

      <div className="grid grid-cols-3 gap-4 mt-5 w-5/6">
        <div className="border border-slate-400 rounded  lg:border-slate-400 bg-white  p-4 leading-normal">
          <div className="flex items-center">
            <Icon className="text-green-600" name="bed" size="large" />
            <div className="ml-3">
              <p>Habitaciones</p>
              <span className="">3</span>
            </div>
          </div>
        </div>
        <div className="border border-slate-400 rounded  lg:border-slate-400 bg-white  p-4 flex  leading-normal">
          <div className="flex items-center">
            <Icon className="text-green-600" name="shower" size="large" />
            <div className="ml-3">
              <p>Baños</p>
              <span className="">3</span>
            </div>
          </div>
        </div>
        <div className="border border-slate-400 rounded  lg:border-slate-400 bg-white  p-4 flex  leading-normal">
          <div className="flex items-center">
            <Icon className="text-green-600" name="cube" size="large" />
            <div className="ml-3">
              <p>Area</p>
              <span className="">100m²</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
