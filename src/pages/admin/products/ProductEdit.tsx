import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Select, Space, Spin } from 'antd';
import type { TProductFrom } from '@/types/product.type';
import { useNavigate, useParams } from 'react-router-dom';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

function ProductEdit() {
    const [form] = Form.useForm<TProductFrom>();
    const { id } = useParams()
    // const { data: product, isLoading: isLoadingProduct } = useProduct(id as string)

    // const update = useProductUpdate()

    const onFinish = (values: TProductFrom) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    const [caregorieOptions, setCaregorieOptions] = useState<{
        label: string,
        value: string
    }[]>([])


    // useEffect(() => {
        //     setCaregorieOptions(caregory?.map((item) => {
        //         return {
        //             label: item.name,
        //             value: item.id as string
        //         }
        //     }) as {
        //         label: string,
        //         value: string
        //     }[]
        //     )
        // }, [])
    
        useEffect(() => {
            setCaregorieOptions([
                {
                    label: "Men",
                    value: "1"
                },
                {
                    label: "Women",
                    value: "2"
                },
                {
                    label: "Accessories",
                    value: "3"
                }
            ])
        }, [])


    // useEffect(() => {
    //     if (!isLoadingProduct) {
    //         form.setFieldsValue(product as TProductFrom)
    //     }
    // }, [isLoadingProduct])

    return (
        <>
            <h1 className='text-2xl font-bold mb-5'>Product Add</h1>
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
            >
                <Form.Item
                    name="name" label="Name"
                    rules={[
                        { required: true, message: "Tên không được để trống" },
                        { min: 3, message: "Tên phải >= 3 ký tự" }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="description" label="Description"
                    rules={[
                        { required: true, message: "Mô tả không được để trống" },
                        { min: 10, message: "Mô tả phải >= 10 ký tự" }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="image_url" label="Image url"
                    rules={[
                        { required: true, message: "Ảnh không được để trống" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="current_price" label="Current_price"
                    rules={[
                        { required: true, message: "Giá hiện tại không được để trống" },
                        { type: "number", min: 0, message: "Giá phải là số dương" }
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item name="original_price" label="original_price"
                    rules={[
                        { required: true, message: "Giá gốc là bắt buộc" },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                const current = getFieldValue("current_price");
                                if (!value || value >= current) {
                                    return Promise.resolve();
                                }
                                return Promise.reject("Giá gốc phải >= giá hiện tại");
                            }
                        })
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('gender') === 'other' ? (
                            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        ) : null
                    }
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            {/* {
                                update.isPending ? (
                                    <>
                                        <Spin />
                                        Loading...
                                    </>
                                ) : (
                                    <>
                                        Submit
                                    </>
                                )
                            } */}
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                        {/* <Button type="link" htmlType="button" onClick={onFill}>
                                        Fill form
                                    </Button> */}
                    </Space>
                </Form.Item>
            </Form>
        </>
    )
}

export default ProductEdit