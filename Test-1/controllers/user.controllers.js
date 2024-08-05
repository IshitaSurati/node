


const signup=(req, res)=> {
  const { username, password } = req.body;
  if (find(username)) {
    return res.status(400).json({ message: 'User already exists' });
  }
 addUser({ username, password });
  res.status(201).json({ message: 'User created successfully' });
}

const login=(req, res) =>{
  const { username, password } = req.body;
  const user = findUserByUsername(username);
  if (user && user.password === password) {
    return res.status(200).json({ message: 'Login successful' });
  }
  res.status(400).json({ message: 'Invalid credentials' });
}

module.exports = { signup, login };
