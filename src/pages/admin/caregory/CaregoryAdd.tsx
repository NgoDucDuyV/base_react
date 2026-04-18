import { Button, Form, Input, Select, Space, Spin } from 'antd';
import type { TProductFrom } from '@/types/product.type';
import { useCaregoryCreate } from '@/hook/caregory.hook';
import { useNavigate } from 'react-router-dom';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

function CaregoryAdd() {
    const [form] = Form.useForm<TProductFrom>();
    const navigate = useNavigate()
    const create = useCaregoryCreate()

    const onFinish = (values: any) => {
        console.log(values);
        const data = {
            ...values,
            is_active: values.is_active === "true" ? true : false
        }
        console.log(data);
        
        create.mutateAsync(data)

        navigate("/admin/caregories")
    };

    const onReset = () => {
        form.resetFields();
    };

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
                                create.isPending ? (
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

export default CaregoryAdd