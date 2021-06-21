import React from "react";
import ArgonauteCreate from "../ArgonauteCreate";
import ArgonautesListes from "../ArgonautesListes";
import { Layout } from "antd";
const { Content } = Layout;
function index() {
  return (
    <Content style={{ padding: "0 50px", margin: "auto" }}>
      <h2>Ajouter un(e) Argonaute</h2>
      <ArgonauteCreate />

      <h2>Membres de l'équipage</h2>
      <ArgonautesListes />
    </Content>
  );
}

export default index;
