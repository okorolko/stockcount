import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';
import { editItem } from '../actions/editItem';

class EditItemButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }
  componentDidMount () {
    const { item } = this.props;
    this.setState(item);
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
    this.props.dispatch(editItem(this.state));
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
      <div
        style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'flex-end'}}
      >
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Изменить"
          primary={true}
          style={{marginLeft: '20px'}}
        />
        <Dialog
          modal={true}
          open={this.state.open}
          contentStyle={{ width: '35%' }}
        >
          <IconButton
            style={{ position: 'absolute', top: '1vh', right: '1vh' }}
            tooltip="Закрыть"
            onClick={this.handleRequestClose}
          >
            <Clear />
          </IconButton>
          <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', paddingTop: '25px' }}>
            <span style={{ fontSize: '20px' }}>Изменить категорию</span>
            <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
              <SelectField
                floatingLabelText="Категория"
                hintText="Категория"
                value={this.state.category}
                onChange={this.handleChangeSelect}
                id="category"
              >
                {this.props.categories.map((elem, i) => (
                  <MenuItem
                    key={i}
                    value={elem.name}
                    primaryText={elem.name}
                  />
                ))}
              </SelectField>
              <TextField
                id="name"
                floatingLabelText="Название"
                onChange={this.handleChangeText}
                value={this.state.name}
              />
              <TextField
                id="buyPrice"
                floatingLabelText="Закупочная стоимость"
                onChange={this.handleChangeText}
                value={this.state.buyPrice}
              />
              <TextField
                id="sellPrice"
                floatingLabelText="Розничная цена"
                onChange={this.handleChangeText}
                value={this.state.sellPrice}
              />
              <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', paddingTop: '20px' }} >
                <RaisedButton onClick={this.handleSubmit} type="submit" label="Сохранить" primary={true} />
              </div>
            </form>
          </div>
        </Dialog>
      </div>
    );
  }
}

EditItemButton.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

const MapStateToProps = (state) => {
  return {
    categories: state.categories.all || [],
    items: state.items.all || [],
  };
};

export default connect(MapStateToProps)(EditItemButton);
