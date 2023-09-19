import "./MainLayout.scss";
import MainHeader from "../header/header";
import NavBar from "../header/navbar";
import Footer from "../footer/footer";
import Container from "../container/container";
import Carrito from "../../search/Carrito";

const MainLayout = ({ pageTitle, pageDescription, children }) => (
  <>
    <MainHeader>
      <Carrito />
      <div className="nameandlogo__container">
        <div id="namePhoenix">
          <h1 className="name__Phoenix">Phoenix Store</h1>
        </div>
        <div className="logo">
          <img src="" alt="" />
        </div>
      </div>
      <NavBar />
          </MainHeader>

        
        <Container pageTitle={pageTitle} pageDescription={pageDescription} >
            {children}
        </Container>

    <Footer />
  </>
);

export default MainLayout;