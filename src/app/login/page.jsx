"use client";
import {Form, Input, Button} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Suspense} from "react";
import LoginLogic from "./loginLogic";
import ComponentWrapper from "../../components/componentWraper";
import Loading from "../loading";
function Login() {
  const {handleChange, onFinish, classes} = LoginLogic();
  return (
    <main className={classes.main}>
      <Suspense fallback={<Loading />}>
        <div>
          <Form onFinish={onFinish} className={` ${classes.login_form}`}>
            <div className={classes.useroutline}>
              <UserOutlined className={classes.useroutlineIcon} />
            </div>
            <Form.Item>
              <Input
                name="email"
                prefix={<UserOutlined className={`site-form-item-icon${classes.userout}`} />}
                onChange={handleChange}
                placeholder="email"
              />
            </Form.Item>
            <Form.Item>
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
export default ComponentWrapper(Login);
