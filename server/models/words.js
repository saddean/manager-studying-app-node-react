const mongoose = require('mongoose');
const validator = require('../validation/dict');

const wordSchema = new mongoose.Schema({
    english: {
        type: String,
        trim: true,
        required: true,
        unique:true
    },
    vietnamese: {
        type: String,
        trim: true,
        required: true,
    },
});

wordSchema.statics.findEnglishByVietnamese = function (vietnamese) {
    let word = this;
    return word.findOne({
        'vietnamese': vietnamese
    })
}
wordSchema.statics.findVietnameseByEnglish = function (english) {
    let word = this;
    return word.findOne({
        'english': english
    })
}

wordSchema.post('save',validator.handleDict11000);


const Words = mongoose.model('words', wordSchema);
module.exports = Words