export function getUserFriendlyErrorMessage(status: number): string {
    switch (status) {
        case 404:
            return 'Não encontramos o que você está procurando.';
        case 500:
            return 'Algo deu errado no nosso sistema. Tente novamente mais tarde.';
        case 401:
        case 403:
            return 'Você não tem permissão para acessar esta funcionalidade.';
        case 400:
            return 'Ocorreu um erro na sua requisição. Verifique os dados e tente novamente.';
        case 408:
            return 'A requisição demorou demais. Por favor, tente novamente.';
        default:
            return 'Ocorreu um erro inesperado. Tente novamente em instantes.';
    }
}
