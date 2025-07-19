import { Heading } from ".";
import { render } from "../../utils/test-utils";

describe('Heading component', () => {
    it('renders with default props', () => {
        const { getByText } = render(<Heading>Default Heading</Heading>);
        const heading = getByText('Default Heading');

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveStyle(`margin: 0`);
        expect(heading).toHaveStyle(`line-height: 1.2`);
    });

    it('renders with custom as prop', () => {
        const { container } = render(<Heading as="h1">Custom Heading</Heading>);
        const heading = container.querySelector('h1');

        expect(heading).toBeInTheDocument();
        expect(heading?.textContent).toBe('Custom Heading');
    });

    it('renders children correctly', () => {
        const { getByText } = render(<Heading>Children Test</Heading>);

        expect(getByText('Children Test')).toBeInTheDocument();
    });
});