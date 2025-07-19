import { useTranslation } from 'react-i18next';
import { RiGlobalLine } from 'react-icons/ri';
import { Select, Wrapper } from './styles';

export function TranslateSelect() {
  const { i18n } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Wrapper>
      <RiGlobalLine size={20} />
      <Select value={i18n.language} onChange={handleChange}>
        <option value="pt">Português</option>
        <option value="en">English</option>
      </Select>
    </Wrapper>
  );
}