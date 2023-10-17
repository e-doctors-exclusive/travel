const {Brands}= require("../database/index")

module.exports = {
    getAll : async (req,res)=> {
        try {
            const result = await Brands.findAll({})
            res.status(200).json(result)
        } catch (error) {
            throw error
        }
    },
    add : async (req, res)=> {
        try {
            const result = await Brands.create(req.body)
            res.status(201).json(result)
        } catch (error) {
            throw error
        }
    },
    deletee : async (req, res) =>{
        try {
            const result = await Brands.destroy({where : {id: req.params.id}})
            res.json(result)
        } catch (error) {
            throw error 
        }
    },
    updatee : async (req, res) =>{
        try {
            const result = await Brands .update(req.body, {where : {id: req.params.id}})
            res.json(result)
        } catch (error) {
            throw error 
        }
    }
}