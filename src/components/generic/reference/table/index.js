import React from 'react'
import Table from './table.js'
import adaptData from './adaptData.js'

export default (props) => {  
  const data = adaptData(props.data)
  return <Table {...props} data={data} />     
}