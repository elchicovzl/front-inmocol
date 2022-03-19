import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export function SelectTypeUse(props) {
  const { setTypeUse, typeUSeSelect } = props;
  const animatedComponents = makeAnimated();
  const options = [];

  typeUSeSelect.map((item) => {
    const { attributes } = item;
    options.push({ value: attributes.titulo, label: attributes.titulo });
  });

  const change = (values) => {
    (async () => {
      setTypeUse(values);
    })();
  };

  return (
    <div className="w-1/4">
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
        onChange={change}
        placeholder="Seleccione tipo de uso"
      />
    </div>
  );
}
