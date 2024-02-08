import React from 'react'

export default (props) => {
  const { data, } = props  
  const { header, rows} = data

  return <table>
     <thead>
     {      
        header.columns.map(column => {
          return (<td key={column} className='font-bold'> {column} </td>)
        })            
     }
    </thead>
     <tbody>
     {
      rows.map(row => {
        return <tr key={row.id}>
            {
             row.columns.map(column => {
                return (<td key={column}> {column} </td>)
             })
            }
          </tr>
      })
     }
    </tbody>
    </table>
}
