function validate() {
  const { name, buyPrice, sellPrice } = this.state;
  let result = true;
  if (name === undefined || name === '') {
    this.setState({ validateName: 'Заполните поле' });
    result = false;
  }
  if (buyPrice === undefined || buyPrice === '') {
    this.setState({ validateBuyPrice: 'Заполните поле' });
    result = false;
  }
  if (sellPrice === undefined || sellPrice === '') {
    this.setState({ validateSellPrice: 'Заполните поле' });
    result = false;
  }
  return result;
}

export default validate;

