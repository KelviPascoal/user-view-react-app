import { Input } from './';
import { render } from '../../utils/test-utils';
import { theme } from '../../styles/theme';

describe('Input component', () => {
    it('renders and applies default styles', () => {
        const { getByRole } = render(<Input placeholder="Test input" />);
        const input = getByRole('textbox');

        expect(input).toBeInTheDocument();
        expect(input).toHaveStyle(`font-size: ${theme.font.sizes.medium}`);
        expect(input).toHaveStyle(`border: 1px solid ${theme.colors.border}`);
        expect(input).toHaveStyle(`border-radius: ${theme.border.radius}`);
        expect(input).toHaveStyle(`background-color: ${theme.colors.background}`);
        expect(input).toHaveStyle(`color: ${theme.colors.black}`);
    });

    it('applies disabled styles correctly', () => {
        const { getByRole } = render(<Input disabled placeholder="Disabled input" />);
        const input = getByRole('textbox');

        expect(input).toHaveAttribute('disabled');
        expect(input).toHaveStyle(`background-color: ${theme.colors.secondary}`);
        expect(input).toHaveStyle(`color: ${theme.colors.border}`);
    });
    it('renders with custom className and passes extra props', () => {
        const { getByRole } = render(
            <Input className="my-input" data-testid="input-test" />
        );
        const input = getByRole('textbox');

        expect(input).toHaveClass('my-input');
        expect(input).toHaveAttribute('data-testid', 'input-test');
    });

    it('renders with custom type', () => {
        const { getByPlaceholderText } = render(
            <Input type="password" placeholder="Senha" />
        );
        const input = getByPlaceholderText('Senha');

        expect(input).toHaveAttribute('type', 'password');
    });

    it('renders with custom placeholder', () => {
        const { getByPlaceholderText } = render(
            <Input placeholder="Digite aqui" />
        );

        expect(getByPlaceholderText('Digite aqui')).toBeInTheDocument();
    });
});
