const mongoose=require('mongoose')

const blogSchema = new mongoose.Schema({
    text:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('blog',blogSchema)