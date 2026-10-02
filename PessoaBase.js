import { ValidadorUtil } from "./ValidadorUtil.js";
export class PessoaBase {
  #nome;
  #cpf;
  #email;
  constructor(nomeInfo, cpfInfo, emailInfo) {
    if (new.target === PessoaBase) {
      throw new Error("ERR_CLASSE_ABSTRATA");
    }
    this.#cpf = cpfInfo;
    this.#email = emailInfo;
    this.#nome = nomeInfo;
  }
  get nome() {
    return this.#nome;
  }
  get cpf() {
    return this.#cpf;
  }
  get email() {
    return this.#email;
  }
  validarNome(nomeInfo){
    if (!nomeInfo) {
      throw new Error("ERR_NOME_VAZIO");
    }
  }
    validarCpf(cpfInfo) {
    const validador = new ValidadorUtil();
    validador.validarCpf(cpfInfo);
  }
    validarEmail(emailInfo) {
    const validador = new ValidadorUtil();
    validador.validarEmail(emailInfo);
  }
}
