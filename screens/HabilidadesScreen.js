import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const habilidades = [
  {
    id: '1',
    nome: 'HTML5',
    descricao: 'Estruturação semântica de páginas e componentes web.',
    iconSet: 'fontawesome5',
    iconName: 'html5',
  },
  {
    id: '2',
    nome: 'CSS3',
    descricao: 'Estilização visual com foco em layout, espaçamento e responsividade.',
    iconSet: 'fontawesome5',
    iconName: 'css3-alt',
  },
  {
    id: '3',
    nome: 'JavaScript',
    descricao: 'Manipulação de dados, eventos e lógica de aplicação.',
    iconSet: 'fontawesome5',
    iconName: 'js-square',
  },
  {
    id: '4',
    nome: 'Git e GitHub',
    descricao: 'Versionamento e publicação do projeto.',
    iconSet: 'fontawesome5',
    iconName: 'github',
  },
  {
    id: '5',
    nome: 'Node',
    descricao: 'Execução de JavaScript no servidor e automação de tarefas.',
    iconSet: 'fontawesome5',
    iconName: 'node-js',
  },
  {
    id: '6',
    nome: 'React',
    descricao: 'Criação de interfaces modernas com componentes reutilizáveis.',
    iconSet: 'fontawesome5',
    iconName: 'react',
  },
  {
    id: '7',
    nome: 'React Native',
    descricao: 'Criação de interfaces mobile com foco em componentes.',
    iconSet: 'fontawesome5',
    iconName: 'react',
  },
  {
    id: '8',
    nome: 'Linux',
    descricao: 'Uso de terminal e ambiente de desenvolvimento baseado em Unix.',
    iconSet: 'fontawesome5',
    iconName: 'linux',
  },
  {
    id: '9',
    nome: 'Windows',
    descricao: 'Ambiente de trabalho e desenvolvimento no ecossistema Microsoft.',
    iconSet: 'fontawesome5',
    iconName: 'windows',
  },
  {
    id: '10',
    nome: 'Postgres',
    descricao: 'Banco relacional para persistência e organização de dados.',
    iconSet: 'materialcommunityicons',
    iconName: 'database',
  },
  {
    id: '11',
    nome: 'Figma',
    descricao: 'Protótipos, layout e estudo de interface.',
    iconSet: 'fontawesome5',
    iconName: 'figma',
  },
  {
    id: '12',
    nome: 'Express',
    descricao: 'Criação de APIs e rotas no backend com Node.',
    iconSet: 'materialcommunityicons',
    iconName: 'server',
  },
  {
    id: '13',
    nome: 'Prisma',
    descricao: 'ORM para acesso ao banco de dados de forma organizada.',
    iconSet: 'materialcommunityicons',
    iconName: 'database-cog',
  },
  {
    id: '14',
    nome: 'Postman',
    descricao: 'Teste e validação de requisições de API.',
    iconSet: 'materialcommunityicons',
    iconName: 'api',
  },
  {
    id: '15',
    nome: 'Expo',
    descricao: 'Desenvolvimento e execução rápida em ambiente unificado.',
    iconSet: 'materialcommunityicons',
    iconName: 'cellphone-link',
  },
  {
    id: '16',
    nome: 'Notion',
    descricao: 'Organização de informações, tarefas e documentação.',
    iconSet: 'materialcommunityicons',
    iconName: 'notebook-outline',
  },
];

function SkillIcon({ iconSet, iconName }) {
  if (iconSet === 'materialcommunityicons') {
    return <MaterialCommunityIcons name={iconName} size={22} color="#FFF7ED" />;
  }

  return <FontAwesome5 name={iconName} size={20} color="#FFF7ED" />;
}

export default function HabilidadesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habilidades</Text>
      <Text style={styles.subtitle}>Lista com as principais competências trabalhadas no projeto.</Text>

      <FlatList
        data={habilidades}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.skillCard}>
            <View style={styles.skillBadge}>
              <SkillIcon iconSet={item.iconSet} iconName={item.iconName} />
            </View>
            <View style={styles.skillTextContainer}>
              <Text style={styles.skillName}>{item.nome}</Text>
              <Text style={styles.skillDescription}>{item.descricao}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1220',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#F8FAFC',
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 16,
    color: '#94A3B8',
    lineHeight: 21,
  },
  listContent: {
    paddingBottom: 20,
  },
  skillCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1F2937',
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
  },
  skillBadge: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#F97316',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  skillTextContainer: {
    flex: 1,
  },
  skillName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#F8FAFC',
    marginBottom: 4,
  },
  skillDescription: {
    color: '#CBD5E1',
    lineHeight: 20,
  },
});