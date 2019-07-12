import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onSubmit = e => {
    //use arrow func to avoid bind(this)
    e.preventDefault();
    if(this.state.text === '') {
      this.props.setAlert('Por favor, escreva algo', 'light');
    } else {
      this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value }); //we dont need {} cause we have only one expression
  //this.setState({text: e.target.value});//below if we have more inputs like email last name...

  render() {
    const {showClear, clearUsers} = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Procurar usuário...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            className='btn btn-dark btn-block'
            value='Pesquisar'
          />
        </form>
        {showClear && (
          <button
            className='btn btn-light btn-block'
            onClick={clearUsers}
          >
            Limpar
          </button>
        )}
      </div>
    );
  }
}

export default Search;
