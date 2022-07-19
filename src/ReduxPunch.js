import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AlertMessage from "./components/common/AlertMessage";
import EmptyHome from "./components/common/EmptyHome";
import Loading from "./components/common/Loading";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { useKeycloak } from "@react-keycloak/web";
import { Box } from "@mui/system";

const ReduxPunch = () => {
  const { keycloak, initialized } = useKeycloak();

  const redirectComponent = () => {
    if (initialized && !keycloak.authenticated) {
      return <Navigate to="/" />;
    }
    return "";
  };

  return (
    <Box>
      <BrowserRouter>
      <Header />
      <Loading />
      <AlertMessage />
      {/* {redirectComponent()} */}
        <Routes>
          <Route path="/" element={<EmptyHome />} />
        </Routes>
      <Footer />
      </BrowserRouter>
      </Box>
  );
};

export default ReduxPunch;
