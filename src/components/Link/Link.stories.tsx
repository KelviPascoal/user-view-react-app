import { Link } from './';

export default {
    title: 'Components/Link',
    component: Link,
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'highlight'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        children: { control: 'text' },
        href: { control: 'text' },
    },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template = (args: any) => (
    <Link {...args} />
);

export const Default = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Default.args = {
    children: 'Link padrão',
    href: '#',
    variant: 'primary',
    size: 'medium',
};
