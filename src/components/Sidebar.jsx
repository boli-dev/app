import React from "react";
import { Dropdown, Icon, Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Menu vertical>
      <Menu.Item>
        Home
        <Menu.Menu>
          <Menu.Item as={Link} to="/admin" name="admin">
            Dashboard
          </Menu.Item>
          <Menu.Item as={Link} to="/admin/offres" name="offres">
            Offers
          </Menu.Item>
          <Menu.Item as={Link} to="/admin/service" name="service">
            Services
          </Menu.Item>
          <Menu.Item as={Link} to="/admin/ville" name="ville">
            Villes
          </Menu.Item>
          <Menu.Item as={Link} to="/admin/niveauscolaire" name="about">
            Niveaux scolaire
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
