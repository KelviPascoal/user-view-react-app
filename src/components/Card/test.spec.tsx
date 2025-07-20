import { render, screen } from '@testing-library/react';
import { Card } from './';

describe('Card component', () => {
    it('renders children correctly', () => {
        render(<Card>Conteúdo do Card</Card>);
        expect(screen.getByText('Conteúdo do Card')).toBeInTheDocument();
    });

    it('applies default styles', () => {
        const { container } = render(<Card>Teste</Card>);
        const card = container.firstChild as HTMLElement;

        expect(card).toHaveStyle('cursor: pointer');
    });

    it('applies custom styles passed as props', () => {
        const customRadius = 20;
        const { container } = render(
            <Card borderRadius={customRadius} padding={4} backgroundColor="red">
                Custom Card
            </Card>
        );
        const card = container.firstChild as HTMLElement;

        expect(card).toHaveStyle(`border-radius: ${customRadius}px`);
        expect(card).toHaveStyle(`background-color: red`);
        expect(card).toHaveStyle(`padding: 16px`);
    });

    it('renders with custom className', () => {
        const { container } = render(<Card className="my-card">Class Card</Card>);
        const card = container.firstChild as HTMLElement;

        expect(card).toHaveClass('my-card');
    });

    it('passes extra props', () => {
        render(<Card data-testid="card-test">Extra Props</Card>);
        expect(screen.getByTestId('card-test')).toBeInTheDocument();
    });

    it('applies boxShadow and border props', () => {
        const { container } = render(
            <Card boxShadow="0 0 8px #000" border="2px solid blue">
                Shadow Card
            </Card>
        );
        const card = container.firstChild as HTMLElement;

        expect(card).toHaveStyle('box-shadow: 0 0 8px #000');
        expect(card).toHaveStyle('border: 2px solid blue');
    });

    it('applies hover styles', () => {
        const { container } = render(
            <Card hover={{ backgroundColor: 'yellow' }}>Hover Card</Card>
        );
        const card = container.firstChild as HTMLElement;

        expect(card).toBeInTheDocument();
        expect(card).toHaveStyle('cursor: pointer');
    });

    it('renders as another element with "as" prop', () => {
        const { container } = render(<Card as="section">Section Card</Card>);
        const card = container.querySelector('section');

        expect(card).toBeInTheDocument();
        expect(card?.textContent).toBe('Section Card');
    });
});
