"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const fs = require('fs');
const app = express();
const port = 4000;
const MrP_json_1 = __importDefault(require("../data/animations/MrP.json"));
app.get('/', (req, res) => {
    res.statusCode = 501;
    res.send("Please specifiy a path");
});
app.get('/Test/:TestVar', (req, res) => {
    res.send({
        "Test": "Test",
        "URL variable": req.params.TestVar
    });
});
app.get('/Animation', (req, res) => {
    res.send(MrP_json_1.default);
});
app.listen(port, () => {
    console.log(`Server up on port ${port}`);
});
