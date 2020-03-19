import React from 'react';
import { Tabs } from 'antd';

import {
  SearchForm,
  RegistrationPopupForm
} from './containers';

import './App.css';

const { TabPane } = Tabs;

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          <SearchForm></SearchForm>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <RegistrationPopupForm></RegistrationPopupForm>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
