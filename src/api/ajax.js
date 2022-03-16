import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {

	return new Promise((resolve,reject) => {
		let promise
		if (type === 'GET') {
			//query参数
			let dataStr = ''
			Object.keys(data).forEach(key => {
				dataStr += key + '=' + data[key] + '&'
			})
			//url
			if (dataStr !== '') {
				dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
				url = url + '?' + dataStr
			}
			promise = axios.get(url)
		} else if (type === 'POST') {
			promise = axios.post(url, data)
		}
		
		promise.then(response=>{
			resolve(response.data)
		},err=>{
			reject(err)
		})
	})
	

}
