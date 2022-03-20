import React, { useState, useEffect } from "react";
import { getPopularPropertiesApi } from "../../api/property";
import { size, map } from "lodash";
import { Loader, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import RealState from "../RealState";

export default function PopularProperties(props) {
    const {} = props;

    const [populars, setPopulars] = useState(null);

    useEffect(() => {
        (async () => {
          const response = await getPopularPropertiesApi();
          if (size(response.data) > 0) {
            setPopulars(response.data);
          } else {
            setPopulars([]);
          }
        })();
      }, []);
  
    return (
      <div className="pt-64 pb-32">
        <h4 className="uppercase">Destacado</h4>
        <div className="mt-5 flex justify-between">
            <h2 className="text-3xl font-bold">Propiedades Destacadas</h2>
            <h4 className="uppercase font-bold">Explorar Todas</h4>
        </div>
        <div className="mt-10">
            {!populars && <Loader active>Cargando propiedades</Loader>}
            {populars && size(populars) === 0 && (
            <div>
                <h3>No hay propiedades</h3>
            </div>
            )}
            {size(populars) > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-6">
                    {map(populars, ({ attributes, id } = popular) => (
                    <RealState key={id} attributes={attributes} />
                    ))}
                </div>
            )}
        </div>
        <div className="mt-20 flex justify-between text-white">
            <div>
                <h4 className="text-3xl">Juan Kusuna</h4>
                <span className="text-lg text-gray-300">Fundador</span>         
            </div>
            <div className="w-3/5 flex">
                <Icon name="quote left" size="large" />
                <p className="text-2xl ml-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>         
            </div>
        </div>
      </div>
    );
  }