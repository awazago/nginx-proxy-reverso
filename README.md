# Full Cycle Rocks! - Aplicação com Node.js, Nginx e MySQL

Este projeto demonstra a utilização do Docker Compose para orquestrar uma aplicação web simples com Node.js, Nginx e MySQL.

## Como executar

1. **Clone o repositório:**

   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
  
3. **Acesse o diretório do projeto:**  
    ```bash
     cd seu-repositorio
    ```

3. **Inicie os conteineres:**  
    ```bash
     docker-compose up -d --build
    ```

6. **Acesse a Aplicação:**
    Abra o navegador e acesse ```bash http://localhost:8080```.  
    Você deve ver a mensagem "Full Cycle Rocks!" e a lista de nomes cadastrados no banco de dados.

**Descrição dos serviços**

    **nginx:** Proxy reverso que direciona as requisições para a aplicação Node.js.  
    **app:** Aplicação Node.js que se conecta ao banco de dados MySQL e exibe os dados.  
    **db:** Banco de dados MySQL que armazena os nomes.  

**Observações**  

    A aplicação estará disponível na porta 8080.  
    O banco de dados MySQL está configurado com as seguintes credenciais:  
        Usuário: root  
        Senha: admin  
        Banco de dados: nodedb  
        Os volumes são utilizados para persistir os dados do banco de dados e facilitar o desenvolvimento da aplicação Node.js.
