import React, { Component, useState, useEffect } from 'react';

export const Button = ({ className, children }): React.ReactElement => {
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

const listData = [1, 2, 3, 4];

export class ButtonLoading extends Component<
  { children: React.ReactElement },
  { loading: boolean }
> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render(): React.ReactElement {
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
