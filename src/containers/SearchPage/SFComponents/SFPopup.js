import React from 'react';
import { Form, Input, Checkbox } from 'antd';

const SFPopup = ({ parentKey }) => {
    return <>
        <div style={{ padding: '0 0.5rem' }}>
            <Form.Item
                label="ID"
                name={[parentKey, "id"]}
                shouldUpdate
            >
                <Input />
            </Form.Item>
        </div>
        <div style={{ padding: '0 0.5rem' }}>
            <Form.Item
                label="Label"
                name={[parentKey, "label"]}
                shouldUpdate
            >
                <Input  />
            </Form.Item>
        </div>
        <div style={{ padding: '0 0.5rem' }}>
            <Form.Item
                label="Value Key"
                name={[parentKey, "valueKey"]}
                shouldUpdate
                >
                <Input />
            </Form.Item>
        </div>
    </>
}

export default SFPopup;