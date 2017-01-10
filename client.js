const grpc = require('grpc');
const proto = grpc.load('./hello.proto');

const client = new proto.foo.micro('0.0.0.0:50051', grpc.credentials.createInsecure());

client.getAge({name: 'jacky', age: 22}, function(err, response) {
    console.log(err, response);
});