import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';
import { addCategory } from '../actions/addCategory';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleTouchTap(event) {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(addCategory(this.state.categoryName));
    this.setState({ open: false });
  }

  handleChangeText(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleChangeSelect(event, index, value) {
    this.setState({ category: value });
  }

  render() {
    return (
      <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'flex-end', marginLeft: '20px'}}>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Добавить категорию"
          primary={true}
        />
        <Dialog
          modal={true}
          open={this.state.open}
          contentStyle={{ width: '30%' }}
        >
        <IconButton
          style={{ position: 'absolute', top: '1vh', right: '1vh' }}
          tooltip="Закрыть"
          onClick={this.handleRequestClose}
        >
          <Clear />
        </IconButton>
        <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', paddingTop: '25px'}}>
          <span style={{fontSize: '20px'}}>Добавить категорию</span>
          <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
            <div>
              <TextField
                id="categoryName"
                floatingLabelText="Название"
                onChange={this.handleChangeText}
              />
            </div>
            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', paddingTop: '20px'}} >
              <RaisedButton onClick={this.handleSubmit} type="submit" label="Сохранить" primary={true} />
            </div>
          </form>
         </div>
        </Dialog>
      </div>
    );
  }
}

AddItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddItem);
