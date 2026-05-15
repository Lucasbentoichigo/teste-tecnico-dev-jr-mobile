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
Aluno Dev Jr