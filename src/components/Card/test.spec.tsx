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
});
