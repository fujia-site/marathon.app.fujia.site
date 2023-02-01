import React, { useState } from 'react';
import { Button, Form, Input } from '@arco-design/web-react';
import { db } from '@/db';

const FormItem = Form.Item;

export default function User() {
  const [status, setStatus] = useState('');
  const [form] = Form.useForm<{
    name: string;
    age: number;
  }>();

  const handleSubmit = async () => {
    try {
      await form.validate();
      const fieldValues = form.getFieldsValue() as any;
      const id = await db.friends.add(fieldValues);
      setStatus(`Friend ${fieldValues.name} successfully added. Got id ${id}`);
    } catch (err) {
      setStatus(`Failed to add failed: ${err}`);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <p>{status}</p>
      <Form form={form}>
        <FormItem
          field="name"
          label="姓名"
          rules={[
            {
              required: true,
              message: '姓名不能为空',
            },
          ]}
        >
          <Input />
        </FormItem>
        <FormItem
          field="age"
          label="年龄"
          rules={[
            {
              required: true,
              message: '年龄不能为空',
            },
          ]}
        >
          <Input />
        </FormItem>
        <FormItem>
          <Button onClick={handleSubmit} type="primary">
            提交
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}
