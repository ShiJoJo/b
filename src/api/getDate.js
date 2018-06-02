import ajax from '../config/ajax'
export const login = data => ajax('/admin/login', data, 'POST');
export const register = data => ajax('/admin/register', data, 'POST');
export const saveCompanyFile = data => ajax('/admin/saveCompanyFile', data, 'POST');
export const saveCulture = data => ajax('/admin/saveCulture', data, 'POST');
// export const login = data => ajax('/ad/loginjson', data,'POST');