import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const links = [
  {
    to: "/",
    title: "HOME",
  },
  {
    to: "/login",
    title: "LOGIN",
  },
  {
    to: "/signup",
    title: "SIGNUP",
  },
];

// NavLinks
const baseStyle = {
  color: "black",
  textDecoration: "none",
};

const activeStyle = {
  color: "red",
  textDecoration: "none",
};

export const Navbar = () => {
  const auth = useContext(AuthContext);

  const { state } = useContext(AuthContext);

  console.log(state.isAuth);

  const links = [
    {
      to: "/",
      title: "HOME",
    },
    {
      to: "/about",
      title: "ABOUT",
    },
    {
      to: "/contact",
      title: "CONTACT",
    },
    {
      to: "/login",
      title: state.isAuth ? "LOGOUT" : "LOGIN",
    },
    {
      to: "/signup",
      title: "SIGNUP",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
      {links.map((item) => (
        // activeStyle, or activeClass
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={item.to}
          key={item.to}
          onClick={() => (item.title === "LOGOUT" ? auth.handleLogout() : "")}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};
