import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Box, Image, Text } from "@chakra-ui/react";

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
  color: "white",
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
  console.log(state.name)

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
    state.isAuth
      ? ""
      : {
          to: "/signup",
          title: "SIGNUP",
        },
  ];

  return (
    <Box
      style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        backgroundColor: "teal",
        padding: "20px",
      }}
    >
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
      {state.name ?
      <>
       <Image w="30px" h="30px" borderRadius="50%" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user image"/>
      <Text fontsize="xl" color={"yellow"} >HI {state.name?.toUpperCase()}</Text> 
      </>
        : "" 
      }
    </Box>
  );
};
