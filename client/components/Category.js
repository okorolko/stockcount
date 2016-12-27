import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Clear from 'material-ui/svg-icons/content/clear';
import Dialog from 'material-ui/Dialog';


const Category = (props) => {
  const {
    open,
    categories,
    handleDelete,
    handleCategorySelect,
    openDeleteModal,
    closeDeleteModal } = props;

  return (
    <div style={{ paddingTop: '5vh' }}>
      {categories.map((category, index) => {
        const id = category["_id"];
        return (
          <div key={id} style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'center' }}>
            <IconButton
              key={id}
              iconStyle={{ paddingRight: '0px' }}
              tooltip="удалить"
              onClick={() => openDeleteModal()}
            >
              <Clear />
            </IconButton>
            <Dialog
              modal={true}
              contentStyle={{ maxWidth: '30%', boxShadow: '0' }}
              overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
              open={open}
            >
              <IconButton
                style={{ position: 'absolute', top: '1vh', right: '1vh' }}
                tooltip="Закрыть"
                onClick={() => closeDeleteModal()}
              >
                <Clear />
              </IconButton>
              <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', paddingTop: '25px' }}>
                <form onSubmit={e => handleDelete(e, category)}>
                  <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                    <span>Вы точно хотите удалить категорию?</span>
                    <span>Все товары будут помечены без категории</span>
                    <div style={{ padding: '20px 20px 0 20px', width: '60%', display: 'flex',
                      flexFlow: 'row wrap', justifyContent: 'space-around'}}
                    >
                      <RaisedButton type="submit" label="Да" primary={true} />
                      <RaisedButton onClick={() => closeDeleteModal()} label="Нет" primary={true} />
                    </div>
                  </div>
                </form>
              </div>
            </Dialog>
            <FlatButton
              key={index}
              label={category.name}
              hoverColor="white"
              labelStyle={{ fontSize: '12px', paddingLeft: '0' }}
              style={{ paddingLeft: '0', marginTop: '-5px' }}
              onClick={() => handleCategorySelect(category.name)}
            />
          </div>
        );
      })}
      <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'center' }}>
        <IconButton
          iconStyle={{ paddingRight: '0px' }}
          style={{ opacity: '0' }}
        >
          <Clear />
        </IconButton>
        <FlatButton
          label="Без названия"
          hoverColor="white"
          labelStyle={{ fontSize: '12px', paddingLeft: '0' }}
          style={{ paddingLeft: '0', marginTop: '-5px', marginLeft: '-2px' }}
          onClick={() => handleCategorySelect('')}
        />
      </div>
    </div>
  );
};

Category.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  handleDelete: PropTypes.func.isRequired,
  handleCategorySelect: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  openDeleteModal: PropTypes.func,
  closeDeleteModal: PropTypes.func,
};

export default Category;
