import { Box, Pagination } from "@mui/material";
import React from "react";

export default function AppPagination(props) {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      sx={{ marginTop: "15px" }}
    >
      <Pagination
        count={props.count}
        onChange={props.handlePageClick}
        variant="outlined"
        siblingCount={0} // Adjacent page numbers.
        boundaryCount={1} // First and last page numbers.
      />
    </Box>
  );
}
