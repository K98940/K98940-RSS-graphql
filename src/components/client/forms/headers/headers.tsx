import { Table } from 'antd'

const dataSource = [
  {
    key: '1',
    paramsKey: 'Content-Type',
    value: 'application/json',
  },
]

const columns = [
  {
    title: 'Key',
    dataIndex: 'paramsKey',
    key: 'paramsKey',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
]

export function FormHeaders() {
  return <Table dataSource={dataSource} columns={columns} size="small" />
}
