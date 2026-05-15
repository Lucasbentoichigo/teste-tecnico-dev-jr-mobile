import React, { useState } from 'react';
import { Alert, Button, Linking, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const projetos = [
  {
    id: '1',
    nome: 'Projeto Clubyx',
    descricao: 'Projeto desenvolvido em união entre o SESI e o SENAI, com foco na criação de um sistema de clube do livro. A aplicação reúne backend e frontend para exibir e organizar informações literárias, tendo como destaque principal a obra Memórias Póstumas de Brás Cubas, oferecendo uma experiência voltada para consulta, interação e exploração do conteúdo do livro.',
  },
  {
    id: '2',
    nome: 'Pokemon Fire Red Remake (Privado)',
    descricao: 'Projeto desenvolvido em React inspirado em Pokémon Fire Red, recriando a experiência clássica com uma interface moderna e responsiva. A aplicação reúne elementos visuais do universo Pokémon, organização por componentes e uma navegação simples, com foco em praticar estruturação de tela, reutilização de código e consumo de dados em um front-end web..',
  },
];

export default function ProjetosScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function abrirLink(url) {
    Linking.openURL(url).catch(() => {
      Alert.alert('Erro', 'Não foi possível abrir o link solicitado.');
    });
  }

  function enviarContato() {
    Alert.alert(
      'Contato enviado',
      `Nome: ${nome || 'Não informado'}\nE-mail: ${email || 'Não informado'}\nMensagem: ${
        mensagem || 'Sem mensagem'
      }`
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Projetos e Contato</Text>
      <Text style={styles.subtitle}>Projetos demonstrativos.</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projetos</Text>
        {projetos.map((projeto) => (
          <View key={projeto.id} style={styles.projectCard}>
            <Text style={styles.projectName}>{projeto.nome}</Text>
            <Text style={styles.projectDescription}>{projeto.descricao}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contato</Text>
        <Text style={styles.contactLine}>
          E-mail Pessoal: <Text style={styles.contactLinkText} onPress={() => abrirLink('mailto:lucastavaresbento@gmail.com')}>lucastavaresbento@gmail.com</Text>
        </Text>
        <Text style={styles.contactLine}>
          E-mail Institucional: <Text style={styles.contactLinkText} onPress={() => abrirLink('mailto:lucas.t.bento@aluno.senai.br')}>lucas.t.bento@aluno.senai.br</Text>
        </Text>
        <Text style={styles.contactLine}>
          GitHub: <Text style={styles.contactLinkText} onPress={() => abrirLink('https://github.com/Lucasbentoichigo')}>github.com/Lucasbentoichigo</Text>
        </Text>
        <Text style={styles.contactLine}>
          LinkedIn: <Text style={styles.contactLinkText} onPress={() => abrirLink('https://www.linkedin.com/in/lucas-tavares-bento-18872034a/?isSelfProfile=false')}>linkedin.com/in/lucas-tavares-bento-18872034a</Text>
        </Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu nome"
            placeholderTextColor="#64748B"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="seuemail@exemplo.com"
            placeholderTextColor="#64748B"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Mensagem</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Escreva sua mensagem"
            placeholderTextColor="#64748B"
            multiline
            value={mensagem}
            onChangeText={setMensagem}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button title="Enviar contato" onPress={enviarContato} color="#F97316" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0B1220',
    padding: 20,
    paddingBottom: 32,
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
  section: {
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1F2937',
    borderRadius: 24,
    padding: 18,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F8FAFC',
    marginBottom: 12,
  },
  projectCard: {
    backgroundColor: '#0F172A',
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  projectName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FDBA74',
    marginBottom: 6,
  },
  projectDescription: {
    color: '#CBD5E1',
    lineHeight: 20,
  },
  contactLine: {
    color: '#E2E8F0',
    marginBottom: 8,
    lineHeight: 20,
  },
  contactLinkText: {
    color: '#60A5FA',
    textDecorationLine: 'underline',
  },
  inputGroup: {
    marginTop: 10,
  },
  inputLabel: {
    color: '#E2E8F0',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#F8FAFC',
  },
  textArea: {
    minHeight: 110,
    textAlignVertical: 'top',
  },
  buttonWrapper: {
    marginTop: 14,
  },
});