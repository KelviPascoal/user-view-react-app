import { theme } from '../../styles/theme';
import { render } from '../../utils/test-utils';
import { Button } from './index';

describe('Button', () => {
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

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Button onClick={handleClick}>Click</Button>);
        const button = getByText('Click');

        button.click();
        expect(handleClick).toHaveBeenCalled();
    });

    it('does not call onClick when disabled', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Button disabled onClick={handleClick}>Disabled</Button>);
        const button = getByText('Disabled');

        button.click();
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('renders with custom className', () => {
        const { getByText } = render(<Button className="my-class">Classy</Button>);
        const button = getByText('Classy');

        expect(button).toHaveClass('my-class');
    });

    it('renders as another element with "as" prop', () => {
        const { getByText } = render(<Button as="a" href="#">Link</Button>);
        const button = getByText('Link');

        expect(button.tagName).toBe('A');
    });

    it('passes extra props', () => {
        const { getByText } = render(<Button data-testid="my-btn">Extra</Button>);

        expect(getByText('Extra')).toHaveAttribute('data-testid', 'my-btn');
    });
});