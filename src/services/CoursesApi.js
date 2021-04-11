const { axiosClient } = require('./axiosClient');

const coursesApi = {
	getCourses: () => {
		return axiosClient.get('/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01');
	},
	getCoursesByCate: (cate) => {
		const params = { madanhmuc: cate, maNhom: 'GP01' };
		return axiosClient.get('/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc', {
			params,
		});
	},
};

export { coursesApi };
/*
    cach xai
    import coursesApi from "...."
    const {data} = await coursesApi.getCourses()
**/
