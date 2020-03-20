import React from 'react';
import { Form, Input, Button, Row, Col, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

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
          <Col span="5">
            <Form.Item
              name="pageName"
              label="Page"
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span="5">
            <Form.Item
              name="author"
              label="Author"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span="5">
            <Form.Item
              name="subject"
              label="Subject"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row><h1>Search form</h1></Row>
        
        <Form.List name="searchFormRows">
        {(rows, { add, remove }) => {
          return (<>
            <Row gutter="16">
              <Col>
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                  >
                    <PlusOutlined /> Add Rows
                  </Button>
                </Form.Item>
              </Col>
            </Row>
            {rows.map((row) => (
                <Form.List name={`${row.key}`} key={`${row.key}`}>
                    {(uiComponents, { add, remove }) => (
                        <>
                            <Row gutter="16">
                                <Col span="1"></Col>
                                <div style={{padding: "0 1rem"}}>
                                    <Form.Item label={<strong>{`Line ${row.key + 1}`}</strong>}>
                                        <Button
                                            type="dashed"
                                            onClick={() => {
                                            add();
                                            }}
                                        >
                                            <PlusOutlined /> Add UI components
                                        </Button>
                                    </Form.Item>
                                </div>
                                <div style={{paddingLeft: '1rem'}}>
                                    <MinusCircleOutlined
                                        className="dynamic-delete-button"
                                        onClick={() => {
                                            remove(row.name);
                                        }}
                                    />
                                </div>
                            </Row>
                            {uiComponents.map((uiComponent, index) => (
                                <div key={uiComponent.key}>
                                    <Row gutter="16">
                                        <Col span="2"></Col>
                                        <div style={{padding: '0 1rem'}}>
                                            <Form.Item
                                                label="ID"
                                                name={[index, "id"]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </div>

                                        <div>
                                            <Form.Item
                                                label="Type"
                                                name={[index, "type"]}
                                            >
                                                <Select
                                                    showSearch
                                                    optionFilterProp="children"
                                                    style={{ width: '200px' }}
                                                    filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    <Select.Option value="I">Input</Select.Option>
                                                    <Select.Option value="S">Select</Select.Option>
                                                    <Select.Option value="P">Popup</Select.Option>
                                                </Select>,
                                            </Form.Item>
                                        </div>
                                        
                                        <div style={{paddingLeft: '1rem'}}>
                                            <MinusCircleOutlined
                                                className="dynamic-delete-button"
                                                onClick={() => {
                                                    remove(uiComponent.name);
                                                }}
                                            />
                                        </div>
                                    </Row>
                                </div>
                               
                            ))}
                            
                        </>
                    )}
                </Form.List>
            ))}
        </>);
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