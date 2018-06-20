import ajax from '../config/ajax'
export const register = data => ajax('/proxy/admin/register', data, 'POST');
export const saveCompanyFile = data => ajax('/proxy/admin/saveCompanyFile', data, 'POST');
export const saveCulture = data => ajax('/proxy/admin/saveCulture', data, 'POST');
export const editSave = data => ajax('/proxy/admin/editSave', data, 'POST');
export const editAdmin = data => ajax('/proxy/admin/editAdmin', data, 'GET');
// export const getAdminRole = data => ajax('/admin/role', data, 'POST');
// export const login = data => ajax('/ad/loginjson', data,'POST');