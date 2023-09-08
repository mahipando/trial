const Fastify = require('fastify');
// import Fastify from ('fastify');

const fastify = Fastify({ 
    logger: true, 
    requestTimeout: 30000,
});

fastify.get('/', async (req,res) => {
    res.send({hello: "world"});
    //return {hello: 'world'};
})


//PORT--------------------------------------------
const port = process.env.PORT || 8000;

// fastify.listen({port, host: '0.0.0.0'}, function(err, add){
//     if(err){
//         fastify.log.error(err);
//         process.exit(1);
//     }
//     fastify.log.info(`Fastify is listening on port: ${add}`);
// });

const start = async() => {
    try {
        await fastify.listen(`Listening on port:${port}`, {host: '0.0.0.0'});
    } catch (err){
        fastify.log.error(err);
        process.exit(1);
    }
}
start();