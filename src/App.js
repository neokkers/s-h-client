import React from "react";
import { Header } from "./components/blocks/Header";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Sheet } from "./components/elements/Sheet";
import { Container } from "./components/elements/Container";
import { PlayerList } from "./components/blocks/PlayerList/PlayerList";
import { InfoPage } from "./components/blocks/InfoPage/InfoPage";
import { MuiTheme } from "./components/utils/MuiTheme";
import { ModalSystem } from "./components/blocks/modalSystem/ModalSystem";

function App() {
  return (
    <div className="App">
      <InfoPage />
      <ModalSystem />
    </div>
  );
}

export default App;
