const grpc = require('grpc');
const hello = require('./hello');

const server = new grpc.Server();

const proto = grpc.load('./hello.proto');

server.addProtoService(proto.foo.micro.service, {
    getAge: hello.getAge
});

server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());
server.start();

console.log('server started');