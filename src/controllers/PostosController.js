const Model = require('../models/Postos');
const ModelPerson = require('../models/Person');

module.exports = {
    async findAll(req, res){
        const content = await Model.find();
        if(content.length)
        res.status(200).json({
            success: true,
            content: content
        })
        
        res.status(200).json({
            success: false,
            message: 'Nenhum registro encontrado'
        })
    },
    async insert(req, res){
        let storage = ''
        try {
            const Authorizate = await ModelPerson.findById(req.headers.auth, ["_id"])
            if(!Authorizate)
            res.status(401).json({
                success: false,
                message: "Access not authorized, id Person inválid"
            })

            storage = Object.assign({_personId: Authorizate._id}, req.body)
        } catch (error) {
            res.status(401).json({
                success: false,
                message: "Error in check validate for person!"
            })
        }

        const query = req.body.name
        try {
            const content = await Model.find({name: /query/i})
            if(content.length)
            res.status(401).json({
                success: false,
                message: "Já existe um registro com esse nome!"
            })
        } catch (error) {
            res.status(401).json({
                success: false,
                message: "Erro ao verificar existência desse nome!"
            })
        }

        try {
            const content = await Model.create(storage)
            if(content)
            res.status(200).json({
                success: true,
                message: "Cadastro realizado com sucesso"
            })

            res.status(200).json({
                success: false,
                message: 'Não foi possível cadastrar!'
            })
                        
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Erro em adicionar um novo registro!"
            })
        }
    },
    async delete(req, res){
        try {
            const Authorizate = await ModelPerson.findById(req.headers.auth, ["_id"])
            if(!Authorizate)
            res.status(401).json({
                success: false,
                message: "Access not authorized, id Person inválid"
            })
        } catch (error) {
            res.status(401).json({
                success: false,
                message: "Error in check validate for person!"
            })
        }

        try {
            const ifExistsRegister = await Model.findById(req.params.id)

            if(!ifExistsRegister)
            res.status(401).json({
                success: false,
                message: "Código deste registro não foi encontrado!"
            })

        } catch(error) {
            res.status(400).json({
                success: false,
                message: "Erro ao verificar existencia do registro!"
            })
        }

        try{
            const content_delete = await Model.deleteOne({_id: req.params.id})
            if(content_delete)
            res.status(200).json({
                success: true,
                message: "Registro deletado com sucesso!"
            })                

            res.status(400).json({
                success: false,
                message: "Registro não foi deletado!"
            })
        }
        catch(error) {
            res.status(400).json({
                success: false,
                message: "Erro ao deletar registro!"
            })
        }
    },
    async update(req, res){
        let storage = ''
        try {
            const Authorizate = await ModelPerson.findById(req.headers.auth, ["_id"])
            if(!Authorizate)
            res.status(401).json({
                success: false,
                message: "Access not authorized, id Person inválid"
            })

            storage = Object.assign({_personId: Authorizate._id}, req.body)
        } catch (error) {
            res.status(401).json({
                success: false,
                message: "Error in check validate for person!"
            })
        }

        try {
            const content = await Model.updateOne({_id: req.params.id}, storage)
            if(content.nModified)
            res.status(200).json({
                success: true,
                message: "Registro atualizado com sucesso!"
            })

            res.status(200).json({
                success: false,
                message: 'Não foi possível cadastrar!'
            })
        } catch(error) {
            res.status(400).json({
                success: false,
                message: "Erro grave!"
            })
        }
        
    }
}