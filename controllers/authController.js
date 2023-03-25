const register = (req, res) => {
    res.send('Register User')
}
const login = (req, res) => {
    res.send('Login User')
}
const updateUser = (req, res) => {
    res.send('update User')
}

export {register, login, updateUser}