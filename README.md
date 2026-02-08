# 🌡️ Sensor de Temperatura – API REST

API REST desenvolvida em **Node.js + Express + TypeScript**, utilizando **TypeORM** e **PostgreSQL**, com foco em **arquitetura em camadas**, validações robustas, regras de negócio e tratamento centralizado de erros.

O sistema gerencia **Sensores**, **Pesquisadores**, **Áreas** e **Leituras**, permitindo operações completas de CRUD para cada entidade.

> ⚠️ **Observação:** neste estágio do projeto, as entidades **ainda não possuem relacionamentos entre si**. As associações serão implementadas em uma etapa futura.

---

## 🧱 Arquitetura do Projeto

O projeto segue o padrão de arquitetura em camadas, separando responsabilidades de forma clara e organizada:

src/ <br/>
├── controllers/ # Camada de controle (HTTP) <br/>
├── services/ # Regras de negócio e acesso ao banco <br/>
├── entities/ # Entidades TypeORM <br/>
├── routes/ # Definição das rotas da API <br/>
├── middlewares/ # Middlewares de validação e regras <br/>
├── schemas/ # Validação de dados (Zod) <br/>
├── types/ # Tipagens auxiliares <br/>
├── errors/ # AppError e tratamento de erros <br/>
├── database/ # Configuração do DataSource <br/>
└── app.ts # Arquivo principal da aplicação <br/>


---

## ⚙️ Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- TypeORM
- PostgreSQL
- Zod (validação de dados)
- Winston (logs)
- Helmet (segurança)
- Express Rate Limit
- Dotenv
- TSX

---

## 🧠 Entidades do Sistema

### 🔌 Sensor

Representa um sensor físico responsável pela coleta de dados ambientais.

**Principais atributos:**
- serialNumber (único)
- nome
- modelo
- fabricante
- tipo
- status
- ipFixo
- dataInstalacao
- dataManutencao
- cicloLeitura
- latitude
- longitude
- finalidade

**Regras de negócio:**
- O `serialNumber` deve ser único
- Ao criar ou atualizar um sensor:
  - Se o status for `Manutencao`, o campo `dataManutencao` é atualizado automaticamente com a data atual

---

### 🧑‍🔬 Pesquisador

Representa o pesquisador responsável pelo acompanhamento e análise dos dados.

**Principais atributos:**
- nome
- email (único)
- senha
- matricula (única)
- titulacao
- dataNascimento
- especialidade (opcional)
- linhaPesquisa (opcional)

**Regras de negócio:**
- Email e matrícula devem ser únicos
- A senha deve conter no mínimo 8 caracteres
- O pesquisador deve ter idade mínima de 18 anos
- Titulação aceita apenas:
  - Graduação
  - Especialização
  - Mestrado
  - Doutorado

---

### 🌱 Área

Representa uma área geográfica monitorada.

**Principais atributos:**
- nome
- descricao
- bioma
- latitude
- longitude
- largura
- comprimento
- relevo

**Regras de negócio:**
- O nome da área deve ser único

---

### 📊 Leitura

Representa uma leitura ambiental capturada por um sensor.

**Principais atributos:**
- temperatura
- umidade
- dataHora

**Regras de negócio:**
- A data e hora da leitura (`dataHora`) não pode ser uma data futura

---

## 🛡️ Validações e Tratamento de Erros

- **Schemas (Zod):**
  - Validação de tipos, formatos e campos obrigatórios
- **Middlewares:**
  - Validação de regras de negócio (unicidade, datas, status)
- **Services:**
  - Lógica de domínio e persistência de dados
- **Controllers:**
  - Responsáveis apenas por receber requisições e retornar respostas HTTP
- **Error Handler Global:**
  - Centralização do tratamento de erros
  - Uso de `AppError` para erros de negócio
  - Logs gerados com Winston

---

## 🌐 Endpoints da API

### Sensores

- POST /api/sensores 
- GET /api/sensores
- GET /api/sensores/:id
- PUT /api/sensores/:id
- DELETE /api/sensores/:id

### Pesquisadores
- POST /api/pesquisadores
- GET /api/pesquisadores
- GET /api/pesquisadores/:id
- PUT /api/pesquisadores/:id
- DELETE /api/pesquisadores/:id


### Áreas
- POST /api/areas
- GET /api/areas
- GET /api/areas/:id
- PUT /api/areas/:id
- DELETE /api/areas/:id


### Leituras
- POST /api/leituras
- GET /api/leituras
- GET /api/leituras/:id
- PUT /api/leituras/:id
- DELETE /api/leituras/:id


---

## ▶️ Como Executar o Projeto

### 1️⃣ Instalar dependências
```bash
npm install
```
```bash
DB_HOST=seu host
DB_PORT=a porta de sua preferencia
DB_USER= user do seu banco
DB_PASSWORD=senha do seu banco
DB_NAME=o nome que preferir
HOST_APP=a porta que quiser executar o serviço
PGADMIN_EMAIL=a email do seu pg admin
PGADMIN_PASSWORD=a senha do seu pg admin
```


## 🐳 Ambiente com Docker (PostgreSQL + PgAdmin)

O projeto conta com um ambiente totalmente containerizado utilizando **Docker Compose**, facilitando a configuração e execução do banco de dados sem necessidade de instalação local.

### 📦 Serviços Disponíveis

#### 🐘 PostgreSQL
- Versão: **PostgreSQL 16**
- Banco de dados persistente com volume Docker
- Configuração via variáveis de ambiente

#### 🧰 PgAdmin
- Interface gráfica para administração do PostgreSQL
- Ideal para visualizar tabelas, executar queries e gerenciar o banco
- Acessível via navegador

---

### ▶️ Subindo o ambiente com Docker

Certifique-se de ter o **Docker** e o **Docker Compose** instalados.

```bash
docker-compose up -d
```

### Executar o projeto no diretorio da pasta

```bash
npm run dev
```
