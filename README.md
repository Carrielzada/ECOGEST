# 🌱 ECOGEST

[![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)](https://github.com/seu-usuario/ecogest)
[![Licença](https://img.shields.io/badge/Licença-MIT-blue)](LICENSE)

**ECOGEST** é uma aplicação web desenvolvida para a **Secretaria de Meio Ambiente do Município de Iperó**. O sistema permite o cadastro de usuários, funcionários, maquinários, serviços prestados e a tramitação de processos para outras secretarias. Além disso, oferece funcionalidades como exportação de relatórios e gestão de atividades sustentáveis.
---


![Captura de Tela da Aplicação](/frontend/public/screenshot.png) <!-- Adicione um print da aplicação aqui -->

---

## 🛠️ Tecnologias Utilizadas

### FrontEnd
- **React** (Framework JavaScript)
- **HTML** e **CSS** (Estrutura e estilização)
- Bibliotecas:
  - `react-router-dom` (Roteamento)
  - `react-select` (Componentes de seleção)
  - `jspdf` e `html2canvas` (Geração de PDFs)
  - `xlsx` (Exportação de planilhas)

### BackEnd
- **Node.js** (Runtime JavaScript)
- **Express** (Framework para APIs)
- **MySQL** (Banco de dados)
- Bibliotecas:
  - `mysql2` (Conexão com o banco de dados)
  - `cors` (Permissão de acesso entre domínios)
  - `jsonwebtoken` e `jwt-decode` (Autenticação via JWT)
  - `bcryptjs` (Criptografia de senhas)
  - `dotenv` (Gerenciamento de variáveis de ambiente)

---

## 🚀 Funcionalidades Principais

- **Cadastro e Autenticação de Colaboradores**: Gestão de usuários do sistema.
- **Cadastro de Beneficiários**: Registro de pessoas beneficiadas pelos serviços.
- **Cadastro de Maquinários**: Controle de equipamentos utilizados.
- **Cadastro de Atividades Sustentáveis**: Registro de ações ecológicas.
- **Exportação de Relatórios**: Geração de PDFs e planilhas de serviços e atividades.
- **Tramitação de Processos**: Encaminhamento de demandas para outras secretarias.

---

## 📂 Estrutura do Projeto
```
ECOGEST/
├── backend/
│ ├── config/ # Configurações do banco de dados (host, user, database)
│ ├── controller/ # Lógica das funções do backend
│ ├── middlewares/ # Verificação de tokens JWT
│ ├── model/ # Modelos de dados para inserção no banco
│ ├── routers/ # Definição das rotas da API
│ ├── package.json # Dependências do backend
│ └── server.js # Configuração do servidor e rotas
├── frontend/
│ ├── public/ # Imagens estáticas e index.html
│ ├── src/
│ │ ├── Componentes/ # Componentes reutilizáveis
│ │ ├── Paginas/ # Páginas da aplicação
│ │ ├── arq/ # Página de login (HTML e CSS)
│ │ ├── services/ # Comunicação com o backend
│ │ ├── utils/ # Autenticação e formatação de dados
│ │ ├── App.css # Estilos globais
│ │ ├── App.js # Componente principal
│ │ ├── index.css # Estilos iniciais
│ │ └── index.js # Ponto de entrada da aplicação
│ ├── dependências.txt # Lista de dependências
│ └── package.json # Dependências do frontend
├── DB/
│ └── bancodedados.sql # Script SQL para criação do banco de dados
└── README.md # Documentação do projeto
```
---

## ⚡ Como Executar o Projeto

1. **Clone o repositório**:
 ```bash
 git clone https://github.com/seu-usuario/ecogest.git
 ```
2. **Instale as dependências**:
  - No diretório backend/:
  ```bash
  npm install
  ```
  - No diretório frontend/:
  ```bash
  npm install
  ```
3. Configure o banco de dados:
  ```bash
  Execute o script bancodedados.sql no MySQL para criar o banco de dados.
  ```
4. Inicie o servidor backend:
No diretório backend/:
  ```bash
  npm start
  ```
5. Inicie o servidor frontend:
  - No diretório frontend/:
  ```bash
  npm start
  ```
6. Acesse a aplicação:
  ```bash
  Abra o navegador e acesse http://localhost:3000.
  ```
## 📸 Capturas de Tela
![Captura de Tela da Aplicação](/frontend/public/screenshot.png) 
![Captura de Tela da Aplicação](/frontend/public/01.jpg) 
![Captura de Tela da Aplicação](/frontend/public/02.jpg) 
![Captura de Tela da Aplicação](/frontend/public/03.jpg)
![Captura de Tela da Aplicação](/frontend/public/04.jpg)

## 📄 Licença
Este projeto está licenciado sob a MIT License. Consulte o arquivo [LICENSE](https://github.com/Carrielzada/ECOGEST/blob/8114201565ebe536435d4687e406e3c6dd49d7ab/LICENSE) para mais detalhes.

## 👥 Desenvolvedores
Este projeto foi desenvolvido por:

- [Vitor Medeiros Carriel](https://github.com/Carrielzada)
- [Willian da Silva Florentino](https://github.com/WillianFlorentino)
- [João Paulo Ferreira da Silva](https://github.com/jaumpauloferreira)
- [Thiago Henrique dos Santos Camponêz](https://github.com/ThiagoCamponez)

## 🤝 Contribuição
Este é um projeto privado desenvolvido para a Secretaria de Meio Ambiente de Iperó. Caso tenha sugestões ou melhorias, entre em contato conosco. Implementações excepcionais podem ser consideradas para inclusão no projeto.

## 📌 Links Relevantes
[Documentação do Projeto](https://drive.google.com/file/d/1RqMAP7JejNSxFoMSfoZzWool7VU8PSOB/view?usp=sharing)

[Repositório no GitHub](https://github.com/Carrielzada/ECOGEST)
