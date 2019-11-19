// loggedIn 方法
// localStorage token!
export default {
  loggedIn () {
    // localStorage.setItem('token', '111111');
    return localStorage.token
  },
  login (email, pass, cb) {
    setTimeout(() => {
      if (email === 'joe@eample.com' && pass === '11111111') {
        const token = Math.random().toString(36)
        .substring(7);
        localStorage.setItem('token',token);
        cb(true, token)
      } else {
        cb(false, '')
      }
    },500)
  },
  logout () {
   return localStorage.removeItem('token');
  }
}
