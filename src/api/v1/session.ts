import * as express from "express";
import { Router } from "express";
import makeError, { notImplementedError } from "../../model/error";
const router = Router();

router.get("/", (req, res) => {
    // TODO: get session
    res.send(notImplementedError());
});

router.post("/", (req, res) => {
    // TODO: new session
    res.send(notImplementedError());
});

router.put("/", (req, res) => {
    // TODO: updates session
    res.send(notImplementedError());
});

router.delete("/", (req, res) => {
    // TODO: expires the session immediately
    res.send(notImplementedError());
});

export default router;
