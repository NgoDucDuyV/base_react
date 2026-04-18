import React, { useEffect } from 'react';
import { Button, Form, Input, Select, Space, Spin } from 'antd';
import { useCaregory, useCaregoryUpdate } from '@/hook/caregory.hook';
import { useNavigate, useParams } from 'react-router-dom';
import type { TCaregory, TCaregoryForm } from '@/types/caregory.type';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

function CregoryEdit() {
    const [form] = Form.useForm<TCaregoryForm>();
    const { id } = useParams()
    const { data: caregory, isLoading: isLoadingCaregory } = useCaregory(id as string)
    const navigate = useNavigate()
    const update = useCaregoryUpdate()

    const onFinish = (values: any) => {
        const data: TCaregoryForm = {
            ...values,
            is_active: values.is_active === "true" ? true : false
        }

        update.mutateAsync({ id: String(id) , data })

        navigate("/admin/caregories")
    };

    const onReset = () => {
        form.resetFields();
    };

    useEffect(() => {
        if (!isLoadingCaregory) {
            form.setFieldsValue({
                ...caregory,
                is_active: caregory?.is_active ? "true" : "false"
            })
        }
    }, [isLoadingCaregory])



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
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="slug" label="Slug" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="image_url" label="Image url" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="is_active" label="Is_active" rules={[{ required: true }]}>

                    <Select
                        allowClear
                        placeholder="Select a option and change input text above"
                        // onChange={onGenderChange}
                        options={[
                            {
                                label: "Active",
                                value: "true"
                            },
                            {
                                label: "Inactive",
                                value: "false"
                            }
                        ]}
                    />
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
                            {
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
                            }
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

export default CregoryEdit