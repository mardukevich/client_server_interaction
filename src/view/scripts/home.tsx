import React from 'react';
import { Layout, Typography } from 'antd';

const { Header, Content } = Layout;
const { Title } = Typography;

export const Home: React.FC = () => {
  return (
    <Layout>
      <Header>
        <Title style={{ color: 'white' }}>Welcome</Title>
      </Header>
      <Content style={{ padding: '50px' }}>
        <div>
          <Title level={2}>Welcome!</Title>
          <p>This is a simple welcome page using Ant Design with TypeScript.</p>
        </div>
      </Content>
    </Layout>
  );
};