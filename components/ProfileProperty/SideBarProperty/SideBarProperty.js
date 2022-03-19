import React from "react";

export default function SideBarProperty(props) {
  const { property } = props;
  console.log(property);
  return (
    <div className="mt-5">
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-10">
        <p className="text-sm text-slate-400">Precio total (COP)</p>
        <p className="text-3xl font-bold mb-5">$ 530.000.000</p>

        <p className="font-bold">¿Te interesó este inmueble?</p>
        <div className="text-center">
          <button className="mt-5 w-5/6 center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Telefono
          </button>
          <button className="mt-5 w-5/6 center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Contactar por Whatsapp
          </button>
          <button className="mt-5 w-5/6 center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Quiero que me contacten
          </button>
        </div>
      </div>
    </div>
  );
}
