import mongoose from "mongoose";

export interface IImageProduct {
    fileName: string, 
    originalName: string 
};

export interface IProduct {
    title: string,
    image: IImageProduct,
    category: string,
    description?: string,
    price?: number
};

const imageSchema = new mongoose.Schema<IImageProduct>({
    fileName: {
        type: String,
        required: true,
    },
    originalName: {
        type: String,
        required: true,
    }
})

const productSchema = new mongoose.Schema<IProduct>({
    title: {
        type: String,
        minlength: 2,
        maxlength: 30,
        required: true,
        unique: true,
    },
    image: {
        _id: false, 
        imageSchema,
    },    
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: false,
        default: null,
    },
});

export default mongoose.model<IProduct>('product', productSchema);