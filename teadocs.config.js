'use strict';
const path = require('path')

module.exports = {
    doc: {
        name: "",
        description: "",
        version: "",
        dir: "",
        outDir: "",
        staticDir: ""
    }, 
    theme: {
        dir: "", 
        title: "",
        headHtml: "",
        footHtml: "",
        isMinify: true,
        rootPath: "/mydocs/"
    },
    nav: {
        tree: "./tree"
    }
}