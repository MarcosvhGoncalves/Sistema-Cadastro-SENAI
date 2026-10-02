# Sistema de Cadastro Acadêmico

Projeto de aprendizado desenvolvido em **JavaScript com Node.js**, com foco em **Programação Orientada a Objetos (POO)** e **tratamento de exceções**. O sistema funciona pelo terminal e simula o cadastro de alunos e professores em um contexto acadêmico.

## Funcionalidades

- Cadastro de alunos com nome, CPF, e-mail, idade e curso.
- Cadastro de professores com nome, CPF, e-mail, salário e titulação.
- Opção de busca de cadastros por CPF.
- Matrícula de alunos iniciada com status `ATIVA`.
- Validações de dados e exibição de mensagens de erro no terminal.

Os cadastros ficam armazenados em arrays durante a execução. Ao encerrar o programa, os dados são perdidos.

## Conceitos praticados

| Conceito | Aplicação no projeto |
| --- | --- |
| Classes e objetos | Representação de alunos, professores e gestão acadêmica. |
| Herança | `Aluno` e `Professor` herdam atributos e métodos de `PessoaBase` com `extends` e `super()`. |
| Encapsulamento | Atributos privados com `#`, acessados por getters. |
| Abstração | `PessoaBase` reúne características comuns e impede a instanciação direta com `new.target`. |
| Modularização | Separação de responsabilidades em arquivos com `import` e `export`. |
| Enumerações | Objetos congelados com `Object.freeze()` para status de matrícula e titulações. |
| Exceções | Uso de `throw new Error()`, `try/catch` e tradução de códigos de erro com `switch`. |

## Estrutura dos arquivos

| Arquivo | Responsabilidade |
| --- | --- |
| `Index.js` | Menu interativo, leitura de dados e busca por CPF. |
| `PessoaBase.js` | Classe base com nome, CPF, e-mail e métodos de validação comuns. |
| `Aluno.js` | Classe de aluno, com idade, curso e status de matrícula. |
| `Professor.js` | Classe de professor, com salário e titulação. |
| `GestorAcademico.js` | Cadastro, armazenamento em memória e tratamento dos erros. |
| `ValidadorUtil.js` | Validações básicas de CPF e e-mail. |
| `Dominio.js` | Enumerações de status e titulação. |
| `package.json` | Configuração do projeto e uso de módulos ES. |

## Como executar

É necessário ter o **Node.js** instalado, com suporte a `node:readline/promises`.

1. Baixe os arquivos ou clone o repositório.
2. Abra o terminal na pasta do projeto e execute:


```bash
node Index.js
```

O projeto utiliza apenas recursos nativos do Node.js, portanto não precisa instalar dependências. Se o arquivo de entrada estiver nomeado como `index.js`, utilize `node index.js`.

No menu, digite o número da operação desejada:

```text
1 - Matricular aluno
2 - Contratar Professor
3 - Buscar cadastro por CPF
4 - Sair do sistema
```

## Tratamento de exceções

Quando uma validação identifica um problema, ela lança uma exceção com um código de erro. Por exemplo, em `Professor.js`:

```javascript
if (salarioInfo < 1500) {
  throw new Error("ERR_SALARIO_BASE");
}
```

O `GestorAcademico` captura a exceção no `catch` e encaminha `erro.message` ao método `traduzirErro()`, que mostra uma mensagem compreensível para o usuário. O cadastro com erro não é adicionado ao array, e o menu continua disponível.

Entre as regras implementadas estão a faixa de idade de 14 a 120 anos, o salário mínimo de R$ 1.500,00 e a presença de `@` no e-mail.
