import React, { Component, useState, useEffect } from 'react';

export const Button = (props) => {
  const [, set] = useState(false);
  if (Math.random() > 0.5) {
    useEffect(() => {
      set(true);
    });
  }

  return <button className={props.className}>{props.children}</button>;
};

const listData = [1,2,3,4];

export class ButtonLoading extends Component {
  componentWillMount() {
    this.setState({
      loading: true
    })
  }
  render() {
    return <Button>{this.props.children} {listData.map(item => <p>{item}</p>)}</Button>;
  }
}
