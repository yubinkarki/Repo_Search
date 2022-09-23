import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Pagination from "../pages/Pagination";
import ResultDetails from "../pages/ResultDetails";
import SearchResults from "../pages/SearchResults";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/searchresults" element={<SearchResults />} />
      <Route path="/searchresults/details" element={<ResultDetails />} />
      <Route path="/page" element={<Pagination />} />
    </Routes>
  );
};

export default AppRoutes;
