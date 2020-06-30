import React, { useContext } from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import authContext from "../context/auth/authContext";

const Toolbar = () => {
  const {
    logOut,
    state: { user },
  } = useContext(authContext);

  return (
    <Menu>
      <Menu.Item as={Link} to="/" header>
        Gestion RH
      </Menu.Item>
      <Menu.Item name="Profiel" as={Link} to="/profiel" />

      <Menu.Menu position="right">
        {user && user.role === "ADMINE" ? (
          <React.Fragment>
            <Menu.Item>
              <Button as={Link} to="/admin">
                Dashboard
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button onClick={logOut}>LogeOut</Button>
            </Menu.Item>
          </React.Fragment>
        ) : (
          <Menu.Item>
            <Button as={Link} to="/login">
              Loge In
            </Button>
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default Toolbar;
