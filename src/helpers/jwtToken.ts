import jwt from 'jsonwebtoken';

const secret = 'segredo';

const jwtToken = (user: object): string => {
  const token = jwt.sign(user, secret, { expiresIn: '1h' });
  return token;
};

export default jwtToken;
