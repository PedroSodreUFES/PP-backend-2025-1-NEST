# backend-pp-2025-1
Aqui será feito o backend do pp de 2025/1 utilizando Prisma e fastify.<br/>
Não será publicada a API, logo não se estressem com a segurança ou com casos de testes.
## Tecnologias usadas
+ Prisma
+ Prisma Client
+ Nest
+ Docker
+ Zod
+ Bcrypt - senha com hash
## Como rodar:
```
npm i
docker-compose up -d
npx prisma migrate dev
npm run dev
```
## Como parar a aplicação
+ Caso queira parar de fazer o banco rodar: docker-compose stop
+ Caso queira deletar tudo, inclusive as informações das tabelas: docker-compose down
## Observação:
Criar um .env exatamente igual ao .env.example para cnseguir rodar tudo.
Qualquer coisa, falar com o Pedro Sodré!

## Tasks
[ ] login(email, senha) gerando token jwt em um cookie<br>
[ ] cadastrar(email único, username único, senha, confirmar senha) - senha deve ser encriptada, email e username nao podem ja existir.<br>
[ ] feed - deve retornar todos os posts em ordem de mais recente.<br>
[ ] editar perfil - deve ser possivel alterar a propria foto de perfil a partir do id do perfil<br>
[ ] editar perfil - deve ser posssível alterar a descrição de um post a partir do id do post<br>
[ ] editar perfil - deve ser possível deletar um post a partir do id do post<br>
[ ] publicar - deve ser possível fazer um post com uma foto e descrição. Não pode postar sem passar o link de uma foto. A descrição é OPCIONAL para publicar um post, ou seja, você pode postar sem descrição, mas não sem link de uma foto.<br>

## Observações
OBS 1- O usuário ao ser cadastrado pode ficar com o campo de foto como null, aí ele fica com uma foto padrão do sistema no lugar. Isso já tem no front.<br>
OBS 2- Percebi durante o desenvolvimento do sistema: como o usuário tem email/username único, o usuário não precisa de ID, pois o email/username já é único.<br>
OBS 3- Não é para fazer like em post, comentário nem qualquer coisa que não está nas funcionalidades acima.<br>