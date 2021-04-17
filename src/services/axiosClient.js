import axios from 'axios';
import qs from 'qs';
const axiosClient = axios.create({
	baseUrl: 'https://elearning0706.cybersoft.edu.vn/api',
	// tu cau hinh cach lay params mac dinh cua axios
	// bo qua gia tri null va undefined trong params
	paramsSerializer: (params) => qs.stringify(params, { skipNulls: true }),
});
export { axiosClient };
