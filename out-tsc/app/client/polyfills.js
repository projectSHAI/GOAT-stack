"use strict";
/*
==================================================================================
-- Polyfills for webpack ---------------------------------------------------------
==================================================================================
** Some simple polyfills for the development environment                        **
** This file is used by webpack to include the proper polyfills                 **
** The webpack file is located here: GOATstack/config/webpack/webpack.common.js **
==================================================================================
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
==================================================================================
-- Polyfills for webpack ---------------------------------------------------------
==================================================================================
** Some simple polyfills for the development environment                        **
** This file is used by webpack to include the proper polyfills                 **
** The webpack file is located here: GOATstack/config/webpack/webpack.common.js **
==================================================================================
*/
require("core-js/es6");
require("core-js/es7/reflect");
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
    // Production
}
else {
    // Development
    require('zone.js/dist/long-stack-trace-zone');
    Error.stackTraceLimit = Infinity;
}
