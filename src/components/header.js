import styled, { css } from "styled-components";
import { sizer } from "../global/styles";

const Header = ({ className: c }) => {
  return (
    <header className={c}>
      <WoopLogo />
      <img src={require("../assets/burger.svg").default} alt="Menu" />
    </header>
  );
};

const WoopLogo = styled.div`
  ${sizer(
    css`
      background-image: url("${require("../assets/woop-logo.png").default}");
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

export default styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
`;
