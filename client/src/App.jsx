import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Website from "./pages/Website";
import Layout from "./components/layout/Layout";
import Properties from "./pages/Properties/Properties";

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback = {<div>Loading...</div>}>
      <Routes>
        <Route element = {<Layout />}>
        <Route path="/" element={<Website />} />
        <Route path = "/properties" element={<Properties/>}/>
        </Route>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
