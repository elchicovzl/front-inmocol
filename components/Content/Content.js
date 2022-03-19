import React, { useState, useEffect } from "react";
import { getLastPropertiesApi } from "../../api/property";
import { getTypeUseApi } from "../../api/typeUse";
import { SelectTypeUse } from "./SelectTypeUse";
import { size } from "lodash";
import { Loader } from "semantic-ui-react";
import { useRouter } from "next/router";
import ListProperties from "../ListProperties/ListProperties";
import Pagination from "../Pagination";

export default function Content(props) {
  const { query } = useRouter();
  const [properties, setProperties] = useState(null);
  const [totalProperties, setTotalProperties] = useState(0);
  const [typeUse, setTypeUse] = useState([]);
  const [typeUSeSelect, settypeUSeSelect] = useState([]);

  const limitPerPage = 10;
  const page = parseInt(query.pagina);

  useEffect(() => {
    (async () => {
      const response = await getTypeUseApi();
      settypeUSeSelect(response.data || []);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await getLastPropertiesApi(limitPerPage, page, typeUse);
      if (size(response.data) > 0) {
        setProperties(response.data);
        setTotalProperties(response.meta.pagination.total);
      } else {
        setProperties([]);
        setTotalProperties(0);
      }
    })();
  }, [query, typeUse]);

  return (
    <div className="">
      <div className="relative max-w-screen-xl mx-auto  first-letter">
        <div className="absolute  w-1/2 text-white z-30 top-52">
          <h2 className="text-6xl text-white uppercase font-bold">
            Encuentra el Inmueble a tu gusto.
          </h2>
          <p className="mt-5 text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters,
          </p>
          <h3 className="text-white w-40 text-center mt-5 bg-green-600 px-4 py-2 hover:bg-green-900 rounded-full cursor-pointer">
            Registrate Ya
          </h3>
        </div>
      </div>
      <section className="bg-fixed hero"></section>

      <div className="max-w-screen-xl mx-auto">
        <SelectTypeUse typeUSeSelect={typeUSeSelect} setTypeUse={setTypeUse} />
        {!properties && <Loader active>Cargando propiedades</Loader>}
        {properties && size(properties) === 0 && (
          <div>
            <h3>No hay juegos</h3>
          </div>
        )}
        {totalProperties > 0 && <ListProperties properties={properties} />}

        <Pagination
          total={totalProperties}
          page={query.pagina ? parseInt(query.pagina) : 1}
          limitPerPage={limitPerPage}
        />
      </div>
    </div>
  );
}
