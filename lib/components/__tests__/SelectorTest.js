import React from 'react';
import Selector from '../Selector';

import renderer from 'react-test-renderer';

describe('Selector', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Selector />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});