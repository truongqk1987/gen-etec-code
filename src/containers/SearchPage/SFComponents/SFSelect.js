import React from 'react';
import { Form, Input, Checkbox } from 'antd';

const SFSelect = ({ parentKey }) => {
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
                label="CODE"
                name={[parentKey, "selectBoxCode"]}
                shouldUpdate
                >
                <Input />
            </Form.Item>
        </div>
        <div style={{ padding: '0 0.5rem' }}>
            <Form.Item
                valuePropName="checked"
                name={[parentKey, "hasALLValue"]}
                shouldUpdate
                >
                <Checkbox>Has ALL option</Checkbox>
            </Form.Item>
        </div>
    </>
}

export default SFSelect;