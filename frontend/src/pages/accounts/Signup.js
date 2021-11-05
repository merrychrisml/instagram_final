import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router";
import { SmileOutlined } from "@ant-design/icons";
import { Form, Input, Button, notification } from "antd";
import ErrorList from "antd/lib/form/ErrorList";

export default function Signup() {
    const history = useHistory()
    const [fieldErrors, setFieldErrors] = useState({});

    const onFinish = values => {
        async function fn() {
            const { username, password } = values;

            setFieldErrors({});

            const data = { username, password };
            try {
                await Axios.post("http://localhost:8000/accounts/signup/", data);
               
                notification.open({
                    message: "회원가입 성공",
                    description: "로그인 페이지로 이동합니다.",
                    icon: <SmileOutlined />

                });
                history.push("/accounts/login")
            }
            catch (error) {
                if (error.response) {
                    notification.open({
                        message: "회원가입 실패",
                        description: "아이디/암호를 확인해주세요.",
                        icon: <SmileOutlined />
    
                    })
                    const { data: fieldsErrorMessages } = error.response;
                    setFieldErrors(
                        Object.entries(fieldsErrorMessages).reduce(
                            (acc, [fieldName, errors]) => {
                                acc[fieldName] = {
                                    validateStatus: "errors",
                                    help: errors.join(" ")
                                };
                                return acc
                            },
                            {}
                        )
                    );
                }
            }
            
        }
        fn()
    }

    
    
    return (
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
    };