import styled from "styled-components";
import Footer from "./components/footer";
import Header from "./components/header";

function App({ className: c }) {
  return (
    <div className={c}>
      <Header />
      <Footer />
    </div>
  );
}

export default styled(App)``;
