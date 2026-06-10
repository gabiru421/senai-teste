const ERRO_PAYLOAD = "Payload deve ser um objeto válido";
const ERRO_NOME = "O campo nome é obrigatório";
const ERRO_HABILIDADES = "O campo habilidades deve conter pelo menos um item";




const validarCandidato = (candidato) => {
   
//PAYLOAD 
    
    if (!candidato || typeof candidato !== 'object' || Array.isArray(candidato)) {
        throw new Error(ERRO_PAYLOAD);
    }

//NOME 

    if (typeof candidato.nome !== 'string' || candidato.nome.trim() === ''){
        throw new Error(ERRO_NOME);
    }

//HABILIDADES

    if (!Array.isArray(candidato.habilidades) || candidato.habilidades.length === 0) {
        throw new Error(ERRO_HABILIDADES);
    }

    return true;

}

module.exports = { validarCandidato };




