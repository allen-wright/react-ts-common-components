import React from 'react';

type FormProps = {
  inputs: Object[]
};

type FormState = {
  inputs: Object[],
  handleChange?: VoidFunction
};

class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      inputs: [],
    }
  }

  static getDerivedStateFromProps(props: FormProps, state: FormState) {
    if (props !== state) {
      return {
        props
      }
    }
    return null;
  }

  render() {
    return (
      <form className="form">
        <p>test</p>
      </form>
    )
  }
}

export default Form;