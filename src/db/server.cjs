const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const path = require('path');

const server = jsonServer.create();
// مسیردهی دقیق دیتابیس با استفاده از __dirname
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// کلیدهای مخفی برای ساخت توکن
const SECRET_KEY = '123456789';
const REFRESH_SECRET_KEY = '987654321';
const EXPIRES_IN = '1h'; // عمر توکن اصلی
const REFRESH_EXPIRES_IN = '7d'; // عمر رفرش توکن

server.use(middlewares);
server.use(jsonServer.bodyParser);

// --- توابع کمکی ---
const createToken = (payload, secret, expiresIn) => {
  return jwt.sign(payload, secret, { expiresIn });
};

const getUser = (email, password) => {
  return router.db.get('users').find({ email, password }).value();
};

const getUserByEmail = (email) => {
  return router.db.get('users').find({ email }).value();
};

// --- روت ثبت نام (Register) ---
server.post('/auth/register', (req, res) => {
  const { email, password, name } = req.body;

  if (getUserByEmail(email)) {
    return res.status(400).json({ message: 'این ایمیل قبلاً ثبت شده است' });
  }

  const db = router.db;
  const id = Date.now();

  db.get('users').push({ id, email, password, name }).write();

  const accessToken = createToken({ email, id }, SECRET_KEY, EXPIRES_IN);
  const refreshToken = createToken({ email, id }, REFRESH_SECRET_KEY, REFRESH_EXPIRES_IN);

  res.status(201).json({ accessToken, refreshToken, user: { id, email, name } });
});

// --- روت ورود (Login) ---
server.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = getUser(email, password);

  if (!user) {
    return res.status(401).json({ message: 'ایمیل یا رمز عبور اشتباه است' });
  }

  const accessToken = createToken({ email: user.email, id: user.id }, SECRET_KEY, EXPIRES_IN);
  const refreshToken = createToken({ email: user.email, id: user.id }, REFRESH_SECRET_KEY, REFRESH_EXPIRES_IN);

  res.status(200).json({ accessToken, refreshToken, user: { id: user.id, email: user.email, name: user.name } });
});

// --- روت رفرش توکن (Refresh Token) ---
server.post('/auth/refresh', (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ message: 'رفرش توکن ارسال نشده است' });
  }

  try {
    const verifyResult = jwt.verify(refreshToken, REFRESH_SECRET_KEY);

    const newAccessToken = createToken({ email: verifyResult.email, id: verifyResult.id }, SECRET_KEY, EXPIRES_IN);
    const newRefreshToken = createToken({ email: verifyResult.email, id: verifyResult.id }, REFRESH_SECRET_KEY, REFRESH_EXPIRES_IN);

    res.status(200).json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
  } catch (err) {
    res.status(401).json({ message: 'رفرش توکن نامعتبر یا منقضی شده است' });
  }
});

// --- میدلور محافظت از روت‌ها (Protected Routes) ---
server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    return res.status(401).json({ message: 'توکن ارسال نشده است' });
  }

  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, SECRET_KEY);
    next();
  } catch (err) {
    res.status(401).json({ message: 'توکن نامعتبر یا منقضی شده است' });
  }
});

server.use(router);

// اجرای سرور روی پورت 4000
server.listen(4000, () => {
  console.log('Mock Server with Auth is running on http://localhost:4000');
});