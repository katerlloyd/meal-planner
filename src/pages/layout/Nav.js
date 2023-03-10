import { Link } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  text-align: center;
  background-color: gray;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const Nav = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink to="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/meal-plans">Meal Plans</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/recipes">Recipes</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/ingredients">Ingredients</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/shopping-list">Shopping List</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/settings">Settings</NavLink>
      </NavItem>
    </NavList>
  );
};

export default Nav;
