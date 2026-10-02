export class ValidadorUtil {
  validarCpf(cpfInfo) {
    if (cpfInfo.length > 11 || cpfInfo.length < 11 || isNaN(cpfInfo)) {
      throw new Error("ERR_CPF_INVALIDO");
    }
  }
  validarEmail(emailInfo) {
    if (!emailInfo.includes("@")) {
        throw new Error("ERR_EMAIL_INVALIDO");
    }
  }
}
