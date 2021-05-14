import styled, { css } from "styled-components";

import menu from "./assets/burger.svg";
import Footer from "./components/footer";
import { sizer } from "./global/styles";

function App({ className: c }) {
  return (
    <div className={c}>
      <Header>
        <WoopLogo />
        <img src={menu} alt="Menu" />
      </Header>
      <Footer />
    </div>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
`;

const WoopLogo = styled.div`
  ${sizer(
    css`
      background-image: url("${require("./assets/woop-logo.png").default}");
      background-repeat: no-repeat;
      background-size: contain;
      width: 52px;
      height: 52px;
    `,
    css`
      width: 64px;
      height: 64px;
    `,
    css`
      width: 88px;
      height: 88px;
    `
  )};
`;

export default styled(App)``;
