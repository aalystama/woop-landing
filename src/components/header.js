import { useState } from "react";
import styled, { css } from "styled-components";
import { Colors, sizer } from "../global/styles";

const Header = () => {
  const [isModalShown, toggleModal] = useState(false);

  return (
    <InnerHeader isModalShown={isModalShown}>
      <NavBar isModalShown={isModalShown}>
        <WoopLogo href="/" />

        <MenuButton
          isModalShown={isModalShown}
          onClick={() => toggleModal((prev) => !prev)}
        />

        <NavBarList isModalShown={isModalShown}>
          <NavBarItem>
            <a href="/">Item 1</a>
          </NavBarItem>
          <NavBarItem>
            <a href="/">Item 2</a>
          </NavBarItem>
          <NavBarItem>
            <a href="/">Item 3</a>
          </NavBarItem>
          <NavBarItem>
            <a href="/">Item 4</a>
          </NavBarItem>
        </NavBarList>
      </NavBar>
    </InnerHeader>
  );
};

const WoopLogo = styled.div`
  background-image: url("${require("../assets/woop-logo.png").default}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${sizer(
    css`
      padding: 26px;
      margin: 10px 16px;
    `,
    css`
      padding: 32px;
      margin: 16px 64px;
    `,
    css`
      padding: 44px;
      margin: 12px 140px;
    `
  )};
`;

const MenuButton = styled.button`
  ${sizer(
    css`
      background-image: ${(props) =>
        props.isModalShown
          ? `url(${require("../assets/close.svg").default})`
          : `url(${require("../assets/burger.svg").default})`};
      background-size: contain;
      background-repeat: no-repeat;
      background-color: transparent;
      background-position: center;
      border: none;
      padding: 8px 10px;
      margin: 10px 16px;
    `,
    css`
      display: none;
    `
  )}
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.isModalShown &&
    css`
      flex-wrap: wrap;
    `}
`;

const NavBarList = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;

  ${sizer(
    css`
      display: ${(props) => (props.isModalShown ? "block" : "none")};
      flex-basis: 100%;
      text-align: center;
    `,
    css`
      display: flex;
      justify-content: flex-end;
      margin: 16px 64px;
    `
  )};
`;

const NavBarItem = styled.li`
  ${sizer(
    css`
      a {
        color: ${Colors.BLACK};
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
      padding: 12px;
    `,
    css`
      padding: 0px;
      &:not(:last-child) {
        margin-right: 32px;
      }
    `
  )}
`;

const InnerHeader = styled.header`
  ${(props) =>
    props.isModalShown
      ? css`
          position: absolute;
          height: 100vh;
          width: 100vw;
          background: rgba(255, 255, 255, 0.32);
          backdrop-filter: blur(248px);
        `
      : css``}
`;

export default Header;
