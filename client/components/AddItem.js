import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import Clear from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import { addItem } from '../actions/addItem';

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
    const item = {
      category: this.state.category,
      name: this.state.name,
      buyPrice: this.state.buyPrice,
      sellPrice: this.state.sellPrice,
    };
    this.props.dispatch(addItem(item));
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
      <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'flex-end'}} >
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Добавить товар"
          primary={true}
        />
        <Dialog
          modal={true}
          open={this.state.open}
          contentStyle={{ minWidth: '25%', maxWidth: '35%' }}
        >
          <IconButton
            style={{ position: 'absolute', top: '1vh', right: '1vh' }}
            tooltip="Закрыть"
            onClick={this.handleRequestClose}
          >
            <Clear />
          </IconButton>
          <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', paddingTop: '25px' }}>
            <span style={{ fontSize: '20px' }}>Добавить товар</span>
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
              />
              <TextField
                id="buyPrice"
                floatingLabelText="Закупочная стоимость"
                onChange={this.handleChangeText}
              />

              <TextField
                id="sellPrice"
                floatingLabelText="Розничная цена"
                onChange={this.handleChangeText}
              />
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

const MapStateToProps = (state) => {
  return {
    categories: state.categories.all || [],
  };
};

export default connect(MapStateToProps)(AddItem);
