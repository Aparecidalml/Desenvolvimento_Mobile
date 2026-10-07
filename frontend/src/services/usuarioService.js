import api from "./api.js";

export async function listarUsuarios(){
     try {
        const resposta = await api.get("usuarios");
        console.log(resposta.data)
        return resposta.data;
       
    } catch (erro) {
        console.error(erro)
        return []
    }
}