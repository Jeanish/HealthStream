import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Message } from "../models/messageSchema.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  try {
    // Validate Input
    const { error, value } = messageSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      return next(new ErrorHandler(error.details.map((err) => err.message).join(", "), 400));
    }

    // Create a new message
    const newMessage = await Message.create(value);

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully!",
      data: newMessage._id, // Only send the message ID to avoid exposing full data
    });
  } catch (err) {
    return next(new ErrorHandler("Internal Server Error", 500));
  }
});

/**
 * @desc Get all messages (Admin Only)
 * @route GET /api/messages
 * @access Private (Require authentication & admin role)
 */
export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  try {
    // Ensure only admins can access this
    if (!req.user || req.user.role !== "admin") {
      return next(new ErrorHandler("Unauthorized Access", 403));
    }

    const messages = await Message.find().select("-__v"); // Exclude unnecessary fields

    res.status(200).json({
      success: true,
      messages,
    });
  } catch (err) {
    return next(new ErrorHandler("Internal Server Error", 500));
  }
});