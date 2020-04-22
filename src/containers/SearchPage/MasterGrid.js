import React from 'react';
import { Form, Input, Button, Row, Col, Select, Typography, Checkbox } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'; 

import INPUT_TYPES from './constants/input-types';

import SFSelect from './SFComponents/SFSelect';
import SFInput from './SFComponents/SFInput';

const { Text } = Typography;
const { Option } = Select;

const MasterGrid = (props) => {
    return (<>
        <Row><Text underline type="danger" style={{fontSize: '1.25rem', padding: '1rem 0'}}>Master Grid</Text></Row>
        <Row>
            <Col>
                <Form.Item
                    valuePropName="checked"
                    name="isPagination">
                    <Checkbox>Has pagination</Checkbox>
                </Form.Item>
            </Col>
        </Row>
        <Form.List name="gridColumns">
            {(columns, { add, remove }) => {
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
                                    <PlusOutlined /> Add Columns
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                            
                    {columns.map((column, index) => (
                        <div key={column.key}>
                            <Row gutter="16">
                                <Col span="2"></Col>
                                <div style={{ padding: '0 0.5rem' }}>
                                    <Form.Item label={<Text code>{`Column ${column.key + 1} `}</Text>}></Form.Item>
                                </div>
                                <div style={{ padding: '0 0.5rem' }}>
                                    <Form.Item
                                        label="ID"
                                        name={[column.key, "id"]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </div>

                                <div style={{ padding: '0 0.5rem' }}>
                                    <Form.Item
                                        label="Header"
                                        name={[column.key, "header"]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </div>

                                <div style={{ padding: '0 0.5rem' }}>
                                    <Form.Item
                                        label="Width (px)"
                                        name={[column.key, "width"]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </div>

                                <div style={{ padding: '0 0.5rem' }}>
                                    <Form.Item
                                        name={[column.key, "type"]}
                                        label="Type"
                                    >
                                        <Select
                                            style={{ width: 150 }}
                                            placeholder="Select Input Type"
                                            onChange={() => { }}
                                        >
                                            {INPUT_TYPES.map(({label, value}) => (
                                                <Option key={value}>{label}</Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </div>

                                <Form.Item
                                    noStyle
                                    shouldUpdate
                                >
                                    {({getFieldValue}) => {
                                        const selectedType = getFieldValue(['gridColumns', column.key,'type'])
                                        if ( selectedType === 'S') {
                                            return <SFSelect parentKey={column.key} />
                                        } else if (selectedType === 'I') {
                                            return <SFInput parentKey={column.key} />
                                        }
                                        return null;
                                    }}
                                </Form.Item>

                                <div style={{ paddingLeft: '1rem' }}>
                                    <MinusCircleOutlined
                                        className="dynamic-delete-button"
                                        onClick={() => {
                                            remove(column.name);
                                        }}
                                    />
                                </div>
                            </Row>
                        </div>

                    ))}

                </>)}}
            </Form.List>
        </>
    )
}

export default MasterGrid;