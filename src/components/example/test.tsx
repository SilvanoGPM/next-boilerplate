import { render, screen } from '@testing-library/react';

import { Example } from '.';

describe('<Example />', () => {
  test('deve renderizar o componente de exemplo', () => {
    const { container } = render(<Example />);

    const expected = screen.getByRole('heading', {
      name: /componente de exemplo/i,
    });

    expect(expected).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
