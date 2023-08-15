import { createProductService, getAllProductsService, getProductByIdService, getProductByVideoIdService } from "../services/Product.js";

export const createProduct = async (req, res) => {
    const {link, title, price, video_id} = req.body;
    
    const newProduct = await createProductService(link, title, price, video_id);

    res.status(201).json({data: newProduct});
;}

export const getAllProducts = async (req, res) => {
    const allProducts = getAllProductsService();
    
    res.json({data: allProducts});
};

export const getProductById = async (req, res) => {
    const {id} = req.params;
    
    const product = await getProductByIdService(id);

    res.json({data: product});
};

export const getProductByVideoId = async (req, res) => {
    const {video_id} = req.params;

    const product = await getProductByVideoIdService(video_id);

    res.json({data: product});
}