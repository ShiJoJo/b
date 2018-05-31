import fetch from '../config/fetch'

// export const login = data => fetch('/ad/loginjson', data, 'POST');
export const register = data => fetch('/admin/register', data, 'POST');
export const saveCompanyFile = data => fetch('/admin/saveCompanyFile', data, 'POST');
export const saveCulture = data => fetch('/admin/saveCulture', data, 'POST');
// export const login = data => Ajax.post('/ad/loginjson', data);