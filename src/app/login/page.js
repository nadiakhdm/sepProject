"use client";
import {Form, Input, Button} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import styles from "./page.module.css";
const onFinish = (values) => {
  console.log("Success:", values);
};
export default function Login() {
  return (
    <main className={styles.main}>
      <div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{remember: true}}
          onFinish={onFinish}
          style={{
            background: "#eeee",
            padding: "85px",
            position: "relative",
            borderRadius: " 6px",
            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px;",
            position: "relative",
            margin: " 20% 0px",
          }}
        >
          <div
            className={styles.useroutline}
            style={{
              background: " #eee",
              padding: "22px",
              width: "76px",
              position: "absolute",
              top: "1%",
              left: " 50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            {" "}
            <UserOutlined
              style={{
                margin: "0px 2px",
                fontSize: " 30px",
                color: "blueviolet",
              }}
            />{" "}
          </div>

          <Form.Item
            name="username"
            rules={[{required: true, message: "Please input your Username!"}]}
          >
            <Input
              prefix={
                <UserOutlined
                  style={{
                    color: "blueviolet",
                  }}
                  className="site-form-item-icon"
                />
              }
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{required: true, message: "Please input your Password!"}]}
          >
            <Input
              prefix={
                <LockOutlined
                  style={{
                    color: "blueviolet",
                  }}
                  className="site-form-item-icon"
                />
              }
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={`login-form-button ${styles.btn}`}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
}
