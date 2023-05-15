import express from "express";
import pool from "../database/config.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  pool.query("SELECT * FROM categories", (err, results) => {
    if (err) next(err);
    else res.send({ msg: "GET_ALL", results });
  });
});

router.get("/:id", (req, res, next) => {
  res.send({ msg: "GET" });
});

router.post("/", (req, res, next) => {
  res.send({ msg: "POST" });
});

router.put("/:id", (req, res, next) => {
  res.send({ msg: "PUT" });
});

router.delete("/:id", (req, res, next) => {
  res.send({ msg: "DELETE" });
});

export default router;
