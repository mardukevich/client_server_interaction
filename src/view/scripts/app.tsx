import React from 'react';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

export default function App() {
  const onFinish = (values: any) => {
    console.log('Received values:', values);
    // Implement your form submission logic here
  };

  return (
    <>
      <Title level={1}>Sign in</Title>
      <Form name="loginForm" onFinish={onFinish}>
        <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input id="username" autoComplete="username" autoFocus />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password id="current-password" autoComplete="current-password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
