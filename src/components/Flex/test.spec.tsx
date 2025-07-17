import { render } from '../../utils/test-utils';
import { Flex } from './';

describe('Flex component', () => {
    it('renders children and applies default styles', () => {
        const { container } = render(
            <Flex data-testid="flex-container">
                <div>Child</div>
            </Flex>
        );
        const flex = container.querySelector('[data-testid="flex-container"]');
        expect(flex).toBeInTheDocument();
        expect(flex).toHaveStyle('display: flex');
        expect(flex).toHaveStyle('flex-direction: row');
    });

    it('applies custom props correctly', () => {
        const { getByTestId } = render(
            <Flex
                data-testid="flex-custom"
                direction="column"
                alignItens="center"
                justify="space-between"
                wrap="wrap"
                gap="1rem"
                margin="2rem"
            />
        );
        const flex = getByTestId('flex-custom');
        expect(flex).toHaveStyle('flex-direction: column');
        expect(flex).toHaveStyle('align-items: center');
        expect(flex).toHaveStyle('justify-content: space-between');
        expect(flex).toHaveStyle('flex-wrap: wrap');
        expect(flex).toHaveStyle('gap: 1rem');
        expect(flex).toHaveStyle('margin: 2rem');
    });
});
