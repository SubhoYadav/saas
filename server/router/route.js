const express = require("express");
const router = express.Router();

// user routes
const userController = require("../controllers/userC");
const chatController = require("../controllers/chatC.js");

router.get("/router/cs", function (request, response) {
  response.json({
    message: "Test Route Working Fine!",
  });
});

router.post("/user/add", userController.userAdd);
router.post("/user/list", userController.userList);
router.post("/user/login", userController.userLogin);
// Chat apis
router.post("/chat/initiate", chatController.initiateChat);

router.post("/upload_image", (req, res) => {
  res.json({ msg: "recieving" });
});

module.exports = router;
