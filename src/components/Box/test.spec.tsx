import React from 'react';
import { Box } from './'; // ajuste o caminho se necessário
import { render } from '../../utils/test-utils';

describe('Box component', () => {
    it('renders with default styles', () => {
        const { getByText } = render(<Box>Content</Box>);
        const box = getByText('Content');

        expect(box).toBeInTheDocument();
    });

    it('supports the "as" prop', () => {
        const { container } = render(<Box as="section">Section Element</Box>);
        const section = container.querySelector('section');

        expect(section).toBeInTheDocument();
        expect(section?.textContent).toBe('Section Element');
    });

    it('applies responsive margin using theme scale', () => {
        const { getByText } = render(<Box margin={2}>With Margin</Box>);
        const box = getByText('With Margin');

        expect(box).toHaveStyle('margin: 8px');
    });
});
