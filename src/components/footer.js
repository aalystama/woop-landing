import styled, { css } from "styled-components";
import { Colors, Fonts, sizer } from "../global/styles";

const Footer = ({ className: c }) => {
  return (
    <footer className={c}>
      <HeadingSection>
        <WoopLogo />
        <Copyright>© WOOP, 2021</Copyright>
      </HeadingSection>
      <LinksSection>
        <LinksSectionTitle>Контакты</LinksSectionTitle>
        <LinksList>
          <Link>+7 727 221-23-67</Link>
          <Link>Info@woopapp.com</Link>
          <Link>Almaty, Dostyk avenue, 180, 8 floor</Link>
        </LinksList>
      </LinksSection>
      <LinksSection>
        <LinksSectionTitle>Юр. информация</LinksSectionTitle>
        <LinksList>
          <Link>Политика конфиденциальности</Link>
          <Link>Условия оплаты</Link>
        </LinksList>
      </LinksSection>
    </footer>
  );
};

const HeadingSection = styled.section`
  ${sizer(
    css`
      display: flex;
      justify-content: space-between;
    `,
    css`
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    `,
    css``
  )}
`;

const WoopLogo = styled.a`
  background-image: url("${require("../assets/woop-logo-footer.png").default}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${sizer(
    css`
      padding: 32px;
      margin: 24px;
    `,
    css`
      padding: 48px;
      margin: 48px 0px;
    `,
    css``
  )}
`;

const Copyright = styled.p`
  ${Fonts.FOOTER_WHITE}

  ${sizer(
    css`
      font-size: 15px;
      line-height: 28px;
      margin: 24px;
      align-self: center;
    `,
    css`
      font-size: 16px;
      line-height: 24px;
      margin: 0px;
      align-self: flex-start;
    `
  )}
`;

const LinksSection = styled.section`
  ${sizer(
    css`
      margin: 0px 24px;
    `,
    css`
      margin: 0px;
    `,
    css``
  )}
`;

const LinksSectionTitle = styled.p`
  ${Fonts.FOOTER_GRAY}

  ${sizer(css`
    font-size: 16px;
    line-height: 28px;
    margin: 24px 0px;
  `)}
`;

const LinksList = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`;

const Link = styled.li`
  ${Fonts.FOOTER_WHITE}
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${sizer(
    css`
      font-size: 15px;
      line-height: 28px;
      &:not(:last-child) {
        margin: 16px 0px;
      }
    `,
    css`
      &:not(:last-child) {
        margin: 24px 0px;
      }
    `
  )}
`;

export default styled(Footer)`
  ${sizer(
    css`
      background-color: ${Colors.FOOTER_BLACK};
    `,
    css`
      display: flex;
      justify-content: space-between;
      padding: 0px 64px;
    `,
    css`
      padding: 0px 140px;
    `
  )}
`;
