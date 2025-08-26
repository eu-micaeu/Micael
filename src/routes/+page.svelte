<script>
    import ThreeScene from "$lib/ThreeScene.svelte";
    import { onMount } from "svelte";
    import user_roxo from '$lib/assets/user-roxo.svg';

    // Sistema de tema
    let isDarkMode = false;

    // Menu mobile
    let isMenuOpen = false;

    function toggleTheme() {
        isDarkMode = !isDarkMode;
        document.documentElement.setAttribute(
            "data-theme",
            isDarkMode ? "dark" : "light",
        );
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
    }

    // Dados de educação
    const educacao = {
        universidade: "UTFPR - Universidade Tecnológica Federal do Paraná",
        curso: "Engenharia de Software",
        periodo: "2022-1 até 2025-1",
        duracao: "3 anos e meio",
        status: "Concluído",
        descricao:
            "Bacharelado em Engenharia de Software com foco em desenvolvimento de sistemas, arquitetura de software, gestão de projetos e metodologias ágeis.",
    };

    // Dados do portfólio
    const nome = "Micael Rocha";
    const titulo = "Engenheiro de Software | Desenvolvedor Full-Stack";
    const descricaoCompleta =
        "Sou um desenvolvedor full-stack apaixonado por tecnologia, com mais de 3 anos de experiência criando soluções inovadoras. Especializado em Go, JavaScript e tecnologias modernas.";

    const projetos = [
        {
            nome: "SpeakUp",
            tecnologias: [
                "Go",
                "Svelte",
                "MongoDB",
                "Docker",
                "Cloudflare",
                "Git",
                "GitHub",
                "Figma",
            ],
            descricao:
                "Uma plataforma que utiliza inteligência artificial para auxiliar no aprendizado de novos idiomas de maneira eficiente e personalizada.",
            status: "Produção",
            link: "https://speak-up.click",
        },
        {
            nome: "PraticSports",
            tecnologias: [
                "Go",
                "React",
                "PostgreSQL",
                "Docker",
                "Cloudflare",
                "Git",
                "GitHub",
                "Figma",
            ],
            descricao:
                "Aplicação para gestão de espaços esportivos, reservas, comandas, produtos e vendas.",
            status: "Produção",
            link: "https://praticsports.com",
        },
    ];

    const skillsCategories = {
        Linguagens: [
            "Go",
            "JavaScript",
            "TypeScript",
            "Python",
            "Java",
            "Lua",
            "C#",
        ],
        Frontend: ["React", "Svelte", "Vue.js", "Angular"],
        "Backend & APIs": ["GraphQL", "JSON"],
        "Bancos de Dados": ["MongoDB", "Redis", "PostgreSQL", "MySQL"],
        "DevOps & Cloud": ["Docker", "AWS", "Google Cloud", "Cloudflare"],
        Ferramentas: ["Git", "GitHub", "Figma"],
    };

    // Lista flat de todas as habilidades para compatibilidade
    const habilidades = Object.values(skillsCategories).flat();

    // Logos das tecnologias usando CDN do devicons
    const techLogos = {
        Go: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
        JavaScript:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        TypeScript:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        Lua: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg",
        "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
        React: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        Svelte: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
        "Vue.js":
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
        Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        Angular:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
        GraphQL:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
        MongoDB:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
        PostgreSQL:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        "Google Cloud":
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
        Cloudflare:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
        JSON: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
    };

    const contato = {
        telefone: "(21) 96740-6436",
        email: "micaelrrocha13@gmail.com",
        github: "https://github.com/eu-micaeu",
        linkedin: "https://www.linkedin.com/in/micael-ribeiro-rocha/",
    };

    // Scroll suave para seções
    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            closeMenu(); // Fecha o menu ao navegar
        }
    }

    // Animação de entrada dos elementos
    onMount(() => {
        // Carregar tema salvo
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            isDarkMode = savedTheme === "dark";
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else {
            // Detectar preferência do sistema
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)",
            ).matches;
            isDarkMode = prefersDark;
            document.documentElement.setAttribute(
                "data-theme",
                prefersDark ? "dark" : "light",
            );
        }

        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, observerOptions);

        // Observar elementos animados
        document.querySelectorAll(".animate-in").forEach((el) => {
            el.style.opacity = "0";
            el.style.transform = "translateY(30px)";
            el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            observer.observe(el);
        });
    });
</script>

<link rel="stylesheet" href="/src/routes/portfolio.css" />

<ThreeScene />

<!-- Navegação -->
<nav class="navbar">
    <div class="nav-container">
        
        <h3>Portfolio | Curriculum Vitae</h3>

        <!-- Menu hambúrguer para mobile -->
        <button
            on:click={toggleMenu}
            class="nav-toggle"
            class:active={isMenuOpen}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>

        <ul class="nav-menu" class:active={isMenuOpen}>
            <li>
                <button
                    on:click={() => scrollToSection("about")}
                    class="nav-link">Sobre</button
                >
            </li>
            <li>
                <button
                    on:click={() => scrollToSection("education")}
                    class="nav-link">Educação</button
                >
            </li>
            <li>
                <button
                    on:click={() => scrollToSection("projects")}
                    class="nav-link">Projetos</button
                >
            </li>
            <li>
                <button
                    on:click={() => scrollToSection("skills")}
                    class="nav-link">Skills</button
                >
            </li>
            <li>
                <button
                    on:click={() => scrollToSection("contact")}
                    class="nav-link">Contato</button
                >
            </li>
            <li>
                <button
                    on:click={toggleTheme}
                    class="theme-toggle"
                    aria-label="Alterar tema"
                >
                    {#if isDarkMode}
                        ☀️
                    {:else}
                        🌙
                    {/if}
                </button>
            </li>
        </ul>
    </div>
</nav>

<!-- Seção Hero -->
<section id="home" class="hero">
    <div class="hero-content animate-in">
        <h1 class="hero-title">{nome}</h1>
        <h2 class="hero-subtitle">{titulo}</h2>
        <div class="hero-buttons">
            <button
                on:click={() => scrollToSection("projects")}
                class="btn btn-primary"
            >
                Ver Projetos
            </button>
        </div>
    </div>
</section>

<!-- Seção Sobre -->
<section id="about" class="about">
    <div class="container">
        <div class="section-header animate-in">
            <h2 class="section-title">Sobre</h2>
            <div class="section-line"></div>
        </div>
        <div class="about-content animate-in">
            <p class="about-text">{descricaoCompleta}</p>
            <div class="about-stats">
                <div class="stat">
                    <span class="stat-number">3+</span>
                    <span class="stat-label">Anos de Experiência</span>
                </div>
                <div class="stat">
                    <span class="stat-number">{projetos.length}</span>
                    <span class="stat-label">Projetos Realizados</span>
                </div>
                <div class="stat">
                    <span class="stat-number">{habilidades.length}</span>
                    <span class="stat-label">Tecnologias</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Seção Educação -->
<section id="education" class="education">
    <div class="container">
        <div class="section-header animate-in">
            <h2 class="section-title">Educação</h2>
            <div class="section-line"></div>
        </div>
        <div class="education-content animate-in">
            <div class="education-card">
                <div class="education-header">
                    <div class="education-main">
                        <h3 class="education-degree">{educacao.curso}</h3>
                        <h4 class="education-institution">
                            {educacao.universidade}
                        </h4>
                    </div>
                    <div class="education-meta">
                        <span class="education-period">{educacao.periodo}</span>
                        <span class="education-duration"
                            >({educacao.duracao})</span
                        >
                    </div>
                </div>
                <p class="education-description">{educacao.descricao}</p>
                <div class="education-highlights">
                    <div class="highlight-item">
                        <span class="highlight-icon">🏗️</span>
                        <span>Arquitetura de software e padrões de design</span>
                    </div>
                    <div class="highlight-item">
                        <span class="highlight-icon">⚡</span>
                        <span>Metodologias ágeis e gestão de projetos</span>
                    </div>
                    <div class="highlight-item">
                        <span class="highlight-icon">🔧</span>
                        <span>Tecnologias modernas de desenvolvimento</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Seção Projetos -->
<section id="projects" class="projects">
    <div class="container">
        <div class="section-header animate-in">
            <h2 class="section-title">Projetos</h2>
            <div class="section-line"></div>
        </div>
        <div class="projects-grid">
            {#each projetos as projeto}
                <div class="project-card animate-in">
                    <div class="project-status">{projeto.status}</div>
                    <h3 class="project-title">{projeto.nome}</h3>
                    <p class="project-description">{projeto.descricao}</p>
                    <div class="project-tech">
                        {#each projeto.tecnologias as tech}
                            <span class="tech-badge">{tech}</span>
                        {/each}
                    </div>
                    <div class="project-actions">
                        <a
                            href={projeto.link}
                            target="_blank"
                            class="project-link"
                        >
                            Ver Projeto →
                        </a>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Seção Habilidades -->
<section id="skills" class="skills">
    <div class="container">
        <div class="section-header animate-in">
            <h2 class="section-title">Skills</h2>
            <div class="section-line"></div>
        </div>

        {#each Object.entries(skillsCategories) as [categoria, skills]}
            <div class="skills-category animate-in">
                <h3 class="category-title">{categoria}</h3>
                <div class="skills-grid">
                    {#each skills as skill}
                        <div class="skill-item">
                            <img
                                src={techLogos[skill]}
                                alt={skill}
                                class="skill-icon"
                                loading="lazy"
                            />
                            <span class="skill-name">{skill}</span>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</section>

<!-- Seção Contato -->
<section id="contact" class="contact">
    <div class="container">
        <div class="section-header animate-in">
            <h2 class="section-title">Contato</h2>
            <div class="section-line"></div>
        </div>
        <div class="contact-content animate-in">
            <div class="contact-links contact-links-column">
                <a href="mailto:{contato.email}" class="contact-link">
                    <span class="contact-icon">✉</span>
                    {contato.email}
                </a>
                <a href="tel:{contato.telefone}" class="contact-link">
                    <span class="contact-icon">📞</span>
                    {contato.telefone}
                </a>
                <a href={contato.github} target="_blank" class="contact-link">
                    <span class="contact-icon">🔗</span>
                    GitHub
                </a>
                <a href={contato.linkedin} target="_blank" class="contact-link">
                    <span class="contact-icon">💼</span>
                    LinkedIn
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="footer">
    <div class="container">
        <p>&copy; 2025 Micael Rocha.</p>
    </div>
</footer>
