const mongoose = require('mongoose');
const Question = require('../../../models/question');
const Option = require('../../../models/option');

module.exports.createNewQuestion = async function(req,res){
    try{
        let question = await Question.create(req.body);
        if(question){
            //return 200 success response if it is created
            return res.status(200).json({
                question,
                data : { message : "New Question created Sucessfully !" },
            });
        }else{
            // else return status 500 internal server error
            return res.status(500).json({
                data : { message : "Internal Server Error" }
            });
        }  
    }catch(err){
        console.log("Error in creating question",err);
        return res.status(500).json({
            data : { message : "Internal Server Error" }
        });
    }
}