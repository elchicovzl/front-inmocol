import React from "react";
import Breadcrumbs from "nextjs-breadcrumbs";

export default function HeaderProperty(props) {
  const { property } = props;
  const { titulo, direccion } = property.attributes;
  console.log(property);
  return (
    <div className="max-w-screen-xl mx-auto pt-24 mb-5">
      <Breadcrumbs
        useDefaultStyle={false}
        rootLabel="Inicio"
        inactiveItemClassName="capitalize text-blue-400 after:content-['__/']"
        activeItemClassName="capitalize text-gray-400"
        listClassName="flex"
      />
      <h1 className="text-3xl font-bold mb-4">{titulo}</h1>
      <h3 className="text-gray-500 text-md">{direccion}</h3>
    </div>
  );
}
