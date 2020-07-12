import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../_redux/slices/modalSlice";
import { logout, selectUser } from "../../_redux/slices/userSlice";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import BlurOnIcon from "@material-ui/icons/BlurOn";

export const UserWidget = styled(({ ...props }) => {
  const dispatch = useDispatch();
  const {
    auth,
    userData: { username },
  } = useSelector(selectUser);

  const noAuthView = (
    <div className={"no-auth"}>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => dispatch(openModal("registerModal"))}
      >
        Sign up
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(openModal("loginModal"))}
      >
        Sign in
      </Button>
    </div>
  );

  const authView = (
    <div className={"auth-view"}>
      {username}
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <IconButton
              variant="contained"
              color="primary"
              {...bindTrigger(popupState)}
            >
              <MenuIcon />
            </IconButton>
            {/*<Button>Open Menu</Button>*/}
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>Profile</MenuItem>
              <MenuItem
                onClick={() => {
                  popupState.close && dispatch(logout());
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </div>
  );

  return <div {...props}>{!auth ? noAuthView : authView}</div>;
})`
  .no-auth {
    display: flex;
    align-items: center;
    > button {
      flex-shrink: 0;
      &:first-child {
        margin-right: 0.5rem;
      }
    }
  }
  > button {
    &:first-child {
      margin-right: 0.5rem;
    }
  }
  .auth-view {
    display: flex;
    align-items: center;
  }
`;
