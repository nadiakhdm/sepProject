"use client";
import {Form, Input, Button} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Suspense} from "react";
import Loading from "./loading";
import LoginLogic from "./LoginLogic";
export default function Login() {
  const {handleChange, onFinish, classes} = LoginLogic();
  return (
    <main className={classes.main}>
      <Suspense fallback={<Loading />}>
        <div>
          <Form
            name="normal_login"
            initialValues={{remember: true}}
            onFinish={onFinish}
            className={` ${classes.login_form}`}
          >
            <div className={classes.useroutline}>
              <UserOutlined className={classes.useroutlineIcon} />
            </div>
            <Form.Item name="username">
              <Input
                name="username"
                prefix={<UserOutlined className={`site-form-item-icon${classes.userout}`} />}
                onChange={handleChange}
                placeholder="username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{required: true, message: "Please input your Password!"}]}
            >
              <Input
                name="password"
                prefix={<LockOutlined className={`site-form-item-icon${classes.userout}`} />}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={`login-form-button ${classes.btn}`}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Suspense>
    </main>
  );
}
