import { Text } from './';
import { render } from '../../utils/test-utils';

describe('Text component', () => {
    it('renders with default props', () => {
        const { getByText } = render(<Text>Default Text</Text>);
        const text = getByText('Default Text');

        expect(text).toBeInTheDocument();
        expect(text.tagName.toLowerCase()).toBe('p');
        expect(text).toHaveStyle(`margin: 0`);
        expect(text).toHaveStyle(`line-height: 1.5`);

    });

    it('renders with custom as prop', () => {
        const { container } = render(<Text as="span">Custom Text</Text>);
        const span = container.querySelector('span');

        expect(span).toBeInTheDocument();
        expect(span?.textContent).toBe('Custom Text');
    });

    it('renders children correctly', () => {
        const { getByText } = render(<Text>Children Test</Text>);

        expect(getByText('Children Test')).toBeInTheDocument();
    });
});
