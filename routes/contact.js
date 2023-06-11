const express = require("express")
const router =express.Router()
const Contact = require("../modele/Contact")

//localhost:5000/contact/test

router.get('/test',(req,res)=>{
    res.send("tested")
})
//add contact
    router.post('/addContact',(req,res)=>{
        const{ name,age,favoriteFoods}=req.body
        const newContact = new Contact({ name,age,favoriteFoods})
        newContact.save()
        .then(contacts=>res.send(contacts))
        .catch(err=>console.log(err))
    })
    //get all contacts
    router.get('all',(req,res)=>{
        Contact.find()
        .then(contacts=>res.send(contacts))
        .catch(err=>console.log(err))
    })
    //delet contact
    router.delete("deleteContact/:id",(req,res)=>{
    const {_id}=req.parames
    Contact.findoneAndDelete({_id})
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})
//get contact by id
router.get("/:_id",(req,res)=>{
    const{_id}=req.params
    Contact.findOne({id})
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})

//edit contact
router.put("/editContact/:id",(req,res)=>{
    const{_id}=req.params
const{ name,age,favoriteFoods}=req.body
Contact.findOneUpdate({_id},{$set:{ name,age,favoriteFoods}})
.then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))



})
    module.exports=router
