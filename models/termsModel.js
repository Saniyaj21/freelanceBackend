// image model here
import mongoose from "mongoose"


const termsSchema = new mongoose.Schema({

    para: {
        type: String,
    }


})

export const Terms = mongoose.model("Terms", termsSchema);