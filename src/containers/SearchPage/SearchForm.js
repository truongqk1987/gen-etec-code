import React from 'react';
import { Form, Input, Button, Row, Col, Select, Typography } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Text, Title  } = Typography;


const SearchForm = (props) => {
  console.log(props);
  return (<>
    <Row><Title level={4}>Search form</Title></Row>
      
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
                              <Form.Item label={<Text strong>{`Row ${row.key + 1}`}</Text>}>
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
                                  <div style={{padding: '0 0.5rem'}}>
                                      <Form.Item
                                          label="ID"
                                          name={[uiComponent.key, "id"]}
                                      >
                                          <Input />
                                      </Form.Item>
                                  </div>

                                  <div style={{padding: '0 0.5rem'}}>
                                      <Form.Item
                                          label="Label"
                                          name={[uiComponent.key, "label"]}
                                      >
                                          <Input />
                                      </Form.Item>
                                  </div>

                                  <div style={{padding: '0 0.5rem'}}>
                                      <Form.Item
                                          label="Width (px)"
                                          name={[uiComponent.key, "width"]}
                                      >
                                          <Input />
                                      </Form.Item>
                                  </div>

                                  <div style={{padding: '0 0.5rem'}}>
                                      <Form.Item
                                          label="Type"
                                          name={[uiComponent.key, "type"]}
                                      >
                                          <Select
                                          
                                          >
                                              <Select.Option value="I">Input</Select.Option>
                                              <Select.Option value="S">Select</Select.Option>
                                              <Select.Option value="P">Popup</Select.Option>
                                          </Select>,
                                      </Form.Item>
                                  </div>
                                  <div style={{padding: '0 0.5rem'}}>
                                      <Form.Item
                                          noStyle
                                          shouldUpdate
                                      >
                                          {(props) => {
                                            console.log(props);
                                            return props.getFieldValue('gender') === 'other' ? (
                                              <Form.Item
                                                label="Default Value"
                                                name={[index, "defaultValue"]}>
                                                <Input />
                                              </Form.Item>
                                            ) : null;
                                          }}
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
  </>)
}

export default SearchForm;