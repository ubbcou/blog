import React from 'react';
import SideBar from '@/views/SideBar.jsx';
import MainContent from '@/views/MainContent.jsx';
import '@/assets/views/app.css';

export default () => (
  <div className="app">
    <SideBar />
    <MainContent />
  </div>
)