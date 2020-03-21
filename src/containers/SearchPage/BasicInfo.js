import React from 'react';
import { Form, Input, Button, Row, Col, Select, Typography } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Text, Title  } = Typography;


const BasicInfo = () => {
    return (
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
    )
}

export default BasicInfo;