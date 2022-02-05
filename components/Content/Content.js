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

  const limitPerPage = 5;
  const page = parseInt(query.pagina);

  useEffect(() => {
    (async () => {
      const response = await getTypeUseApi();
      settypeUSeSelect(response.data || []);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      console.log("type use es ");
      console.log(typeUse);
      const response = await getLastPropertiesApi(limitPerPage, page, typeUse);
      if (size(response.data) > 0) {
        console.log(response.data);
        setProperties(response.data);
        setTotalProperties(response.meta.pagination.total);
      } else {
        setProperties([]);
        setTotalProperties(0);
      }
    })();
  }, [query, typeUse]);

  return (
    <div className="w-full">
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
  );
}
