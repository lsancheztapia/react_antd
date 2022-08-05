import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'

import Main from '../components/Main'

export default function Login() {
  return (
    <Main>

      <h1 style={{textAlign:'center', paddingTop:'30px'}}>Ingreso</h1>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={ ()=>{} }
        onFinishFailed={ () => {} }
        autoComplete="off"
      >
        <Form.Item
          label="Usuario"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Ingresar
          </Button>
        </Form.Item>

      </Form>
    </Main>
  )
}