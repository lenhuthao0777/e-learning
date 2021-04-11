import axios from 'axios';

const axiosClient = axios.create({
	baseUrl: 'https://elearning0706.cybersoft.edu.vn/api',
});
export { axiosClient };
