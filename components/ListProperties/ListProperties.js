import React, { Component } from "react";
import { map } from "lodash";
import RealState from "../RealState";

export default function ListProperties(props) {
  const { properties } = props;

  console.log(properties);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6">
        {map(properties, ({ attributes, id } = property) => (
          <RealState key={id} attributes={attributes} />
        ))}
      </div>
    </>
  );
}
