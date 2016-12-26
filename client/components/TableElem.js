import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import EditItemButtom from './EditItemButton';
import DeleteItemButtom from './DeleteItemButtom';

const TableElem = (props) => {
  const { items } = props;
  return (
    <Table>
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Название товара</TableHeaderColumn>
          <TableHeaderColumn>Цена / Закуп</TableHeaderColumn>
          <TableHeaderColumn>Цена</TableHeaderColumn>
          <TableHeaderColumn style={{width: '30%'}}></TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} >
        {items.map((item) => (
            <TableRow key={item["_id"]} >
              <TableRowColumn>{item["_id"]}</TableRowColumn>
              <TableRowColumn>{item.name}</TableRowColumn>
              <TableRowColumn>{item.buyPrice}</TableRowColumn>
              <TableRowColumn >{item.sellPrice}</TableRowColumn>
              <TableRowColumn style={{width: '30%'}}>
                <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'flex-end'}}>
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
