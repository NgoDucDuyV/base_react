import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useCaregoryDelete, useCaregorys } from '@/hook/caregory.hook';
import type { PopconfirmProps } from 'antd';
import { Button, message, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import type { TCaregory } from '@/types/caregory.type';

function CaregoryPage() {
    const [messageApi, holder] = message.useMessage();

    const { data: caregorys, isLoading: isLoadingCaregorys } = useCaregorys()

    const deleteCaregory = useCaregoryDelete()


    const confirm = (id: string | number) => {
        console.log(id);
        messageApi.success('Click on Yes');
        deleteCaregory.mutateAsync(id)
    };

    const cancel: PopconfirmProps['onCancel'] = (e) => {
        console.log(e);
        messageApi.error('Click on No');
    };
    const columns: TableProps<TCaregory>['columns'] = [
        {
            title: 'ID',
            dataIndex: "id",
            key: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Image',
            dataIndex: 'image_url',
            key: 'image_url',
            render: (_, { image_url, name }) => <img className='w-20' src={image_url} alt={name} />,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => (
                <>
                    <h1 className='text-black'>{record.name}</h1>
                    <p className='text-black/50 text-sm'>{record.description}</p>
                </>
            ),
        },
        {
            title: 'Is active',
            dataIndex: 'is_active',
            key: 'is_active',
            render: (_, { is_active }) => (
                <Tag color={is_active ? 'green' : 'red'}>
                    {is_active ? 'Active' : 'Inactive'}
                </Tag>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="medium">
                    <Link to={`/admin/caregories/edit/${record.id}`}>
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
    return (
        <>
            {holder}
            <div className='flex justify-end mb-5'>
                <Link to="/admin/caregories/add">
                    <Button type="primary">Add Caregory</Button>
                </Link>
            </div>
            {isLoadingCaregorys ? <div>Loading...</div> : <Table<TCaregory> columns={columns} dataSource={caregorys} />}
        </>
    )
}

export default CaregoryPage