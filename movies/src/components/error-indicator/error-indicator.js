import React from 'react'
import { Alert, Space } from 'antd'
const ErrorIndicator = ({ message }) => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Alert message={message} type="error" />
  </Space>
)
export default ErrorIndicator
