import User from '../models/modelUser.js'
import bcrypt from 'bcrypt'
import { where } from 'sequelize'

export const listarUsuarios = async (req, res) => {
    try{
        const usuarios = await User.findAll()
        if(!usuarios) return res.status(400).json({mensagem: 'Não tem usuários!'})
        res.status(200).json(usuarios)
    }catch(err){
        res.status(500).json({mensagem: 'Erro no servidor!'})
    }
}

export const salvarUsuario = async (req, res) => {
    const {nome, email, senha} = req.body
    if(!nome && !email && !senha) return res.status(400).json({mensagem: 'Preencha todos os campos!'})
    try{       
        const senhaCript = await bcrypt.hash(senha, 10) 
        await User.create({nome: nome, email: email, senha: senhaCript})
        res.status(200).json({mensagem: 'Usuário criado com sucesso!'})
    }catch(err){
        res.status(500).json({mensagem: 'Erro no servidor!'})
    }
}

export const atualizarUsuario = async(req, res) => {
    const {nome, email, senha} = req.body
    if(!nome && !email && !senha) return res.status(400).json({mensagem: 'Preencha todos os campos!'})
    try{
        const usuarioBD = await User.findOne({where: {email: email}})
        if(!usuarioBD) return res.status(400).json({msg: 'Usuário não existe!'})
        const senhaCript = await bcrypt.hash(senha, 10) 
        await User.update({nome: nome, email: email,  senha: senhaCript}, {where: { id: usuarioBD.id}})
        res.status(200).json({msg: 'Usuário atualizado!'})       
    }catch(err){
        res.status(500).json({mensagem: 'Erro no servidor!'})
    }
}

export const removerUsuario = async (req, res) => {
    const id = req.params.id
    try{
        const usuarioBD = await User.findOne({where: {id: id}})
        console.log(usuarioBD)
        if(!usuarioBD) return res.status(400).json({msg: 'Usuário não existe!'})
        await User.destroy({where: {idUser: id}})
        res.status(200).json({msg: 'Usuário removido com sucesso!'})  
    }catch(err){
        res.status(500).json({mensagem: 'Erro no servidor!'})
    }    
}

export const atualizarParcialUsuario = async (req, res) => {
    const id = req.params.id
    const {nome, email, senha} = req.body  
    try{
        const usuarioNovo = {}
        if(nome) usuarioNovo.nome = nome
        if(email) usuarioNovo.email = email
        if(senha) {
            const senhaCript = await bcrypt.hash(senha, 10) 
            usuarioNovo.senha =   senhaCript 
        }
        const usuarioBD = await User.findOne({where: {id: id}})
        if(!usuarioBD) return res.status(400).json({msg: 'Usuário não existe!'})       
        await User.update(usuarioNovo, {where: { id: id}})
        res.status(200).json({msg: 'Usuário atualizado!'})       
    }catch(err){
        res.status(500).json({mensagem: 'Erro no servidor!'})
    }
}