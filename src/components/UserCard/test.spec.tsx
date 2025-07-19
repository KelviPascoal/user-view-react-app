import { render } from '../../utils/test-utils';
import { screen } from '@testing-library/react';
import { UserCard } from './';
import { mockUsers } from '../../__mock__/mockUsers';

const mockUser = mockUsers[0];

describe('UserCard component', () => {
    it('renders user info correctly', () => {
        render(<UserCard user={mockUser} sideItems={null} />);

        expect(screen.getByText(mockUser.name)).toBeInTheDocument();
        expect(screen.getByText(mockUser.email)).toBeInTheDocument();
        expect(screen.getByText(mockUser.phone)).toBeInTheDocument();
    });

    it('renders sideItems correctly', () => {
        render(
            <UserCard
                user={mockUser}
                sideItems={<button>Click me</button>}
            />
        );

        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('renders wrapper with correct HTML tag based on "as" prop', () => {
        const { container } = render(<UserCard user={mockUser} sideItems={null} as="section" />);
        const section = container.querySelector('section');

        expect(section).toBeInTheDocument();
    });

    it('renders wrapper as div by default', () => {
        const { container } = render(<UserCard user={mockUser} sideItems={null} />);
        const div = container.querySelector('div');

        expect(div).toBeInTheDocument();
    });
});
