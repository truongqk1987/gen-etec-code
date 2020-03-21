import React from 'react';
import { Tabs } from 'antd';

import {
  SearchPage,
  RegistrationPopupForm
} from './containers';

import './App.css';

const { TabPane } = Tabs;

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Search Page" key="1">
          <SearchPage></SearchPage>
        </TabPane>
        <TabPane tab="Registration Popup" key="2">
          <RegistrationPopupForm></RegistrationPopupForm>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
