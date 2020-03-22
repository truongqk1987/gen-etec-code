import React from 'react';
import { Form, Input, Button, Row, Col, Select, Typography, Checkbox } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'; 

import INPUT_TYPES from './constants/input-types';
import FORMATTERS from './constants/formatters';
import VALIDATORS from './constants/validators';

const { Text } = Typography;
const { Option } = Select;

const MasterGrid = (props) => {
    return (<>
        <Row><Text underline type="danger" style={{fontSize: '1.25rem', padding: '1rem 0'}}>Master Grid</Text></Row>

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
                                        return getFieldValue(['gridColumns', column.key, 'type']) === 'S' ? (
                                            <div style={{ padding: '0 0.5rem' }}>
                                            <Form.Item
                                                label="CODE"
                                                name={[column.key, "selectBoxCode"]}>
                                                <Input />
                                            </Form.Item>
                                            </div>
                                        ) : null;
                                    }}
                                </Form.Item>

                                <Form.Item
                                    noStyle
                                    shouldUpdate
                                >
                                    {({getFieldValue}) => {
                                        return getFieldValue(['gridColumns', column.key, 'type']) === 'S' ? (
                                            <div style={{ padding: '0 0.5rem' }}>
                                            <Form.Item
                                                valuePropName="checked"
                                                name={[column.key, "hasALLValue"]}>
                                                <Checkbox>Has ALL option</Checkbox>
                                            </Form.Item>
                                            </div>
                                        ) : null;
                                    }}
                                </Form.Item>
                                
                                <Form.Item
                                    noStyle
                                    shouldUpdate
                                >
                                    {({getFieldValue}) => {
                                        return getFieldValue(['gridColumns', column.key,'type']) === 'I' ? (
                                            <div style={{ padding: '0 0.5rem' }}>
                                            <Form.Item
                                                label="Default Value"
                                                name={[column.key, "defaultValue"]}>
                                                <Input />
                                            </Form.Item>
                                            </div>
                                        ) : null;
                                    }}
                                </Form.Item>

                                <Form.Item
                                    noStyle
                                    shouldUpdate
                                >
                                    {({getFieldValue}) => {
                                        return getFieldValue(['gridColumns', column.key,'type']) === 'I' ? (
                                            <div style={{ padding: '0 0.5rem' }}>
                                            <Form.Item
                                                label="Max Length"
                                                name={[column.key, "maxLength"]}>
                                                <Input />
                                            </Form.Item>
                                            </div>
                                        ) : null;
                                    }}
                                </Form.Item>

                                <Form.Item
                                    noStyle
                                    shouldUpdate
                                >
                                    {({getFieldValue}) => {
                                        return getFieldValue(['gridColumns', column.key,'type']) === 'I' ? (
                                            <div style={{ padding: '0 0.5rem' }}>
                                            <Form.Item
                                                label="Formatters"
                                                name={[column.key, "formatters"]}>
                                                <Select
                                                    mode="multiple"
                                                    style={{ width: '200px' }}
                                                    placeholder="Please select formatters"
                                                    defaultValue={[]}
                                                >
                                                    {FORMATTERS.map(({label, value}) => (
                                                        <Option key={value}>{label}</Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                            </div>
                                        ) : null;
                                    }}
                                </Form.Item>

                                <Form.Item
                                    noStyle
                                    shouldUpdate
                                >
                                    {({getFieldValue}) => {
                                        return getFieldValue(['gridColumns', column.key,'type']) === 'I' ? (
                                            <div style={{ padding: '0 0.5rem' }}>
                                            <Form.Item
                                                label="Validators"
                                                name={[column.key, "validators"]}>
                                                <Select
                                                    mode="multiple"
                                                    style={{ width: '200px' }}
                                                    placeholder="Please select validators"
                                                    defaultValue={[]}
                                                >
                                                    {VALIDATORS.map(({label, value}) => (
                                                        <Option key={value}>{label}</Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                            </div>
                                        ) : null;
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