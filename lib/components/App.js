import React from 'react';

import Selector from './Selector';

class App extends React.Component {
  state = {
    answer: 42,
  };
  asyncFunc = () => {
    return Promise.resolve(37);
  };
  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }
  render() {
    return (
        <Selector />
    );
  }
}

export default App;