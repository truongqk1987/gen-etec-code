import React from 'react';
import { Form, Button } from 'antd';

import BasicInfo from './BasicInfo';
import SearchForm from './SearchForm';
import MasterGrid from './MasterGrid';

const SearchPage = () => {
    const onFinish = values => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <Form
        name="searchForm"
        initialValues={{typePage: "S"}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <BasicInfo />
        <SearchForm />
        <MasterGrid />
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };

export default SearchPage;