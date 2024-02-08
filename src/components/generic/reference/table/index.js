import React from 'react'
import Table from './table.js'
import adaptData from './adaptData.js'

export default (props) => {  
  const data = adaptData({
    data: props.data,
    types: props.types
  })
  return <Table {...props} data={data} />     
}