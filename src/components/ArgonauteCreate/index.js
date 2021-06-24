import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import database from "../../utils/database";

const success = (value) => {
  message.success(`Argonaute ${value.argonaute} was added successfully`);
};
function CreateArgonautes() {
  const [argonaute, setArgonaute] = useState("");
  const [form] = Form.useForm();

  const onFinish = (value) => {
    const argoDB = database.ref("argonautes");
    if (!value) return;
    argoDB.push(value);
    success(value);
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <span>Ajouter un Argonaute</span>
      <Form
        form={form}
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
            placeholder="Ex: Jason"
            onChange={(e) => {
              if (e.target.value) return;
              setArgonaute(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button icon={<UserAddOutlined />} type="primary" htmlType="submit">
            Ajouter
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateArgonautes;
