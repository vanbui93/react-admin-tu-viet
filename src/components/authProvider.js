export default {
    // Được gọi khi user cố đăng nhập
    login: ({ username }) => {
        localStorage.setItem('username', username);
        // chấp nhận tất cả username/password
        return Promise.resolve();
    },
    // Được gọi khi user click vào nút logout
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // Được gọi khi API trả về một lỗi
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // Được gọi khi user điều hướng đến một vị trí mới, để kiểm tra xác thực
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    // Được gọi khi user điều hướng đến một location mới, để kiểm tra quyền đăng nhập/ vai trò
    getPermissions: () => Promise.resolve(),
};