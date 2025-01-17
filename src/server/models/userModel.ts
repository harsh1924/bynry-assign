import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for a document
interface IUser extends Document {
    name: string;
    imgUrl: string;
    description: number;
    address: string;
}

// Define the schema for the document
const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, 'Please provide user name'],
        minLength: [2, 'Name should be atleast 2 characters long'],
        maxLength: [20, 'Name should not be more than 20 characters long'],
    },
    imgUrl: {
        type: String,
        required: [true, 'Please Provide Image URL']
    },
    description: {
        type: Number,
        required: [true, 'Please provide user description'],
    },
    address: {
        type: String,
        required: [true, 'Please provide user address'],
    }
}, {
    timestamps: true
});

// Create the model
const UserModel = mongoose.model<IUser>('User', userSchema);

export default UserModel;