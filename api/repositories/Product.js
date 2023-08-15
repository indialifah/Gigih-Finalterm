import Product from '../models/Product.js';

export const addProduct = (link, title, price) => {
    const newProduct = Product.create({link, title, price});

    return newProduct;
};

export const getAllProducts = () => {
    const allProducts = Product.find();

    return allProducts;
};

export const getProductById = (id) => {
    const product = Product.findById({_id: id});

    return product;
};

export const getProductByVideoId = (video_id) => {
    const videoProduct = Product.find({video_id});

    return videoProduct;
};