import React from 'react';
import { Form, Button } from 'antd';
import axios from 'axios';
import moment from 'moment';

import BasicInfo from './BasicInfo';
import SearchForm from './SearchForm';
import MasterGrid from './MasterGrid';

const SearchPage = () => {
    const onFinish = values => {
      return axios.post('/search-page', values).then(res => {
        const sourceFileName = res.data;
        var tempLink = document.createElement('A');
        tempLink.href = '/' + sourceFileName;
        tempLink.download = sourceFileName;
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
      })
    };
  
    return (
      <Form
        name="searchForm"
        initialValues={{}}
        onFinish={onFinish}
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