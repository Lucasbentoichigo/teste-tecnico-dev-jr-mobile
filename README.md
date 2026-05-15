<<<<<<< HEAD
=======
# Perfil Dev Jr — Teste Técnico Dev Jr Mobile

---

**ATENÇÃO:**

Antes de iniciar o teste, faça um **fork** deste repositório para a sua conta do GitHub. Em seguida, utilize o comando `git clone` para baixar o seu fork para o seu computador:

```bash
git clone https://github.com/seu-usuario/perfil-dev-jr.git
```

Realize todo o desenvolvimento no seu repositório forkado. Ao finalizar, envie o **link do seu repositório** (com as alterações realizadas) como entrega.

> **Alerta sobre uso de IAs:**
> O uso de ferramentas de Inteligência Artificial (como ChatGPT, Copilot, Gemini, etc.) deve ser feito com responsabilidade. Utilize-as apenas como apoio para dúvidas ou revisão de código, nunca para copiar soluções prontas sem entender. Você será cobrado(a) sobre o entendimento do seu código na entrevista técnica.

---

## Sobre o desafio

A empresa fictícia **DevStart Mobile** está contratando um(a) **Desenvolvedor(a) Mobile Júnior**. O objetivo é criar um aplicativo mobile simples, organizado e funcional usando **React Native com Expo**.

Além da interface, serão avaliados:
- Criação do projeto com Expo
- Uso de componentes básicos do React Native
- Navegação por abas inferiores (TabBar)
- Organização de telas em arquivos separados
- Estilização com `StyleSheet`
- Uso de imagens, listas, campos de entrada e botões
- Versionamento no GitHub
- README completo e explicativo

---

## Requisitos do aplicativo

- Navegação inferior por abas (**TabBar/Bottom Tabs**) com pelo menos 3 telas:
  - **Perfil:** Nome, imagem, cargo e seção "Sobre mim"
  - **Habilidades:** Lista com pelo menos 5 habilidades
  - **Projetos/Contato:** Pelo menos 2 projetos, área de contato (e-mail, GitHub, LinkedIn/portfólio, campo de mensagem e botão "Enviar contato")
- Utilizar: `View`, `Text`, `Image`, `ScrollView` ou `FlatList`, `TextInput`, `Button`, `StyleSheet`
- Organização em pastas (ex: `screens/`, `assets/`)
- Código indentado e layout organizado
- Projeto funcionando no Expo Go, navegador ou emulador
- Não usar bibliotecas visuais prontas (ex: NativeBase, Paper, Tamagui, UI Kitten)

---

## Estrutura sugerida

```
perfil-dev-jr/
│
├── App.js
├── screens/
│   ├── PerfilScreen.js
│   ├── HabilidadesScreen.js
│   └── ProjetosScreen.js
├── assets/
│   └── imagem-perfil.png
└── README.md
```

---

## Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone link-do-repositorio
   ```
2. Acesse a pasta:
   ```bash
   cd perfil-dev-jr
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute o projeto:
   ```bash
   npx expo start
   ```

---

## O que deve conter no README

- Descrição do projeto
- Tecnologias utilizadas
- Funcionalidades implementadas
- Explicação detalhada de tudo o que foi feito: telas, funcionalidades, decisões tomadas, organização do código, diferenciais
- Como executar o projeto
- Autor

Exemplo de tópicos:

```markdown
>>>>>>> 3d60110c70fd18843012db5ec31f1d01f3453545
# Perfil Dev Jr

## Descrição
Aplicativo criado em React Native com Expo para apresentar um perfil profissional de candidato a Desenvolvedor Mobile Júnior. O projeto foi pensado para ser simples, funcional e organizado, com navegação por abas inferiores e telas separadas por responsabilidade.

## Tecnologias utilizadas
- React Native
- Expo
- JavaScript
- React Navigation
- Git
- GitHub

## Funcionalidades implementadas
- Navegação por abas inferiores com 3 telas
- Tela de perfil com imagem, nome, cargo e seção "Sobre mim"
- Tela de habilidades com lista de competências e ícones específicos
- Tela de projetos e contato com 2 projetos, informações de contato e formulário simples
- Uso de `View`, `Text`, `Image`, `ScrollView`, `FlatList`, `TextInput`, `Button`, `Pressable`, `Linking` e `StyleSheet`

## Telas
- **Perfil:** mostra a imagem do perfil, o nome, o cargo e um texto de apresentação com pontos fortes.
- **Habilidades:** exibe uma lista com mais de 5 habilidades relacionadas ao desenvolvimento mobile.
- **Projetos/Contato:** apresenta dois projetos, informações de contato e um campo de mensagem com botão para envio.

## Organização do código
- `App.js`: configura a navegação principal com bottom tabs.
- `screens/PerfilScreen.js`: conteúdo da tela de perfil.
- `screens/HabilidadesScreen.js`: lista de habilidades em `FlatList`.
- `screens/ProjetosScreen.js`: projetos, contato e formulário simples.
- `assets/`: imagens do projeto usadas pelo Expo.

## Decisões tomadas
- A navegação foi feita com React Navigation porque atende ao requisito de abas inferiores e mantém o app fácil de expandir.
- As telas foram separadas em arquivos diferentes para melhorar a organização e a manutenção.
- A interface usa um tema escuro com destaque em laranja para criar contraste visual e hierarquia clara.
- O formulário de contato usa `Alert` para simular o envio, mantendo a aplicação simples e funcional para o desafio.

## Diferenciais
- Estrutura limpa e separada por telas
- Interface com visual consistente e responsivo
- Uso de ícones na barra inferior para reforçar a navegação
- Links clicáveis para e-mail, GitHub e LinkedIn
- Projeto pronto para rodar no Expo Go, navegador ou emulador

## Documentação do projeto
### Estrutura geral
O app foi organizado com uma entrada principal em `App.js`, que centraliza a navegação por abas inferiores. Cada tela fica em um arquivo separado dentro da pasta `screens/`, o que facilita manutenção, leitura e futuras expansões.

### Fluxo das telas
- A aba **Perfil** apresenta a identidade visual do candidato, com foto, nome, cargo, sobre mim e pontos fortes.
- A aba **Habilidades** mostra uma lista de competências técnicas com ícones específicos para cada tecnologia.
- A aba **Projetos** reúne os projetos, os canais de contato e um formulário simples com campo de mensagem.

### Implementação dos componentes
- `View` e `Text` foram usados para estruturar e exibir os blocos de informação.
- `Image` exibe a foto do perfil.
- `ScrollView` permite navegar verticalmente pelas telas com mais conteúdo.
- `FlatList` organiza a lista de habilidades de forma performática.
- `TextInput` e `Button` compõem o formulário de contato.
- `Pressable` e `Linking` tornam e-mail, GitHub e LinkedIn clicáveis.

### Recursos visuais
- A interface usa fundo escuro com destaque laranja para criar contraste e leitura confortável.
- Os ícones das habilidades ajudam na identificação rápida de cada tecnologia.
- A navegação por abas melhora a experiência e separa o conteúdo por contexto.

### Observações técnicas
- O projeto foi feito sem bibliotecas visuais prontas, seguindo o enunciado do teste.
- As dependências de navegação foram instaladas com suporte do Expo.
- O botão de contato abre um alerta apenas como simulação de envio, já que o foco do teste é a interface e a organização da aplicação.

## Como executar o projeto
1. Clone o repositório.
2. Acesse a pasta `perfil-dev-jr`.
3. Instale as dependências com `npm install`.
4. Inicie o projeto com `npx expo start`.
5. Abra no Expo Go, navegador ou emulador.

## Autor
<<<<<<< HEAD
Aluno Dev Jr
=======
Nome do aluno
```

---

## Regras de entrega

1. Faça um **fork** deste repositório para a sua conta do GitHub.
2. Realize todo o desenvolvimento no seu repositório forkado.
3. Ao finalizar, envie as seguintes informações:

```
Link do seu repositório forkado no GitHub:
```

O link deve apontar para o seu repositório público com o código desenvolvido.

---

## Recomendações

- Use apenas estilos criados por você com `StyleSheet`
- Organize a aplicação em telas separadas
- Use nomes claros para arquivos, variáveis e estilos
- Teste a navegação entre as abas
- Teste o aplicativo antes de entregar
- Não copie código sem entender
- Faça commits durante o desenvolvimento
- Capriche na aparência da tela
- Cuide da experiência do usuário
- Pense como se estivesse entregando um teste para uma vaga de Dev Jr

---

## Critérios de avaliação

- Projeto criado corretamente com Expo
- Navegação com TabBar / Bottom Tabs
- Pelo menos 3 telas diferentes
- Organização visual e layout
- Uso correto dos componentes básicos
- Uso correto do `StyleSheet`
- GitHub, commits e README
- Explicação clara do projeto
- Postura profissional

---

## Observação importante

Esta avaliação simula um teste técnico para uma vaga de **Desenvolvedor Mobile Júnior**. Além do aplicativo funcionar, serão avaliados organização, clareza do código, capricho visual, uso correto do GitHub, capacidade de explicar o projeto e postura durante a entrevista técnica.
>>>>>>> 3d60110c70fd18843012db5ec31f1d01f3453545
