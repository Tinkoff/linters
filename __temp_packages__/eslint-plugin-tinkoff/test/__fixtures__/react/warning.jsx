import React, { Component } from 'react';

export const Button = (props) => {
  return (
    <button type="button" className={props.className}>
      {props.children}
    </button>
  );
};

const listData = [1, 2, 3, 4];

export class ButtonLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  kkk() {
    const __under = 'result';
    return __under;
  }

  render() {
    const { children } = this.props;
    return (
      <Button>
        {children}{' '}
        {listData.map((item) => (
          <p key={item}>{item}</p>
        ))}
        {this.state.loading}
      </Button>
    );
  }
}
