import * as SQLite from "expo-sqlite"

// npx expo install expo-sqlite

export async function ConectarBD(){
    const db = await SQLite.openDatabaseAsync('database.db')
    if(db){
        console.log("Banco de dados aberto com sucesso!")
        return db
    }else{
        console.log("Erro ao abrir o banco de dados")
    }
}

export async function criarTabelaUsuarios(){
    const db = await ConectarBD()
    try{
        const result = await db.execAsync(`
            create table if not exists usuarios(
                id integer primary key autoincrement not null, 
                nome text not null, 
                email text not null, 
                senha text not null
            );
            create table if not exists agendamentos(
                id integer primary key autoincrement not null, 
                paciente text not null, 
                medico text not null
            );
            
        `)
    console.log("Tabela de usuários criada com sucesso!")
    }catch(error){
        console.log("Erro ao criar a tabela de usuários", error)
    }
}

export async function apagarTabelaUsuarios(){
    const db = await ConectarBD()
    try {
        const result = await db.execAsync("drop table if exists usuarios;")
        console.log("Tabela de usuários apagada com sucesso!")        
    } catch (error) {   
        console.log("Erro ao apagar a tabela de usuários", error )
    }
}

