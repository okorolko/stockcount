import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import EditItemButtom from './EditItemButton';
import DeleteItemButtom from './DeleteItemButtom';

const TableElem = (props) => {
  const { items } = props;
  const center = { textAlign: 'center', width: '13%' };
  return (
    <Table>
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn style={center}>ID</TableHeaderColumn>
          <TableHeaderColumn style={{ textAlign: 'center', width: '20%' }}>Название товара</TableHeaderColumn>
          <TableHeaderColumn style={center}>Цена / Закуп</TableHeaderColumn>
          <TableHeaderColumn style={center}>Цена</TableHeaderColumn>
          <TableHeaderColumn style={{ minWidth: '250px', textAlign: 'center' }} />
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {items.map(item => (
          <TableRow key={item["_id"]} >
            <TableRowColumn style={center}>{item["_id"]}</TableRowColumn>
            <TableRowColumn style={{ textAlign: 'center', width: '20%' }}>{item.name}</TableRowColumn>
            <TableRowColumn style={center}>{item.buyPrice}</TableRowColumn>
            <TableRowColumn style={center}>{item.sellPrice}</TableRowColumn>
            <TableRowColumn style={{ minWidth: '250px', textAlign: 'center' }}>
              <div style={{ width: '100%', display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                <DeleteItemButtom item={item} />
                <EditItemButtom item={item} />
              </div>
            </TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

TableElem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default TableElem;
