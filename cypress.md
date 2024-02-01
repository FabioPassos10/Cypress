# Material de estudos Cypress



Cypress é uma ferramenta de automação de testes para aplicações web. Ele permite o desenvolvimento e execução de testes automatizados de maneira fácil, rápida e confiável. 

- **Framework de testes:** Cypress é um framework de testes de código aberto e de fácil configuração.

- **Arquitetura:** Totalmente baseado em uma nova arquitetura, isenta de outros frameworks de testes.

- **Painel próprio:** O Cypress apresenta um painel próprio que exibe exatamente o que está acontecendo durante a execução dos testes.

- **Testes:** Ele permite a realização de vários tipos de testes, incluindo testes End-to-End, de Interface de Usuário, de APIs, de Componentes e de Unidade.

- **Tecnologias suportadas:** Cypress pode ser usado com várias tecnologias, incluindo JS Javascript/Typescript, CoffeScript, Moca, Chai e Assíncrono.

- **Interação com o navegador:** Diferentemente do Selenium, que opera fora do navegador executando comandos remotos para interagir com as páginas a serem testadas, o Cypress executa no mesmo loop de execução do navegador, permitindo então acesso a comandos nativos.

- **Interferência no tráfego da rede:** Cypress também consegue interagir com o tráfego da rede, podendo ler e manipular os dados recebidos e enviados.

- **Debug dos testes:** Cypress oferece uma função de Debug dos testes, permitindo ao desenvolvedor executar os testes e visualizar em tempo real o resultado obtido.


# arquitetura do projeto 

fixtures - dados e arquivos de mocks

integration - nossos arquivos de testes - .spec.js

plugins - configs de plugins

support - arquivos auxiliares e de suporte ao teste

- screenshots - prints / screenshots durante o teste
- videos - videos gerados durante o teste