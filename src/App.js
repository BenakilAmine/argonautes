import "./App.less";
import Content from "./components/Content";
import { Layout } from "antd";
const { Header, Footer } = Layout;
function App() {
  const imgLogo =
    "https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png";
  return (
    <Layout className="layout" theme="light">
      {/* HEADER */}
      <Header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
          }}
        >
          <img src={imgLogo} alt="Logo" />
          <h1>Les Argonautes</h1>
        </div>
      </Header>
      {/* CONTENT */}
      <Content />
      {/* FOOTER */}
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#001529",
          color: "white",
          padding: "15px 50px",
        }}
      >
        Réalisé par Jason en Anthestérion de l'an 515 avant JC
      </Footer>
    </Layout>
  );
}
export default App;
