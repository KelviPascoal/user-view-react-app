import { RiGlobalLine } from 'react-icons/ri';
import { Select, Wrapper } from './styles';

export default {}

export function TranslateSelect() {

    return (
        <Wrapper>
            <RiGlobalLine size={20} />
            <Select >
                <option value="pt">Português</option>
                <option value="en">English</option>
            </Select>
        </Wrapper>
    );
}
