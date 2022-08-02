import React from "react";
import "./Nav.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../../CustomHooks/useScrollPosition";
import { RiArrowDownSLine } from "react-icons/ri";
import { Drawer } from "./Drawer";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

export const Nav = () => {
  const scrollPosition = useScrollPosition();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      className={
        scrollPosition > 10 ? "nav-bar-complete-scroll" : "nav-bar-complete"
      }
    >
      <div className="container-nav">
        <div className="container-elements-nav">
          <img
            className={scrollPosition > 10 ? "logo-nav-scroll" : "logo-nav"}
            src={logo}
            alt="horvindul"
          />
          <div className="container-titles-nav">
            <Link className="hover-underline-animation" to="/">
              Nosotros
            </Link>
            <Link
              className="hover-underline-animation products-nav"
              to={"/"}
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Productos <RiArrowDownSLine />{" "}
       
            </Link>
            <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                disableScrollLock={true}
              >
                <MenuItem onClick={handleClose}>Pickles</MenuItem>
                <MenuItem onClick={handleClose}>Mermeladas</MenuItem>
                <MenuItem onClick={handleClose}>Salsa</MenuItem>
                <MenuItem onClick={handleClose}>Aceitunas</MenuItem>
                <MenuItem onClick={handleClose}>Salsa</MenuItem>
                <MenuItem onClick={handleClose}>Ajies</MenuItem>
                <MenuItem onClick={handleClose}>Pimiento Morrón</MenuItem>
                <MenuItem onClick={handleClose}>Coliflor</MenuItem>
              </Menu>
            <Link className="hover-underline-animation" to={"/contact"}>
              Contacto
            </Link>
          </div>
          <div className="drawer-mobile-nav">
            <Drawer />
          </div>
        </div>
      </div>
    </div>
  );
};
