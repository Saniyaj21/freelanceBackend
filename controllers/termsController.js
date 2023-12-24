// controllers here
import { Terms } from '../models/termsModel.js';


//get unique Image using image Id
export const allTerms = async (req, res) => {
   
    try {
        const terms = await Terms.find()
        res.status(200).json({
            success: true,
            terms
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: "No terms Found!",
        })
    }

}
