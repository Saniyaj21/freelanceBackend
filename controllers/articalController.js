// controllers here
import { ArticleModel } from '../models/articleModel.js';


//get unique Image using image Id
export const allArtical = async (req, res) => {

    try {
        const artical = await ArticleModel.find()
        res.status(200).json({
            success: true,
            artical
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: "No artical Found!",
        })
    }

}
export const postArtical = async (req, res) => {

    try {


        const { article, product, inPrice, price, unit, inStock, description } = req.body
        const artical = await ArticleModel.create({
            article, product, inPrice, price, unit, inStock, description
        })
        res.status(200).json({
            success: true,
            artical
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: "No artical Found!",
        })
    }

}
