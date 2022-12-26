const { response } = require("express");
const ProductData = require("../model/ProductModel");

module.exports = {
    async add(req, res) {
        const data = req.body
        const response = {};
        try {
            const input = await new ProductData(req.body).save();
            console.log(input)
            if (input) {
                response.status = "success";
                response.message = "product added successfully"
            }
            else {
                response.status = "failed";
                response.message = "product isn't added"
            }
        }
        catch (err) {
            response.status = "failed";
            response.messag = "something went wrong"
        }
        res.json(response)
    },

    async getAll(req, res) {
        const response = {};
        try {
            const products = await ProductData.find({});
            console.log(products);
            if (products) {
                response.status = "success";
                response.message = "products get successfully";
                response.body = products;
            }
            else {
                response.status = "failed";
                response.message = "products couldn't fetch";
            }
        }
        catch (err) {
            response.status = "failed";
            response.message = "something went wrong during getting products";
        }

        res.json(response)
    },

    async getOne(req, res) {
        const data = req.query.id;
        console.log(data)
        const response = {};
        try {
            const product = await ProductData.find({_id:data})
            console.log(product)
            if (product) {
                response.status = "success";
                response.message = "product get successfully";
                response.body = product;
            }
            else{
                response.status = "failed";
                response.message = "product couldn't fetch";
            }
        }
        catch (err) {
            response.status = "failed";
            response.message = "something went wrong during getting products";
        }
        res.json(response)
    },

    async delete(req, res) {
        const data = req.query.id;
        console.log(data)
        const response = {};
        try {
            const product = await ProductData.find({_id:data})
            console.log(product)
            const obj = await ProductData.deleteOne({_id:data});
            console.log(obj)
            if (obj.deletedCount==1) {
                response.status = "success";
                response.message = "product delete successfully";
                response.body = product;
            }
            else{
                response.status = "failed";
                response.message = "product couldn't delete";
            }
        }
        catch (err) {
            response.status = "failed";
            response.message = "something went wrong during deleting product";
        }
        res.json(response)
    },
    
    async update(req, res) {
        const id = req.query.id
        const data = req.body;
        // console.log(data)
        const response = {};
        try {
            const product = await ProductData.find({_id:id})
            // console.log(product)
            const obj = await ProductData.updateOne({_id:id},{$set:{...data}});
            console.log(obj)
            if (obj.modifiedCount==1) {
                response.status = "success";
                response.message = "product update successfully";
                response.body = obj;
            }
            else{
                response.status = "failed";
                response.message = "product couldn't update";
            }
        }
        catch (err) {
            response.status = "failed";
            response.message = "something went wrong during updating product";
        }
        res.json(response)
    }
}