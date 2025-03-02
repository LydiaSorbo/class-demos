import express from 'express';
import {promises as fs} from 'fs';
//const express = require('express')
const app = express()

app.get('/', async (req, res) => {
    console.log("request to '/', sending back html")
    res.type("html")
    const fileContents = await fs.readFile("index.html")
    res.send(fileContents)
})

app.get('/style.css', async (req, res) => {
    console.log("request to '/style.css', sending back css content")
    res.type("css")
    const fileContents = await fs.readFile("style.css");
    res.send(fileContents);
})

app.get('/index.js', async (req, res) => {
    console.log("js is aliiiiive");
    res.type("js");
    let fileContents = await fs.readFile("index.js");
    res.send(fileContents);
})

app.get('/api/getTime', (req, res) => {
    const time = new Date();
    res.type("txt")
    res.send(time);
})

app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})
