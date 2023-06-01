import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

export default function PaginationLink() {
  const router = useRouter();
  const slug = router.pathname;

  const page = parseInt(router.query.page || 1);
  return (
    <Pagination
      page={page}
      count={10}
      variant="outlined"
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          href={`${slug}/${item.page === 1 ? "" : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
}
