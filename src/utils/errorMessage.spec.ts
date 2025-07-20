import { getUserFriendlyErrorMessage } from './errorMessage';

describe('getUserFriendlyErrorMessage', () => {
    it('deve retornar a mensagem correta para o status 404', () => {
        expect(getUserFriendlyErrorMessage(404)).toBe(
            'Não encontramos o que você está procurando.'
        );
    });

    it('deve retornar a mensagem correta para o status 500', () => {
        expect(getUserFriendlyErrorMessage(500)).toBe(
            'Algo deu errado no nosso sistema. Tente novamente mais tarde.'
        );
    });

    it('deve retornar a mensagem correta para os status 401 e 403', () => {
        expect(getUserFriendlyErrorMessage(401)).toBe(
            'Você não tem permissão para acessar esta funcionalidade.'
        );
        expect(getUserFriendlyErrorMessage(403)).toBe(
            'Você não tem permissão para acessar esta funcionalidade.'
        );
    });

    it('deve retornar a mensagem correta para o status 400', () => {
        expect(getUserFriendlyErrorMessage(400)).toBe(
            'Ocorreu um erro na sua requisição. Verifique os dados e tente novamente.'
        );
    });

    it('deve retornar a mensagem correta para o status 408', () => {
        expect(getUserFriendlyErrorMessage(408)).toBe(
            'A requisição demorou demais. Por favor, tente novamente.'
        );
    });

    it('deve retornar a mensagem padrão para status desconhecido', () => {
        expect(getUserFriendlyErrorMessage(999)).toBe(
            'Ocorreu um erro inesperado. Tente novamente em instantes.'
        );
    });
});
