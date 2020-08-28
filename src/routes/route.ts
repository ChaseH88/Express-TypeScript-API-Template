const express = require("express");
const router = express.Router();
const { getRoute } =  require('../controllers/route');

router
  .route("/")
    .get(getRoute);
    
export default router;