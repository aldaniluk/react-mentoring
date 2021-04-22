import React from 'react';
import { Logo } from './Logo';
import { render } from '@testing-library/react';

it('Logo testing', () => {
    const { asFragment } = render(<Logo />);

    expect(asFragment()).toMatchSnapshot();
});