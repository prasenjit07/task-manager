const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TaskManager', {
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log('Connected')
}).catch((error)=>{
    console.log(error)
})

module.exports = {
    mongoose
}
