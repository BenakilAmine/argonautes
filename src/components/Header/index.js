import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

function index() {
  return (
    <Header theme="light">
      <div className="logo" />
      <h1>Les Argonautes</h1>
    </Header>
  );
}

export default index;
