<script>
    import ThreeScene from "$lib/ThreeScene.svelte";
    import { onMount } from "svelte";
    import user_roxo from "$lib/assets/user-roxo.svg";

    // Sistema de tema
    let isDarkMode = false;

    // Menu mobile
    let isMenuOpen = false;

    // Idioma
    let language = "pt";

    if (typeof window !== "undefined") {
        const savedLang = window.localStorage.getItem("language");
        if (savedLang) language = savedLang;
    }

    function toggleLanguage() {
        language = language === "pt" ? "en" : "pt";
        if (typeof window !== "undefined") {
            window.localStorage.setItem("language", language);
        }
    }

    // Traduções
    const translations = {
        pt: {
            nav: {
                about: "Sobre",
                education: "Educação",
                projects: "Projetos",
                skills: "Tecnologias",
                contact: "Contato",
                theme: "Alterar tema",
                lang: "Alterar idioma",
            },
            hero: {
                btn: "Ver Projetos",
            },
            about: {
                title: "Sobre",
                experience: "Anos de Experiência",
                projects: "Projetos Realizados",
                techs: "Tecnologias",
            },
            education: {
                title: "Educação",
                highlights: [
                    "Arquitetura de software e padrões de design",
                    "Metodologias ágeis e gestão de projetos",
                    "Tecnologias modernas de desenvolvimento",
                ],
            },
            projects: {
                title: "Projetos",
                github: "Ver Projeto no GitHub →",
                view: "Ver Projeto →",
            },
            skills: {
                title: "Tecnologias",
            },
            contact: {
                title: "Contato",
                email: "✉",
                phone: "📞",
                github: "🔗 GitHub",
                linkedin: "💼 LinkedIn",
            },
        },
        en: {
            nav: {
                about: "About",
                education: "Education",
                projects: "Projects",
                skills: "Technologies",
                contact: "Contact",
                theme: "Change theme",
                lang: "Change language",
            },
            hero: {
                btn: "See Projects",
            },
            about: {
                title: "About",
                experience: "Years of Experience",
                projects: "Completed Projects",
                techs: "Technologies",
            },
            education: {
                title: "Education",
                highlights: [
                    "Software architecture and design patterns",
                    "Agile methodologies and project management",
                    "Modern development technologies",
                ],
            },
            projects: {
                title: "Projects",
                github: "View Project on GitHub →",
                view: "View Project →",
            },
            skills: {
                title: "Technologies",
            },
            contact: {
                title: "Contact",
                email: "✉",
                phone: "📞",
                github: "🔗 GitHub",
                linkedin: "💼 LinkedIn",
            },
        },
    };

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

    // Dados de educação traduzidos
    const educacaoData = {
        pt: {
            universidade: "UTFPR - Universidade Tecnológica Federal do Paraná",
            curso: "Engenharia de Software",
            periodo: "2022-1 até 2025-1",
            duracao: "3 anos e meio",
            status: "Concluído",
            descricao:
                "Bacharelado em Engenharia de Software com foco em desenvolvimento de sistemas, arquitetura de software, gestão de projetos e metodologias ágeis.",
        },
        en: {
            universidade: "UTFPR - Federal University of Technology - Paraná",
            curso: "Software Engineering",
            periodo: "2022-1 to 2025-1",
            duracao: "3.5 years",
            status: "Completed",
            descricao:
                "Bachelor's degree in Software Engineering focused on systems development, software architecture, project management, and agile methodologies.",
        },
    };

    // Dados do portfólio traduzidos
    const nomeData = {
        pt: "Micael Rocha",
        en: "Micael Rocha",
    };
    const tituloData = {
        pt: "Engenheiro de Software | Desenvolvedor Full-Stack",
        en: "Software Engineer | Full-Stack Developer",
    };
    const descricaoCompletaData = {
        pt: "Sou um desenvolvedor full-stack apaixonado por tecnologia, com mais de 3 anos de experiência criando soluções inovadoras. Especializado em Go, JavaScript e tecnologias modernas.",
        en: "I'm a passionate full-stack developer with over 3 years of experience creating innovative solutions. Specialized in Go, JavaScript, and modern technologies.",
    };

    // Status dos projetos traduzidos
    const statusProjetos = {
        pt: {
            Produção: "Produção",
            "Em desenvolvimento": "Em desenvolvimento",
        },
        en: {
            Produção: "Production",
            "Em desenvolvimento": "In development",
        },
    };

    // Categorias de habilidades traduzidas
    const skillsCategoriesData = {
        pt: {
            Linguagens: [
                "Go",
                "JavaScript",
                "TypeScript",
                "Python",
                "Java",
                "Lua",
                "C#",
            ],
            "Frameworks de Frontend": ["React", "Svelte", "Vue.js", "Angular"],
            "Frameworks de Backend": ["Express", "Gin", "Spring Boot"],
            "APIs": ["GraphQL", "JSON"],
            "Bancos de Dados": ["MongoDB", "Redis", "PostgreSQL", "MySQL"],
            "DevOps & Cloud": ["Docker", "AWS", "Google Cloud", "Cloudflare"],
            Ferramentas: ["Git", "GitHub", "Figma", "Astah", "Trello"],
        },
        en: {
            Languages: [
                "Go",
                "JavaScript",
                "TypeScript",
                "Python",
                "Java",
                "Lua",
                "C#",
            ],
            "Frontend Frameworks": ["React", "Svelte", "Vue.js", "Angular"],
            "Backend Frameworks": ["Express", "Gin", "Spring Boot"],
            "APIs": ["GraphQL", "JSON"],
            Databases: ["MongoDB", "Redis", "PostgreSQL", "MySQL"],
            "DevOps & Cloud": ["Docker", "AWS", "Google Cloud", "Cloudflare"],
            Tools: ["Git", "GitHub", "Figma", "Astah", "Trello"],
        },
    };

    const projetos = [
        {
            nome: "SpeakUp",
            tecnologias: [
                "Go",
                "JavaScript",
                "Svelte",
                "MongoDB",
                "Docker",
                "Cloudflare",
                "Git",
                "GitHub",
                "Figma",
                "JSON",
            ],
            descricao: {
                pt: "Uma plataforma que utiliza inteligência artificial para auxiliar no aprendizado de novos idiomas de maneira eficiente e personalizada.",
                en: "A platform that uses artificial intelligence to help users learn new languages efficiently and in a personalized way.",
            },
            status: "Produção",
            link: "https://speak-up.click",
        },
        {
            nome: "PraticSports",
            tecnologias: [
                "Go",
                "JavaScript",
                "React",
                "PostgreSQL",
                "Docker",
                "Cloudflare",
                "Git",
                "GitHub",
                "Figma",
                "JSON",
            ],
            descricao: {
                pt: "Aplicação para gestão de espaços esportivos, reservas, comandas, produtos e vendas.",
                en: "Application for managing sports venues, reservations, orders, products, and sales.",
            },
            status: "Produção",
            link: "https://praticsports.com",
        },
        {
            nome: "Balancy",
            tecnologias: [
                "Go",
                "JavaScript",
                "React",
                "PostgreSQL",
                "Docker",
                "Git",
                "GitHub",
                "Figma",
                "JSON",
            ],
            descricao: {
                pt: "Aplicação para o gerenciamento da quantidade de calorias que o usuário ingere e gasta ao longo do dia.",
                en: "Application for managing the amount of calories the user consumes and burns throughout the day.",
            },
            status: "Em desenvolvimento",
            link: "https://github.com/eu-micaeu/Balancy",
        },
        {
            nome: "Foq",
            tecnologias: [
                "Go",
                "JavaScript",
                "React",
                "PostgreSQL",
                "Docker",
                "Git",
                "GitHub",
                "Figma",
                "JSON",
            ],
            descricao: {
                pt: "Aplicação para o gerenciamento de tasks, um to-do list que ajuda o usuário a organizar suas atividades diárias.",
                en: "Application for managing tasks, a to-do list that helps users organize their daily activities.",
            },
            status: "Em desenvolvimento",
            link: "https://github.com/eu-micaeu/Foq",
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
        "Frameworks de Frontend": ["React", "Svelte", "Vue.js", "Angular"],
        "Frameworks de Backend": ["Express", "Gin", "Spring Boot"],
        "APIs": ["GraphQL", "JSON"],
        "Bancos de Dados": ["MongoDB", "Redis", "PostgreSQL", "MySQL"],
        "DevOps & Cloud": ["Docker", "AWS", "Google Cloud", "Cloudflare"],
        Ferramentas: ["Git", "GitHub", "Figma", "Astah", "Trello"],
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
        Astah: "https://astah.net/wp-content/uploads/2019/07/Astah_blue.svg",
        Trello: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg",
        AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        "Google Cloud":
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
        Cloudflare:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
        JSON: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
        Express:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        Gin: "https://gin-gonic.com/_astro/gin.D6H2T_2v_ZD2G7l.webp",
        "Spring Boot":
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
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
        <h3>Portfolio</h3>

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
                    class="nav-link">{translations[language].nav.about}</button
                >
            </li>
            <li>
                <button
                    on:click={() => scrollToSection("education")}
                    class="nav-link"
                    >{translations[language].nav.education}</button
                >
            </li>
            <li>
                <button
                    on:click={() => scrollToSection("projects")}
                    class="nav-link"
                    >{translations[language].nav.projects}</button
                >
            </li>
            <li>
                <button
                    on:click={() => scrollToSection("skills")}
                    class="nav-link">{translations[language].nav.skills}</button
                >
            </li>
            <li>
                <button
                    on:click={() => scrollToSection("contact")}
                    class="nav-link"
                    >{translations[language].nav.contact}</button
                >
            </li>
            <li>
                <button
                    on:click={toggleTheme}
                    class="theme-toggle"
                    aria-label={translations[language].nav.theme}
                >
                    {#if isDarkMode}
                        ☀️
                    {:else}
                        🌙
                    {/if}
                </button>
            </li>
            <li>
                <button
                    on:click={toggleLanguage}
                    class="lang-toggle"
                    aria-label={translations[language].nav.lang}
                >
                    {#if language === "pt"}
                        PT
                    {:else}
                        EN
                    {/if}
                </button>
            </li>
        </ul>
    </div>
</nav>

<!-- Seção Hero -->
<section id="home" class="hero">
    <div class="hero-content animate-in">
        <h1 class="hero-title">{nomeData[language]}</h1>
        <h2 class="hero-subtitle">{tituloData[language]}</h2>
        <div class="hero-buttons">
            <button
                on:click={() => scrollToSection("projects")}
                class="btn btn-primary"
            >
                {translations[language].hero.btn}
            </button>
        </div>
    </div>
</section>

<!-- Seção Sobre -->
<section id="about" class="about">
    <div class="container">
        <div class="section-header animate-in">
            <h2 class="section-title">{translations[language].about.title}</h2>
            <div class="section-line"></div>
        </div>
        <div class="about-content animate-in">
            <p class="about-text">{descricaoCompletaData[language]}</p>
            <div class="about-stats">
                <div class="stat">
                    <span class="stat-number">3+</span>
                    <span class="stat-label"
                        >{translations[language].about.experience}</span
                    >
                </div>
                <div class="stat">
                    <span class="stat-number">{projetos.length}</span>
                    <span class="stat-label"
                        >{translations[language].about.projects}</span
                    >
                </div>
                <div class="stat">
                    <span class="stat-number">{habilidades.length}</span>
                    <span class="stat-label"
                        >{translations[language].about.techs}</span
                    >
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Seção Educação -->
<section id="education" class="education">
    <div class="container">
        <div class="section-header animate-in">
            <h2 class="section-title">
                {translations[language].education.title}
            </h2>
            <div class="section-line"></div>
        </div>
        <div class="education-content animate-in">
            <div class="education-card">
                <div class="education-header">
                    <div class="education-main">
                        <h3 class="education-degree">
                            {educacaoData[language].curso}
                        </h3>
                        <h4 class="education-institution">
                            {educacaoData[language].universidade}
                        </h4>
                    </div>
                    <div class="education-meta">
                        <span class="education-period"
                            >{educacaoData[language].periodo}</span
                        >
                        <span class="education-duration"
                            >({educacaoData[language].duracao})</span
                        >
                    </div>
                </div>
                <p class="education-description">
                    {educacaoData[language].descricao}
                </p>
                <div class="education-highlights">
                    {#each translations[language].education.highlights as highlight, i}
                        <div class="highlight-item">
                            <span class="highlight-icon"
                                >{i === 0 ? "🏗️" : i === 1 ? "⚡" : "🔧"}</span
                            >
                            <span>{highlight}</span>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Seção Projetos -->
<section id="projects" class="projects">
    <div class="container">
        <div class="section-header animate-in">
            <h2 class="section-title">
                {translations[language].projects.title}
            </h2>
            <div class="section-line"></div>
        </div>
        <div class="projects-grid">
            {#each projetos as projeto}
                <div class="project-card animate-in">
                    <div class="project-status">
                        {statusProjetos[language][projeto.status]}
                    </div>
                    <h3 class="project-title">{projeto.nome}</h3>
                    <p class="project-description">
                        {projeto.descricao[language]}
                    </p>
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
                            {projeto.link && projeto.link.includes("github.com")
                                ? translations[language].projects.github
                                : translations[language].projects.view}
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
            <h2 class="section-title">{translations[language].skills.title}</h2>
            <div class="section-line"></div>
        </div>

        {#each Object.entries(skillsCategoriesData[language]) as [categoria, skills]}
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
            <h2 class="section-title">
                {translations[language].contact.title}
            </h2>
            <div class="section-line"></div>
        </div>
        <div class="contact-content animate-in">
            <div class="contact-links contact-links-column">
                <a href="mailto:{contato.email}" class="contact-link">
                    <span class="contact-icon"
                        >{translations[language].contact.email}</span
                    >
                    {contato.email}
                </a>
                <a href="tel:{contato.telefone}" class="contact-link">
                    <span class="contact-icon"
                        >{translations[language].contact.phone}</span
                    >
                    {contato.telefone}
                </a>
                <a href={contato.github} target="_blank" class="contact-link">
                    <span class="contact-icon"
                        >{translations[language].contact.github.split(
                            " ",
                        )[0]}</span
                    >
                    {translations[language].contact.github.split(" ")[1]}
                </a>
                <a href={contato.linkedin} target="_blank" class="contact-link">
                    <span class="contact-icon"
                        >{translations[language].contact.linkedin.split(
                            " ",
                        )[0]}</span
                    >
                    {translations[language].contact.linkedin.split(" ")[1]}
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
