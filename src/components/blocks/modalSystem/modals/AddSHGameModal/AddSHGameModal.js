import React from "react";
import styled from "styled-components";
import { ModalBox } from "../../styles";
import { Title } from "../../../../elements/Title";
import { ButtonWithLoading } from "../../../../elements/Button";

import { useDispatch, useSelector } from "react-redux";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";
import {
  fetchUsers,
  selectUsers,
} from "../../../../../_redux/slices/usersSlice";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { createSHGame } from "../../../../../lib/apiService";
import { closeModal } from "../../../../../_redux/slices/modalSlice";
import { fetchSHGames } from "../../../../../_redux/slices/shGamesSlice";
import { fetchSHProfiles } from "../../../../../_redux/slices/shProfilesSlice";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

export const AddSHGameModal = styled(({ ...props }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [villains, setVillains] = React.useState([]);
  const [liberals, setLiberals] = React.useState([]);
  const [hitler, setHitler] = React.useState({});
  const [state, setState] = React.useState({
    villainsWon: false,
  });
  const { data } = useSelector(selectUsers);
  const usernames = data.map((el) => el.username);

  const handleChange = (event, type = "villains") => {
    if (type === "villains") return setVillains(event.target.value);
    if (type === "liberals") return setLiberals(event.target.value);
    if (type === "hitler") return setHitler(event.target.value);
  };

  const getIds = (arr) =>
    arr.map((el) => data.find((el2) => el2.username === el)._id);

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = `Bearer ${localStorage.getItem("token")}`;
    const dataObj = {
      villains: getIds(villains),
      liberals: getIds(liberals),
      villainsWon: state.villainsWon,
      mainVillain:
        data.find((el2) => el2.username === hitler) &&
        data.find((el2) => el2.username === hitler)._id,
    };

    await createSHGame(dataObj, token);

    await dispatch(fetchSHGames());
    await dispatch(fetchSHProfiles());
    await dispatch(fetchUsers());
    dispatch(closeModal());
  };

  const handleChangeCheck = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <ModalBox {...props}>
      <Title>Add secret hitler game</Title>
      <form action="" onSubmit={onSubmit}>
        <FormControl className={"w100"}>
          <InputLabel id="demo-mutiple-chip-label">Villains</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            className={"w100"}
            value={villains}
            onChange={(e) => handleChange(e, "villains")}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
          >
            {usernames.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={"w100"}>
          <InputLabel id="demo-mutiple-chip-label1">Liberals</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label1"
            id="demo-mutiple-chip1"
            multiple
            className={"w100"}
            value={liberals}
            onChange={(e) => handleChange(e, "liberals")}
            input={<Input id="select-multiple-chip1" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
          >
            {usernames.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={"w100"}>
          <InputLabel id="demo-mutiple-chip-label2">Hitler</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label2"
            id="demo-mutiple-chip2"
            className={"w100"}
            value={hitler}
            onChange={(e) => handleChange(e, "hitler")}
            input={<Input id="select-multiple-chip2" />}
          >
            {usernames.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControlLabel
          className={"w100"}
          control={
            <Checkbox
              checked={state.villainsWon}
              onChange={handleChangeCheck}
              name="villainsWon"
              color="primary"
            />
          }
          label="Villains won"
        />
        <ButtonWithLoading
          variant="contained"
          color="primary"
          fullWidth
          type={"submit"}
          size={"large"}
        >
          Add secret-hitler game
        </ButtonWithLoading>
      </form>
    </ModalBox>
  );
})`
  ${Title} {
    line-height: 1;
    margin-bottom: 1rem;
  }
  form {
    ${ButtonWithLoading} {
      margin-top: 2rem;
    }
  }
  .w100 {
    margin-bottom: 0.5rem;
    width: 100%;
  }
`;
