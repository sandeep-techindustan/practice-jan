//File Name: config.js
//Path: src/config/
//Description: This file is used to set the environment variables.
const config =
{
    'NODE_ENV' 	: process.env.NODE_ENV,
    'dev'      	: process.env.NODE_ENV === 'development',
    'prod'     	: process.env.NODE_ENV === 'production',
    'test'     	: process.env.NODE_ENV === 'test',
    'debug'    	: process.env.DEBUG || false,
    'baseName' 	: process.env.BASENAME || '',
    'api' 		: process.env.API || '',
    'gaID' 		: process.env.GA_ID || 'UA-82642500-5'
}


export default config
