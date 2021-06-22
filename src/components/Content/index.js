import React from "react";
import ArgonauteCreate from "../ArgonauteCreate";
import ArgonautesListes from "../ArgonautesListes";
import "./content.less";
import { Layout } from "antd";
const { Content } = Layout;
function index() {
  return (
    <Content
      className="content"
      style={{ padding: "0 50px", backgroundColor: "blue" }}
    >
      <h2>Ajouter un(e) Argonaute</h2>
      <ArgonauteCreate />

      <h2>Membres de l'équipage</h2>
      <ArgonautesListes />
    </Content>
  );
}

export default index;
