const Model = require('../models/Decrees');

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
        const query = req.body.title
        try {
            const content = await Model.find({title: /query/i})
            if(content.length)
            res.status(401).json({
                success: true,
                message: "Já existe um registro com esse nome!"
            })
        } catch (error) {
            res.status(401).json({
                success: false,
                message: "Erro ao verificar existência desse nome!"
            })
        }

        try {
            const content = await Model.create(req.body)
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
            const ifExistsRegister = await Model.findById(req.params.id)

            if(!ifExistsRegister)
            res.status(401).json({
                success: false,
                message: "Código deste registro não foi encontrado!"
            })

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
        } catch(error) {
            res.status(400).json({
                success: false,
                message: "Erro ao verificar existencia do registro!"
            })
        }
    },
    async update(req, res){
        try {
            const content = await Model.updateOne({_id: req.params.id}, req.body)
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