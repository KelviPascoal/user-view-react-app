import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './';

describe('Card component', () => {
    it('renders children correctly', () => {
        render(<Card>Conteúdo do Card</Card>);
        expect(screen.getByText('Conteúdo do Card')).toBeInTheDocument();
    });

    it('applies default styles', () => {
        const { container } = render(<Card>Teste</Card>);
        const card = container.firstChild as HTMLElement;

        expect(card).toHaveStyle('box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px');
        expect(card).toHaveStyle('cursor: pointer');
    });

    it('applies custom styles passed as props', () => {
        const customShadow = 'rgba(100, 100, 100, 0.5) 0px 10px 15px';
        const customRadius = 20;
        const { container } = render(
            <Card shadow={customShadow} borderRadius={customRadius} padding={4} backgroundColor="red">
                Custom Card
            </Card>
        );
        const card = container.firstChild as HTMLElement;

        expect(card).toHaveStyle(`box-shadow: ${customShadow}`);
        expect(card).toHaveStyle(`border-radius: ${customRadius}px`);
        expect(card).toHaveStyle(`background-color: red`);
        expect(card).toHaveStyle(`padding: 16px`);
    });

    it('changes box-shadow on hover', () => {
        const hoverShadow = 'rgba(0, 0, 0, 0.5) 0px 15px 25px';
        const { container } = render(
            <Card hoverShadow={hoverShadow} shadow="none">
                Hover Test
            </Card>
        );
        const card = container.firstChild as HTMLElement;

        expect(card).toHaveStyle('box-shadow: none');

        fireEvent.mouseEnter(card);
        expect(card).toHaveStyle(`box-shadow: ${hoverShadow}`);

        fireEvent.mouseLeave(card);
        expect(card).toHaveStyle('box-shadow: none');
    });
});
