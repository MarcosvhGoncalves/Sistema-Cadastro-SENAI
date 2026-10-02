import { Professor } from "./Professor.js";
import { Aluno } from "./Aluno.js";
import { ValidadorUtil } from "./ValidadorUtil.js";

export class GestorAcademico {
    professor = [];
    aluno = [];
    cadastrarProfessor(nomeInfo, cpfInfo, emailInfo, salarioInfo, titulacaoInfo) {
        try {
            console.log("Iniciando cadastro de professor...");
            const professor = new Professor(nomeInfo, cpfInfo, emailInfo, salarioInfo, titulacaoInfo);
            professor.validarCpf(cpfInfo);
            professor.validarEmail(emailInfo);
            professor.validarSalario(salarioInfo);
            this.professor.push(professor);
            console.log("Cadastro de professor realizado com sucesso!");
        } catch(erro) {
            console.log("Erro detectado, cadastro não realizado.")
            this.traduzirErro(erro.message)
        }}

        cadastrarAluno(nomeInfo, cpfInfo, emailInfo, idadeInfo, cursoInfo, statusInfo) {
            try {
                console.log("Iniciando cadastro de aluno...");
                const aluno = new Aluno(nomeInfo, cpfInfo, emailInfo, idadeInfo, cursoInfo, statusInfo);
                aluno.validarNome(nomeInfo);
                aluno.validarCpf(cpfInfo);
                aluno.validarEmail(emailInfo);
                aluno.validarIdade(idadeInfo);
                this.aluno.push(aluno);
                console.log("Cadastro de aluno realizado com sucesso!");
            } catch(erro) {
                console.log("Erro detectado, cadastro não realizado.")
                this.traduzirErro(erro.message)
            }
    }
    
    traduzirErro(codigoErro){
        switch(codigoErro){
            case "ERR_CLASSE_ABSTRATA":
                console.log("AVISO: Não é possível cadastrar uma Pessoa genérica no sistema.")
                break;
            case "ERR_NOME_VAZIO":
                console.log("AVISO: O campo de nome é obrigatório e não pode ficar em branco.");
                break;
            case "ERR_CPF_INVALIDO":
                console.log("AVISO: O CPF informado é inválido. Digite exatamente 11 números sem formatação.");
                break;
            case "ERR_EMAIL_INVALIDO":
                console.log("AVISO: O endereço de e-mail deve conter um formato válido (ex: nome@dominio.com).");
                break;
            case "ERR_IDADE_MINIMA":
                console.log("AVISO: O aluno deve ter no mínimo 14 anos para efetuar a matrícula no SENAI.");
                break;
            case "ERR_SALARIO_BASE":
                console.log("AVISO: O salário registrado não pode ser inferior ao piso da categoria (R$ 1500,00).");
                break;
            case "ERR_IDADE_INVALIDA":
                console.log("AVISO: A idade informada não é válida. Digite apenas números.");
                break;
            case "ERR_SALARIO_INVALIDO":
                console.log("AVISO: O salário informado não é válido. Digite apenas números.");
                break;
            default:
                console.log("AVISO SISTÊMICO: Falha no processamento dos dados. Tente novamente.")
        }
    }
}