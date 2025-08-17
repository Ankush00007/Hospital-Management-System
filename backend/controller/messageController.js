import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js"; 
import { Message } from "../models/messageSchema.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { json } from "express";


export const sendMessage = catchAsyncErrors(async (req, res, next) => {
    console.log("Request Body:", req.body);  // Log the incoming request body for debugging

    const { firstName, lastName, email, phone, message } = req.body;

    // Check if all fields are present
    if (!firstName || !lastName || !email || !phone || !message) {
      return next(new ErrorHandler("Please Fill Full Form",400));
    }
        // Save the message to the database
        await Message.create({ firstName, lastName, email, phone, message });
        res.status(200).json({
            success: true,
            message: "Message Sent Successfully!",
        });
});

export const getAllMessages=catchAsyncErrors(async(req,res,next)=>{
  const messages=await Message.find();
   res.status(200).json({
      success:true,
      messages,
   });
});
