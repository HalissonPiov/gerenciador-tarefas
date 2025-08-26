# 📋 Gerenciador de Tarefas

Um projeto de estudo pessoal desenvolvido durante o aprendizado de **React** e **Java Spring Boot**. Este sistema permite criar, visualizar, editar e excluir tarefas de forma intuitiva e responsiva.

---

## 🚀 Tecnologias Utilizadas

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### Backend e Banco de Dados
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![H2](https://img.shields.io/badge/H2-4479A1?style=for-the-badge&logo=h2&logoColor=white)

---

## 📌 Sobre o Projeto

Este projeto foi desenvolvido como parte dos meus estudos em desenvolvimento full-stack, focando no aprendizado de:

- **React**: Criação de interfaces dinâmicas e componentização
- **Java Spring Boot**: Desenvolvimento de APIs RESTful robustas
- **Integração Frontend-Backend**: Comunicação entre diferentes tecnologias
- **Gestão de Estado**: Manipulação de dados no frontend
- **CRUD Operations**: Operações básicas de banco de dados
- **Banco H2**: Optado pela praticidade, permitindo focar no aprendizado das tecnologias principais (React e Spring Boot)

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- **Node.js** (versão 16 ou superior)
- **Java JDK** (versão 11 ou superior)
- **Maven** (para gerenciamento de dependências do Java)

### 1. Clonar o Repositório
```bash
git clone <url-do-repositório>
cd gerenciador-tarefas
```

### 2. Executar o Backend (Spring Boot)

Navegue até a pasta do backend:
```bash
cd back-end/taskapi
```

Execute a aplicação Spring Boot:
```bash
./mvnw spring-boot:run
```

Ou se estiver usando Windows:
```bash
mvnw.cmd spring-boot:run
```

O backend estará disponível em: **http://localhost:8080**

> **💡 Nota sobre o Banco de Dados:** O projeto utiliza o banco H2 em memória, que é iniciado automaticamente com a aplicação Spring Boot. Não é necessária configuração adicional de banco de dados.

### 3. Executar o Frontend (React)

Em um novo terminal, navegue até a pasta do frontend:
```bash
cd front-end/task-manager
```

Instale as dependências:
```bash
npm install
```

Execute a aplicação React:
```bash
npm run dev
```

O frontend estará disponível em: **http://localhost:5173**

---

## 🎯 Funcionalidades

- ✅ **Criar tarefas**: Adicionar novas tarefas ao sistema
- 📝 **Visualizar tarefas**: Listar todas as tarefas cadastradas
- ✏️ **Editar tarefas**: Modificar tarefas existentes
- 🗑️ **Excluir tarefas**: Remover tarefas do sistema
- 📱 **Interface responsiva**: Layout adaptável para diferentes dispositivos

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foi possível consolidar conhecimentos em:

- **Componentização em React**: Criação de componentes reutilizáveis
- **Hooks do React**: useState, useEffect para gerenciamento de estado
- **API RESTful**: Desenvolvimento de endpoints com Spring Boot
- **Comunicação HTTP**: Integração entre frontend e backend
- **Gerenciamento de dependências**: Maven para Java e npm para JavaScript
- **Banco de Dados H2**: Configuração e uso de banco em memória para desenvolvimento e testes