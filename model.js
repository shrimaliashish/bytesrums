const mongoose = require('mongoose');



const bookSchema = new mongoose.Schema({
  title: {
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  },
  genre:{
    type:String,
    required:true
  },
  year:{
    type:String,
    required:true
  },
});

const Book = mongoose.model('Books', bookSchema);
module.exports = Book
