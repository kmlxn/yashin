import React, { Component } from 'react';


export default class extends Component {
  state = {}
  onChange

  _onChange (value) {
    console.log(value);
    this.props.onChange && this.props.onChange(value);
  }

  render () {
    return <ul className="scrollable-select">
      {(this.props.elems || []).map(({ value, children }) =>
        <li className={value === this.props.value ? 'active' : ''}
          key={value}
          onClick={() => this._onChange(value)}
        >
          {children}
        </li>
      )}
  </ul>
}
}