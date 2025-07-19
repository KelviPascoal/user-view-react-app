import { theme } from '../../styles/theme';
import { render } from '../../utils/test-utils';
import { Button } from './index';

describe('Button component', () => {
    it('renders with default (primary) style', () => {
        const { getByText } = render(<Button>Click me</Button>);
        const button = getByText('Click me');

        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle(`background-color: ${theme.colors.primary}`);
        expect(button).toHaveStyle(`color: ${theme.colors.white}`);
    });

    it('renders with secondary variant', () => {
        const { getByText } = render(<Button variant="secondary">Secondary</Button>);
        const button = getByText('Secondary');

        expect(button).toHaveStyle(`background-color: ${theme.colors.secondary}`);
        expect(button).toHaveStyle(`color: ${theme.colors.black}`);
    });

    it('renders with highlight variant', () => {
        const { getByText } = render(<Button variant="highlight">Highlight</Button>);
        const button = getByText('Highlight');

        expect(button).toHaveStyle(`background-color: ${theme.colors.highlight}`);
        expect(button).toHaveStyle(`color: ${theme.colors.black}`);
    });

    it('applies disabled style', () => {
        const { getByText } = render(<Button disabled>Disabled</Button>);
        const button = getByText('Disabled');

        expect(button).toHaveStyle(`cursor: not-allowed`);
    });
});