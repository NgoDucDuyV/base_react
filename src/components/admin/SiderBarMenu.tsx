import { DesktopOutlined, FileOutlined, PieChartOutlined, ProductOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Product', 'sub1', <ProductOutlined />, [
        getItem('List Product', 'products'),
        getItem('Add Product', 'products/add'),
    ]),
    // getItem('Caregory', 'sub2', <ProductOutlined />, [
    //     getItem('List Caregory', 'caregories'),
    //     getItem('Add Caregory', 'caregories/add'),
    // ]),
    // // getItem('Option 1', '3', <PieChartOutlined />),
    // // getItem('Option 2', '4', <DesktopOutlined />),
    // // getItem('User', 'sub1', <UserOutlined />, [
    // //     getItem('Tom', '5'),
    // //     getItem('Bill', '6'),
    // //     getItem('Alex', '7'),
    // // ]),
    // // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '8'), getItem('Team 2', '9')]),
    // // getItem('Files', '10', <FileOutlined />),
];


export function SiderBarMenu() {
    const nav = useNavigate()

    const handleNavigate = ({ key }: any) => {
        nav(key)
    }
    return (
        <Menu onClick={handleNavigate} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    )
}

