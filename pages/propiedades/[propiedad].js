import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BasicLayout from "../../layouts/BasicLayout/BasicLayout";
import { getPropertyByUrl } from "../../api/property";
import HeaderProperty from "../../components/ProfileProperty/HeaderProperty/HeaderProperty";
import CarouselScreenshots from "../../components/ProfileProperty/CarouselScreenshots";
import BodyProperty from "../../components/ProfileProperty/BodyProperty";
import SideBarProperty from "../../components/ProfileProperty/SideBarProperty";

export default function Propiedad() {
  const [property, setProperty] = useState(null);
  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      const response = await getPropertyByUrl(query.propiedad);
      setProperty(response.data);
    })();
  }, [query]);

  if (!property) return null;

  const { attributes } = property;

  return (
    <BasicLayout>
      <HeaderProperty property={property} />
      <CarouselScreenshots gallery={property.attributes.galeria.data} />
      <section className="max-w-screen-xl mx-auto flex">
        <div className="w-full">
          <BodyProperty attributes={attributes} />
        </div>
        <div className="w-2/5 h-screen">
          <SideBarProperty attributes={attributes} />
        </div>
      </section>
    </BasicLayout>
  );
}
