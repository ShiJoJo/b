import { baseUrl } from './env'
export default async(url, data, type)=>{
	url= baseUrl+url;
	return  new Promise((resolve, reject) => {
				let xhr;
				if (window.XMLHttpRequest) {
					xhr = new XMLHttpRequest();
				} else {
					xhr = new ActiveXObject;
				}
				let sendData = '';
				if (type == 'POST') {
					Object.keys(data).forEach(key=>{
						sendData+=key+'='+data[key]+"&";
					})
					sendData = sendData.substr(0, sendData.lastIndexOf('&'));
					// sendData = JSON.stringify(data);
				}
				xhr.open(type, url, true);
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhr.send(sendData); 
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4) {
						if(xhr.status == 200 || xhr.status == 304){
							let obj = xhr.response;
							if (typeof obj !== 'object') {
								obj = JSON.parse(obj);
							}
							resolve(obj)
						}else{
							reject(xhr)
						}						
					}
				};
		    })      
}
/* export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
	type = type.toUpperCase();
	url = baseUrl + url;

	if (type == 'GET') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}

	if (window.fetch && method == 'fetch') {
		let requestConfig = {
			credentials: 'include',
			method: type,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			mode: "cors",
			cache: "force-cache"
		}

		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify(data)
			})
		}
		
		try {
			const response = await fetch(url, requestConfig);
			const responseJson = await response.json();
			return responseJson
		} catch (error) {
			throw new Error(error)
		}
	} else {
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject;
			}

			let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}

			requestObj.open(type, url, true);
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send(sendData);

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
		})
	}
} */