import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from './login';
import { Home } from './home';
import { Path } from '../../path/paths';

import { Layout, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header>
          <Title style={{ color: 'white' }}>Welcome</Title>
        </Header>
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Login} element={<Login />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
