import React from "react";
import { InfoPage } from "./components/blocks/InfoPage/InfoPage";
import { ModalSystem } from "./components/blocks/modalSystem/ModalSystem";
import { withAuth } from "./_hoc/withAuth";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <InfoPage />
        <ModalSystem />
      </div>
    </BrowserRouter>
  );
}

export default withAuth(App);
