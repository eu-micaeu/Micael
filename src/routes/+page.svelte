<script>
    // Dados do currículo atualizado
    const nome = "Micael Rocha";
    const titulo = "Desenvolvedor Full-Stack";
    const resumo =
        "Sou um desenvolvedor full-stack altamente qualificado e experiente, com mais de 3 anos de experiência em projetos de desenvolvimento de sites e aplicativos web.";
    const experiencia = [
        {
            cargo: "Desenvolvedor GoLang Júnior",
            empresa: "DigitalSys",
            periodo: "2024 - 2025",
            descricao: `Desenvolvi uma aplicação para comunicação entre seguradoras, corretoras e imobiliárias. Atuei na construção do sistema back-end utilizando Go (Golang), focando em desempenho e escalabilidade. Implementei interfaces modernas com Vue.js e, posteriormente, com Svelte, visando melhor desempenho. Adotei GraphQL para APIs eficientes e flexíveis. Utilizei Docker para ambientes de desenvolvimento consistentes e integração contínua.`,
        },
        {
            cargo: "Analista de Sistemas Júnior",
            empresa: "TCS",
            periodo: "2022 - 2024",
            descricao: `Desenvolvi um sistema CRM para o Itaú, utilizando Go (Golang), com foco em performance, segurança e escalabilidade. Trabalhei em projetos em equipe, utilizando controle de versão com GitHub e participando de reuniões.`,
        },
    ];
    const formacao = [
        {
            curso: "Engenharia de Software",
            instituicao: "Universidade Tecnológica Federal do Paraná (UTFPR)",
            periodo: "2022 - 2025",
        },
    ];
    const linguas = [
        { idioma: "Português", nivel: "Nativo" },
        { idioma: "Inglês", nivel: "Fluente" },
        { idioma: "Japonês", nivel: "Iniciante" },
    ];
    const habilidades = [
        "Go",
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "Docker",
        "Postman",
        "Figma",
        "GraphQL",
        "MongoDB",
        "Redis",
        "PostgreSQL",
        "MySQL",
        "SQLite",
    ];
    const contato = {
        telefone: "(21) 96740-6436",
        email: "micaelrrocha13@gmail.com",
    };
</script>

<link rel="stylesheet" href="/src/routes/portfolio.css" />

<main class="portfolio">
    <section class="intro">
        <h1>{nome}</h1>
        <h2>{titulo}</h2>
        <p>{resumo}</p>
    </section>

    <section class="experiencia">
        <h3>Experiência Profissional</h3>
        {#each experiencia as exp}
            <div class="exp-item">
                <strong>{exp.cargo}</strong> - {exp.empresa}
                <span>({exp.periodo})</span>
                <p>{exp.descricao}</p>
            </div>
        {/each}
    </section>

    <section class="habilidades">
        <h3>Habilidades</h3>
        <ul>
            {#each habilidades as h}
                <li>{h}</li>
            {/each}
        </ul>
    </section>

    <section class="contato">
        <h3>Contato</h3>
        <p>Telefone: {contato.telefone}</p>
        <p>Email: {contato.email}</p>
    </section>
</main>
