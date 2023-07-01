const blogModel=require('../model/blogSchema')

module.exports.getblog=async(req,res)=>{
    const blog=await blogModel.find({})
    res.send(blog)
}

module.exports.saveblog=async(req,res)=>{
    const {text,description}=req.body

    blogModel.create({text,description}).then((data)=>{
        res.send(data);
    })   
}

module.exports.updateblog=async(req,res)=>{
    const {_id,text,description}=req.body
    blogModel.findByIdAndUpdate(_id,{text,description}).then(()=>{
        res.send("update succesfull...")
    }).catch((err)=>{console.log(err)})
    
}
module.exports.deleteblog=async(req,res)=>{
    const {_id}=req.body
    blogModel.findByIdAndDelete(_id).then(()=>{
        res.send("delete succesfull...")
    }).catch((err)=>{console.log(err)})
    
}
