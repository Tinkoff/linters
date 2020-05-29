import React, { Component } from 'react';

export const Button = (props): React.ReactElement => {
  return (
    <button type="button" className={props.className}>
      {props.children}
    </button>
  );
};

const listData = [1, 2, 3, 4];

export class ButtonLoading extends Component<
  { children: any },
  { loading: boolean }
> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render(): React.ReactElement {
    return (
      <Button>
        {this.props.children}{' '}
        {listData.map((item) => (
          <p key={item}>{item}</p>
        ))}
        {this.state.loading}
      </Button>
    );
  }
}
