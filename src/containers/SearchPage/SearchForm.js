import React from 'react';
import { Form, Input, Button, Row, Col, Select, Typography, Checkbox } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'; 

import INPUT_TYPES from './constants/input-types';
import FORMATTERS from './constants/formatters';
import VALIDATORS from './constants/validators';

const { Text } = Typography;
const { Option } = Select;

const SearchForm = (props) => {
    return (<>
        <Row><Text underline type="danger" style={{fontSize: '1.25rem', padding: '1rem 0'}}>Search Form</Text></Row>

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
                                        <div style={{ padding: "0 1rem" }}>
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
                                        <div style={{ paddingLeft: '1rem' }}>
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
                                                <div style={{ padding: '0 0.5rem' }}>
                                                    <Form.Item label={<Text code>{`Item ${uiComponent.key + 1} `}</Text>}></Form.Item>
                                                </div>
                                                <div style={{ padding: '0 0.5rem' }}>
                                                    <Form.Item
                                                        label="ID"
                                                        name={[uiComponent.key, "id"]}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>

                                                <div style={{ padding: '0 0.5rem' }}>
                                                    <Form.Item
                                                        label="Label"
                                                        name={[uiComponent.key, "label"]}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>

                                                <div style={{ padding: '0 0.5rem' }}>
                                                    <Form.Item
                                                        label="Width (px)"
                                                        name={[uiComponent.key, "width"]}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>

                                                <div style={{ padding: '0 0.5rem' }}>
                                                    <Form.Item
                                                        name={[uiComponent.key, "type"]}
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
                                                        return getFieldValue(['searchFormRows', row.key, uiComponent.key,'type']) === 'S' ? (
                                                            <div style={{ padding: '0 0.5rem' }}>
                                                            <Form.Item
                                                                label="CODE"
                                                                name={[uiComponent.key, "selectBoxCode"]}>
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
                                                        return getFieldValue(['searchFormRows', row.key, uiComponent.key, 'type']) === 'S' ? (
                                                            <div style={{ padding: '0 0.5rem' }}>
                                                            <Form.Item
                                                                valuePropName="checked"
                                                                name={[uiComponent.key, "hasALLValue"]}>
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
                                                        return getFieldValue(['searchFormRows', row.key, uiComponent.key,'type']) === 'I' ? (
                                                            <div style={{ padding: '0 0.5rem' }}>
                                                            <Form.Item
                                                                label="Default Value"
                                                                name={[uiComponent.key, "defaultValue"]}>
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
                                                        return getFieldValue(['searchFormRows', row.key, uiComponent.key,'type']) === 'I' ? (
                                                            <div style={{ padding: '0 0.5rem' }}>
                                                            <Form.Item
                                                                label="Max Length"
                                                                name={[uiComponent.key, "maxLength"]}>
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
                                                        return getFieldValue(['searchFormRows', row.key, uiComponent.key,'type']) === 'I' ? (
                                                            <div style={{ padding: '0 0.5rem' }}>
                                                            <Form.Item
                                                                label="Formatters"
                                                                name={[uiComponent.key, "formatters"]}>
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
                                                        return getFieldValue(['searchFormRows', row.key, uiComponent.key,'type']) === 'I' ? (
                                                            <div style={{ padding: '0 0.5rem' }}>
                                                            <Form.Item
                                                                label="Validators"
                                                                name={[uiComponent.key, "validators"]}>
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