const bcrypt = require('bcrypt');
const Model = require('../models/Person');

module.exports = {
    async findAll(req, res){
        const content = await Model.find().select(["_id","name", "email"]);
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
    async findId(req, res){
        try {
            const content = await Model.findById(req.params.id).select(["_id","name", "email"]);
            if(content)
            res.status(200).json({
                success: true,
                content: content
            })
            
            res.status(200).json({
                success: false,
                message: 'Nenhum registro encontrado'
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                message: 'Erro na pesquisa pelo registro!'
            })
        }
    },
    async auth(req, res){
        const content = await Model.findOne({
            email: req.body.email
        }, ["_id","password"])
        console.log(content)

        if(!content)
        res.status(401).json({
            success: false,
            message: 'E-mail incorreto!'
        })

        const checkPassword = bcrypt.compareSync(req.body.password, content.password)
        if(!checkPassword)
        res.status(401).json({
            success: false,
            message: "Senha ou E-mail incorreto!"
        })
        
        res.status(200).json({
            success: true,
            content: {_id: content._id}
        })
    },
    async insert(req, res){
        const query = RegExp(req.body.name, "i");
        try {
            const content = await Model.find({name: query})
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
            const {password, ...restContent} = req.body
            const newPassword = bcrypt.hashSync(password, 10)
            const join_data = Object.assign({password: newPassword}, restContent)
            console.log(join_data)
            const content = await Model.create(join_data)
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
            console.log(error)
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