import styled, { css } from "styled-components";
import { Colors, Fonts, sizer } from "../global/styles";

const Footer = ({ className: c }) => {
  return (
    <footer className={c}>
      <HeadingFooterSection>
        <WoopLogoFooter />
        <CopyrightText>© WOOP, 2021</CopyrightText>
      </HeadingFooterSection>
      <InfoList>
        <InfoListTitle>Контакты</InfoListTitle>
        <li>
          <InfoListLink href="tel:#">+7 727 221-23-67</InfoListLink>
        </li>
        <li>
          <InfoListLink href="mailto:ifo@woopapp.com">
            info@woopapp.com
          </InfoListLink>
        </li>
        <li>Almaty, Dostyk avenue, 180, 8 floor</li>
      </InfoList>
      <InfoList>
        <InfoListTitle>Юр. информация</InfoListTitle>
        <li>
          <InfoListLink href="#/">Политика конфиденциальности</InfoListLink>
        </li>
        <li>
          <InfoListLink href="#/">Условия оплаты</InfoListLink>
        </li>
      </InfoList>
    </footer>
  );
};

const HeadingFooterSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

const WoopLogoFooter = styled.div`
  ${sizer(
    css`
      background-image: url("${require("../assets/woop-logo-footer.png")
        .default}");
      background-repeat: no-repeat;
      background-size: contain;
      width: 64px;
      height: 64px;
    `,
    css`
      width: 96px;
      height: 96px;
    `,
    css`
      width: 96px;
      height: 96px;
    `
  )};
`;

const CopyrightText = styled.p`
  ${sizer(
    css`
      size: 15px;
      line-height: 28px;
    `,
    css`
      size: 16px;
      line-height: 24px;
    `,
    css`
      size: 18px;
      line-height: 28px;
    `
  )};

  ${Fonts.FOOTER_WHITE};
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;

  li {
    margin-bottom: 16px;
  }

  ${Fonts.FOOTER_WHITE};
  ${sizer(
    css`
      size: 15px;
      line-height: 28px;
    `,
    css`
      size: 16px;
      line-height: 22px;
    `,
    css`
      size: 18px;
      line-height: 32px;
    `
  )};
`;

const InfoListTitle = styled.p`
  ${Fonts.FOOTER_GRAY};
  ${sizer(
    css`
      size: 16px;
      line-height: 24px;
    `,
    css`
      size: 16px;
      line-height: 24px;
    `,
    css`
      size: 16px;
      line-height: 24px;
    `
  )};

  margin: 0px;
  margin-top: 48px;
  margin-bottom: 24px;
`;

const InfoListLink = styled.a`
  color: ${Colors.WHITE};
  text-decoration: none;

  &:hover {
    color: ${Colors.WHITE};
    text-decoration: underline;
  }
`;

export default styled(Footer)`
  position: absolute;
  margin-top: auto;
  padding: 24px;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${Colors.FOOTER_BLACK};
`;
