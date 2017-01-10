module.exports = {
    getAge(call, callback) {
        console.log(call.request);

        //kafka
        callback(null, { age: 97 });
    }
}