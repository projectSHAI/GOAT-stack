"use strict";
/*
======================================================================================
Used when process.env.NODE_ENV is equal to 'test'
======================================================================================
//This file adds config settings and overwrites config settings in the ./default.ts file
//process.env.NODE_ENV is utilized in config/config.ts
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.testEnv = {
    port: process.env.PORT || 7001
};
