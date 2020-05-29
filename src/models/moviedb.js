const mongoose = require('mongoose');


const movieSchema = mongoose.Schema({
  
    title : {type: String, require: true},
    director: {type: String, require: true},
    actor: [
       { type: String, require: true }
    ],
    movieYear : {type: String, require: true},
    title : {type: String, require: true},
    Producer:  {type: String, require: true}

});


movieSchema.method('transform', () => {
    const obj = this.toObject();
 
    //Rename fields
    obj.id = obj._id;
    delete obj._id;
 
    return obj;
});

module.exports = mongoose.model('Moviedb', movieSchema);