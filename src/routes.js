const { Router } = require("express");
const userRoutes = require("./app/routes/user");

const router = Router();

router.use("/users", userRoutes);

router.use((req, res) => {
  res.statusCode(404);
});

module.exports = router;
