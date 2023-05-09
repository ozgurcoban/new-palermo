import React, { useState } from 'react';
import Sidebar from './Sidebar';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { Theme } from '../styles/theme';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
