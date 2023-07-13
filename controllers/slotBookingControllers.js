

let slotBooking = require('../models/slotBooking');

let sloBook = async(req,res)=>{
    try{
let {date , startTime,endTime} = req.body;
console.log('date ===>', date ,' ' , 'startTime ===>', startTime , ' ',"endTime===>" , endTime)
slotBooking.findOne({where:{date , startTime,endTime}}).then((existedSlot)=>{
    if(existedSlot){
        return res.status(400).send({message:'slot is already existed'})
    };
    // create New Slot ; 
    slotBooking.create({date , startTime , endTime}).then((newSlot)=>{
        return res.status(200).send({response:newSlot , message:'Slot Created Successfully'})
    })
    .catch((err)=>{
        return res.status(401).send({message:'Slot Creating failed'})
    })
})
    }catch(err){
        return res.status(500).send({message:'Internal error'})
    }
};

let slotGet = async(req,res)=>{
    try{
      let slot = await slotBooking.findAll();
      return res.status(200).send({response:slot , message:'slots are fetched successfully'})
    }catch(err){

        return res.status(500).send({messsage:'Internal error'})
    }
}

module.exports = {sloBook , slotGet};
