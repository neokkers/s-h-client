import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ModalBox } from "../../styles";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import Alert from "@material-ui/lab/Alert";
import { Title } from "../../../../elements/Title";
import { ButtonWithLoading } from "../../../../elements/Button";

import { useDispatch, useSelector } from "react-redux";
import {
  authInterface,
  loginUserThunk,
  selectUser,
  selectUserError,
  selectUserLoading,
} from "../../../../../_redux/slices/userSlice";
import { login } from "../../../../../lib/apiService";
import { selectWerewolfProfiles } from "../../../../../_redux/slices/werewolfProfilesSlice";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";
import { selectUsers } from "../../../../../_redux/slices/usersSlice";

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const AddWerewolfGameModal = styled(({ ...props }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [personName1, setPersonName1] = React.useState([]);
  const { data } = useSelector(selectUsers);
  const usernames = data.map((el) => el.username);

  const handleChange = (event, type = 1) => {
    type === 1
      ? setPersonName(event.target.value)
      : setPersonName1(event.target.value);
  };

  const handleChangeMultiple = (event, type = 1) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    type === 1 ? setPersonName(value) : setPersonName1(value);
  };
  // const dispatch = useDispatch();
  // const { data } = useSelector(selectWerewolfProfiles);
  //
  const { register, errors, watch, handleSubmit } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  //
  const onSubmit = ({ username, password }, e) => {
    // dispatch(authInterface(login, { username, password }));
  };
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  return (
    <ModalBox {...props}>
      <Title>Add werewolf game</Title>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <FormControl className={"w100"}>
          <InputLabel id="demo-mutiple-chip-label">Werewolves</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            className={"w100"}
            value={personName}
            onChange={(e) => handleChange(e, 1)}
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
          <InputLabel id="demo-mutiple-chip-label1">Villagers</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label1"
            id="demo-mutiple-chip1"
            multiple
            className={"w100"}
            value={personName1}
            onChange={(e) => handleChange(e, 2)}
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
      </form>
    </ModalBox>
  );
})`
  ${Title} {
    line-height: 1;
    //text-align: center;
  }
  form {
    .MuiFormControl-root {
      margin-top: 1rem;
      &:first-child {
        margin-top: 2rem;
      }
    }
    ${ButtonWithLoading} {
      margin-top: 2rem;
    }
  }
  .w100 {
    width: 100%;
  }
`;
