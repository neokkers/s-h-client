import React, { useEffect } from "react";
import { InfoPage } from "./components/blocks/InfoPage/InfoPage";
import { ModalSystem } from "./components/blocks/modalSystem/ModalSystem";
import { withAuth } from "./_hoc/withAuth";

function App() {
  return (
    <div className="App">
      <InfoPage />
      <ModalSystem />
    </div>
  );
}

export default withAuth(App);
