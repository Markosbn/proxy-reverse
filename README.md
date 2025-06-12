# Desafio FullCycle: Ambiente Docker com Node.js, MySQL e Nginx

Este repositório faz parte de um desafio da equipe FullCycle. O objetivo é simular um ambiente real de produção, orquestrando múltiplos containers Docker para uma aplicação Node.js simples, conectada a um banco de dados MySQL e utilizando o Nginx como proxy reverso.
 
## Estrutura

- **Node.js**: Aplicação principal, responsável por inserir e listar nomes no banco de dados.
- **MySQL**: Banco de dados relacional para persistência dos dados.
- **Nginx**: Proxy reverso, responsável por rotear as requisições para o container Node.js.

## Como subir a aplicação

Execute o comando abaixo para construir e iniciar todos os containers:

```sh
docker compose up -d --build
```

## Acesso

Acesse a aplicação em:  
[http://localhost:8080](http://localhost:8080)

## Funcionamento

A cada acesso ao endpoint `/`, um nome aleatório é inserido no banco de dados e a página retorna uma lista HTML com todos os nomes cadastrados.

---

Desafio proposto por [FullCycle](https://fullcycle.com.br).