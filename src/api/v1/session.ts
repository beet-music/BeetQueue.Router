import * as express from "express";
import { Router } from "express";
import { notImplementedError } from "../../model/error";
const router = Router();

router.get("/", (req, res) => {
    // TODO: get session
    res.status(501);
    res.send(notImplementedError());
});

router.post("/", (req, res) => {
    // TODO: new session
    res.status(501);
    res.send(notImplementedError());
});

router.put("/", (req, res) => {
    // TODO: updates session
    res.status(501);
    res.send(notImplementedError());
});

router.delete("/", (req, res) => {
    // TODO: expires the session immediately
    res.status(501);
    res.send(notImplementedError());
});

export default router;
