import React from 'react';
import { Flex, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import type { TProduct } from '@/types/product.type';
import type { PopconfirmProps } from 'antd';
import { Button, message, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';

function ProductPage() {

    const [messageApi, holder] = message.useMessage();

    const confirm = (id: string | number) => {
        console.log(id);
        messageApi.success('Click on Yes');
    };

    const cancel: PopconfirmProps['onCancel'] = (e) => {
        console.log(e);
        messageApi.error('Click on No');
    };


    const columns: TableProps<any>['columns'] = [
        {
            title: 'ID',
            dataIndex: "id",
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Image',
            dataIndex: 'image_url',
            key: 'image_url',
            render: (text) => <img className='w-20' src={text} alt="" />,
        },
        {
            title: 'Slug',
            dataIndex: 'slug',
            key: 'slug',
            render: (_, record) => (
                <>
                    <h1 className='text-black'>{record.name}</h1>
                    <p className='text-black/50 text-sm'>{record.description}</p>
                </>
            ),
        },
        {
            title: 'Original price',
            dataIndex: 'original_price',
            key: 'original_price',
        },
        {
            title: 'Current price',
            dataIndex: 'current_price',
            key: 'current_price',
        },
        {
            title: 'Discount percentage',
            dataIndex: 'discount_percentage',
            key: 'discount_percentage',
        },
        // {
        //     title: 'Category',
        //     key: 'category_id',
        //     dataIndex: 'category_id',
        //     render: (_, { category_id }) => (
        //         <Flex gap="small" align="center" wrap>
        //             {caregorys?.map((caregory) => {
        //                 let color = 'blue';
        //                 if (caregory.name === 'Men') {
        //                     color = 'volcano';
        //                 }
        //                 if (caregory.name === 'Women') {
        //                     color = 'purple';
        //                 }
        //                 if (caregory.name === 'Accessories') {
        //                     color = 'green';
        //                 }
        //                 if (caregory.id == category_id) {
        //                     return (
        //                         <Tag color={color} key={caregory.id}>
        //                             {caregory.name.toUpperCase()}
        //                         </Tag>
        //                     );
        //                 }
        //             })}
        //         </Flex>
        //     ),
        // },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="medium">
                    <Link to={`/admin/products/view/${record.id}`}>
                        <Button type="default">View</Button>
                    </Link>
                    <Link to={`/admin/products/edit/${record.id}`}>
                        <Button type="primary">Edit</Button>
                    </Link>
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => confirm(record.id)}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    const isLoading = true
    const products = {} as TProduct[]
    return (
        <>
            {holder}
            <div className='flex justify-end mb-5'>
                <Link to="/admin/products/add">
                    <Button type="primary">Add Product</Button>
                </Link>
            </div>
            {isLoading ? <div>Loading...</div> : <Table<TProduct> columns={columns} dataSource={products} />}
        </>
    )
}

export default ProductPage