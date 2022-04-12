import React from 'react'
import './FieldTable.css';
import '../MainPage.css';
import TableRow from './TableRow';

function FieldTable({data}) {
  return (
    <div className='table-wrapper'>
    <table className='boottable'>
      <thead>
        <tr className='tablehead'>
          <th>Type</th>
          <th>Label</th>
          <th>Placeholder</th>
          <th>Required</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          <TableRow data={data}/>
      </tbody>
    </table>
  </div>
  )
}

export default FieldTable;