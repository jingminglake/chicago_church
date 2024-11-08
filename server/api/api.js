const router = require("express").Router();

module.exports = router;

router.use("/email", require("./routes/email"));
