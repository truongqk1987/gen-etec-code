import React from 'react';
import { Form, Input, Button, Row, Col, Select, Typography } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import BasicInfo from './BasicInfo';
import SearchForm from './SearchForm';

const { Text, Title  } = Typography;

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
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };

export default SearchPage;