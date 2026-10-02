import { PessoaBase } from "./PessoaBase.js";


export class Professor extends PessoaBase {
  #salario;
  constructor(nomeInfo, cpfInfo, emailInfo, salarioInfo, titulacaoInfo) {
    super(nomeInfo, cpfInfo, emailInfo);
    this.#salario = salarioInfo;
    this.titulacao = titulacaoInfo;
  }
  get salario() {
    return this.#salario;
  }

  validarSalario(salarioInfo) {
    if (salarioInfo < 1500) {
      throw new Error("ERR_SALARIO_BASE");
    }
    if (typeof salarioInfo != "number" || isNaN(salarioInfo)) {
      throw new Error("ERR_SALARIO_INVALIDO");
    }
  }
}
