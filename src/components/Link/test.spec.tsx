import { screen } from '@testing-library/react';
import { Link } from './';
import { theme } from '../../styles/theme';
import { render } from '../../utils/test-utils';

describe('Link component', () => {
    it('renders with default props and has correct font size', () => {
        render(<Link href="#">Test Link</Link>);
        const link = screen.getByText('Test Link');

        expect(link).toBeInTheDocument();

        const styles = getComputedStyle(link);

        expect(styles.fontSize).toBe(theme.font.sizes.medium);
    });

    it('renders with small size and correct font size', () => {
        render(<Link size="small">Small Link</Link>);
        const link = screen.getByText('Small Link');

        const styles = getComputedStyle(link);

        expect(styles.fontSize).toBe(theme.font.sizes.small);
    });

    it('renders with large size and correct font size', () => {
        render(<Link size="large">Large Link</Link>);
        const link = screen.getByText('Large Link');

        const styles = getComputedStyle(link);

        expect(styles.fontSize).toBe(theme.font.sizes.large);
    });
});
