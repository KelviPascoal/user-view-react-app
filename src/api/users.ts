import axios from 'axios';
import { User } from '../store/modules/user/types';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

/**
 * Busca todos os usuários da API JSONPlaceholder.
 * @returns {Promise<User[]>}
 */
export async function fetchUsers(): Promise<User[]> {
    const response = await axios.get<User[]>(API_URL);

    return response.data;
}