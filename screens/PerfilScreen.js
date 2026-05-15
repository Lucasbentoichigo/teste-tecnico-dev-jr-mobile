import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const profileHighlights = [
    'Ponto forte principal: Backend e desenvolvimento de APIs — construção e integração de endpoints robustos.',
    'Resolução de Problemas: Capacidade de decompor problemas complexos em etapas lógicas antes de codar.',
    'Escrita de Código Limpo: Produzir código legível, testável e fácil de manter.',
    'Adaptabilidade e Aprendizado Contínuo: Rapidez em aprender novas linguagens e frameworks.',
    'Eficiência em Debugging: Método para isolar problemas e encontrar a raiz do bug.',
    'Comunicação e Trabalho em Equipe: Documentação clara, commits informativos e explicação de decisões técnicas.',
    'React Native & Expo: Experiência prática no ecossistema mobile.',
    'UI por componentes e estilização: Uso consistente de StyleSheet, FlatList, ScrollView e Image.',
    'Navegação e arquitetura: Implementação de navegação por abas e estrutura modular.',
    'Versionamento (Git/GitHub): Disciplina em controle de versão e documentação.',
    'Fundamentos fullstack e APIs: Conhecimento em Node, Express, Postgres, Prisma e Postman.',
];

export default function PerfilScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.heroCard}>
                <Image
                    source={{
                        uri: 'https://media.licdn.com/dms/image/v2/D4E35AQEgTG0jbwozEg/profile-framedphoto-shrink_800_800/B4EZcYcdWhHAAg-/0/1748461803221?e=1779454800&v=beta&t=N836evtJh9d3sqYTLTa5jhgSqqqv0JFWuzn0C2Dq7XY',
                    }}
                    style={styles.avatar}
                    resizeMode="cover"
                />
                <Text style={styles.name}>Lucas Tavares Bento</Text>
                <Text style={styles.role}>Desenvolvedor Júnior</Text>
            </View>

            <View style={styles.sectionCard}>
                <Text style={styles.sectionTitle}>Sobre mim</Text>
                <Text style={styles.sectionText}>
                    Sou Desenvolvedor Júnior com foco em backend e desenvolvimento de APIs: construo endpoints robustos e escaláveis usando Node/Express, Prisma e Postgres, com atenção a testes, performance e versionamento. Escrevo código limpo e testável, desmembro problemas complexos em etapas práticas antes de codar e encontro a raiz dos bugs com método. Também desenvolvo interfaces mobile com React Native/Expo, comunico decisões técnicas de forma clara e aprendo novas ferramentas rapidamente. Entrego soluções simples, manuteníveis e orientadas a impacto real.
                </Text>
            </View>

            <View style={styles.sectionCard}>
                <Text style={styles.sectionTitle}>Pontos fortes</Text>
                {profileHighlights.map((item) => (
                    <View key={item} style={styles.highlightRow}>
                        <View style={styles.dot} />
                        <Text style={styles.highlightText}>{item}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#0B1220',
        flexGrow: 1,
    },
    heroCard: {
        backgroundColor: '#111827',
        borderRadius: 24,
        padding: 24,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1F2937',
        marginBottom: 16,
    },
    avatar: {
        width: 132,
        height: 132,
        borderRadius: 66,
        marginBottom: 16,
        borderWidth: 3,
        borderColor: '#F97316',
    },
    name: {
        fontSize: 26,
        fontWeight: '800',
        color: '#F8FAFC',
        textAlign: 'center',
    },
    role: {
        marginTop: 6,
        fontSize: 16,
        color: '#FDBA74',
        fontWeight: '600',
    },
    sectionCard: {
        backgroundColor: '#111827',
        borderRadius: 24,
        padding: 20,
        borderWidth: 1,
        borderColor: '#1F2937',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#F8FAFC',
        marginBottom: 12,
    },
    sectionText: {
        fontSize: 15,
        lineHeight: 23,
        color: '#CBD5E1',
    },
    highlightRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#F97316',
        marginTop: 7,
        marginRight: 10,
    },
    highlightText: {
        flex: 1,
        color: '#E2E8F0',
        fontSize: 14,
        lineHeight: 21,
    },
});