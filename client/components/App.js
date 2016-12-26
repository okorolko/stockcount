import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AddItem from './AddItem';
import AddCategory from './AddCategory';
import CategoryContainer from '../containers/CategoryContainer';
import TableContainer from '../containers/TableContainer';


const App = () => {
  return (
    <div style={{ padding: '30px' }} >
      <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'flex-start', height: '13vh' }}>
        <div style={{ display: 'flex', flexFlow: 'row wrap', alignSelf: 'flex-end', height: '100%' }}>
          <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={'/client/pics/logo.jpg'} alt="stock count" />
        </div>
        <div style={{ display: 'flex', flexFlow: 'row wrap', paddingLeft: '30px' }}>
          <AddItem />
          <AddCategory />
        </div>
      </div>
      <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
        <div style={{ width: '15vw' }} >
          <CategoryContainer />
        </div>
        <div style={{ width: '75vw', padding: '0 10px' }} >
          <TableContainer />
        </div>
      </div>
    </div>
  );
};

// App.propTypes = {
//   children: PropTypes.element.isRequired,
// };
const MapStateToProps = (state) => {
  return {

  }
}

export default connect(MapStateToProps)(App);
