import React from "react";
import { InfoPage } from "./components/blocks/InfoPage/InfoPage";
import { ModalSystem } from "./components/blocks/modalSystem/ModalSystem";
import { withAuth } from "./_hoc/withAuth";
import { BrowserRouter } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiBase, selectApiBase } from "./_redux/slices/apiSlice";

function App() {
  const apiBase = useSelector(selectApiBase);
  const dispatch = useDispatch();
  dispatch(fetchApiBase());

  if (!apiBase)
    return (
      <BrowserRouter>
        <div className="App">
          <LinearProgress />
        </div>
      </BrowserRouter>
    );
  return (
    <BrowserRouter>
      <div className="App">
        {}
        <InfoPage />
        <ModalSystem />
      </div>
    </BrowserRouter>
  );
}

export default withAuth(App);
