import React, { useState } from "react";
import { Form, Input, Button, message, Space } from "antd";
import database from "../../utils/database";
const success = (value) => {
  message.success(`Argonaute ${value.argonaute} was added successfully`);
};
function CreateArgonautes() {
  const [argonaute, setArgonaute] = useState("");

  const onFinish = (value) => {
    const argoDB = database.ref("argonautes");
    if (!value) return;
    argoDB.push(value);
    success(value);
    setArgonaute("");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <span>Nom de l'Argonaute</span>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="inline"
      >
        <Form.Item
          name="argonaute"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            value={argonaute}
            placeholder="Argonaute"
            onChange={(e) => {
              if (e.target.value) return;
              setArgonaute(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Envoyer
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateArgonautes;
