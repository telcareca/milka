# Projeto OLX — Versão Estática (Pronto para Render)

Esta versão do projeto foi adaptada para funcionar **sem a necessidade de um banco de dados Supabase**. Todas as informações são carregadas de arquivos locais, garantindo que o site abra instantaneamente na Render sem erros de "página branca".

---

## Como fazer o deploy na Render (Super Simples)

**1.** Extraia este ZIP e envie os arquivos para o seu repositório no GitHub.

**2.** No painel da **Render**, clique em **New +** → **Static Site**.

**3.** Conecte seu repositório e configure apenas estes dois campos:
- **Build Command:** `npm install && npm run build && cp -r dist/* .`
- **Publish Directory:** `.` (apenas um ponto final)

**4.** Clique em **Create Static Site**.

**Pronto!** O site será publicado e funcionará sem precisar configurar nenhuma variável de ambiente.

---

## O que mudou nesta versão?

- **Independência de Banco de Dados:** O site não tenta mais se conectar ao Supabase. Ele usa os dados definidos em `src/lib/siteData.ts`.
- **Sem Página Branca:** Removidos os erros que travavam a inicialização do React quando as chaves do Supabase não eram encontradas.
- **Painel Admin:** O painel em `/admin` continua acessível (senha: `barroca`), mas as alterações feitas lá são apenas para visualização temporária e não serão salvas permanentemente no servidor (já que não há banco de dados).
- **Checkout PIX:** A geração do PIX via API HubPague continua funcionando normalmente.

---

## Como alterar os dados do produto?

Como esta é uma versão estática, para alterar o preço, título ou fotos permanentemente, você deve editar o arquivo:
`src/lib/siteData.ts`

Após editar, faça o push para o GitHub e a Render atualizará o site automaticamente.
