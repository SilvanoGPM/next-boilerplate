import { render, screen } from '@testing-library/react';

import { Example } from '.';

describe('<Example />', () => {
  test('should render the example component', () => {
    const { container } = render(<Example />);

    const expected = screen.getByRole('heading', {
      name: /component example/i,
    });
    expect(expected).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
