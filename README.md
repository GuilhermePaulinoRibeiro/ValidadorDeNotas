# Validador de Notas

![GitHub Actions](https://github.com/GuilhermePaulinoRibeiro/ValidadorDeNotas/actions/workflows/main.yml/badge.svg)
![SonarCloud Coverage](https://sonarcloud.io/api/project_badges/measure?project=GuilhermePaulinoRibeiro_ValidadorDeNotas&metric=coverage)
![SonarCloud Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=GuilhermePaulinoRibeiro_ValidadorDeNotas&metric=alert_status)

## Sobre o projeto

Este projeto tem como objetivo validar notas escolares com base em critérios definidos. Utiliza testes automatizados com Jest e integração contínua com GitHub Actions e SonarCloud para garantir a qualidade do código.

## Como executar o projeto localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/GuilhermePaulinoRibeiro/ValidadorDeNotas.git
   cd ValidadorDeNotas
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Execute os testes com cobertura:

   ```bash
   npm test -- --coverage
   ```

4. (Opcional) Para rodar a análise do SonarCloud localmente:

   Certifique-se de ter o `sonar-scanner` instalado globalmente e de configurar a variável de ambiente `SONAR_TOKEN`.

   ```bash
   sonar-scanner
   ```

## Imagem do formulário preenchido e resultado exibido

Adicione uma imagem do formulário preenchido no caminho `docs/formulario-preenchido.png` e ela será exibida aqui:

![Formulário preenchido](docs/formulario-preenchido.png)

---

**🔗 Link do projeto no SonarCloud:**  
[https://sonarcloud.io/dashboard?id=GuilhermePaulinoRibeiro_ValidadorDeNotas](https://sonarcloud.io/dashboard?id=GuilhermePaulinoRibeiro_ValidadorDeNotas)
