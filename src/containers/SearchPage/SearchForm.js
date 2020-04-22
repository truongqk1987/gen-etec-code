import React from 'react';
import { Form, Button, Row, Col, Select, Typography } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'; 

import INPUT_TYPES from './constants/input-types';

import SFSelect from './SFComponents/SFSelect';
import SFInput from './SFComponents/SFInput';
import SFPopup from './SFComponents/SFPopup';

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
                                                        add({hasALLValue: true});
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
                                                        name={[uiComponent.key, "type"]}
                                                        label="Type"
                                                        rules={[{ required: true, message: 'Please input your input type!' }]}
                                                    >
                                                        <Select
                                                            style={{ width: '200px' }}
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
                                                        const selectedType = getFieldValue(['searchFormRows', row.key, uiComponent.key,'type'])
                                                        if ( selectedType === 'S') {
                                                            return <SFSelect parentKey={uiComponent.key} />
                                                        } else if (selectedType === 'I') {
                                                            return <SFInput parentKey={uiComponent.key} />
                                                        } else if (["PP", "CP", "EP"].includes(selectedType)) {
                                                            return <SFPopup parentKey={uiComponent.key} />
                                                        }
                                                        return null;
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