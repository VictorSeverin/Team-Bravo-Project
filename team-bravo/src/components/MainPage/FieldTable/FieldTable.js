import React from 'react'
import './FieldTable.css';
import '../MainPage.css';
import TableRow from './TableRow';
import * as IoIcons from "react-icons/io";
import { Link } from 'react-router-dom'

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
      <tbody className='conditional-body'>
        <TableRow data={data}/>
      </tbody>
      <Link to="/form">
        <button className='btn btn-primary save-btn'>Save</button>
      </Link>
    </table>
  </div>
  )
}

export default FieldTable;