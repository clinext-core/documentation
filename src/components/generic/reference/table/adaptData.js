import React from 'react'
import Badge from './components/badge.js'

export default  data => {
  const { header, rows} = data
  let _rows = rows.map(row => {
    const { columns } = row
      const _columns = columns.map((column, columnIndex) => {
      const _type = typeof column
      switch(_type)
      {
        case 'string': {
          return {
            id: columnIndex,
            value:  <i>{column}</i>
          }
        }
        default:{
          const {type} = column
          switch(type){
            case 'boolean':{
              return {
                id: columnIndex,
                value:  <Badge name={column.value ? "True": "False" } />
              }
            }
          }
        }
          break
      }
      return column
    })    

    return {...row, columns: _columns}
  })

  let _data = {
    header, 
    rows: _rows}

  return _data
}




