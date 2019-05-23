import React, { Component } from 'react';


export default class extends Component {
  state = {}

  onChange (value) {
    this.props.onChange && this.props.onChange(value);
  }

  makeElemClassName ({ value, highlighted }) {
    const activeClass = value === this.props.value ? 'active' : '';
    const highlightedClass = highlighted ? 'highlighted' : '';
    return activeClass + ' ' + highlightedClass;
  }

  render () {
    return <ul className="scrollable-select">
        {(this.props.elems || []).map(({ value, children, highlighted }) =>
          <li className={this.makeElemClassName({ value, highlighted })}
            key={value}
            onClick={() => this.onChange(value)}
            dangerouslySetInnerHTML={{__html: children}}
          >
          </li>
        )}
    </ul>
  }
}