import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import styles from './styles.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

export default class AddTodo extends Component {
  handleClick(e) {
    const inputNode = findDOMNode(this.refs.input);
    const text = inputNode.value.trim();
    this.props.onAddClick(text);
    inputNode.value = '';
  }
  render() {
    return (
      <div className={cx({addTodo:true})}>
        <input type='text' ref='input' />
        <button onClick={ e => this.handleClick(e) }>
          Add
        </button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
