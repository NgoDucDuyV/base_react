import React from "react";
import { Form, Input, Button, Card, Typography, message } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

type TLogin= {
    email: string;
    password: string;
};

function Login() {
    const navigate = useNavigate()
    const [form] = Form.useForm<TLogin>();

    const onFinish = (values: TLogin) => {
        Login.mutateAsync(values)
    };


    const Login = useMutation({
        mutationFn: async (data: TLogin) => {
            const res = axios.post(`http://localhost:3000/login`, data)
            return res
        },
        
        onSuccess: (res: AxiosResponse) => {
            sessionStorage.setItem("accessToken", res.data.accessToken)
            message.success("Đăng nhập thành công !")
            navigate("/admin")
        },

        onError: (err: AxiosError) => {
            message.error(`${err.response?.data}`)
        }
    })

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card
                className="w-[400px] shadow-lg rounded-2xl"
                styles={{ body: { padding: "30px" } }}
            >
                <div className="text-center mb-6">
                    <Title level={3}>Đăng Nhập</Title>
                    <Text type="secondary">Nhập thông tin tài khoản</Text>
                </div>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete="off"
                >

                    {/* Email */}
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            { required: true, message: "Nhập email!" },
                            { type: "email", message: "Email không hợp lệ!" },
                        ]}
                    >
                        <Input
                            prefix={<MailOutlined />}
                            placeholder="Enter email"
                            size="large"
                        />
                    </Form.Item>

                    {/* Password */}
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            { required: true, message: "Nhập password!" },
                            { min: 6, message: "Ít nhất 6 ký tự!" },
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Enter password"
                            size="large"
                        />
                    </Form.Item>

                    {/* Submit */}
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            size="large"
                            className="rounded-lg"
                        >
                            Đăng Nhập
                        </Button>
                    </Form.Item>
                </Form>

                <div className="text-center mt-4">
                    <Text>
                        Đã có tài khoản?{" "}
                        <a href="/register" className="text-blue-500">
                            Đăng ký
                        </a>
                    </Text>
                </div>
            </Card>
        </div>
    );
}

export default Login;