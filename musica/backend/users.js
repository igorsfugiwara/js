const express = require('express');
const router = express.Router();

// Simulando um banco de dados de usuários
const users = [
  { id: 1, email: 'usuario@teste.com', password: '123456' }
];

// Rota para autenticação do usuário
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Verifica se o usuário existe
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  // Se o usuário existe, retorna sucesso
  res.json({ message: 'Login bem-sucedido', user });
});

module.exports = router;
