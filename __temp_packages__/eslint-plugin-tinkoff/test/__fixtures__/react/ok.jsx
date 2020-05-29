import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const Button = ({ className, children }) => {
  const [, set] = useState(false);

  useEffect(() => {
    set(true);
  }, [set]);

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  className: 'button',
  children: null,
};

const listData = [1, 2, 3, 4];

export class ButtonLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;
    const { loading } = this.state;
    return (
      <Button>
        {children}{' '}
        {listData.map((item) => (
          <p key={item}>{item}</p>
        ))}
        {loading}
      </Button>
    );
  }
}
