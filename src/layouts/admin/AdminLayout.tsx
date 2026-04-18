import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {
  Button,
  Layout,
  Modal,
  theme
} from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  // UploadOutlined,
  // UserOutlined,
  // VideoCameraOutlined,
} from '@ant-design/icons';
import { SiderBarMenu } from "../../components/admin/SiderBarMenu";
const { Header, Sider, Content } = Layout;
const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
        width={250}
        className='relative'
      >
        <div className="text-white text-3xl p-5 text-center font-bold">FW2</div>
        <SiderBarMenu />

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Button
            type="primary"
            danger
            block
            onClick={() => {
              Modal.confirm({
                title: 'Xác nhận đăng xuất',
                content: 'Bạn có chắc chắn muốn đăng xuất?',
                okText: 'Đăng xuất',
                okType: 'danger',
                cancelText: 'Hủy',
                onOk() {
                  localStorage.removeItem("accessToken")
                  window.location.href = "/login"
                },
              });
            }}
          >
            Đăng xuất
          </Button>
        </div>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout