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
      style={{
        padding: "150px  50px 30px",
        width: "80vw",
      }}
    >
      <ArgonauteCreate />
      <ArgonautesListes />
    </Content>
  );
}

export default index;
