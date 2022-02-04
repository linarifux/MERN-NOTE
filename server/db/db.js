const mongoose = require('mongoose')
const URL = 'mongodb://localhost:27017/note'

const connection = async () => {
    try{
        await mongoose.connect(URL)
        console.log('DB Connected...');
    }catch(e){
        console.log('Error while connecting to DB', e);
    }
}

module.exports = connection