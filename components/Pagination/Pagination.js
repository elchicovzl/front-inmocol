import React from "react";
import { Pagination as PaginationSU } from "semantic-ui-react";
import { useRouter } from "next/router";
import queryString from "query-string";

export default function Pagination(props) {
  const { total, page, limitPerPage } = props;
  const totalPages = Math.ceil(total / limitPerPage);
  const router = useRouter();
  const urlParse = queryString.parseUrl(router.asPath);

  const goToPage = (newPage) => {
    urlParse.query.pagina = newPage;
    const url = queryString.stringifyUrl(urlParse);
    router.push(url);
  };

  return (
    <div className="float-right">
      <PaginationSU
        defaultActivePage={page}
        totalPages={totalPages ? totalPages : 1}
        firstItem={null}
        lastItem={null}
        onPageChange={(_, data) => goToPage(data.activePage)}
        boundaryRange={0}
        siblingRange={1}
        ellipsisItem={null}
      />
    </div>
  );
}
