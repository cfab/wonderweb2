// https://www.npmjs.com/package/ssh-deploy-release
require('dotenv').config()
const Deployer = require('ssh-deploy-release');

const options = {
    localPath: '_site',
    host: process.env.DEPLOY_HOST,
    username: process.env.DEPLOY_USER,
    agent: process.env.DEPLOY_AGENT,
    deployPath: process.env.DEPLOY_PATH
};

const deployer = new Deployer(options);
deployer.deployRelease(() => {
    console.log('Ok !')
});
