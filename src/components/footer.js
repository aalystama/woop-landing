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
      <StoreBadgesSection>
        <AppStoreBadge href="/" />
        <PlayMarketBadge href="/" />
      </StoreBadgesSection>
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

const StoreBadgesSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

const AppStoreBadge = styled.a`
  background-image: url("${require("../assets/app-store-logo.png").default}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 20px 70px;
`;

const PlayMarketBadge = styled.a`
  background-image: url("${require("../assets/play-market-logo.png").default}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 20px 70px;
`;

export default styled(Footer)`
  margin-top: auto;
  padding: 24px;
  background-color: ${Colors.FOOTER_BLACK};
`;
