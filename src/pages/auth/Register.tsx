import React from "react";
import { Form, Input, Button, Card, Typography, message } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

type TRegisterForm = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

type TRegister= {
    username: string;
    email: string;
    password: string;
};

function Register() {
    const navigate = useNavigate()
    const [form] = Form.useForm<TRegisterForm>();

    const onFinish = (values: TRegisterForm) => {
        const data: TRegister = {
            username: values.username,
            email: values.email,
            password: values.password,
        }
        Register.mutateAsync(data)
    };


    const Register = useMutation({
        mutationFn: async (data: TRegister) => {
            const res = axios.post(`http://localhost:3000/register`, data)
            return res
        },

        onSuccess: (res: AxiosResponse) => {
            message.success("Tạo tải khoản thành công !")
            navigate("/login")
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
                    <Title level={3}>Đăng ký</Title>
                    <Text type="secondary">Tạo tài khoản mới</Text>
                </div>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    {/* Username */}
                    <Form.Item
                        name="username"
                        label="Username"
                        rules={[{ required: true, message: "Nhập username!" }]}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Enter username"
                            size="large"
                        />
                    </Form.Item>

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

                    {/* Confirm Password */}
                    <Form.Item
                        name="confirmPassword"
                        label="Confirm Password"
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                            { required: true, message: "Xác nhận password!" },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject("Password không khớp!");
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Confirm password"
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
                            Đăng ký
                        </Button>
                    </Form.Item>
                </Form>

                <div className="text-center mt-4">
                    <Text>
                        Đã có tài khoản?{" "}
                        <a href="/login" className="text-blue-500">
                            Đăng nhập
                        </a>
                    </Text>
                </div>
            </Card>
        </div>
    );
}

export default Register;