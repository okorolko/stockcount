import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category';
import { fetchCategory } from '../actions/fetchCategory';
import { deleteCategory } from '../actions/deleteCategory';
import { categoryFilter } from '../actions/categoryFilter';

class CategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
    this.state = { open: false };
  }
  componentDidMount() {
    this.props.dispatch(fetchCategory());
  }
  openDeleteModal() {
    this.setState({ open: true });
  }
  closeDeleteModal() {
    this.setState({ open: false });
  }
  handleDelete(e, category) {
    e.preventDefault();
    this.closeDeleteModal();
    this.props.dispatch(deleteCategory(category));
  }
  handleCategorySelect(category) {
    this.props.dispatch(categoryFilter(category));
  }
  render() {
    return (
      <Category
        handleCategorySelect={this.handleCategorySelect}
        handleDelete={this.handleDelete}
        openDeleteModal={this.openDeleteModal}
        closeDeleteModal={this.closeDeleteModal}
        open={this.state.open}
        {...this.props}
      />
    );
  }
}

const MapStateToProps = (state) => {
  return {
    categories: state.categories.all || [],
    filter: state.categoryFilter,
  };
};

CategoryContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(MapStateToProps)(CategoryContainer);
