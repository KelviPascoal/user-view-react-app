import { render } from '../../utils/test-utils';
import { Spinner } from './';

describe('Spinner component', () => {
    it('should render the spinner', () => {
        const { getByTestId } = render(<Spinner />);
        const spinner = getByTestId('spinner');

        expect(spinner).toBeInTheDocument();
    });

    it('should have correct basic styles', () => {
        const { getByTestId } = render(<Spinner />);
        const spinner = getByTestId('spinner');

        expect(spinner).toHaveStyle('border-radius: 50%');
        expect(spinner).toHaveStyle('width: 40px');
        expect(spinner).toHaveStyle('height: 40px');
        expect(spinner).toHaveStyle('margin: 2rem auto');
    });
});
