//mongoose
import mongoose from 'mongoose';
//BSON
const CarSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name must be at least 3 characters long"],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price must be a positive number"],
    },
    description: {
      type: String,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    category: {
      type: String,
      required: true,
      enum: ["sports car", "luxury car", "sedan", "SUV"],
    },
    stock: {
      type: Number,
      default: 0,
    }
})
const Car = mongoose.model('Car',CarSchema)

export default Car;
