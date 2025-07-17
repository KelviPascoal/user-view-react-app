import { styled } from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
`;

type SearchInputProps = {
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({ handleSearch }: SearchInputProps) => (
    <Input type="text" placeholder="Buscar por nome"
        onChange={() => handleSearch} />
)