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


export async function mostrarUsuario(id){
    const db = await ConectarBD()   
    try{
        const result = await db.getFirstAsync("select * from usuarios where id = ?", id)
        if(result){
            console.log("Usuários encontrados: ", result)
        }else{
            console.log("Sem usuários cadastrados!")
        }
    }catch(e){
        console.log("Erro ao mostrar usuários!", e)
    }
}

export async function atualizarUsuario(id, nome, email, senha){
     const db = await ConectarBD()
    try{
        const usuarioExiste = await db.getFirstAsync("select * from usuarios where id = ?", id)
        if(usuarioExiste){
            const result = await db.runAsync(`
            update usuarios set nome = ?, email = ?, senha = ? where id = ?`,
                nome, email, senha, id)
            console.log("Usuário atualizado com sucesso! ")
            }else{
                console.log("Usuário não encontrado!")
            }
    }catch(e){
        console.log("Erro ao atualizar usuário!", e)
    }   
}

export async function removerUsuario(id){
     const db = await ConectarBD()
    try{
        const usuarioExiste = await db.getFirstAsync("select * from usuarios where id = ?", id)
        if(usuarioExiste){
            const result = await db.runAsync(`
                delete from usuarios where id = ?`, id)
            console.log("Usuário removido com sucesso! ")
            }else{
                console.log("Usuário não encontrado!")
            }
    }catch(e){
        console.log("Erro ao remover usuário!", e)
    }   
}