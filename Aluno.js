import { PessoaBase } from "./PessoaBase.js";
import { statusMatriculaEnum } from "./Dominio.js";

export class Aluno extends PessoaBase {
  #idade;

  constructor(nomeInfo, cpfInfo, emailInfo, idadeInfo, cursoInfo, statusInfo) {
    super(nomeInfo, cpfInfo, emailInfo);
    
    this.curso = cursoInfo;
    this.status = statusMatriculaEnum.ATIVA;
    this.#idade = idadeInfo;
  }
  get idade() {
    return this.#idade;
  }

  validarIdade(idadeInfo) {
    if (idadeInfo < 14 || idadeInfo > 120) {
      throw new Error("ERR_IDADE_MINIMA");
    }
    if (typeof idadeInfo != "number" || isNaN(idadeInfo)) {
      throw new Error("ERR_IDADE_INVALIDA");
    }
    
  }
}
