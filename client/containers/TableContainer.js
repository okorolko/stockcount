import React from 'react';
import { connect } from 'react-redux';
import TableElem from '../components/TableElem';
import { fetchItem } from '../actions/fetchItem';

class TableContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    this.props.dispatch(fetchItem());
  }

  render() {
    return (
      <TableElem
        {...this.props}
      />
    );
  }
}

function catFilter(selectedCat = '', categoriesArray = []) {
  if (selectedCat === 'all') return categoriesArray;
  return categoriesArray.filter((elem) => {
    return elem.category === selectedCat;
  });
}

const MapStateToProps = (state) => {
  const { items, categoryFilter } = state;
  return {
    items: catFilter(categoryFilter, items.all) || [],
  };
};

export default connect(MapStateToProps)(TableContainer);
