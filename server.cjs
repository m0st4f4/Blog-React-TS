const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

const SECRET_KEY = "123456789";
const REFRESH_SECRET_KEY = "987654321";
const EXPIRES_IN = "1h";
const REFRESH_EXPIRES_IN = "7d";

server.use(middlewares);
server.use(jsonServer.bodyParser);

const createToken = (payload, secret, expiresIn) => {
  return jwt.sign(payload, secret, { expiresIn });
};

// --- Route (Register) ---
server.post("/auth/register", (req, res) => {
  const { email, password, username } = req.body;

  // Validate user data
  if (!email || !password || !username) {
    return res.status(400).json({
      message: "User Data is invalid",
    });
  }

  const usersDb = router.db.get("users");

  if (usersDb.find({ email }).value()) {
    return res.status(400).json({ message: "This email already exists" });
  }

  const lastUser = usersDb.sortBy("id").last().value();
  const id = lastUser ? Number(lastUser.id) + 1 : 1;

  // Write Data on DB
  usersDb
    .push({
      id,
      email,
      password,
      name: username,
      username,
      avatar: "https://i.pravatar.cc/150?u=" + username,
      bio: "",
      role: "subscriber",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .write();

  const accessToken = createToken({ email, id }, SECRET_KEY, EXPIRES_IN);
  const refreshToken = createToken(
    { email, id },
    REFRESH_SECRET_KEY,
    REFRESH_EXPIRES_IN,
  );

  res
    .status(201)
    .json({ accessToken, refreshToken, user: { email, username } });
});

// --- Route (Login) ---
server.post("/auth/login", (req, res) => {
  const { username, password } = req.body;
  const user = router.db.get("users").find({ username, password }).value();

  if (!user) {
    return res
      .status(401)
      .json({ message: "Username or Password is incorrect" });
  }

  const accessToken = createToken(
    { email: user.email, id: user.id },
    SECRET_KEY,
    EXPIRES_IN,
  );
  const refreshToken = createToken(
    { email: user.email, id: user.id },
    REFRESH_SECRET_KEY,
    REFRESH_EXPIRES_IN,
  );

  res.status(200).json({
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
      name: user.name,
    },
  });
});

// --- Route (Refresh Token) ---
server.post("/auth/refresh", (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token is incorrect" });
  }

  try {
    const verifyResult = jwt.verify(refreshToken, REFRESH_SECRET_KEY);

    const newAccessToken = createToken(
      { email: verifyResult.email, id: verifyResult.id },
      SECRET_KEY,
      EXPIRES_IN,
    );
    const newRefreshToken = createToken(
      { email: verifyResult.email, id: verifyResult.id },
      REFRESH_SECRET_KEY,
      REFRESH_EXPIRES_IN,
    );

    res
      .status(200)
      .json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
  } catch (err) {
    res.status(401).json({ message: "Refresh token is invalid or expired" });
  }
});

// --- Route (Method-based Authorization) ---
server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (req.method === "GET") {
    return next();
  }

  // Check access token for POST, PUT, PATCH, DELETE Methods
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Token is incorrect , login for this operation",
    });
  }

  try {
    const token = authHeader.split(" ")[1];
    req.user = jwt.verify(token, SECRET_KEY);
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is invalid or expired" });
  }
});

server.use(router);

server.listen(4000, () => {
  console.log("Mock Server is running on http://localhost:4000");
});
