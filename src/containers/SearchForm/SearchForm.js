import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const searchPartInputLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
}


const SearchForm = () => {
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
        <Row gutter="16">
          <Col span="2">Page Name</Col>
          <Col>
            <Form.Item
              name="pageName"
            >
              <Input />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              name="author"
              label="Author"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="subject"
              label="Subject"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        
        
        <Form.List name="searchPartLines">
        {(fields, { add, remove }) => {
          return (
            <Row gutter="16">
              <Col span="2">Search Form</Col>
              <Col>
                <Form.Item >
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                  >
                    <PlusOutlined /> Add Search Horizontal Line
                  </Button>
                </Form.Item>
              </Col>
              {fields.map((field, index) => (
                <Form.Item
                  key={field.key}
                  label="Line 1"
                  labelCol={{span: 24}}
                >
                  <Row gutter="16">
                    <Col>
                      <Form.Item
                        label="Select Item"
                        name="selectItem"
                        {...searchPartInputLayout}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item
                        label="Format Item"
                        name="formatItem"
                        {...searchPartInputLayout}
                      >
                        <Input />
                    </Form.Item>
                    </Col>
                    <Col>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                      ) : null}
                    </Col>
                  </Row>
                  
                  
                  
                </Form.Item>
              ))}
              
            </Row>
          );
        }}
        </Form.List>
          
  
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };

export default SearchForm;