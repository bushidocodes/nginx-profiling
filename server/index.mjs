import express from 'express';
const app = express();

const simulatedRuntime = parseInt(process.argv[2], 10) || 1000;
const port = 1337;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main(){
    try {
        app.get('/', async (_, res) => {
            console.log(`Doing stuff for ${simulatedRuntime}ms`);
            await sleep(simulatedRuntime);
            res.send('Hello World')
        });
        app.get('/noop', async (_, res) => res.send('OK'));
        app.listen(port, () => console.log(`Example app listening on port ${port} simulating ${simulatedRuntime}ms!`));
    } catch(err) {
        console.error(err);
    };
}

main();