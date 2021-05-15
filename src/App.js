import styled from "styled-components";
import Footer from "./components/footer";
import Header from "./components/header";
import { GlobalStyle } from "./global/styles";

function App({ className: c }) {
  return (
    <div className={c}>
      <GlobalStyle />
      <Header />
      <Footer />
    </div>
  );
}

export default styled(App)``;
