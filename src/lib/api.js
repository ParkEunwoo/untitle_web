import axios from 'axios';

export const signIn = ({name, number, id, password, phone}) => axios.post('/api/users', {name, number, id, password, phone});