import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, Typography } from 'antd';

import { Path } from 'path/paths';

import { Login } from 'view/scripts/login';
import { Home } from 'view/scripts//home';


const { Header } = Layout;
const { Title } = Typography;


export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header>
          <Title style={{ color: 'white' }}>Welcome</Title>
        </Header>
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Login} element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
