import { ConectarBD, criarTabelaUsuarios } from "../database/database";
import * as SQLite from "expo-sqlite"

export async function inserirUsuario(nome, email, senha){
    const db = await ConectarBD()
    // try{
    //     const result = await SQLite.runAsync(db, `
    //     insert into usuarios (nome, email, senha) values (?, ?, ?)`, 
    //     [nome, email, senha])
    //     console.log("Usuário inserido com sucesso! ", result.lastInsertRowid)
    //     return result
    // }catch(e){
    //     console.log("Erro ao inserir usuário!", e)
    // }
        const result = await db.runAsync(`
        insert into usuarios (nome, email, senha) values (?, ? ,?)`,
        [nome, email, senha])
        console.log(result.lastInsertRowId)
        if(result.lastInsertRowId){
            console.log("Usuário inserido com sucesso! ")
            return result
        }else{
            console.log("Erro ao inserir usuário!")
        }           
}

export async function mostrarUsuarios(){
    const db = await ConectarBD()   
    const result = await db.getAllAsync("select * from usuarios")
    console.log(result.changes)
    if(result.length > 0){
        console.log("Usuários encontrados: ", result)
    }else{
        console.log("Erro ao mostrar usuários!")
    }
}