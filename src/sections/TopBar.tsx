import { FC } from "react";
import styled from "styled-components";


const MenuBar = styled.div`
height: 70px;
position: fixed;
top: 0;
background-color: var(--blue);
color: var(--pink);
display: flex;
align-items: center;
width: 100vw;
padding: 20px;
z-index: 2;
font-size: 2em;
justify-content: space-between;
`;

const NavBranding = styled.div`
font-family: "skinz";
`;

const NavButtons = styled.div`
display: flex;
justify-content: flex-end;
width: 50vw;
`;

const NavButton = styled.div`
/* border: 1px solid var(--pink); */
font-family: var(--bs-font-sans-serif);
cursor: pointer;
:hover {
    background-color: var(--light-blue);
}
border-radius: 5px;
padding: 5px;
margin: 5px;
`;

export const TopBar: FC<{ name: string }> = ({ name }) => {
return (
  <MenuBar>
    <NavBranding>{name}</NavBranding>
    <NavButtons>
      <NavButton>about</NavButton>
      <NavButton>docs</NavButton>
    </NavButtons>
  </MenuBar>
);
};
