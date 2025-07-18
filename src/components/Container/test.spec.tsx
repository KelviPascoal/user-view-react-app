import { render } from '../../utils/test-utils';
import { Container } from './';

describe('Container component', () => {
    it('renders children and has correct styles', () => {
        const { getByTestId } = render(
            <Container data-testid="container">
                <div>Content</div>
            </Container>
        );

        const container = getByTestId('container');

        expect(container).toBeInTheDocument();
        expect(container).toHaveStyle('max-width: 1200px');
        expect(container).toHaveStyle('width: 100%');
        expect(container).toHaveStyle('padding-top: 1rem');
    });
});
