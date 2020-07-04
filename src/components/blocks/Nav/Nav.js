import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../_redux/slices/userSlice";
export default function Nav() {
  const history = useHistory();
  const { nav } = useSelector(selectUser);
  const idxMap = {
    "secret-hitler": 0,
    werewolves: 1,
  };

  return (
    <Tabs
      value={idxMap[nav]}
      indicatorColor="primary"
      textColor="primary"
      aria-label="disabled tabs example"
    >
      <Tab
        label="Secret Hitler"
        onClick={() => history.push("/secret-hitler")}
      />
      <Tab label="Werewolves" onClick={() => history.push("/werewolves")} />
    </Tabs>
  );
}
