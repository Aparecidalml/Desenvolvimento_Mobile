import { ConectarBD } from "../database/database";

export async function inserirUsuario(nome, email, senha){
    const db = await ConectarBD()
    try{
        const result = await db.runAsync(`
            insert into usuarios (nome, email, senha) values (?, ?, ?)`, 
            nome, email, senha)
        console.log("Usuário inserido com sucesso! ")
    }catch(e){
        console.log("Erro ao inserir usuário!", e)
    }        
}

export async function mostrarUsuarios(){
    const db = await ConectarBD()   
    try{
        const result = await db.getAllAsync("select * from usuarios")
        if(result.length > 0){
            console.log("Usuários encontrados: ", result)
        }else{
            console.log("Sem usuários cadastrados!")
        }
    }catch(e){
        console.log("Erro ao mostrar usuários!", e)
    }
}