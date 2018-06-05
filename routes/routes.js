const express=require('express');
const router=express.Router();
const Contact=require('../models/contacts');

//retrieving contacts
router.get('/contacts',function(req,res,next){
  Contact.find(function(err,contacts){
    res.json(contacts);
  })
});

//add contacts
router.post('/contact',function(req,res,next){
  let newContact=new Contact({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    phone_number:req.body.phone
  });
  newContact.save(function(err,contact){
    if(err){
      res.json({msg:"Failed To add Contact"});
    }
    else{
      res.json({msg:"added Contact Successfully"});
    }
  });
});

//delete contacts
router.delete('/contacts/:id',function(req,res,next){
  Contact.remove({__id:req.params.id},function(err,result){
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }
  })

});
module.exports=router;
