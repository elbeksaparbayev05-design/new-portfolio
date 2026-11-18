// Trilingual Data and Interactivity for Elbek Saparbayev Portfolio

const translations = {
  uz: {
    nav: { home: 'Bosh sahifa', about: 'Men haqimda', skills: "Ko'nikmalar", projects: 'Loyihalar', journey: "Yo'nalishim", contact: 'Aloqa', contactBtn: "Bog'lanish" },
    hero: {
      roleBadge: 'FRONTEND & AI WEB DEVELOPER',
      titlePart1: 'Zamonaviy va aqlli ',
      titleHighlight: 'web-yechimlar yarataman',
      subtitle: "Salom, men Elbek Saparbayev — Frontend va Web Developer. UI/UX dizayn tamoyillari hamda sun'iy intellekt texnologiyalari yordamida tezkor, moslashuvchan va qulay web-ilovalarni ishlab chiqaman.",
      viewProjects: "Loyihalarimni ko'rish",
      contactMe: "Men bilan bog'lanish",
      techStackLabel: 'ASOSIY TEXNOLOGIYALAR',
      stats: { projectsLabel: 'Web Loyihalar', techLabel: 'Texnologiyalar', langsLabel: 'Til (UZ / RU / EN)' }
    },
    about: {
      eyebrow: 'MEN HAQIMDA',
      heading: 'Toza kod va zamonaviy dizayn <span class="text-blue-500">uyg‘unligi.</span>',
      desc1: "Men Elbek Saparbayev — frontend dasturlash, UI/UX dizayn va sun'iy intellekt vositalari bilan ishlashga ixtisoslashgan web-dasturchiman. Har bir loyihada foydalanuvchi qulayligi, interfeys aniqligi va barcha qurilmalarga moslashuvchanlikni birinchi o'ringa qo'yaman.",
      desc2: "Hozirda React.js, TypeScript va Tailwind CSS ekotizimida zamonaviy interfeyslar yaratish hamda AI tools va Prompt Engineering orqali g'oyalarni tez va sifatli raqamli mahsulotlarga aylantirish ustida ishlayapman.",
      btn: "Yo'nalishim bilan tanishish",
      details: { name: 'Ism-sharif', focus: 'Asosiy yo‘nalish', stack: 'Asosiy stek', status: 'Hamkorlik', statusVal: 'Yangi loyihalar uchun ochiq' }
    },
    skills: {
      eyebrow: "KO'NIKMALAR VA YO'NALISHLAR",
      sub: 'Zamonaviy web-loyihalarni yaratishda foydalanadigan asosiy texnologiyalar va yondashuvlarim',
      categories: [
        { title: 'Frontend Development', desc: 'Komponent arxitekturasiga asoslangan tezkor va interaktiv foydalanuvchi interfeyslarini yaratish.', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js'] },
        { title: 'UI Styling & Responsive', desc: 'Desktop, planshet va mobil ekranlarga mukammal moslashuvchi zamonaviy dizayn tizimlari.', items: ['Tailwind CSS', 'Responsive Web Design', 'UI/UX Principles'] },
        { title: 'AI-Powered Web Dev', desc: "Sun'iy intellekt vositalari va samarali promptlar yordamida loyihalash va rivojlantirish.", items: ['AI Tools', 'Prompt Engineering', 'AI Web Integration'] },
        { title: 'Version Control & Workflow', desc: 'Kod bazasini tartibli boshqarish, versiyalash va loyiha tuzilmasini optimallashtirish.', items: ['Git', 'GitHub', 'Clean Architecture'] }
      ]
    },
    projects: {
      eyebrow: 'TANLANGAN LOYIHALARIM',
      viewAll: "Barchasini ko'rish",
      showLess: 'Ixcham ko‘rinish',
      detailsBtn: 'Batafsil',
      githubBtn: 'GitHub',
      noPublicLinkNote: 'Ushbu loyiha uchun ommaviy havola hali biriktirilmagan.',
      modalTechLabel: 'Foydalanilgan texnologiyalar',
      closeBtn: 'Yopish',
      items: [
        { id: 'mebelchi-ai', title: 'MEBELCHI AI', badge: 'AI Platform', shortDesc: "Sun'iy intellekt yordamida mebel dizaynini yaratish va vizualizatsiya qilish platformasi.", fullDesc: "MEBELCHI AI — foydalanuvchilarga sun'iy intellekt texnologiyalari yordamida zamonaviy mebel dizaynlarini loyihalash, uslublarni tanlash va tezkor vizual konseptlar yaratish imkonini beruvchi web-platforma.", tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'AI Tools', 'Prompt Engineering'], githubUrl: 'https://github.com/elbeksaparbayev05-design', accent: 'from-blue-600/30 via-indigo-600/20 to-slate-900', mockupSubtitle: 'AI Interior & Furniture Studio', mockupTitle: 'MEBELCHI AI' },
        { id: 'lifeflow', title: 'LifeFlow', badge: 'Productivity App', shortDesc: 'Kundalik hayot, vazifalar va vaqtni samarali boshqarish uchun mo‘ljallangan platforma.', fullDesc: 'LifeFlow — kunlik rejalarni tartibga solish, ustuvor vazifalarni belgilash va vaqtdan unumli foydalanishga yordam beruvchi minimalistik va qulay boshqaruv interfeysi.', tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Responsive Web Design'], externalUrl: 'https://t.me/LifeFlow_Assistant_bot', accent: 'from-cyan-600/30 via-blue-600/20 to-slate-900', mockupSubtitle: 'Daily Tasks & Time Planner', mockupTitle: 'LifeFlow' },
        { id: 'tezqafe', title: 'TezQafe', badge: 'Food & Restaurant Web', shortDesc: 'Ovqatlanish va restoran boshqaruvi jarayonlarini raqamlashtirishga qaratilgan web-loyiha.', fullDesc: 'TezQafe — menyu, buyurtmalar oqimi va mijozlar uchun qulay interfeysni birlashtirgan zamonaviy restoran va ovqatlanish xizmati web-loyihasi.', tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'], externalUrl: 'https://elbeksaparbayev05-design.github.io/tez-cafe.uz/', accent: 'from-orange-600/30 via-amber-600/20 to-slate-900', mockupSubtitle: 'Smart Restaurant & Ordering UI', mockupTitle: 'TezQafe' },
        { id: 'vipusknik', title: 'VIPUSKNIK', badge: 'Web Platform', shortDesc: 'Bitiruvchilar uchun zamonaviy va estetik dizaynga ega web-platforma.', fullDesc: "VIPUSKNIK — bitiruvchilar uchun esdalik sahifalar, ma'lumotlar va zamonaviy interaktiv taqdimotni o'z ichiga olgan moslashuvchan web-platforma.", tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design'], externalUrl: 'https://elbeksaparbayev05-design.github.io/GRADUATE-2027/', accent: 'from-indigo-600/30 via-blue-600/20 to-slate-900', mockupSubtitle: 'Modern Alumni & Graduation Portal', mockupTitle: 'VIPUSKNIK' },
        { id: 'demon-slayer', title: 'Demon Slayer Website', badge: 'Creative Web', shortDesc: 'Anime mavzusidagi dinamik vizual effektlar va qahramonlar sahifasiga ega web-loyiha.', fullDesc: 'Demon Slayer Website — atmosfera, qahramonlar haqida ma’lumotlar va zamonaviy sahifa o‘tishlari bilan boyitilgan kreativ fan-loyiha.', tech: ['HTML', 'CSS', 'JavaScript', 'Git & GitHub'], externalUrl: 'https://elbeksaparbayev05-design.github.io/demon-slayer-new-./', accent: 'from-rose-600/30 via-purple-600/20 to-slate-900', mockupSubtitle: 'Interactive Anime Showcase', mockupTitle: 'Demon Slayer' },
        { id: 'mega-technologies', title: 'MEGA TECHNOLOGIES', badge: 'Brand & UI/UX', shortDesc: 'Texnologik brend identikasi va zamonaviy korporativ web-dizayn loyihasi.', fullDesc: 'MEGA TECHNOLOGIES — texnologik kompaniya uchun ishlab chiqilgan zamonaviy UI/UX konsepsiya, brend taqdimoti va moslashuvchan web-interfeys.', tech: ['React.js', 'Tailwind CSS', 'UI/UX Design', 'Responsive Web Design'], githubUrl: 'https://github.com/elbeksaparbayev05-design', accent: 'from-sky-600/30 via-blue-700/20 to-slate-900', mockupSubtitle: 'Tech Brand & Web Experience', mockupTitle: 'MEGA TECH' }
      ]
    },
    journey: {
      eyebrow: "MENING YO'NALISHIM VA RIVOJLANISHIM",
      sub: "IT sohasidagi o'rganish jarayonim, hozirgi texnik fokusim va kelajakdagi professional maqsadlarim",
      steps: [
        { phase: '1-BOSQICH • ASOSLAR', title: 'Web Dasturlash Poydevori', category: 'HTML, CSS, JavaScript & Responsive Design', desc: "Semantik HTML, zamonaviy CSS layoutlar (Flexbox, Grid), JavaScript asoslari hamda har qanday ekran o'lchamiga moslashuvchi interfeyslar qurishni o'zlashtirish." },
        { phase: '2-BOSQICH • ZAMONAVIY EKOTIZIM', title: 'React.js, TypeScript va Tailwind CSS', category: 'Frontend Architecture & UI/UX', desc: "Qayta foydalaniladigan komponentlar arxitekturasi, TypeScript orqali xavfsiz kod yozish, Tailwind CSS bilan tezkor dizayn tizimlari hamda Git/GitHub bilan ishlash." },
        { phase: '3-BOSQICH • HOZIRGI FOKUS', title: "AI Yordamida Web-Loyihalar Yaratish", category: 'AI Tools & Prompt Engineering', desc: "Sun'iy intellekt vositalari va Prompt Engineering yordamida prototiplash, UI/UX yechimlarni tezlashtirish va MEBELCHI AI, LifeFlow, TezQafe kabi amaliy loyihalarni rivojlantirish." },
        { phase: '4-BOSQICH • KELAJAK MAQSADLARI', title: 'Yuqori Samarali Raqamli Mahsulotlar', category: 'Senior Frontend & Product Engineering', desc: "Murakkab web-ilovalarni arxitektura darajasida loyihalash, foydalanuvchi tajribasini mukammallashtirish va AI integratsiyasiga ega global darajadagi web-mahsulotlar yaratish." }
      ]
    },
    contact: {
      eyebrow: "MEN BILAN BOG'LANISH",
      heading: "Yangi g'oya yoki loyiha bormi?",
      desc: "Frontend dasturlash, zamonaviy web-sayt yaratish yoki AI asosidagi web-loyihalar bo'yicha hamkorlik qilish uchun xabar qoldiring.",
      emailTitle: 'Elektron pochta',
      ghTitle: 'GitHub profili',
      locTitle: 'Yo‘nalish',
      form: { send: 'Xabar yuborish', success: "Xabaringiz muvaffaqiyatli tayyorlandi! Tez orada siz bilan bog'lanaman." }
    },
    footer: {
      bio: "Zamonaviy UI/UX dizayn va sun'iy intellekt texnologiyalari asosida tezkor, moslashuvchan web-loyihalar yaratuvchi Frontend Developer.",
      linksTitle: 'Tezkor havolalar',
      connectTitle: 'Tarmoqlar',
      focusTitle: "Asosiy yo'nalishlar",
      focusItems: ['Frontend Development', 'UI/UX Web Design', 'AI Web Solutions', 'Responsive Interfaces'],
      copyright: '© 2026 Elbek Saparbayev. Barcha huquqlar himoyalangan.',
      built: 'React, TypeScript & Tailwind CSS asosida yaratildi'
    }
  },
  ru: {
    nav: { home: 'Главная', about: 'Обо мне', skills: 'Навыки', projects: 'Проекты', journey: 'Путь развития', contact: 'Контакты', contactBtn: 'Связаться' },
    hero: {
      roleBadge: 'FRONTEND & AI WEB DEVELOPER',
      titlePart1: 'Создаю современные ',
      titleHighlight: 'и умные веб-решения',
      subtitle: 'Привет, я Элбек Сапарбаев — Frontend и Web разработчик. Создаю быстрые, адаптивные и эстетичные веб-приложения, объединяя принципы UI/UX дизайна и технологии искусственного интеллекта.',
      viewProjects: 'Смотреть проекты',
      contactMe: 'Связаться со мной',
      techStackLabel: 'ОСНОВНЫЕ ТЕХНОЛОГИИ',
      stats: { projectsLabel: 'Веб-проектов', techLabel: 'Технологий', langsLabel: 'Языка (UZ / RU / EN)' }
    },
    about: {
      eyebrow: 'ОБО МНЕ',
      heading: 'Гармония чистого кода <span class="text-blue-500">и современного дизайна.</span>',
      desc1: 'Я Элбек Сапарбаев — веб-разработчик, специализирующийся на фронтенд-разработке, UI/UX дизайне и работе с инструментами искусственного интеллекта. В каждом проекте уделяю особое внимание удобству интерфейса и полной адаптивности под любые устройства.',
      desc2: 'Сейчас я развиваю современные веб-интерфейсы на стеке React.js, TypeScript и Tailwind CSS, а также применяю AI-инструменты и Prompt Engineering для быстрого превращения идей в качественные цифровые продукты.',
      btn: 'Узнать о моём пути',
      details: { name: 'Имя', focus: 'Специализация', stack: 'Основной стек', status: 'Статус', statusVal: 'Открыт к новым проектам' }
    },
    skills: {
      eyebrow: 'НАВЫКИ И КОМПЕТЕНЦИИ',
      sub: 'Ключевые технологии и подходы, которые я использую при создании современных веб-проектов',
      categories: [
        { title: 'Frontend Development', desc: 'Разработка быстрых и интерактивных пользовательских интерфейсов на компонентной архитектуре.', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js'] },
        { title: 'UI Styling & Responsive', desc: 'Современные дизайн-системы, идеально адаптированные под десктопы, планшеты и смартфоны.', items: ['Tailwind CSS', 'Responsive Web Design', 'UI/UX Principles'] },
        { title: 'AI-Powered Web Dev', desc: 'Проектирование и ускорение веб-разработки с помощью ИИ-инструментов и эффективных промптов.', items: ['AI Tools', 'Prompt Engineering', 'AI Web Integration'] },
        { title: 'Version Control & Workflow', desc: 'Структурированное управление кодовой базой, контроль версий и оптимизация архитектуры.', items: ['Git', 'GitHub', 'Clean Architecture'] }
      ]
    },
    projects: {
      eyebrow: 'ИЗБРАННЫЕ ПРОЕКТЫ',
      viewAll: 'Показать все',
      showLess: 'Свернуть',
      detailsBtn: 'Подробнее',
      githubBtn: 'GitHub',
      noPublicLinkNote: 'Публичная ссылка для этого проекта пока не прикреплена.',
      modalTechLabel: 'Использованные технологии',
      closeBtn: 'Закрыть',
      items: [
        { id: 'mebelchi-ai', title: 'MEBELCHI AI', badge: 'AI Platform', shortDesc: 'Платформа для генерации и визуализации дизайна мебели с помощью искусственного интеллекта.', fullDesc: 'MEBELCHI AI — веб-платформа, позволяющая пользователям проектировать современный дизайн мебели, подбирать стили и создавать визуальные концепты с использованием ИИ-технологий.', tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'AI Tools', 'Prompt Engineering'], githubUrl: 'https://github.com/elbeksaparbayev05-design', accent: 'from-blue-600/30 via-indigo-600/20 to-slate-900', mockupSubtitle: 'AI Interior & Furniture Studio', mockupTitle: 'MEBELCHI AI' },
        { id: 'lifeflow', title: 'LifeFlow', badge: 'Productivity App', shortDesc: 'Платформа для организации повседневной жизни, управления задачами и временем.', fullDesc: 'LifeFlow — минималистичный и удобный интерфейс для планирования дня, расстановки приоритетов и эффективного управления личным временем.', tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Responsive Web Design'], externalUrl: 'https://t.me/LifeFlow_Assistant_bot', accent: 'from-cyan-600/30 via-blue-600/20 to-slate-900', mockupSubtitle: 'Daily Tasks & Time Planner', mockupTitle: 'LifeFlow' },
        { id: 'tezqafe', title: 'TezQafe', badge: 'Food & Restaurant Web', shortDesc: 'Веб-проект для сферы общественного питания и управления ресторанными процессами.', fullDesc: 'TezQafe — современный веб-проект для ресторанов и сервисов питания, объединяющий удобное меню, оформление заказов и адаптивный интерфейс.', tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'], externalUrl: 'https://elbeksaparbayev05-design.github.io/tez-cafe.uz/', accent: 'from-orange-600/30 via-amber-600/20 to-slate-900', mockupSubtitle: 'Smart Restaurant & Ordering UI', mockupTitle: 'TezQafe' },
        { id: 'vipusknik', title: 'VIPUSKNIK', badge: 'Web Platform', shortDesc: 'Современная веб-платформа для выпускников с эстетичным и адаптивным интерфейсом.', fullDesc: 'VIPUSKNIK — современная веб-платформа для выпускников с памятными разделами, информацией и выразительной визуальной подачей.', tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design'], externalUrl: 'https://elbeksaparbayev05-design.github.io/GRADUATE-2027/', accent: 'from-indigo-600/30 via-blue-600/20 to-slate-900', mockupSubtitle: 'Modern Alumni & Graduation Portal', mockupTitle: 'VIPUSKNIK' },
        { id: 'demon-slayer', title: 'Demon Slayer Website', badge: 'Creative Web', shortDesc: 'Тематический веб-проект по мотивам аниме с динамичной подачей и обзором персонажей.', fullDesc: 'Demon Slayer Website — креативный веб-проект с выразительной атмосферой, карточками персонажей и плавной навигацией.', tech: ['HTML', 'CSS', 'JavaScript', 'Git & GitHub'], externalUrl: 'https://elbeksaparbayev05-design.github.io/demon-slayer-new-./', accent: 'from-rose-600/30 via-purple-600/20 to-slate-900', mockupSubtitle: 'Interactive Anime Showcase', mockupTitle: 'Demon Slayer' },
        { id: 'mega-technologies', title: 'MEGA TECHNOLOGIES', badge: 'Brand & UI/UX', shortDesc: 'Проект технологического бренда и современного корпоративного веб-дизайна.', fullDesc: 'MEGA TECHNOLOGIES — современная UI/UX концепция, визуальная айдентика и адаптивный веб-интерфейс для технологического бренда.', tech: ['React.js', 'Tailwind CSS', 'UI/UX Design', 'Responsive Web Design'], githubUrl: 'https://github.com/elbeksaparbayev05-design', accent: 'from-sky-600/30 via-blue-700/20 to-slate-900', mockupSubtitle: 'Tech Brand & Web Experience', mockupTitle: 'MEGA TECH' }
      ]
    },
    journey: {
      eyebrow: 'МОЙ ПУТЬ И РАЗВИТИЕ',
      sub: 'Процесс обучения в сфере IT, текущие технические направления и профессиональные цели',
      steps: [
        { phase: 'ЭТАП 1 • ФУНДАМЕНТ', title: 'Основы веб-разработки', category: 'HTML, CSS, JavaScript & Responsive Design', desc: 'Освоение семантической верстки HTML, современных сеток CSS (Flexbox, Grid), базового JavaScript и создания интерфейсов, адаптированных под любые экраны.' },
        { phase: 'ЭТАП 2 • СОВРЕМЕННЫЙ СТЕК', title: 'React.js, TypeScript и Tailwind CSS', category: 'Frontend Architecture & UI/UX', desc: 'Построение переиспользуемой компонентной архитектуры, типизация на TypeScript, быстрая стилизация с Tailwind CSS и контроль версий через Git и GitHub.' },
        { phase: 'ЭТАП 3 • ТЕКУЩИЙ ФОКУС', title: 'Веб-разработка с помощью ИИ', category: 'AI Tools & Prompt Engineering', desc: 'Применение ИИ-инструментов и Prompt Engineering для проектирования интерфейсов, ускорения разработки и развития проектов MEBELCHI AI, LifeFlow и TezQafe.' },
        { phase: 'ЭТАП 4 • ЦЕЛИ НА БУДУЩЕЕ', title: 'Масштабируемые цифровые продукты', category: 'Senior Frontend & Product Engineering', desc: 'Проектирование сложных веб-приложений, совершенствование пользовательского опыта и создание востребованных веб-продуктов с интеграцией ИИ.' }
      ]
    },
    contact: {
      eyebrow: 'СВЯЗАТЬСЯ СО МНОЙ',
      heading: 'Есть идея или проект для обсуждения?',
      desc: 'Напишите мне по вопросам фронтенд-разработки, создания современного сайта или сотрудничества над веб-проектами с использованием ИИ.',
      emailTitle: 'Электронная почта',
      ghTitle: 'Профиль GitHub',
      locTitle: 'Направление',
      form: { send: 'Отправить сообщение', success: 'Ваше сообщение успешно подготовлено! Я свяжусь с вами в ближайшее время.' }
    },
    footer: {
      bio: 'Frontend разработчик, создающий быстрые и адаптивные веб-проекты на основе современного UI/UX дизайна и технологий искусственного интеллекта.',
      linksTitle: 'Навигация',
      connectTitle: 'Ссылки',
      focusTitle: 'Направления',
      focusItems: ['Frontend Development', 'UI/UX Web Design', 'AI Web Solutions', 'Responsive Interfaces'],
      copyright: '© 2026 Elbek Saparbayev. Все права защищены.',
      built: 'Создано на React, TypeScript и Tailwind CSS'
    }
  },
  en: {
    nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', journey: 'Journey', contact: 'Contact', contactBtn: 'Get in Touch' },
    hero: {
      roleBadge: 'FRONTEND & AI WEB DEVELOPER',
      titlePart1: 'I Build Modern & ',
      titleHighlight: 'Smart Web Solutions',
      subtitle: "Hi, I'm Elbek Saparbayev — a Frontend and Web Developer passionate about UI/UX design and artificial intelligence, crafting fast, responsive, and user-centered digital experiences.",
      viewProjects: 'View My Projects',
      contactMe: 'Contact Me',
      techStackLabel: 'CORE TECHNOLOGIES',
      stats: { projectsLabel: 'Web Projects', techLabel: 'Technologies', langsLabel: 'Languages (UZ / RU / EN)' }
    },
    about: {
      eyebrow: 'ABOUT ME',
      heading: 'Building products with <span class="text-blue-500">clean code and modern UI.</span>',
      desc1: "I'm Elbek Saparbayev — a web developer focused on frontend engineering, UI/UX design, and AI-powered workflows. I prioritize clean architecture, visual clarity, and seamless responsiveness across every device.",
      desc2: 'Currently, I focus on building modern interfaces with React.js, TypeScript, and Tailwind CSS while leveraging AI tools and Prompt Engineering to turn ideas into polished web applications.',
      btn: 'Explore My Journey',
      details: { name: 'Name', focus: 'Primary Focus', stack: 'Core Stack', status: 'Availability', statusVal: 'Open for collaborations' }
    },
    skills: {
      eyebrow: 'SKILLS & EXPERTISE',
      sub: 'Core technologies and practices I use to build modern, responsive web experiences',
      categories: [
        { title: 'Frontend Development', desc: 'Building fast, interactive user interfaces using clean component-based architecture.', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js'] },
        { title: 'UI Styling & Responsive', desc: 'Crafting adaptive layouts that look sharp across desktop, laptop, tablet, and mobile screens.', items: ['Tailwind CSS', 'Responsive Web Design', 'UI/UX Principles'] },
        { title: 'AI-Powered Web Dev', desc: 'Accelerating ideation, prototyping, and development with AI tools and structured prompts.', items: ['AI Tools', 'Prompt Engineering', 'AI Web Integration'] },
        { title: 'Version Control & Workflow', desc: 'Maintaining clean repositories, version history, and structured project workflows.', items: ['Git', 'GitHub', 'Clean Architecture'] }
      ]
    },
    projects: {
      eyebrow: 'FEATURED PROJECTS',
      viewAll: 'View All Projects',
      showLess: 'Show Compact',
      detailsBtn: 'Details',
      githubBtn: 'GitHub',
      noPublicLinkNote: 'A public deployment link has not been attached to this project yet.',
      modalTechLabel: 'Technologies Used',
      closeBtn: 'Close',
      items: [
        { id: 'mebelchi-ai', title: 'MEBELCHI AI', badge: 'AI Platform', shortDesc: 'An AI-powered platform for generating and visualizing modern furniture designs.', fullDesc: 'MEBELCHI AI is a web platform that empowers users to conceptualize modern furniture designs, explore styles, and generate visual design ideas using artificial intelligence.', tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'AI Tools', 'Prompt Engineering'], githubUrl: 'https://github.com/elbeksaparbayev05-design', accent: 'from-blue-600/30 via-indigo-600/20 to-slate-900', mockupSubtitle: 'AI Interior & Furniture Studio', mockupTitle: 'MEBELCHI AI' },
        { id: 'lifeflow', title: 'LifeFlow', badge: 'Productivity App', shortDesc: 'A daily life, task management, and personal time-organization platform.', fullDesc: 'LifeFlow provides a clean, distraction-free workspace for organizing daily routines, tracking tasks, and managing time effectively.', tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Responsive Web Design'], externalUrl: 'https://t.me/LifeFlow_Assistant_bot', accent: 'from-cyan-600/30 via-blue-600/20 to-slate-900', mockupSubtitle: 'Daily Tasks & Time Planner', mockupTitle: 'LifeFlow' },
        { id: 'tezqafe', title: 'TezQafe', badge: 'Food & Restaurant Web', shortDesc: 'A web application designed for food service and restaurant management workflows.', fullDesc: 'TezQafe is a modern restaurant and food-service web platform combining intuitive menu browsing, order workflows, and responsive UI.', tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'], externalUrl: 'https://elbeksaparbayev05-design.github.io/tez-cafe.uz/', accent: 'from-orange-600/30 via-amber-600/20 to-slate-900', mockupSubtitle: 'Smart Restaurant & Ordering UI', mockupTitle: 'TezQafe' },
        { id: 'vipusknik', title: 'VIPUSKNIK', badge: 'Web Platform', shortDesc: 'A modern, visually engaging web platform created for graduates.', fullDesc: 'VIPUSKNIK is a responsive graduate web platform featuring commemorative sections, structured information, and modern interactive presentation.', tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design'], externalUrl: 'https://elbeksaparbayev05-design.github.io/GRADUATE-2027/', accent: 'from-indigo-600/30 via-blue-600/20 to-slate-900', mockupSubtitle: 'Modern Alumni & Graduation Portal', mockupTitle: 'VIPUSKNIK' },
        { id: 'demon-slayer', title: 'Demon Slayer Website', badge: 'Creative Web', shortDesc: 'An anime-themed multi-section web project with dynamic visuals and character showcases.', fullDesc: 'Demon Slayer Website is a creative anime showcase built with atmospheric styling, character profiles, and smooth navigation.', tech: ['HTML', 'CSS', 'JavaScript', 'Git & GitHub'], externalUrl: 'https://elbeksaparbayev05-design.github.io/demon-slayer-new-./', accent: 'from-rose-600/30 via-purple-600/20 to-slate-900', mockupSubtitle: 'Interactive Anime Showcase', mockupTitle: 'Demon Slayer' },
        { id: 'mega-technologies', title: 'MEGA TECHNOLOGIES', badge: 'Brand & UI/UX', shortDesc: 'A technology brand identity and modern corporate web-design project.', fullDesc: 'MEGA TECHNOLOGIES showcases a sleek UI/UX direction, brand presentation, and responsive web layout tailored for a modern technology brand.', tech: ['React.js', 'Tailwind CSS', 'UI/UX Design', 'Responsive Web Design'], githubUrl: 'https://github.com/elbeksaparbayev05-design', accent: 'from-sky-600/30 via-blue-700/20 to-slate-900', mockupSubtitle: 'Tech Brand & Web Experience', mockupTitle: 'MEGA TECH' }
      ]
    },
    journey: {
      eyebrow: 'MY JOURNEY & GROWTH',
      sub: 'My learning progression in IT, current technical focus areas, and future professional goals',
      steps: [
        { phase: 'PHASE 01 • FOUNDATIONS', title: 'Core Web Development', category: 'HTML, CSS, JavaScript & Responsive Design', desc: 'Mastering semantic HTML, modern CSS layout systems (Flexbox & Grid), core JavaScript interactivity, and responsive layouts across all screen sizes.' },
        { phase: 'PHASE 02 • MODERN FRONTEND', title: 'React.js, TypeScript & Tailwind CSS', category: 'Frontend Architecture & UI/UX', desc: 'Building reusable component architectures, type-safe applications with TypeScript, utility-first design systems in Tailwind CSS, and version control with Git & GitHub.' },
        { phase: 'PHASE 03 • CURRENT FOCUS', title: 'AI-Assisted Web Engineering', category: 'AI Tools & Prompt Engineering', desc: 'Integrating AI tools and Prompt Engineering into the development lifecycle to build practical web projects like MEBELCHI AI, LifeFlow, and TezQafe.' },
        { phase: 'PHASE 04 • FUTURE GOALS', title: 'High-Impact Digital Products', category: 'Senior Frontend & Product Engineering', desc: 'Architecting scalable web platforms, refining UI/UX craftsmanship, and building meaningful AI-enhanced products for global users.' }
      ]
    },
    contact: {
      eyebrow: 'GET IN TOUCH',
      heading: 'Have a project in mind or want to collaborate?',
      desc: 'Feel free to reach out regarding frontend development, modern web design, or AI-powered web projects.',
      emailTitle: 'Email',
      ghTitle: 'GitHub',
      locTitle: 'Focus',
      form: { send: 'Send Message', success: 'Your message has been prepared! I will get back to you soon.' }
    },
    footer: {
      bio: 'Frontend Developer crafting fast, responsive, and modern web applications powered by UI/UX design and AI technologies.',
      linksTitle: 'Quick Links',
      connectTitle: 'Connect',
      focusTitle: 'Core Focus',
      focusItems: ['Frontend Development', 'UI/UX Web Design', 'AI Web Solutions', 'Responsive Interfaces'],
      copyright: '© 2026 Elbek Saparbayev. All rights reserved.',
      built: 'Built with React, TypeScript & Tailwind CSS'
    }
  }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'uz';
let currentTheme = localStorage.getItem('portfolio_theme') || 'dark';
let showAllProjectsState = true;

const navSections = [
  { id: 'home', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'skills', key: 'skills' },
  { id: 'projects', key: 'projects' },
  { id: 'journey', key: 'journey' },
  { id: 'contact', key: 'contact' }
];

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('portfolio_theme', theme);
  const htmlEl = document.documentElement;
  document.body.setAttribute('data-theme', theme);
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  const mobileSunIcon = document.getElementById('mobile-theme-icon-sun');
  const mobileMoonIcon = document.getElementById('mobile-theme-icon-moon');

  if (theme === 'dark') {
    htmlEl.classList.add('dark');
    htmlEl.setAttribute('data-theme', 'dark');
    if (sunIcon) sunIcon.classList.add('hidden');
    if (moonIcon) moonIcon.classList.remove('hidden');
    if (mobileSunIcon) mobileSunIcon.classList.add('hidden');
    if (mobileMoonIcon) mobileMoonIcon.classList.remove('hidden');
  } else {
    htmlEl.classList.remove('dark');
    htmlEl.setAttribute('data-theme', 'light');
    if (sunIcon) sunIcon.classList.remove('hidden');
    if (moonIcon) moonIcon.classList.add('hidden');
    if (mobileSunIcon) mobileSunIcon.classList.remove('hidden');
    if (mobileMoonIcon) mobileMoonIcon.classList.add('hidden');
  }
}

function renderContent() {
  const t = translations[currentLang];

  // Navbar Links
  const desktopNav = document.getElementById('desktop-nav');
  desktopNav.innerHTML = navSections.map(n => `
    <a href="#${n.id}" class="nav-link relative py-1 text-sm font-medium transition-colors duration-200 text-slate-300 hover:text-white" data-section="${n.id}">${t.nav[n.key]}</a>
  `).join('');

  const mobileNav = document.getElementById('mobile-nav-links');
  mobileNav.innerHTML = navSections.map(n => `
    <a href="#${n.id}" class="mobile-nav-item rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800" data-section="${n.id}">${t.nav[n.key]}</a>
  `).join('');

  document.getElementById('nav-contact-btn').querySelector('span').textContent = t.nav.contactBtn;
  document.getElementById('mobile-cta').textContent = t.nav.contactBtn;

  // Hero
  document.getElementById('hero-role').textContent = t.hero.roleBadge;
  document.getElementById('hero-title').innerHTML = `${t.hero.titlePart1}<span class="text-blue-500">${t.hero.titleHighlight}</span>`;
  document.getElementById('hero-subtitle').textContent = t.hero.subtitle;
  document.getElementById('hero-btn-projects').querySelector('span').textContent = t.hero.viewProjects;
  document.getElementById('hero-btn-contact').querySelector('span').textContent = t.hero.contactMe;
  document.getElementById('tech-stack-label').textContent = t.hero.techStackLabel;
  document.getElementById('stat-proj-label').textContent = t.hero.stats.projectsLabel;
  document.getElementById('stat-tech-label').textContent = t.hero.stats.techLabel;
  document.getElementById('stat-lang-label').textContent = t.hero.stats.langsLabel;

  // About
  document.getElementById('about-eyebrow').textContent = t.about.eyebrow;
  document.getElementById('about-heading').innerHTML = t.about.heading;
  document.getElementById('about-desc1').textContent = t.about.desc1;
  document.getElementById('about-desc2').textContent = t.about.desc2;
  document.getElementById('about-btn').querySelector('span').textContent = t.about.btn;
  document.getElementById('lbl-name').textContent = t.about.details.name;
  document.getElementById('lbl-focus').textContent = t.about.details.focus;
  document.getElementById('lbl-stack').textContent = t.about.details.stack;
  document.getElementById('lbl-status').textContent = t.about.details.status;
  document.getElementById('lbl-status-val').textContent = t.about.details.statusVal;

  // Skills
  document.getElementById('skills-eyebrow').textContent = t.skills.eyebrow;
  document.getElementById('skills-sub').textContent = t.skills.sub;
  const skillsGrid = document.getElementById('skills-grid');
  skillsGrid.innerHTML = t.skills.categories.map(cat => `
    <div class="rounded-2xl border border-slate-800/95 bg-[#0D1322]/90 p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg">
      <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
      </div>
      <h3 class="text-base font-bold">${cat.title}</h3>
      <p class="mt-2 text-xs leading-relaxed text-slate-400">${cat.desc}</p>
      <div class="mt-4 flex flex-wrap gap-1.5">
        ${cat.items.map(i => `<span class="rounded-md bg-blue-500/10 px-2 py-0.5 text-[11px] font-medium text-blue-400">${i}</span>`).join('')}
      </div>
    </div>
  `).join('');

  // Projects
  document.getElementById('projects-eyebrow').textContent = t.projects.eyebrow;
  document.getElementById('projects-toggle-btn').querySelector('span').textContent = showAllProjectsState ? t.projects.showLess : t.projects.viewAll;
  
  const projectsToRender = showAllProjectsState ? t.projects.items : t.projects.items.slice(0, 3);
  const projectsGrid = document.getElementById('projects-grid');
  projectsGrid.innerHTML = projectsToRender.map(p => `
    <article class="group flex flex-col overflow-hidden rounded-2xl border border-slate-800/90 bg-[#0D1322] hover:border-blue-500/50 transition-all duration-300">
      <div class="project-card-trigger relative h-44 w-full cursor-pointer overflow-hidden bg-gradient-to-br ${p.accent} p-5 flex flex-col justify-between border-b border-slate-800/80" data-id="${p.id}">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1.5">
            <span class="h-2.5 w-2.5 rounded-full bg-white/30"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-white/20"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-white/20"></span>
          </div>
          <span class="rounded-md bg-black/35 px-2 py-0.5 text-[10px] font-semibold text-blue-200 backdrop-blur-sm">${p.badge}</span>
        </div>
        <div class="my-auto pt-2">
          <p class="text-[11px] font-medium text-blue-300/90">${p.mockupSubtitle}</p>
          <h4 class="mt-0.5 text-xl font-extrabold tracking-tight text-white">${p.mockupTitle}</h4>
        </div>
        <div class="flex items-center justify-between text-[10px] text-slate-300/80">
          <span>Elbek Saparbayev</span>
          <span class="underline decoration-blue-400/60">${t.projects.detailsBtn} →</span>
        </div>
      </div>
      <div class="flex flex-1 flex-col justify-between p-5">
        <div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="text-base font-bold group-hover:text-blue-500 transition-colors">${p.title}</h3>
            <span class="rounded-md bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-300">${p.tech[0]}</span>
          </div>
          <p class="mt-2.5 text-xs leading-relaxed text-slate-400">${p.shortDesc}</p>
        </div>
        <div class="mt-5 pt-3 border-t border-slate-800/30 flex items-center justify-between gap-2">
          <div class="flex flex-wrap gap-1.5">
            ${p.tech.slice(0, 3).map(tag => `<span class="rounded px-2 py-0.5 text-[10px] font-medium bg-blue-500/10 text-blue-400">${tag}</span>`).join('')}
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${p.externalUrl || p.githubUrl ? `<a href="${p.externalUrl || p.githubUrl}" target="_blank" rel="noopener noreferrer" aria-label="${p.title}" class="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-[#090E1A] text-slate-300 hover:text-blue-400"><svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>` : ''}
            <button class="project-details-btn flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-[#090E1A] text-slate-300 hover:text-blue-400" data-id="${p.id}">
              <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  // Attach project modal click listeners
  document.querySelectorAll('.project-card-trigger, .project-details-btn').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.getAttribute('data-id');
      openProjectModal(id);
    });
  });

  // Journey
  document.getElementById('journey-eyebrow').textContent = t.journey.eyebrow;
  document.getElementById('journey-sub').textContent = t.journey.sub;
  const timeline = document.getElementById('journey-timeline');
  timeline.innerHTML = t.journey.steps.map(step => `
    <div class="relative flex flex-col md:flex-row items-start md:items-center md:justify-start">
      <div class="absolute left-4 top-5 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2 z-10">
        <div class="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-blue-500 ring-4 ring-blue-500/20"></div>
      </div>
      <div class="ml-10 md:ml-0 w-[calc(100%-2.5rem)] md:w-[calc(50%-2rem)] rounded-2xl border border-slate-800/90 bg-[#0D1322]/90 p-5">
        <div class="flex items-start gap-3.5">
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div>
            <span class="text-[11px] font-bold tracking-wider text-blue-500 uppercase">${step.phase}</span>
            <h3 class="mt-1 text-base font-bold">${step.title}</h3>
            <p class="text-xs font-medium text-slate-300">${step.category}</p>
            <p class="mt-2 text-xs leading-relaxed text-slate-400">${step.desc}</p>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Contact
  document.getElementById('contact-eyebrow').textContent = t.contact.eyebrow;
  document.getElementById('contact-heading').textContent = t.contact.heading;
  document.getElementById('contact-desc').textContent = t.contact.desc;
  document.getElementById('lbl-email-title').textContent = t.contact.emailTitle;
  document.getElementById('lbl-gh-title').textContent = t.contact.ghTitle;
  document.getElementById('lbl-loc-title').textContent = t.contact.locTitle;
  document.getElementById('form-send-btn').querySelector('span').textContent = t.contact.form.send;
  document.getElementById('form-success-text').textContent = t.contact.form.success;

  // Footer
  document.getElementById('footer-bio').textContent = t.footer.bio;
  document.getElementById('footer-links-title').textContent = t.footer.linksTitle;
  document.getElementById('footer-connect-title').textContent = t.footer.connectTitle;
  document.getElementById('footer-focus-title').textContent = t.footer.focusTitle;
  document.getElementById('footer-copy').textContent = t.footer.copyright;
  document.getElementById('footer-tech').textContent = t.footer.built;

  const footerLinks = document.getElementById('footer-links-list');
  footerLinks.innerHTML = navSections.map(n => `<li><a href="#${n.id}" class="text-slate-400 hover:text-blue-400">${t.nav[n.key]}</a></li>`).join('');

  const footerFocus = document.getElementById('footer-focus-list');
  footerFocus.innerHTML = t.footer.focusItems.map(item => `<li>${item}</li>`).join('');

  // Language buttons styling
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const code = btn.getAttribute('data-lang');
    if (code === currentLang) {
      btn.className = 'lang-btn rounded-md px-2 py-1 uppercase bg-blue-600 text-white';
    } else {
      btn.className = 'lang-btn rounded-md px-2 py-1 uppercase text-slate-400 hover:text-white';
    }
  });

  document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
    const code = btn.getAttribute('data-lang');
    if (code === currentLang) {
      btn.className = 'mobile-lang-btn rounded-md px-2.5 py-1 uppercase bg-blue-600 text-white';
    } else {
      btn.className = 'mobile-lang-btn rounded-md px-2.5 py-1 uppercase text-slate-400';
    }
  });
}

function openProjectModal(id) {
  const t = translations[currentLang];
  const project = t.projects.items.find(p => p.id === id);
  if (!project) return;

  document.getElementById('modal-badge').textContent = project.badge;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-subtitle').textContent = project.mockupSubtitle;
  document.getElementById('modal-desc').textContent = project.fullDesc;
  document.getElementById('modal-tech-label').textContent = t.projects.modalTechLabel;

  const techList = document.getElementById('modal-tech-list');
  techList.innerHTML = project.tech.map(tech => `<span class="rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400">${tech}</span>`).join('');

  const ghBtn = document.getElementById('modal-gh-btn');
  if (project.externalUrl || project.githubUrl) {
    ghBtn.href = project.externalUrl || project.githubUrl;
    ghBtn.classList.remove('hidden');
    ghBtn.textContent = project.externalUrl
      ? (currentLang === 'uz' ? 'Ochish' : currentLang === 'ru' ? 'Открыть' : 'Visit')
      : t.projects.githubBtn;
  } else {
    ghBtn.classList.add('hidden');
  }

  document.getElementById('modal-close-btn').textContent = t.projects.closeBtn;
  document.getElementById('project-modal').classList.remove('hidden');
  document.getElementById('project-modal').classList.add('flex');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Loader
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 350);
  }, 400);

  applyTheme(currentTheme);
  renderContent();

  // Language switch
  document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.getAttribute('data-lang');
      localStorage.setItem('portfolio_lang', currentLang);
      document.documentElement.lang = currentLang;
      renderContent();
    });
  });

  // Theme switch
  const themeToggle = document.getElementById('theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  const toggleThemeFunc = () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };
  if (themeToggle) themeToggle.addEventListener('click', toggleThemeFunc);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleThemeFunc);

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
    mobileDrawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileDrawer.classList.add('hidden'));
    });
  }

  // Projects toggle button
  const toggleBtn = document.getElementById('projects-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      showAllProjectsState = !showAllProjectsState;
      renderContent();
    });
  }

  // Modal close
  const closeModal = () => {
    document.getElementById('project-modal').classList.add('hidden');
    document.getElementById('project-modal').classList.remove('flex');
  };
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.getElementById('project-modal').addEventListener('click', (e) => {
    if (e.target.id === 'project-modal') closeModal();
  });

  // Contact form submit
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const successDiv = document.getElementById('form-success');
      successDiv.classList.remove('hidden');
      successDiv.classList.add('flex');
      contactForm.reset();
      setTimeout(() => {
        successDiv.classList.add('hidden');
        successDiv.classList.remove('flex');
      }, 5000);
    });
  }
});
