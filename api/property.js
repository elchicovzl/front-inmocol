import { BASE_PATH } from "../utils/constants";
import { size, map } from "lodash";

export async function getLastPropertiesApi(limit, page, typeUses) {
  try {
    const populate = `populate=*`;
    const sortItem = "sort[0]=createdAt:desc";
    const pageQ = `pagination[page]=${isNaN(page) ? 1 : page}`;
    const pageSize = `pagination[pageSize]=${limit}`;

    const filters = [];

    if (size(typeUses) > 0) {
      map(typeUses, ({ value } = typeUse, index) => {
        filters.push(`filters[$or][${index}][tipo_uso][url][$eq]=${value}`);
      });
    }

    const url = `${BASE_PATH}/api/inmuebles?${sortItem}&${populate}&${pageQ}&${pageSize}&${filters.join(
      "&"
    )}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getPropertiesByTypeUSe(typeUses, limit, page) {
  try {
    const populate = `populate=*`;
    const sortItem = "sort[0]=createdAt:desc";
    const pageQ = `pagination[page]=${isNaN(page) ? 1 : page}`;
    const pageSize = `pagination[pageSize]=${limit}`;
    const filters = [];

    if (size(typeUses) > 0) {
      map(typeUses, ({ value } = typeUse, index) => {
        filters.push(`filters[$or][${index}][tipo_uso][url][$eq]=${value}`);
      });
    }

    const url = `${BASE_PATH}/api/inmuebles?${filters.join(
      "&"
    )}&${sortItem}&${populate}&${pageQ}&${pageSize}`;

    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getPropertyByQuery(query) {
  try {
    const populate = `populate=*`;
    const filters = [];
    filters.push(`filters[$or][0][titulo][$contains]=${query}`);
    filters.push(`filters[$or][1][direccion][$contains]=${query}`);

    const url = `${BASE_PATH}/api/inmuebles?${filters.join("&")}&${populate}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getPropertyByUrl(path) {
  try {
    const url = `${BASE_PATH}/api/inmuebles/${path}?populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getPopularPropertiesApi() {
  try {
    const url = `${BASE_PATH}/api/inmuebles?&filters[destacado]=true&populate=*&pagination[page]=1&pagination[pageSize]=3&sort[0]=createdAt:desc`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
