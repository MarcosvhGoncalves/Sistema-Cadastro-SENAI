import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { GestorAcademico } from "./GestorAcademico.js";
import { Professor } from "./Professor.js";
import { Aluno } from "./Aluno.js";
import { titulacaoEnum } from "./Dominio.js";
const rl = readline.createInterface({ input, output });

(async function iniciarSistema() {
  let sistemaRodando = true;
  const gestao = new GestorAcademico();
  do{
    console.log("=== SISTEMA DE CADASTRO SENAI ===");
    
    console.log("\nQual será a ação?");
    console.log("1 - Matricular aluno");
    console.log("2 - Contratar Professor");
    console.log("3 - Buscar cadastro por CPF");
    console.log("4 - Sair do sistema");
    const opcao = await rl.question("Digite a opção: ");

    switch (opcao) {
      case "1":
        const cpfAluno = parseInt(await rl.question("Digite o CPF do aluno (apenas números): "));
        const nomeAluno = await rl.question("Digite o nome do aluno: ");
        const emailAluno = await rl.question("Digite o e-mail do aluno: ");
        const idadeAluno = parseInt(await rl.question("Digite a idade do aluno: "));
        const cursoAluno = await rl.question("Digite o curso do aluno: ");
        gestao.cadastrarAluno(nomeAluno, cpfAluno, emailAluno, idadeAluno, cursoAluno);
        break;
      case "2":
        const cpfProfessor = await rl.question("Digite o CPF do professor (apenas números): ");
        const nomeProfessor = await rl.question("Digite o nome do professor: ");
        const emailProfessor = await rl.question("Digite o e-mail do professor: ");
        const salarioProfessor = parseFloat(await rl.question("Digite o salário do professor: "));
        console.log("1 - ESPECIALISTA");
        console.log("2 - MESTRE");
        console.log("3 - DOUTOR");
        const opcaoTitulacao = await rl.question("Escolha a titulação: ");
        let titulacaoInfo;
        switch(opcaoTitulacao) {
          case "1": titulacaoInfo = titulacaoEnum.ESPECIALISTA;
          break;
          case "2": titulacaoInfo = titulacaoEnum.MESTRE;
          break;
          case "3": titulacaoInfo = titulacaoEnum.DOUTOR;
          break;
          default: console.log("Opção inválida. Cadastro não realizado.");
          break;
        };
        
        gestao.cadastrarProfessor(nomeProfessor, cpfProfessor, emailProfessor, salarioProfessor, titulacaoInfo);
        break;
        case "3":
        const cpfBusca = parseInt(await rl.question("Digite o CPF para busca: "));
        const professorEncontrado = gestao.professor.find(professor => professor.cpf === cpfBusca);
        const alunoEncontrado = gestao.aluno.find(aluno => aluno.cpf === cpfBusca);
        console.log("Resultado da busca:");
        if (professorEncontrado) {
          console.log(`Professor encontrado: Nome: ${professorEncontrado.nome}, CPF: ${professorEncontrado.cpf}, E-mail: ${professorEncontrado.email}, Salário: ${professorEncontrado.salario}, Titulação: ${professorEncontrado.titulacao}`);
        } else if (alunoEncontrado) {
          console.log(`Aluno encontrado: Nome: ${alunoEncontrado.nome}, CPF: ${alunoEncontrado.cpf}, E-mail: ${alunoEncontrado.email}, Idade: ${alunoEncontrado.idade}, Curso: ${alunoEncontrado.curso}, Status: ${alunoEncontrado.status}`);
        }
        else {
          console.log("Nenhum cadastro encontrado com o CPF informado.");
        }
        break;
        case "4":
          console.log("Finalizando sistema...");
          sistemaRodando = false;
          rl.close();
          break;
    }
  }

while(sistemaRodando == true);})();

