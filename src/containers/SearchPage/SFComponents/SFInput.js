import React from 'react';
import { Form, Input, Select } from 'antd';

import FORMATTERS from '../constants/formatters';
import VALIDATORS from '../constants/validators';

const { Option } = Select;

const SFInput = ({ parentKey }) => {
    return <>
        <div style={{ padding: '0 0.5rem' }}>
            <Form.Item
                label="ID"
                name={[parentKey, "id"]}
                rules={[{ required: true, message: 'Please input your ID!' }]}
                shouldUpdate
            >
                <Input />
            </Form.Item>
        </div>
        <div style={{ padding: '0 0.5rem' }}>
            <Form.Item
                label="Label"
                name={[parentKey, "label"]}
                rules={[{ required: true, message: 'Please input your label!' }]}
            >
                <Input defaultValue=""/>
            </Form.Item>
        </div>
        <div style={{ padding: '0 0.5rem' }}>
            <Form.Item
                label="Formatters"
                name={[parentKey, "formatters"]}>
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
        <div style={{ padding: '0 0.5rem' }}>
            <Form.Item
                label="Validators"
                name={[parentKey, "validators"]}>
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
    </>
}

export default SFInput;