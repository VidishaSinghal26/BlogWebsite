const {Router}=require('express')

const {getblog,saveblog,updateblog,deleteblog}=require('../controller/blogContoller')

const router=Router();

router.get('/',getblog)
router.post('/save',saveblog)
router.post('/update',updateblog)
router.post('/delete',deleteblog)

module.exports= router;