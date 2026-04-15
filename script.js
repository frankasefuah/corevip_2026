/*
  ============================================================
  CoReViP 2027 WEBSITE SCRIPT
  ============================================================
  HOW TO EDIT THIS FILE
  ------------------------------------------------------------
  1) EVENT DETAILS:
     Search for EVENT_CONTENT and update theme, dates, venue, etc.
  2) TRANSLATIONS:
     Search for i18n and update English/French/Arabic/Portuguese text.
  3) IMAGES:
     Search for "PLACE YOUR IMAGE HERE".
     You can replace the generated SVG placeholders with real image paths.
     Example: image: 'assets/images/hero.jpg'
  4) LINKS:
     Search for "PLACE YOUR LINK HERE" and replace demo URLs.
  5) PROGRAMME:
     The schedule below has been populated from the uploaded draft programme structure.
  6) RTL SUPPORT:
     Arabic switches the page to RTL automatically.
*/

/* ============================================================
   EVENT CONTENT (from Concept Note and Draft Programme)
   ============================================================ */
const EVENT_DATE = new Date("2027-07-20T08:00:00");

const EVENT_CONTENT = {
  code: "CoReViP 2027",
  title:
    "Conference of Rectors, Vice-Chancellors and Presidents of African Universities",
  host: "Association of African Universities",
  cohost: "KCA University",
  venue: "Nairobi, Kenya",
  dates: "20–23 July 2027",
  theme:
    "Repositioning African Universities for Resilience, Relevance, and Impact",
  milestone: "AAU Diamond Jubilee (1967–2027)",
  contactEmail: "corevip2027@aau.org",
  submissionAbstract: "26 February 2027",
  submissionAcceptance: "16 April 2027",
  submissionFullPaper: "14 May 2027",
  submissionPortal: "https://indico.aau.org/event/1/abstracts/",
};

/* ============================================================
   SECTION LABELS FOR THE CUSTOMIZER BAR
   ============================================================ */
const sectionLabels = {
  hero: "Hero",
  organizers: "Organizer Logos",
  countdown: "Countdown",
  about: "About the Event",
  program: "Program",
  speakers: "Speakers",
  gallery: "Gallery",
  videos: "Videos",
  testimonials: "Testimonials",
  partners: "Partners",
  exhibitors: "Exhibitors",
  hotels: "Hotels",
  tickets: "Ticket Prices",
  blog: "Blog Posts",
};

/* ============================================================
   INTERFACE TRANSLATIONS
   - You can add more languages by duplicating one object.
   - Arabic uses RTL automatically.
   ============================================================ */
const i18n = {
  en: {
    langName: "English",
    dir: "ltr",
    htmlLang: "en",
    nav: {
      about: "About",
      program: "Program",
      speakers: "Speakers",
      gallery: "Gallery",
      tickets: "Tickets",
      cta: "Book Tickets",
    },
    customizer: {
      eyebrow: "Customizer",
      title: "Choose a version for every section",
      text: "Switch between V1, V2, or Off for each section without touching the code.",
    },
    footer: {
      text: "&copy; 2026 Association of African Universities. All rights reserved.",
    },
    sectionLabels,
    common: {
      off: "Off",
      filters: "Filters",
      readPreview: "Read preview",
      openProfile: "Open profile",
      bookNow: "Book now",
      from: "From",
      duration: "Duration",
      playVideo: "Play Video",
      backToTop: "Back to top",
      collapse: "Collapse",
      expand: "Expand",
      popular: "Popular",
    },
    hero: {
      eyebrow1: "AAU Diamond Jubilee Conference",
      eyebrow2:
        "Celebrating 60 years of continental higher education leadership",
      title1: "COREVIP 2027",
      title2:
        'A Future-Facing <span class="gradient-text">African University</span>',
      text1: `${EVENT_CONTENT.host} and ${EVENT_CONTENT.cohost} invite university leaders and stakeholders to Nairobi for a landmark edition of CoReViP under the theme “${EVENT_CONTENT.theme}.”`,
      text2: `A premium conference website concept built around ${EVENT_CONTENT.milestone}, policy dialogue, academic exchange, and innovation showcases.`,
      button1: "Explore Event",
      button2: "View Program",
      button3: "Submit Abstract",
      stat1: "4",
      statLabel1: "Conference days",
      stat2: "13+",
      statLabel2: "Subthemes and tracks",
      stat3: "60",
      statLabel3: "Years of AAU leadership",
      metaDate: EVENT_CONTENT.dates,
      metaVenue: EVENT_CONTENT.venue,
      metaTheme: "Resilience • Relevance • Impact",
      cardTitle: EVENT_CONTENT.theme,
      cardText: `${EVENT_CONTENT.code} brings together university leaders, policymakers, partners, researchers, students, and innovators from across Africa and beyond.`,
    },
    organizers: {
      eyebrow: "Organized by",
      title: "Institutions behind the conference",
      text1: "Featured event institutions and co-conveners.",
      text2:
        "Vibrant logo cards for institutions, hosts, and convening bodies.",
    },
    countdown: {
      eyebrow: "Countdown to conference opening",
      title: "CoReViP 2027 begins soon",
      text: `Live countdown to the opening of ${EVENT_CONTENT.code}.`,
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    about: {
      title1:
        "A landmark edition of CoReViP for Africa’s higher education future",
      text1: `${EVENT_CONTENT.code} marks the 60th anniversary of the Association of African Universities while advancing a forward-looking agenda on resilience, relevance, and impact.`,
      title2: "A premium digital experience for a prestigious milestone",
      text2: `The conference combines high-level policy dialogue, academic sessions, communities of practice, innovation exhibition, and commitments for the future African university.`,
      card1: "Diamond Jubilee Moment",
      cardText1:
        "Celebrating 60 years of the AAU and repositioning African universities for the next 60 years.",
      card2: "Knowledge & Innovation Expo",
      cardText2:
        "A showcase of teaching innovation, digital platforms, research breakthroughs, entrepreneurship, and community impact.",
      card3: "Continental Convening",
      cardText3:
        "University leaders, policymakers, quality assurance agencies, development partners, students, and industry actors convene in Nairobi.",
      why: "Why it matters",
      whyTitle:
        "Repositioning African universities for resilience, relevance, and impact",
      experience: "Conference focus",
      experienceTitle:
        "Policy dialogue, academic tracks, communities of practice, best-practice showcases, gala and future commitments.",
      tag1: "Institutional resilience",
      tag2: "Research and innovation",
      tag3: "Digital transformation",
      tag4: "Student wellbeing",
      feature1: "Milestone celebration",
      feature1Text: "AAU Diamond Jubilee (1967–2027).",
      feature2: "Continental agenda",
      feature2Text: "Forward-looking implementation and policy relevance.",
      feature3: "Inclusive participation",
      feature3Text:
        "Researchers, leaders, policymakers, industry, and students.",
      feature4: "Submission pathway",
      feature4Text: `Abstract deadline: ${EVENT_CONTENT.submissionAbstract}.`,
    },
    program: {
      eyebrow: "Program",
      title: "Conference schedule populated from the draft programme structure",
      text: "Switch between tab view and accordion view. The sessions below reflect the uploaded draft programme structure.",
      viewTabs: "Tabs",
      viewAccordions: "Accordions",
    },
    speakers: {
      eyebrow: "Featured roles",
      title:
        "Profiles designed to spotlight conference leadership and contributors",
      text: "Replace these profiles with confirmed speakers, moderators, and dignitaries once available.",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "A visual preview of the conference atmosphere",
      text: "Use this area for real event photos, past conference highlights, expo visuals, or venue photography.",
      all: "All",
    },
    videos: {
      eyebrow: "Videos",
      title: "Embedded videos for teaser content and official messages",
      text: "Replace the demo videos with the official trailer, chairperson message, sponsor reels, or venue preview.",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Feedback from institutional participants and delegates",
      text: "Use this slider for remarks from previous attendees, partners, host institutions, or student innovators.",
    },
    partners: {
      eyebrow: "Strategic partners",
      title: "Interactive partner and stakeholder wall",
      text: "Use linked logo cards for institutions, agencies, and development partners.",
      centered: true,
    },
    exhibitors: {
      eyebrow: "Expo & showcase",
      title: "Innovation and knowledge exhibition highlights",
      text: "This section can feature expo booths, innovation hubs, university showcases, and research commercialization displays.",
    },
    hotels: {
      eyebrow: "Hotels for booking",
      title: "Accommodation options with filters and direct links",
      text: "Replace these demo hotels with official accommodation partners and actual booking links.",
    },
    tickets: {
      eyebrow: "Registration options",
      title: "Registration or attendance categories",
      text: "These cards can be turned into registration categories, sponsorship packages, or attendee tiers.",
    },
    blog: {
      eyebrow: "Conference updates",
      title: "Recent notices, calls, and preview posts",
      text: "Use this section for updates, call for papers, logistics, and related conference notices.",
    },
  },
  fr: {
    langName: "Français",
    dir: "ltr",
    htmlLang: "fr",
    nav: {
      about: "À propos",
      program: "Programme",
      speakers: "Intervenants",
      gallery: "Galerie",
      tickets: "Billets",
      cta: "Réserver",
    },
    customizer: {
      eyebrow: "Personnalisation",
      title: "Choisissez une version pour chaque section",
      text: "Passez de V1 à V2 ou désactivez une section sans modifier le code.",
    },
    footer: {
      text: "Un site de conférence multilingue, prêt pour la production, construit en HTML, CSS et JavaScript.",
    },
    sectionLabels: {
      hero: "Héros",
      organizers: "Logos",
      countdown: "Compte à rebours",
      about: "À propos",
      program: "Programme",
      speakers: "Intervenants",
      gallery: "Galerie",
      videos: "Vidéos",
      testimonials: "Témoignages",
      partners: "Partenaires",
      exhibitors: "Exposants",
      hotels: "Hôtels",
      tickets: "Tarifs",
      blog: "Articles",
    },
    common: {
      off: "Désactivé",
      filters: "Filtres",
      readPreview: "Lire",
      openProfile: "Ouvrir le profil",
      bookNow: "Réserver",
      from: "À partir de",
      duration: "Durée",
      playVideo: "Lire la vidéo",
      backToTop: "Retour en haut",
      collapse: "Réduire",
      expand: "Ouvrir",
      popular: "Populaire",
    },
    hero: {
      eyebrow1: "Conférence du jubilé de diamant de l’AAU",
      eyebrow2:
        "Célébrer 60 ans de leadership continental en enseignement supérieur",
      title1: "CoReViP 2027",
      title2:
        'Une université africaine <span class="gradient-text">tournée vers l’avenir</span>',
      text1: `${EVENT_CONTENT.host} et ${EVENT_CONTENT.cohost} invitent les dirigeants universitaires et les parties prenantes à Nairobi pour une édition historique de CoReViP sous le thème « ${EVENT_CONTENT.theme} ».`,
      text2: `Un concept de site haut de gamme centré sur le ${EVENT_CONTENT.milestone}, le dialogue politique, les échanges académiques et les vitrines d’innovation.`,
      button1: "Découvrir",
      button2: "Voir le programme",
      button3: "Soumettre un résumé",
      stat1: "4",
      statLabel1: "Jours de conférence",
      stat2: "13+",
      statLabel2: "Sous-thèmes et pistes",
      stat3: "60",
      statLabel3: "Années de leadership de l’AAU",
      metaDate: EVENT_CONTENT.dates,
      metaVenue: EVENT_CONTENT.venue,
      metaTheme: "Résilience • Pertinence • Impact",
      cardTitle: EVENT_CONTENT.theme,
      cardText: `${EVENT_CONTENT.code} réunit des dirigeants universitaires, des décideurs, des partenaires, des chercheurs, des étudiants et des innovateurs venus de toute l’Afrique et d’ailleurs.`,
    },
    organizers: {
      eyebrow: "Organisé par",
      title: "Institutions derrière la conférence",
      text1: "Institutions et co-organisateurs mis en avant.",
      text2:
        "Cartes visuelles pour les institutions, hôtes et organismes de convocation.",
    },
    countdown: {
      eyebrow: "Compte à rebours avant l’ouverture",
      title: "CoReViP 2027 commence bientôt",
      text: `Compte à rebours en direct avant l’ouverture de ${EVENT_CONTENT.code}.`,
      days: "Jours",
      hours: "Heures",
      minutes: "Minutes",
      seconds: "Secondes",
    },
    about: {
      title1:
        "Une édition marquante de CoReViP pour l’avenir de l’enseignement supérieur africain",
      text1: `${EVENT_CONTENT.code} marque le 60e anniversaire de l’Association des Universités Africaines tout en faisant avancer un programme tourné vers la résilience, la pertinence et l’impact.`,
      title2: "Une expérience numérique premium pour une étape prestigieuse",
      text2: `La conférence combine dialogue politique de haut niveau, sessions académiques, communautés de pratique, exposition d’innovation et engagements pour l’université africaine de demain.`,
      card1: "Moment du jubilé de diamant",
      cardText1:
        "Célébrer 60 ans de l’AAU et repositionner les universités africaines pour les 60 prochaines années.",
      card2: "Expo connaissance et innovation",
      cardText2:
        "Une vitrine de l’innovation pédagogique, des plateformes numériques, des percées de recherche, de l’entrepreneuriat et de l’impact communautaire.",
      card3: "Rassemblement continental",
      cardText3:
        "Les dirigeants universitaires, décideurs, agences d’assurance qualité, partenaires, étudiants et acteurs industriels se réunissent à Nairobi.",
      why: "Pourquoi c’est important",
      whyTitle:
        "Repositionner les universités africaines pour la résilience, la pertinence et l’impact",
      experience: "Orientation",
      experienceTitle:
        "Dialogue politique, pistes académiques, communautés de pratique, vitrines de bonnes pratiques, gala et engagements pour l’avenir.",
      tag1: "Résilience institutionnelle",
      tag2: "Recherche et innovation",
      tag3: "Transformation numérique",
      tag4: "Bien-être étudiant",
      feature1: "Célébration historique",
      feature1Text: "Jubilé de diamant de l’AAU (1967–2027).",
      feature2: "Agenda continental",
      feature2Text: "Mise en œuvre prospective et pertinence politique.",
      feature3: "Participation inclusive",
      feature3Text:
        "Chercheurs, dirigeants, décideurs, industrie et étudiants.",
      feature4: "Soumissions",
      feature4Text: `Date limite des résumés : ${EVENT_CONTENT.submissionAbstract}.`,
    },
    program: {
      eyebrow: "Programme",
      title:
        "Calendrier de la conférence alimenté par la structure du projet de programme",
      text: "Passez de la vue par onglets à la vue accordéon. Les sessions ci-dessous reflètent la structure du projet de programme téléchargé.",
      viewTabs: "Onglets",
      viewAccordions: "Accordéons",
    },
    speakers: {
      eyebrow: "Rôles mis en avant",
      title:
        "Des profils pour mettre en valeur la direction et les contributeurs de la conférence",
      text: "Remplacez ces profils par les intervenants, modérateurs et dignitaires confirmés.",
    },
    gallery: {
      eyebrow: "Galerie",
      title: "Un aperçu visuel de l’atmosphère de la conférence",
      text: "Utilisez cette zone pour de vraies photos de l’événement, des temps forts passés ou du lieu.",
      all: "Tout",
    },
    videos: {
      eyebrow: "Vidéos",
      title: "Vidéos intégrées pour les teasers et messages officiels",
      text: "Remplacez les vidéos de démonstration par la bande-annonce officielle, le message du président ou la présentation du lieu.",
    },
    testimonials: {
      eyebrow: "Témoignages",
      title: "Retours des participants institutionnels et délégués",
      text: "Utilisez ce carrousel pour les avis des participants précédents, partenaires, hôtes ou étudiants innovateurs.",
    },
    partners: {
      eyebrow: "Partenaires stratégiques",
      title: "Mur interactif des partenaires et parties prenantes",
      text: "Utilisez des cartes liées pour les institutions, agences et partenaires de développement.",
      centered: true,
    },
    exhibitors: {
      eyebrow: "Expo et vitrine",
      title: "Temps forts de l’exposition innovation et savoir",
      text: "Cette section peut présenter les stands, hubs d’innovation, vitrines universitaires et la valorisation de la recherche.",
    },
    hotels: {
      eyebrow: "Hôtels à réserver",
      title: "Options d’hébergement avec filtres et liens directs",
      text: "Remplacez ces hôtels de démonstration par les partenaires officiels et de vrais liens de réservation.",
    },
    tickets: {
      eyebrow: "Options d’inscription",
      title: "Catégories d’inscription ou de participation",
      text: "Ces cartes peuvent devenir des catégories d’inscription, packs de sponsoring ou types de participants.",
    },
    blog: {
      eyebrow: "Mises à jour",
      title: "Avis récents, appels et aperçus",
      text: "Utilisez cette section pour les mises à jour, l’appel à communications, la logistique et les annonces de conférence.",
    },
  },
  ar: {
    langName: "العربية",
    dir: "rtl",
    htmlLang: "ar",
    nav: {
      about: "حول المؤتمر",
      program: "البرنامج",
      speakers: "المتحدثون",
      gallery: "المعرض",
      tickets: "التذاكر",
      cta: "احجز الآن",
    },
    customizer: {
      eyebrow: "التخصيص",
      title: "اختر نسخة لكل قسم",
      text: "يمكنك التبديل بين V1 و V2 أو إخفاء القسم دون تعديل الكود.",
    },
    footer: {
      text: "موقع مؤتمر متعدد اللغات وجاهز للإنتاج مبني باستخدام HTML وCSS وJavaScript.",
    },
    sectionLabels: {
      hero: "الواجهة",
      organizers: "الشعارات",
      countdown: "العد التنازلي",
      about: "حول الحدث",
      program: "البرنامج",
      speakers: "المتحدثون",
      gallery: "المعرض",
      videos: "الفيديوهات",
      testimonials: "الآراء",
      partners: "الشركاء",
      exhibitors: "العارضون",
      hotels: "الفنادق",
      tickets: "الرسوم",
      blog: "المدونة",
    },
    common: {
      off: "إخفاء",
      filters: "عوامل التصفية",
      readPreview: "اقرأ",
      openProfile: "افتح الملف",
      bookNow: "احجز الآن",
      from: "ابتداءً من",
      duration: "المدة",
      playVideo: "تشغيل الفيديو",
      backToTop: "العودة للأعلى",
      collapse: "إغلاق",
      expand: "فتح",
      popular: "الأكثر طلبًا",
    },
    hero: {
      eyebrow1: "مؤتمر اليوبيل الماسي لاتحاد الجامعات الأفريقية",
      eyebrow2: "الاحتفاء بستين عامًا من القيادة القارية في التعليم العالي",
      title1: "CoReViP 2027",
      title2:
        'جامعة أفريقية <span class="gradient-text">مستعدة للمستقبل</span>',
      text1: `يدعو ${EVENT_CONTENT.host} و${EVENT_CONTENT.cohost} قادة الجامعات وأصحاب المصلحة إلى نيروبي لحضور نسخة تاريخية من CoReViP تحت شعار «${EVENT_CONTENT.theme}».`,
      text2: `تصور لموقع مؤتمر فاخر يتمحور حول ${EVENT_CONTENT.milestone} والحوار السياساتي والتبادل الأكاديمي وعروض الابتكار.`,
      button1: "استكشاف الحدث",
      button2: "عرض البرنامج",
      button3: "إرسال الملخص",
      stat1: "4",
      statLabel1: "أيام المؤتمر",
      stat2: "+13",
      statLabel2: "محاور ومسارات",
      stat3: "60",
      statLabel3: "عامًا من قيادة AAU",
      metaDate: EVENT_CONTENT.dates,
      metaVenue: EVENT_CONTENT.venue,
      metaTheme: "المرونة • الملاءمة • الأثر",
      cardTitle: EVENT_CONTENT.theme,
      cardText: `${EVENT_CONTENT.code} يجمع قادة الجامعات وصناع السياسات والشركاء والباحثين والطلبة والمبتكرين من أفريقيا وخارجها.`,
    },
    organizers: {
      eyebrow: "تنظيم",
      title: "الجهات التي تقف خلف المؤتمر",
      text1: "المؤسسات المنظمة والمشاركة.",
      text2: "بطاقات شعارات بارزة للمؤسسات والمضيفين والجهات الداعية.",
    },
    countdown: {
      eyebrow: "العد التنازلي لافتتاح المؤتمر",
      title: "CoReViP 2027 يقترب",
      text: `عد تنازلي مباشر لافتتاح ${EVENT_CONTENT.code}.`,
      days: "أيام",
      hours: "ساعات",
      minutes: "دقائق",
      seconds: "ثوانٍ",
    },
    about: {
      title1: "نسخة محورية من CoReViP لمستقبل التعليم العالي في أفريقيا",
      text1: `${EVENT_CONTENT.code} يحتفي بالذكرى الستين لاتحاد الجامعات الأفريقية مع دفع أجندة مستقبلية قائمة على المرونة والملاءمة والأثر.`,
      title2: "تجربة رقمية مميزة لمحطة رفيعة المستوى",
      text2: `يجمع المؤتمر بين الحوار السياساتي رفيع المستوى والجلسات الأكاديمية ومجتمعات الممارسة ومعرض الابتكار والتزامات المستقبل للجامعة الأفريقية.`,
      card1: "لحظة اليوبيل الماسي",
      cardText1:
        "الاحتفاء بستين عامًا من AAU وإعادة تموضع الجامعات الأفريقية للستين سنة القادمة.",
      card2: "معرض المعرفة والابتكار",
      cardText2:
        "منصة لعرض الابتكار في التدريس والمنصات الرقمية والإنجازات البحثية وريادة الأعمال والأثر المجتمعي.",
      card3: "ملتقى قاري",
      cardText3:
        "يلتقي في نيروبي قادة الجامعات وصناع السياسات وهيئات الجودة والشركاء والطلبة وفاعلو الصناعة.",
      why: "لماذا هذا مهم",
      whyTitle:
        "إعادة تموضع الجامعات الأفريقية من أجل المرونة والملاءمة والأثر",
      experience: "محاور المؤتمر",
      experienceTitle:
        "حوار سياساتي، مسارات أكاديمية، مجتمعات ممارسة، عروض أفضل الممارسات، حفل احتفالي والتزامات مستقبلية.",
      tag1: "المرونة المؤسسية",
      tag2: "البحث والابتكار",
      tag3: "التحول الرقمي",
      tag4: "رفاه الطلبة",
      feature1: "احتفال تاريخي",
      feature1Text: "اليوبيل الماسي لـ AAU (1967–2027).",
      feature2: "أجندة قارية",
      feature2Text: "تنفيذ مستقبلي وملاءمة للسياسات.",
      feature3: "مشاركة شاملة",
      feature3Text: "باحثون وقادة وصناع سياسات وقطاع خاص وطلبة.",
      feature4: "مسار التقديم",
      feature4Text: `آخر موعد للملخصات: ${EVENT_CONTENT.submissionAbstract}.`,
    },
    program: {
      eyebrow: "البرنامج",
      title: "جدول المؤتمر المعتمد على هيكل البرنامج المرفوع",
      text: "يمكنك التبديل بين عرض التبويبات وعرض الأكورديون. الجلسات أدناه تعكس هيكل البرنامج المبدئي المرفوع.",
      viewTabs: "تبويبات",
      viewAccordions: "أكورديون",
    },
    speakers: {
      eyebrow: "أدوار مميزة",
      title: "بطاقات لإبراز قيادة المؤتمر والمساهمين فيه",
      text: "استبدل هذه الملفات الشخصية بالمتحدثين والميسرين والشخصيات المؤكدة لاحقًا.",
    },
    gallery: {
      eyebrow: "المعرض",
      title: "معاينة بصرية لأجواء المؤتمر",
      text: "استخدم هذه المنطقة لصور حقيقية من الحدث أو من مؤتمرات سابقة أو من موقع الاستضافة.",
      all: "الكل",
    },
    videos: {
      eyebrow: "الفيديوهات",
      title: "فيديوهات مدمجة للتشويق والرسائل الرسمية",
      text: "استبدل فيديوهات العرض التشويقي بالفيديو الرسمي أو رسالة الرئيس أو معاينة المكان.",
    },
    testimonials: {
      eyebrow: "الآراء",
      title: "ملاحظات من المشاركين والشركاء",
      text: "استخدم هذا المنزلق لعرض آراء المشاركين السابقين أو الشركاء أو المؤسسات المستضيفة.",
    },
    partners: {
      eyebrow: "الشركاء الاستراتيجيون",
      title: "حائط تفاعلي للشركاء وأصحاب المصلحة",
      text: "استخدم بطاقات مرتبطة للمؤسسات والوكالات وشركاء التنمية.",
      centered: true,
    },
    exhibitors: {
      eyebrow: "المعرض والعروض",
      title: "أبرز معروضات الابتكار والمعرفة",
      text: "يمكن لهذا القسم أن يعرض الأجنحة ومراكز الابتكار وعروض الجامعات وتسويق نتائج البحث.",
    },
    hotels: {
      eyebrow: "فنادق الحجز",
      title: "خيارات إقامة مع التصفية والروابط المباشرة",
      text: "استبدل هذه الفنادق التجريبية بالشركاء الرسميين وروابط الحجز الفعلية.",
    },
    tickets: {
      eyebrow: "خيارات التسجيل",
      title: "فئات التسجيل أو الحضور",
      text: "يمكن تحويل هذه البطاقات إلى فئات تسجيل أو باقات رعاية أو فئات مشاركة.",
    },
    blog: {
      eyebrow: "تحديثات المؤتمر",
      title: "أحدث الإشعارات والدعوات والمعاينات",
      text: "استخدم هذا القسم للتحديثات والدعوة للأوراق والمسائل اللوجستية والإعلانات.",
    },
  },
  pt: {
    langName: "Português",
    dir: "ltr",
    htmlLang: "pt",
    nav: {
      about: "Sobre",
      program: "Programa",
      speakers: "Palestrantes",
      gallery: "Galeria",
      tickets: "Bilhetes",
      cta: "Reservar",
    },
    customizer: {
      eyebrow: "Personalização",
      title: "Escolha uma versão para cada secção",
      text: "Alterne entre V1, V2 ou desligue uma secção sem mexer no código.",
    },
    footer: {
      text: "Um website de conferência multilíngue, pronto para produção, construído com HTML, CSS e JavaScript.",
    },
    sectionLabels: {
      hero: "Herói",
      organizers: "Logótipos",
      countdown: "Contagem",
      about: "Sobre",
      program: "Programa",
      speakers: "Palestrantes",
      gallery: "Galeria",
      videos: "Vídeos",
      testimonials: "Testemunhos",
      partners: "Parceiros",
      exhibitors: "Expositores",
      hotels: "Hotéis",
      tickets: "Preços",
      blog: "Blog",
    },
    common: {
      off: "Desligado",
      filters: "Filtros",
      readPreview: "Ler",
      openProfile: "Abrir perfil",
      bookNow: "Reservar",
      from: "Desde",
      duration: "Duração",
      playVideo: "Reproduzir vídeo",
      backToTop: "Voltar ao topo",
      collapse: "Recolher",
      expand: "Expandir",
      popular: "Popular",
    },
    hero: {
      eyebrow1: "Conferência do jubileu de diamante da AAU",
      eyebrow2:
        "Celebrando 60 anos de liderança continental no ensino superior",
      title1: "CoReViP 2027",
      title2:
        'Uma universidade africana <span class="gradient-text">voltada para o futuro</span>',
      text1: `${EVENT_CONTENT.host} e ${EVENT_CONTENT.cohost} convidam líderes universitários e partes interessadas para Nairobi numa edição histórica do CoReViP sob o tema “${EVENT_CONTENT.theme}”.`,
      text2: `Um conceito de website premium centrado no ${EVENT_CONTENT.milestone}, no diálogo político, no intercâmbio académico e nas montras de inovação.`,
      button1: "Explorar evento",
      button2: "Ver programa",
      button3: "Submeter resumo",
      stat1: "4",
      statLabel1: "Dias de conferência",
      stat2: "13+",
      statLabel2: "Subtemas e trilhas",
      stat3: "60",
      statLabel3: "Anos de liderança da AAU",
      metaDate: EVENT_CONTENT.dates,
      metaVenue: EVENT_CONTENT.venue,
      metaTheme: "Resiliência • Relevância • Impacto",
      cardTitle: EVENT_CONTENT.theme,
      cardText: `${EVENT_CONTENT.code} reúne líderes universitários, decisores políticos, parceiros, investigadores, estudantes e inovadores de toda a África e do mundo.`,
    },
    organizers: {
      eyebrow: "Organizado por",
      title: "Instituições por detrás da conferência",
      text1: "Instituições e coorganizadores em destaque.",
      text2:
        "Cartões visuais vibrantes para instituições, anfitriões e organismos convocadores.",
    },
    countdown: {
      eyebrow: "Contagem decrescente para a abertura",
      title: "O CoReViP 2027 está a chegar",
      text: `Contagem decrescente em direto para a abertura do ${EVENT_CONTENT.code}.`,
      days: "Dias",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos",
    },
    about: {
      title1:
        "Uma edição marcante do CoReViP para o futuro do ensino superior africano",
      text1: `${EVENT_CONTENT.code} assinala o 60.º aniversário da Association of African Universities ao mesmo tempo que promove uma agenda voltada para resiliência, relevância e impacto.`,
      title2: "Uma experiência digital premium para um marco prestigiado",
      text2: `A conferência combina diálogo político de alto nível, sessões académicas, comunidades de prática, exposição de inovação e compromissos para a universidade africana do futuro.`,
      card1: "Momento do jubileu de diamante",
      cardText1:
        "Celebrar 60 anos da AAU e reposicionar as universidades africanas para os próximos 60 anos.",
      card2: "Expo de conhecimento e inovação",
      cardText2:
        "Uma montra de inovação no ensino, plataformas digitais, avanços de investigação, empreendedorismo e impacto comunitário.",
      card3: "Encontro continental",
      cardText3:
        "Líderes universitários, decisores, agências de qualidade, parceiros, estudantes e indústria reúnem-se em Nairobi.",
      why: "Porque importa",
      whyTitle:
        "Reposicionar universidades africanas para resiliência, relevância e impacto",
      experience: "Foco da conferência",
      experienceTitle:
        "Diálogo político, trilhas académicas, comunidades de prática, vitrinas de boas práticas, gala e compromissos futuros.",
      tag1: "Resiliência institucional",
      tag2: "Investigação e inovação",
      tag3: "Transformação digital",
      tag4: "Bem-estar estudantil",
      feature1: "Celebração histórica",
      feature1Text: "Jubileu de diamante da AAU (1967–2027).",
      feature2: "Agenda continental",
      feature2Text:
        "Implementação orientada para o futuro e relevância política.",
      feature3: "Participação inclusiva",
      feature3Text:
        "Investigadores, líderes, decisores, indústria e estudantes.",
      feature4: "Submissões",
      feature4Text: `Prazo para resumos: ${EVENT_CONTENT.submissionAbstract}.`,
    },
    program: {
      eyebrow: "Programa",
      title:
        "Agenda da conferência preenchida a partir da estrutura preliminar do programa",
      text: "Alterne entre vista por separadores e vista em acordeão. As sessões abaixo refletem a estrutura preliminar carregada.",
      viewTabs: "Separadores",
      viewAccordions: "Acordeão",
    },
    speakers: {
      eyebrow: "Funções em destaque",
      title:
        "Perfis concebidos para evidenciar a liderança e os contributos da conferência",
      text: "Substitua estes perfis por oradores, moderadores e dignitários confirmados.",
    },
    gallery: {
      eyebrow: "Galeria",
      title: "Uma prévia visual da atmosfera da conferência",
      text: "Use esta área para fotos reais do evento, destaques de edições passadas ou imagens do local.",
      all: "Todos",
    },
    videos: {
      eyebrow: "Vídeos",
      title: "Vídeos incorporados para teasers e mensagens oficiais",
      text: "Substitua os vídeos de demonstração pelo trailer oficial, mensagem do presidente ou preview do local.",
    },
    testimonials: {
      eyebrow: "Testemunhos",
      title: "Comentários de participantes institucionais e delegados",
      text: "Use este slider para comentários de participantes anteriores, parceiros, anfitriões ou inovadores estudantis.",
    },
    partners: {
      eyebrow: "Parceiros estratégicos",
      title: "Mural interativo de parceiros e partes interessadas",
      text: "Use cartões com links para instituições, agências e parceiros de desenvolvimento.",
      centered: true,
    },
    exhibitors: {
      eyebrow: "Expo e mostra",
      title: "Destaques da exposição de inovação e conhecimento",
      text: "Esta secção pode destacar stands, hubs de inovação, mostras universitárias e comercialização de investigação.",
    },
    hotels: {
      eyebrow: "Hotéis para reserva",
      title: "Opções de alojamento com filtros e links diretos",
      text: "Substitua estes hotéis de demonstração por parceiros oficiais e links reais de reserva.",
    },
    tickets: {
      eyebrow: "Opções de registo",
      title: "Categorias de registo ou participação",
      text: "Estes cartões podem tornar-se categorias de registo, pacotes de patrocínio ou tipos de participantes.",
    },
    blog: {
      eyebrow: "Atualizações da conferência",
      title: "Avisos recentes, chamadas e prévias",
      text: "Use esta secção para atualizações, chamada de trabalhos, logística e anúncios da conferência.",
    },
  },
};

/* ============================================================
   APPLICATION STATE
   ============================================================ */
const state = {
  lang: "en",
  // variants: Object.fromEntries(Object.keys(sectionLabels).map(key => [key, 'v1'])),
  variants: {
    hero: "v2",
    organizers: "hide",
    countdown: "v1",
    about: "v2",
    program: "v1",
    speakers: "v1",
    gallery: "v1",
    videos: "v1",
    testimonials: "v2",
    partners: "v1",
    exhibitors: "v1",
    hotels: "v1",
    tickets: "v2",
    blog: "v1",
  },
  programDay: "day1",
  openAccordion: 0,
  galleryFilter: "All",
  activeVideo: 0,
  videoPlaying: false,
  testimonialIndex: 0,
  hotelArea: "All",
  hotelType: "All",
};

/* ============================================================
   LOGOS / SPEAKERS / GALLERY / VIDEOS / TESTIMONIALS
   ============================================================ */
const organizerLogos = [
  { name: "Association of African Universities", mark: "AAU", url: "#" },
  { name: "KCA University", mark: "KCA", url: "#" },
  { name: "African Union", mark: "AU", url: "#" },
  { name: "UNESCO", mark: "UN", url: "#" },
  { name: "World Bank", mark: "WB", url: "#" },
  { name: "African Development Bank", mark: "AfDB", url: "#" },
];

/*
  SPEAKER NOTES
  ------------------------------------------------------------
  Replace these placeholder profiles once confirmed speakers are available.
  PLACE YOUR IMAGE HERE:
  - If you have a real image path, use it like:
    image: 'assets/images/speakers/chairperson.jpg'
*/
const speakers = [
  {
    name: "Host University Representative",
    role: "Welcome Address",
    topic: "Opening Ceremony",
    bio: "Replace with the confirmed representative from KCA University.",
    colors: ["#2563eb", "#22d3ee"],
  },
  {
    name: "Chairperson, AAU Board",
    role: "Leadership Remarks",
    topic: "Institutional Leadership",
    bio: "Replace with the confirmed chairperson profile and biography.",
    colors: ["#1d4ed8", "#60a5fa"],
  },
  {
    name: "Government of Kenya",
    role: "Guest of Honor",
    topic: "Policy Remarks",
    bio: "Replace with the designated government representative for the opening ceremony.",
    colors: ["#0ea5e9", "#67e8f9"],
  },
  {
    name: "Strategic Partner Delegate",
    role: "Goodwill Message",
    topic: "Partnerships & Cooperation",
    bio: "Replace with a confirmed partner speaker from AU, UNESCO, World Bank, or AfDB.",
    colors: ["#2563eb", "#818cf8"],
  },
];

/*
  GALLERY NOTES
  ------------------------------------------------------------
  PLACE YOUR IMAGE HERE:
  - Replace each generated SVG with a real path if you have actual event photos.
  - Example:
    image: 'assets/images/gallery/opening-night.jpg'
*/
const galleryItems = [
  {
    id: 1,
    title: "Nairobi Conference Welcome",
    category: "Ceremony",
    image: "assets/images/exhibition.jpg",
  },
  {
    id: 2,
    title: "AAU Diamond Jubilee",
    category: "Milestone",
    image: "assets/images/audience (3).jpg",
  },
  {
    id: 3,
    title: "Innovation Expo",
    category: "Expo",
    image: "assets/images/audience (4).jpg",
  },
  {
    id: 4,
    title: "Academic Tracks",
    category: "Sessions",
    image: "assets/images/panel (2).jpg",
  },
  {
    id: 5,
    title: "Leadership Dialogue",
    category: "Dialogue",
    image: "assets/images/panel.jpg",
  },
  {
    id: 6,
    title: "Gala & Awards",
    category: "Gala",
    image: "assets/images/awards.jpg",
  },
];

/*
  VIDEO NOTES
  ------------------------------------------------------------
  PLACE YOUR LINK HERE:
  - Replace the embed value with your official YouTube/Vimeo embed link.
  - Example:
    embed: 'https://www.youtube.com/embed/VIDEO_ID?rel=0'
  PLACE YOUR IMAGE HERE:
  - Replace thumb with a real image if desired.
*/
const videos = [
  {
    title: "CoReViP 2027 Teaser",
    duration: "02:14",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
    thumb: svgPhoto("CoReViP 2027 Teaser", ["#2563eb", "#67e8f9"]),
  },
  {
    title: "AAU Diamond Jubilee Story",
    duration: "04:32",
    embed: "https://www.youtube.com/embed/ScMzIvxBSi4?rel=0",
    thumb: svgPhoto("AAU Diamond Jubilee Story", ["#1d4ed8", "#93c5fd"]),
  },
  {
    title: "Host City & Venue Preview",
    duration: "01:46",
    embed: "https://youtu.be/ellVFlAp-x4?si=SRMDspSp0xls2FrC",
    thumb: svgPhoto("Host City & Venue Preview", ["#0f172a", "#06b6d4"]),
  },
];

const testimonials = [
  {
    quote:
      "CoReViP continues to offer a critical platform for shaping policy, collaboration, and innovation across African higher education.",
    name: "Institutional Delegate",
    title: "Past CoReViP Participant",
  },
  {
    quote:
      "The conference is uniquely positioned to connect university leadership, academic reform, and continental priorities in one forum.",
    name: "Development Partner",
    title: "Strategic Partner",
  },
  {
    quote:
      "The Diamond Jubilee framing gives CoReViP 2027 both celebratory significance and a strong forward-looking agenda.",
    name: "Higher Education Researcher",
    title: "Conference Contributor",
  },
];

const partners = [
  { name: "African Union", url: "#" },
  { name: "UNESCO", url: "#" },
  { name: "World Bank", url: "#" },
  { name: "African Development Bank", url: "#" },
  { name: "AAU", url: "#" },
  { name: "KCA University", url: "#" },
  { name: "Quality Assurance Agencies", url: "#" },
  { name: "Industry Partners", url: "#" },
];

const exhibitors = [
  {
    name: "Digital Learning Platforms",
    category: "Innovation Expo",
    desc: "Showcase digital teaching and learning platforms, online systems, and academic tools.",
    url: "#",
  },
  {
    name: "University Innovations",
    category: "Institutional Showcase",
    desc: "Highlight institutional solutions, applied research, and innovation ecosystem outputs.",
    url: "#",
  },
  {
    name: "Industry Partnerships",
    category: "Partnerships",
    desc: "Present collaboration models linking universities, employers, and innovation actors.",
    url: "#",
  },
  {
    name: "Research Commercialization",
    category: "Research Impact",
    desc: "Feature prototypes, technology transfer outcomes, and commercialization pathways.",
    url: "#",
  },
  {
    name: "Student Innovation Challenge",
    category: "Student Innovation",
    desc: "Showcase finalist ideas and student-led problem solving from pre-conference activities.",
    url: "#",
  },
  {
    name: "Knowledge & Policy Booths",
    category: "Policy Dialogue",
    desc: "Display policy briefs, communiqués, declarations, and strategic foresight outputs.",
    url: "#",
  },
];

/*
  HOTEL NOTES
  ------------------------------------------------------------
  PLACE YOUR LINK HERE:
  - Replace link with the real booking page.
*/
const hotels = [
  {
    name: "Official Conference Hotel A",
    stars: 5,
    area: "Central",
    price: 280,
    tag: "Luxury",
    link: "#",
  },
  {
    name: "Business Stay Nairobi",
    stars: 4,
    area: "Airport",
    price: 180,
    tag: "Business",
    link: "#",
  },
  {
    name: "Preferred Delegate Hotel",
    stars: 5,
    area: "Central",
    price: 320,
    tag: "Luxury",
    link: "#",
  },
  {
    name: "Convenience City Hotel",
    stars: 3,
    area: "Westlands",
    price: 120,
    tag: "Value",
    link: "#",
  },
  {
    name: "Academic Guest Suites",
    stars: 4,
    area: "Airport",
    price: 210,
    tag: "Business",
    link: "#",
  },
  {
    name: "Budget Delegate Lodge",
    stars: 3,
    area: "Westlands",
    price: 105,
    tag: "Value",
    link: "#",
  },
];

/*
  REGISTRATION NOTES
  ------------------------------------------------------------
  Replace these with your real registration categories or sponsorship packages.
*/
const ticketTiers = [
  {
    name: "Delegate",
    price: "$120",
    features: [
      "Conference sessions",
      "Program materials",
      "Expo access",
      "Networking activities",
    ],
    cta: "Register Delegate",
  },
  {
    name: "Premium Delegate",
    price: "$220",
    featured: true,
    features: [
      "Priority seating",
      "Gala dinner access",
      "Premium welcome pack",
      "Full conference access",
    ],
    cta: "Choose Premium",
  },
  {
    name: "Partner / Sponsor",
    price: "$500",
    features: [
      "Partner visibility",
      "Networking access",
      "Expo participation",
      "Engagement opportunities",
    ],
    cta: "Request Package",
  },
];

/*
  BLOG / UPDATE NOTES
  ------------------------------------------------------------
  PLACE YOUR LINK HERE:
  - Replace url with your real CMS/blog/news page.
*/
const blogPosts = [
  {
    title: "Conference Theme and Subthemes",
    excerpt: `Explore the conference theme “${EVENT_CONTENT.theme}” and the subthemes that shape CoReViP 2027.`,
    tag: "Theme",
    date: "2027",
    url: "#",
  },
  {
    title: "Call for Papers and Participation",
    excerpt: `Abstract submissions open with a deadline of ${EVENT_CONTENT.submissionAbstract}.`,
    tag: "Call for Papers",
    date: "2027",
    url: EVENT_CONTENT.submissionPortal,
  },
  {
    title: "Submission Deadlines and Contact",
    excerpt: `Acceptance notices are due by ${EVENT_CONTENT.submissionAcceptance}; full papers by ${EVENT_CONTENT.submissionFullPaper}.`,
    tag: "Updates",
    date: "2027",
    url: "#",
  },
];

/* ============================================================
   PROGRAMME STRUCTURE (from uploaded draft programme structure)
   ============================================================ */
const schedule = [
  {
    key: "day1",
    dayLabel: { en: "Day 1", fr: "Jour 1", ar: "اليوم 1", pt: "Dia 1" },
    title: {
      en: "Resilience",
      fr: "Résilience",
      ar: "المرونة",
      pt: "Resiliência",
    },
    subtitle: {
      en: "High-Level Policy Dialogue & Opening Ceremony",
      fr: "Dialogue politique de haut niveau et cérémonie d’ouverture",
      ar: "حوار سياساتي رفيع المستوى وحفل الافتتاح",
      pt: "Diálogo político de alto nível e cerimónia de abertura",
    },
    items: [
      {
        time: "08:00 – 09:00",
        title: {
          en: "Registration & Networking",
          fr: "Inscription et réseautage",
          ar: "التسجيل والتشبيك",
          pt: "Registo e networking",
        },
        desc: {
          en: "Arrival, registration, and delegate networking.",
          fr: "Arrivée, enregistrement et réseautage des délégués.",
          ar: "وصول المشاركين والتسجيل والتشبيك.",
          pt: "Chegada, registo e networking dos delegados.",
        },
      },
      {
        time: "09:00 – 10:30",
        title: {
          en: "Opening Ceremony",
          fr: "Cérémonie d’ouverture",
          ar: "حفل الافتتاح",
          pt: "Cerimónia de abertura",
        },
        desc: {
          en: "Welcome Address by KCA University; remarks by the Government of Kenya; remarks by the Chairperson, AAU Board; goodwill messages from strategic partners.",
          fr: "Mot d’accueil de KCA University; interventions du gouvernement du Kenya; remarques du président du Conseil de l’AAU; messages de bonne volonté des partenaires stratégiques.",
          ar: "كلمة ترحيبية من جامعة KCA، ومداخلات من حكومة كينيا ورئيس مجلس AAU ورسائل شركاء استراتيجيين.",
          pt: "Mensagem de boas-vindas da KCA University; intervenções do Governo do Quénia; observações do Presidente do Conselho da AAU; mensagens de parceiros estratégicos.",
        },
      },
      {
        time: "10:30 – 11:00",
        title: {
          en: "Coffee Break",
          fr: "Pause-café",
          ar: "استراحة قهوة",
          pt: "Pausa para café",
        },
        desc: {
          en: "Networking break.",
          fr: "Pause de réseautage.",
          ar: "استراحة للتشبيك.",
          pt: "Pausa para networking.",
        },
      },
      {
        time: "11:00 – 12:00",
        title: {
          en: "Diamond Jubilee Moment",
          fr: "Moment du jubilé de diamant",
          ar: "لحظة اليوبيل الماسي",
          pt: "Momento do jubileu de diamante",
        },
        desc: {
          en: "Keynote: Celebrating 60 years of the Association of African Universities and repositioning African universities for the next 60 years.",
          fr: "Discours principal : célébrer 60 ans de l’Association des Universités Africaines et repositionner les universités africaines pour les 60 prochaines années.",
          ar: "الكلمة الرئيسية: الاحتفاء بستين عامًا لاتحاد الجامعات الأفريقية وإعادة تموضع الجامعات الأفريقية للستين سنة القادمة.",
          pt: "Discurso principal: celebrar 60 anos da Association of African Universities e reposicionar as universidades africanas para os próximos 60 anos.",
        },
      },
      {
        time: "12:00 – 13:00",
        title: {
          en: "Presidential Plenary: Institutional Resilience & Governance",
          fr: "Plénière présidentielle : résilience institutionnelle et gouvernance",
          ar: "الجلسة الرئاسية: المرونة المؤسسية والحوكمة",
          pt: "Plenária presidencial: resiliência institucional e governação",
        },
        desc: {
          en: "Panel with university leaders, higher education policy experts, and government representatives.",
          fr: "Panel avec des dirigeants universitaires, experts des politiques d’enseignement supérieur et représentants gouvernementaux.",
          ar: "حلقة نقاش تضم قادة جامعات وخبراء سياسات التعليم العالي وممثلين حكوميين.",
          pt: "Painel com líderes universitários, especialistas em políticas do ensino superior e representantes governamentais.",
        },
      },
      {
        time: "13:00 – 14:00",
        title: { en: "Lunch", fr: "Déjeuner", ar: "الغداء", pt: "Almoço" },
        desc: {
          en: "Midday break.",
          fr: "Pause de midi.",
          ar: "استراحة منتصف اليوم.",
          pt: "Pausa do meio-dia.",
        },
      },
      {
        time: "14:00 – 15:15",
        title: {
          en: "Leadership Plenary: Institutional Autonomy & Ethical Leadership",
          fr: "Plénière de leadership : autonomie institutionnelle et leadership éthique",
          ar: "الجلسة القيادية: الاستقلالية المؤسسية والقيادة الأخلاقية",
          pt: "Plenária de liderança: autonomia institucional e liderança ética",
        },
        desc: {
          en: "Focused discussion on autonomy, policy, and ethical leadership.",
          fr: "Discussion ciblée sur l’autonomie, les politiques et le leadership éthique.",
          ar: "نقاش مركز حول الاستقلالية والسياسات والقيادة الأخلاقية.",
          pt: "Discussão focada em autonomia, política e liderança ética.",
        },
      },
      {
        time: "15:15 – 15:45",
        title: {
          en: "Coffee Break",
          fr: "Pause-café",
          ar: "استراحة قهوة",
          pt: "Pausa para café",
        },
        desc: {
          en: "Networking break.",
          fr: "Pause de réseautage.",
          ar: "استراحة للتشبيك.",
          pt: "Pausa para networking.",
        },
      },
      {
        time: "15:45 – 17:00",
        title: {
          en: "Strategic Plenary: Resilient Financing Models for African Universities",
          fr: "Plénière stratégique : modèles de financement résilients",
          ar: "الجلسة الاستراتيجية: نماذج التمويل المرنة للجامعات الأفريقية",
          pt: "Plenária estratégica: modelos de financiamento resilientes",
        },
        desc: {
          en: "Focus on government funding, industry partnerships, philanthropy, endowments, and entrepreneurial universities.",
          fr: "Accent sur le financement public, les partenariats avec l’industrie, la philanthropie, les dotations et les universités entrepreneuriales.",
          ar: "التركيز على التمويل الحكومي والشراكات مع الصناعة والعمل الخيري والأوقاف والجامعات الريادية.",
          pt: "Foco em financiamento público, parcerias com a indústria, filantropia, fundos patrimoniais e universidades empreendedoras.",
        },
      },
      {
        time: "17:00 – 18:00",
        title: {
          en: "Opening of Innovation & Knowledge Expo",
          fr: "Ouverture de l’expo innovation et savoir",
          ar: "افتتاح معرض الابتكار والمعرفة",
          pt: "Abertura da expo de inovação e conhecimento",
        },
        desc: {
          en: "Showcasing digital learning platforms, university innovations, industry partnerships, and research commercialization.",
          fr: "Présentation de plateformes numériques, d’innovations universitaires, de partenariats industriels et de valorisation de la recherche.",
          ar: "عرض المنصات الرقمية والابتكارات الجامعية والشراكات الصناعية وتسويق نتائج البحث.",
          pt: "Apresentação de plataformas digitais, inovações universitárias, parcerias com a indústria e comercialização da investigação.",
        },
      },
      {
        time: "18:30 – 20:00",
        title: {
          en: "Welcome Reception",
          fr: "Réception de bienvenue",
          ar: "حفل استقبال ترحيبي",
          pt: "Receção de boas-vindas",
        },
        desc: {
          en: "Evening reception for delegates and partners.",
          fr: "Réception en soirée pour les délégués et partenaires.",
          ar: "حفل مسائي للمشاركين والشركاء.",
          pt: "Receção noturna para delegados e parceiros.",
        },
      },
    ],
  },
  {
    key: "day2",
    dayLabel: { en: "Day 2", fr: "Jour 2", ar: "اليوم 2", pt: "Dia 2" },
    title: {
      en: "Relevance",
      fr: "Pertinence",
      ar: "الملاءمة",
      pt: "Relevância",
    },
    subtitle: {
      en: "Academic Sessions & Communities of Practice",
      fr: "Sessions académiques et communautés de pratique",
      ar: "الجلسات الأكاديمية ومجتمعات الممارسة",
      pt: "Sessões académicas e comunidades de prática",
    },
    items: [
      {
        time: "08:30 – 10:00",
        title: {
          en: "Morning Parallel Academic Sessions",
          fr: "Sessions académiques parallèles du matin",
          ar: "الجلسات الأكاديمية المتوازية صباحًا",
          pt: "Sessões académicas paralelas da manhã",
        },
        desc: {
          en: "Tracks include Curriculum & Skills for the Future; Research & Industry Linkages; Digital Infrastructure & Transformation; Quality Assurance & Accreditation; Internationalisation & Diaspora Engagement.",
          fr: "Les pistes incluent le curriculum et les compétences d’avenir; la recherche et les liens avec l’industrie; l’infrastructure numérique; l’assurance qualité; l’internationalisation et la diaspora.",
          ar: "تشمل المسارات: المناهج ومهارات المستقبل؛ البحث والارتباط بالصناعة؛ البنية الرقمية؛ ضمان الجودة؛ والتدويل وإشراك الشتات.",
          pt: "As trilhas incluem currículo e competências do futuro; investigação e ligações com a indústria; infraestrutura digital; garantia da qualidade; internacionalização e diáspora.",
        },
      },
      {
        time: "10:00 – 10:30",
        title: {
          en: "Coffee Break",
          fr: "Pause-café",
          ar: "استراحة قهوة",
          pt: "Pausa para café",
        },
        desc: {
          en: "Networking break.",
          fr: "Pause de réseautage.",
          ar: "استراحة للتشبيك.",
          pt: "Pausa para networking.",
        },
      },
      {
        time: "10:30 – 12:00",
        title: {
          en: "Second Parallel Track Block",
          fr: "Deuxième bloc de pistes parallèles",
          ar: "الكتلة الثانية من المسارات المتوازية",
          pt: "Segundo bloco de trilhas paralelas",
        },
        desc: {
          en: "Climate Leadership & Inclusive Development; Universities as Catalysts for Peace & Social Justice; Artificial Intelligence & Data Governance; Open Science & Research Integrity; Student Wellbeing & Support Systems.",
          fr: "Leadership climatique et développement inclusif; universités comme catalyseurs de paix; intelligence artificielle et gouvernance des données; science ouverte; bien-être étudiant.",
          ar: "القيادة المناخية والتنمية الشاملة؛ الجامعات كعوامل للسلام؛ الذكاء الاصطناعي وحوكمة البيانات؛ العلم المفتوح؛ رفاه الطلبة.",
          pt: "Liderança climática e desenvolvimento inclusivo; universidades como catalisadores de paz; inteligência artificial e governação de dados; ciência aberta; bem-estar estudantil.",
        },
      },
      {
        time: "12:00 – 13:00",
        title: {
          en: "Finals of Pre-Conference Activities",
          fr: "Finales des activités pré-conférence",
          ar: "نهائيات الأنشطة السابقة للمؤتمر",
          pt: "Finais das atividades pré-conferência",
        },
        desc: {
          en: "African Universities Debate Championship; Pan-African Student Innovation Challenge; Research Impact Pitch Competition.",
          fr: "Championnat de débat des universités africaines; défi panafricain d’innovation étudiante; concours de pitch sur l’impact de la recherche.",
          ar: "بطولة مناظرات الجامعات الأفريقية؛ تحدي الابتكار الطلابي الأفريقي؛ مسابقة عرض أثر البحث.",
          pt: "Campeonato de debate das universidades africanas; desafio pan-africano de inovação estudantil; competição de pitch de impacto da investigação.",
        },
      },
      {
        time: "13:00 – 14:00",
        title: { en: "Lunch", fr: "Déjeuner", ar: "الغداء", pt: "Almoço" },
        desc: {
          en: "Midday break.",
          fr: "Pause de midi.",
          ar: "استراحة منتصف اليوم.",
          pt: "Pausa do meio-dia.",
        },
      },
      {
        time: "14:00 – 17:30",
        title: {
          en: "Communities of Practice Meetings",
          fr: "Rencontres des communautés de pratique",
          ar: "اجتماعات مجتمعات الممارسة",
          pt: "Reuniões das comunidades de prática",
        },
        desc: {
          en: "Parallel half-day meetings for bursars, librarians, registrars, quality assurance directors, ICT leaders, research leaders, student affairs and partnerships offices.",
          fr: "Rencontres parallèles pour les intendants, bibliothécaires, registraires, directeurs qualité, responsables TIC, recherche, affaires étudiantes et partenariats.",
          ar: "اجتماعات متوازية لنظار المال والمكتبات والمسجلين ومديري الجودة وقادة تكنولوجيا المعلومات والبحث وشؤون الطلبة والشراكات.",
          pt: "Reuniões paralelas para bursars, bibliotecários, registrars, diretores de qualidade, líderes TIC, investigação, assuntos estudantis e parcerias.",
        },
      },
      {
        time: "Evening",
        title: {
          en: "Exhibition Visits",
          fr: "Visites de l’exposition",
          ar: "زيارات المعرض",
          pt: "Visitas à exposição",
        },
        desc: {
          en: "Evening expo visits and networking.",
          fr: "Visites de l’expo et réseautage en soirée.",
          ar: "زيارات مسائية للمعرض والتشبيك.",
          pt: "Visitas à expo e networking ao fim da tarde.",
        },
      },
    ],
  },
  {
    key: "day3",
    dayLabel: { en: "Day 3", fr: "Jour 3", ar: "اليوم 3", pt: "Dia 3" },
    title: { en: "Impact", fr: "Impact", ar: "الأثر", pt: "Impacto" },
    subtitle: {
      en: "Strategic Leadership Dialogues & Best Practice Showcase",
      fr: "Dialogues stratégiques et vitrine des bonnes pratiques",
      ar: "حوارات القيادة الاستراتيجية وعرض أفضل الممارسات",
      pt: "Diálogos estratégicos e mostra de boas práticas",
    },
    items: [
      {
        time: "08:30 – 10:00",
        title: {
          en: "Vice-Chancellors Leadership Roundtable",
          fr: "Table ronde des vice-chanceliers",
          ar: "المائدة المستديرة لقادة الجامعات",
          pt: "Mesa-redonda de vice-reitores",
        },
        desc: {
          en: "Theme: Leading African Universities in an Era of Disruption.",
          fr: "Thème : Diriger les universités africaines dans une ère de disruption.",
          ar: "الموضوع: قيادة الجامعات الأفريقية في عصر الاضطراب.",
          pt: "Tema: Liderar universidades africanas numa era de disrupção.",
        },
      },
      {
        time: "08:30 – 10:00",
        title: {
          en: "Best Practice Showcases (1)",
          fr: "Vitrines des bonnes pratiques (1)",
          ar: "عروض أفضل الممارسات (1)",
          pt: "Mostras de boas práticas (1)",
        },
        desc: {
          en: "Selected institutions present case studies on digital transformation, partnerships, climate leadership, and innovation ecosystems.",
          fr: "Des institutions sélectionnées présentent des études de cas sur la transformation numérique, les partenariats, le climat et les écosystèmes d’innovation.",
          ar: "تقدم مؤسسات مختارة دراسات حالة حول التحول الرقمي والشراكات والقيادة المناخية ومنظومات الابتكار.",
          pt: "Instituições selecionadas apresentam estudos de caso sobre transformação digital, parcerias, liderança climática e ecossistemas de inovação.",
        },
      },
      {
        time: "10:00 – 10:30",
        title: {
          en: "Coffee Break",
          fr: "Pause-café",
          ar: "استراحة قهوة",
          pt: "Pausa para café",
        },
        desc: {
          en: "Networking break.",
          fr: "Pause de réseautage.",
          ar: "استراحة للتشبيك.",
          pt: "Pausa para networking.",
        },
      },
      {
        time: "10:30 – 12:00",
        title: {
          en: "Ministerial Policy Dialogue",
          fr: "Dialogue politique ministériel",
          ar: "الحوار الوزاري حول السياسات",
          pt: "Diálogo político ministerial",
        },
        desc: {
          en: "Theme: Policy Frameworks for the Future African University, with ministers, regional bodies, and university leaders.",
          fr: "Thème : cadres politiques pour l’université africaine du futur, avec ministres, organismes régionaux et dirigeants universitaires.",
          ar: "الموضوع: أطر السياسات للجامعة الأفريقية المستقبلية بمشاركة الوزراء والهيئات الإقليمية وقادة الجامعات.",
          pt: "Tema: quadros políticos para a universidade africana do futuro, com ministros, órgãos regionais e líderes universitários.",
        },
      },
      {
        time: "12:00 – 13:00",
        title: {
          en: "University–Industry Partnership Forum",
          fr: "Forum partenariats université-industrie",
          ar: "منتدى شراكات الجامعة والصناعة",
          pt: "Fórum universidade-indústria",
        },
        desc: {
          en: "Focused engagement on collaboration and innovation.",
          fr: "Engagement ciblé sur la collaboration et l’innovation.",
          ar: "جلسة مركزة على التعاون والابتكار.",
          pt: "Envolvimento focado em colaboração e inovação.",
        },
      },
      {
        time: "13:00 – 14:00",
        title: { en: "Lunch", fr: "Déjeuner", ar: "الغداء", pt: "Almoço" },
        desc: {
          en: "Midday break.",
          fr: "Pause de midi.",
          ar: "استراحة منتصف اليوم.",
          pt: "Pausa do meio-dia.",
        },
      },
      {
        time: "14:30 – 18:00",
        title: {
          en: "Cultural & Networking Excursion / Best Practice Showcases (2)",
          fr: "Excursion culturelle et réseautage / bonnes pratiques (2)",
          ar: "رحلة ثقافية وتواصل / عروض أفضل الممارسات (2)",
          pt: "Excursão cultural e networking / boas práticas (2)",
        },
        desc: {
          en: "Afternoon cultural engagement and continued institutional showcases.",
          fr: "Engagement culturel l’après-midi et poursuite des vitrines institutionnelles.",
          ar: "تفاعل ثقافي بعد الظهر واستمرار عروض المؤسسات.",
          pt: "Atividade cultural à tarde e continuação das mostras institucionais.",
        },
      },
      {
        time: "Evening",
        title: {
          en: "AAU 60th Anniversary Gala Dinner & Awards Night",
          fr: "Dîner de gala du 60e anniversaire de l’AAU",
          ar: "حفل عشاء اليوبيل الستين للـAAU وجوائز",
          pt: "Jantar de gala e prémios do 60.º aniversário da AAU",
        },
        desc: {
          en: "Recognition of distinguished African scholarship and awards for research excellence, innovation impact, and university leadership.",
          fr: "Reconnaissance de la recherche africaine distinguée et prix pour l’excellence en recherche, l’impact de l’innovation et le leadership universitaire.",
          ar: "تكريم الباحثين المتميزين في أفريقيا ومنح جوائز للتميز البحثي وأثر الابتكار والقيادة الجامعية.",
          pt: "Reconhecimento da investigação africana de destaque e prémios para excelência em investigação, impacto da inovação e liderança universitária.",
        },
      },
    ],
  },
  {
    key: "day4",
    dayLabel: { en: "Day 4", fr: "Jour 4", ar: "اليوم 4", pt: "Dia 4" },
    title: {
      en: "Future & Commitments",
      fr: "Avenir et engagements",
      ar: "المستقبل والالتزامات",
      pt: "Futuro e compromissos",
    },
    subtitle: {
      en: "Commitments and Closing",
      fr: "Engagements et clôture",
      ar: "الالتزامات والختام",
      pt: "Compromissos e encerramento",
    },
    items: [
      {
        time: "09:00 – 10:30",
        title: {
          en: "Synthesis Plenary",
          fr: "Plénière de synthèse",
          ar: "الجلسة الختامية التجميعية",
          pt: "Plenária de síntese",
        },
        desc: {
          en: "Reports from all tracks and communities of practice meetings.",
          fr: "Rapports de toutes les pistes et des communautés de pratique.",
          ar: "تقارير من جميع المسارات ومجتمعات الممارسة.",
          pt: "Relatórios de todas as trilhas e comunidades de prática.",
        },
      },
      {
        time: "10:30 – 11:00",
        title: {
          en: "Coffee Break",
          fr: "Pause-café",
          ar: "استراحة قهوة",
          pt: "Pausa para café",
        },
        desc: {
          en: "Networking break.",
          fr: "Pause de réseautage.",
          ar: "استراحة للتشبيك.",
          pt: "Pausa para networking.",
        },
      },
      {
        time: "11:00 – 12:00",
        title: {
          en: "Presentation of Communities of Practice Communiqué",
          fr: "Présentation du communiqué des communautés de pratique",
          ar: "عرض بيان مجتمعات الممارسة",
          pt: "Apresentação do comunicado das comunidades de prática",
        },
        desc: {
          en: "Summary of practical commitments and institutional operations insights.",
          fr: "Résumé des engagements pratiques et des enseignements opérationnels.",
          ar: "ملخص الالتزامات العملية والدروس التشغيلية.",
          pt: "Resumo dos compromissos práticos e lições operacionais.",
        },
      },
      {
        time: "12:00 – 12:45",
        title: {
          en: "Adoption of the Nairobi Declaration",
          fr: "Adoption de la Déclaration de Nairobi",
          ar: "اعتماد إعلان نيروبي",
          pt: "Adoção da Declaração de Nairobi",
        },
        desc: {
          en: "Declaration on the Future of African Universities.",
          fr: "Déclaration sur l’avenir des universités africaines.",
          ar: "إعلان حول مستقبل الجامعات الأفريقية.",
          pt: "Declaração sobre o futuro das universidades africanas.",
        },
      },
      {
        time: "12:45 – 13:30",
        title: {
          en: "Closing Ceremony",
          fr: "Cérémonie de clôture",
          ar: "حفل الختام",
          pt: "Cerimónia de encerramento",
        },
        desc: {
          en: "Reflections from vice-chancellors, remarks from AAU leadership, and announcement of the next CoReViP host.",
          fr: "Réflexions des vice-chanceliers, remarques de la direction de l’AAU et annonce du prochain hôte.",
          ar: "تأملات قادة الجامعات وملاحظات قيادة AAU والإعلان عن مضيف CoReViP القادم.",
          pt: "Reflexões dos vice-reitores, observações da liderança da AAU e anúncio do próximo anfitrião.",
        },
      },
      {
        time: "13:30",
        title: {
          en: "Lunch & Departure",
          fr: "Déjeuner et départ",
          ar: "الغداء والمغادرة",
          pt: "Almoço e partida",
        },
        desc: {
          en: "Conference close.",
          fr: "Clôture de la conférence.",
          ar: "ختام المؤتمر.",
          pt: "Encerramento da conferência.",
        },
      },
    ],
  },
];

const ids = {
  hero: "heroSection",
  organizers: "organizersSection",
  countdown: "countdownSection",
  about: "aboutSection",
  program: "programSection",
  speakers: "speakersSection",
  gallery: "gallerySection",
  videos: "videosSection",
  testimonials: "testimonialsSection",
  partners: "partnersSection",
  exhibitors: "exhibitorsSection",
  hotels: "hotelsSection",
  tickets: "ticketsSection",
  blog: "blogSection",
};

let countdownInterval;
let testimonialInterval;

/* ============================================================
   INITIALIZE APP
   ============================================================ */
document.addEventListener("DOMContentLoaded", init);

function init() {
  renderLanguageSwitcher();
  applyLanguage();
  renderVariantControls();
  renderAll();
  attachGlobalHandlers();
  initRevealObserver();
  startCountdown();
  startTestimonials();
  updateBackToTopVisibility();
}

/* ============================================================
   HELPER: GET TRANSLATED TEXT BLOCK
   ============================================================ */
function t(path) {
  const parts = path.split(".");
  let current = i18n[state.lang];
  for (const part of parts) current = current?.[part];
  return current ?? path;
}

function localizeValue(value) {
  if (typeof value === "string") return value;
  if (value && typeof value === "object")
    return value[state.lang] ?? value.en ?? "";
  return "";
}

/* ============================================================
   LANGUAGE SWITCHER + RTL
   ============================================================ */
function renderLanguageSwitcher() {
  const wrapper = document.getElementById("languageSwitcher");
  wrapper.innerHTML = `
    <label class="sr-only" for="languageSelect">Language</label>
    <select id="languageSelect" aria-label="Language selector">
      ${Object.entries(i18n)
        .map(
          ([key, value]) =>
            `<option value="${key}" ${state.lang === key ? "selected" : ""}>${value.langName}</option>`,
        )
        .join("")}
    </select>
  `;
  wrapper.querySelector("select").addEventListener("change", (event) => {
    state.lang = event.target.value;
    applyLanguage();
    renderVariantControls();
    renderAll();
  });
}

function applyLanguage() {
  const langConfig = i18n[state.lang];
  document.documentElement.lang = langConfig.htmlLang;
  document.documentElement.dir = langConfig.dir;
  document.body.classList.toggle("rtl", langConfig.dir === "rtl");
  document.title = `${EVENT_CONTENT.code} | ${EVENT_CONTENT.milestone}`;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.innerHTML = t(node.dataset.i18n);
  });

  const back = document.getElementById("backToTop");
  if (back) {
    back.setAttribute("aria-label", t("common.backToTop"));
    back.setAttribute("title", t("common.backToTop"));
  }
}

/* ============================================================
   VARIANT BAR
   ============================================================ */
function renderVariantControls() {
  const container = document.getElementById("variantControls");
  const localizedLabels = i18n[state.lang].sectionLabels;
  container.innerHTML = Object.entries(sectionLabels)
    .map(
      ([key]) => `
    <div class="variant-card">
      <label>${localizedLabels[key]}</label>
      <div class="button-group" role="group" aria-label="${localizedLabels[key]} version selector">
        ${["v1", "v2", "hide"]
          .map(
            (v) => `
          <button class="${state.variants[key] === v ? "is-active" : ""}" type="button" data-action="variant" data-section="${key}" data-value="${v}">${v === "hide" ? t("common.off") : v.toUpperCase()}</button>
        `,
          )
          .join("")}
      </div>
    </div>
  `,
    )
    .join("");
}

function renderAll() {
  renderHero();
  renderOrganizers();
  renderCountdown();
  renderAbout();
  renderProgram();
  renderSpeakers();
  renderGallery();
  renderVideos();
  renderTestimonials();
  renderPartners();
  renderExhibitors();
  renderHotels();
  renderTickets();
  renderBlog();
  initRevealObserver();
}

function renderSection(id, html, hidden = false) {
  const node = document.getElementById(id);
  if (!node) return;
  node.classList.toggle("hidden-section", hidden);
  node.innerHTML = hidden ? "" : html;
}

function sectionHeader({ eyebrow, title, text, centered = false }) {
  return `
    <div class="section-header ${centered ? "centered" : ""} reveal">
      <div class="pill"><span class="icon-dot"></span>${eyebrow}</div>
      <h2>${title}</h2>
      <p>${text}</p>
    </div>
  `;
}

/* ============================================================
   HERO SECTION
   ============================================================ */
function renderHero() {
  const variant = state.variants.hero;
  if (variant === "hide") return renderSection(ids.hero, "", true);
  const copy = t("hero");

  const html =
    variant === "v2"
      ? `
    <section class="hero hero-v2 block">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <div class="pill"><span class="icon-dot"></span>${copy.eyebrow2}</div>
          <h1>${copy.title1}<br/>${copy.title2}</h1>
          <p>${copy.text2}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#program">${copy.button2}</a>
            <a class="button-secondary" href="${EVENT_CONTENT.submissionPortal}" target="_blank" rel="noreferrer">${copy.button3}</a>
          </div>
          <div class="hero-meta">
            <div class="meta-chip">📅 ${copy.metaDate}</div>
            <div class="meta-chip">📍 ${copy.metaVenue}</div>
            <div class="meta-chip">◆ ${copy.metaTheme}</div>
          </div>
        </div>
        <div class="hero-showcase reveal">
          <!-- PLACE YOUR IMAGE HERE: swap the background-image value below with your hero image path -->
          <div class="hero-image" style="background-image:url('${svgPhoto("CoReViP 2027", ["#0f172a", "#2563eb"])}')"></div>
          <div class="hero-caption">
            <div class="pill"><span class="icon-dot"></span>${EVENT_CONTENT.milestone}</div>
            <h3 style="margin: 16px 0 8px; font-size: 2rem;">${copy.cardTitle}</h3>
            <p style="margin: 0; color: rgba(255,255,255,0.75)">${copy.cardText}</p>
          </div>
        </div>
      </div>
    </section>
  `
      : `
    <section class="hero hero-v1 block">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <div class="pill"><span class="icon-dot"></span>${copy.eyebrow1}</div>
          <h1>${copy.title1}<br/>${copy.title2}</h1>
          <p>${copy.text1}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#about">${copy.button1}</a>
            <a class="button-secondary" href="#program">${copy.button2}</a>
          </div>
          <div class="stats-row">
            <div class="stat-card floaty"><strong>${copy.stat1}</strong><span>${copy.statLabel1}</span></div>
            <div class="stat-card floaty" style="animation-delay: 0.15s"><strong>${copy.stat2}</strong><span>${copy.statLabel2}</span></div>
            <div class="stat-card floaty" style="animation-delay: 0.3s"><strong>${copy.stat3}</strong><span>${copy.statLabel3}</span></div>
          </div>
        </div>
        <div class="hero-showcase reveal">
          <!-- PLACE YOUR IMAGE HERE: use a real hero image path if available -->
          <div class="hero-image" style="background-image:url('${svgPhoto(EVENT_CONTENT.venue, ["#2563eb", "#67e8f9"])}')"></div>
          <div class="hero-caption">
            <div class="pill"><span class="icon-dot"></span>${copy.metaTheme}</div>
            <h3 style="margin: 16px 0 8px; font-size: 2rem;">${EVENT_CONTENT.venue}</h3>
            <p style="margin:0; color: rgba(255,255,255,0.75)">${EVENT_CONTENT.dates}</p>
          </div>
        </div>
      </div>
    </section>
  `;
  renderSection(ids.hero, html);
}

/* ============================================================
   ORGANIZERS / LOGOS
   ============================================================ */
function renderOrganizers() {
  const variant = state.variants.organizers;
  if (variant === "hide") return renderSection(ids.organizers, "", true);
  const copy = t("organizers");
  const cards = organizerLogos
    .map(
      (logo) => `
    <!-- PLACE YOUR LINK HERE: update href to the institution website -->
    <a class="logo-card ${variant === "v2" ? "is-heroic" : ""} reveal" href="${logo.url}" aria-label="${logo.name}">
      <span class="logo-mark ${variant === "v2" ? "spin-slow" : ""}">${logo.mark}</span>
      <strong>${logo.name}</strong>
    </a>
  `,
    )
    .join("");

  renderSection(
    ids.organizers,
    `
    <section class="logo-strip block" style="padding: 48px 0;">
      <div class="container">
        <div class="section-header reveal" style="margin-bottom: 20px;">
          <p class="eyebrow">${copy.eyebrow}</p>
          <h2>${copy.title}</h2>
          <p>${variant === "v2" ? copy.text2 : copy.text1}</p>
        </div>
        <div class="logo-grid">${cards}</div>
      </div>
    </section>
  `,
  );
}

/* ============================================================
   COUNTDOWN
   ============================================================ */
function renderCountdown() {
  const variant = state.variants.countdown;
  if (variant === "hide") return renderSection(ids.countdown, "", true);
  const copy = t("countdown");

  renderSection(
    ids.countdown,
    `
    <section class="countdown ${variant} block">
      <div class="container countdown-shell">
        <div class="reveal">
          <div class="pill"><span class="icon-dot"></span>${copy.eyebrow}</div>
          <h2 style="margin: 18px 0 8px; font-size: clamp(2rem, 4vw, 3.5rem);">${copy.title}</h2>
          <p style="margin: 0; max-width: 700px; color: rgba(255,255,255,0.82);">${copy.text}</p>
        </div>
        <div class="countdown-grid reveal" id="countGrid">
          ${[
            ["days", copy.days],
            ["hours", copy.hours],
            ["minutes", copy.minutes],
            ["seconds", copy.seconds],
          ]
            .map(
              ([key, label]) => `
            <div class="count-card floaty">
              <strong data-count="${key}">00</strong>
              <span>${label}</span>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `,
  );
  updateCountdown();
}

/* ============================================================
   ABOUT
   ============================================================ */
function renderAbout() {
  const variant = state.variants.about;
  if (variant === "hide") return renderSection(ids.about, "", true);
  const copy = t("about");
  const header = sectionHeader({
    eyebrow: t("nav.about"),
    title: variant === "v2" ? copy.title2 : copy.title1,
    text: variant === "v2" ? copy.text2 : copy.text1,
    centered: variant !== "v2",
  });

  const html =
    variant === "v2"
      ? `
    <section id="about" class="block">
      <div class="container">
        <div class="about-grid v2">
          <div class="reveal">
            <div class="about-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px;">
              <article class="about-feature-card primary">
                <p class="eyebrow" style="color: rgba(255,255,255,0.75);">${copy.why}</p>
                <h3 style="margin: 0; font-size: 2rem;">${copy.whyTitle}</h3>
              </article>
              <article class="about-feature-card">
                <p class="eyebrow">${copy.experience}</p>
                <h3 style="margin: 0; font-size: 1.55rem;">${copy.experienceTitle}</h3>
              </article>
              <article class="about-feature-card" style="grid-column: 1 / -1;">
                <ul class="about-tags">
                  <li>${copy.tag1}</li>
                  <li>${copy.tag2}</li>
                  <li>${copy.tag3}</li>
                  <li>${copy.tag4}</li>
                </ul>
                <p style="margin: 20px 0 0; color: var(--muted);">${copy.text2}</p>
              </article>
            </div>
          </div>
          <div class="reveal">
            ${header}
            <div class="feature-list">
              ${[
                [copy.feature1, copy.feature1Text],
                [copy.feature2, copy.feature2Text],
                [copy.feature3, copy.feature3Text],
                [copy.feature4, copy.feature4Text],
              ]
                .map(
                  ([title, text]) => `
                <div class="feature-bite">
                  <strong>${title}</strong>
                  <span>${text}</span>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `
      : `
    <section id="about" class="block surface-soft">
      <div class="container">
        ${header}
        <div class="about-grid v1">
          ${[
            [copy.card1, copy.cardText1],
            [copy.card2, copy.cardText2],
            [copy.card3, copy.cardText3],
          ]
            .map(
              ([title, desc]) => `
            <article class="about-card reveal">
              <div class="blog-icon">✦</div>
              <h3>${title}</h3>
              <p>${desc}</p>
            </article>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;

  renderSection(ids.about, html);
}

/* ============================================================
   PROGRAM
   ============================================================ */
function renderProgram() {
  const variant = state.variants.program;
  if (variant === "hide") return renderSection(ids.program, "", true);
  const copy = t("program");

  const header = sectionHeader({
    eyebrow: copy.eyebrow,
    title: copy.title,
    text: copy.text,
  });

  const html =
    variant === "v1"
      ? `
    <section id="program" class="block">
      <div class="container">
        ${header}
        <div class="program-controls reveal">
          ${schedule
            .map(
              (day) => `
            <button class="tab-button ${state.programDay === day.key ? "active" : ""}" type="button" data-action="program-day" data-day="${day.key}">${localizeValue(day.dayLabel)} • ${localizeValue(day.title)}</button>
          `,
            )
            .join("")}
        </div>
        <div class="program-panel reveal">
          <div class="pill"><span class="icon-dot"></span>${localizeValue(schedule.find((day) => day.key === state.programDay).subtitle)}</div>
          <div class="schedule-list" style="margin-top:18px;">
            ${schedule
              .find((day) => day.key === state.programDay)
              .items.map(
                (item) => `
              <article class="schedule-item">
                <div class="schedule-time">${item.time}</div>
                <div>
                  <h3 style="margin: 0;">${localizeValue(item.title)}</h3>
                  <p style="margin: 8px 0 0; color: var(--muted);">${localizeValue(item.desc)}</p>
                </div>
              </article>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `
      : `
    <section id="program" class="block">
      <div class="container">
        ${header}
        <div class="accordion reveal">
          ${schedule
            .map(
              (day, index) => `
            <div class="accordion-item ${state.openAccordion === index ? "open" : ""}">
              <button class="accordion-trigger" type="button" data-action="toggle-accordion" data-index="${index}" aria-expanded="${state.openAccordion === index}">
                <span>
                  <span class="small">${localizeValue(day.dayLabel)}</span>
                  <strong style="font-size: 1.5rem;">${localizeValue(day.title)}</strong>
                  <div style="font-size:0.95rem; color: var(--muted); margin-top:6px;">${localizeValue(day.subtitle)}</div>
                </span>
                <span>${state.openAccordion === index ? t("common.collapse") : t("common.expand")}</span>
              </button>
              <div class="accordion-body">
                <div class="accordion-body-inner">
                  ${day.items
                    .map(
                      (item) => `
                    <article class="schedule-item">
                      <div class="schedule-time">${item.time}</div>
                      <div>
                        <h3 style="margin: 0;">${localizeValue(item.title)}</h3>
                        <p style="margin: 8px 0 0; color: var(--muted);">${localizeValue(item.desc)}</p>
                      </div>
                    </article>
                  `,
                    )
                    .join("")}
                </div>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;

  renderSection(ids.program, html);
}

/* ============================================================
   SPEAKERS
   ============================================================ */
function renderSpeakers() {
  const variant = state.variants.speakers;
  if (variant === "hide") return renderSection(ids.speakers, "", true);
  const copy = t("speakers");

  renderSection(
    ids.speakers,
    `
    <section id="speakers" class="block surface-dark">
      <div class="container">
        ${sectionHeader({ eyebrow: copy.eyebrow, title: copy.title, text: copy.text })}
        <div class="speaker-grid ${variant}">
          ${speakers
            .map(
              (speaker, index) => `
            <article class="speaker-card reveal" style="transition-delay:${index * 70}ms;">
              <!-- PLACE YOUR IMAGE HERE: use a real speaker image path in background-image if available -->
              <div class="speaker-image" style="background-image:url('${svgPortrait(speaker.name, speaker.role, speaker.colors)}'); background-size:cover; background-position:center;"></div>
              <h3 class="speaker-name">${speaker.name}</h3>
              <p class="speaker-role">${speaker.role}</p>
              <p class="speaker-topic">${speaker.topic}</p>
              <p class="speaker-bio">${speaker.bio}</p>
            </article>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `,
  );
}

/* ============================================================
   GALLERY
   ============================================================ */
function renderGallery() {
  const variant = state.variants.gallery;
  if (variant === "hide") return renderSection(ids.gallery, "", true);
  const copy = t("gallery");
  const categories = [
    copy.all,
    ...new Set(galleryItems.map((item) => item.category)),
  ];
  const activeCategory =
    state.galleryFilter === "All" ? copy.all : state.galleryFilter;
  const items =
    activeCategory === copy.all || state.galleryFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === state.galleryFilter);

  renderSection(
    ids.gallery,
    `
    <section id="gallery" class="block surface-soft">
      <div class="container">
        <div class="gallery-toolbar reveal">
          ${sectionHeader({ eyebrow: copy.eyebrow, title: copy.title, text: copy.text })}
          <div class="gallery-filters">
            ${categories
              .map((category) => {
                const rawValue = category === copy.all ? "All" : category;
                return `<button class="gallery-filter ${activeCategory === category ? "active" : ""}" type="button" data-action="gallery-filter" data-value="${rawValue}">${category}</button>`;
              })
              .join("")}
          </div>
        </div>
        <div class="gallery-grid ${variant}">
          ${items
            .map(
              (item, index) => `
            <button class="gallery-card reveal" type="button" data-action="open-lightbox" data-id="${item.id}" style="transition-delay:${index * 40}ms;">
              <img src="${item.image}" alt="${item.title}" />
              <span class="gallery-overlay">
                <small>${item.category}</small>
                <strong>${item.title}</strong>
              </span>
            </button>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `,
  );
}

/* ============================================================
   VIDEOS
   ============================================================ */
function renderVideos() {
  const variant = state.variants.videos;
  if (variant === "hide") return renderSection(ids.videos, "", true);
  const copy = t("videos");
  const active = videos[state.activeVideo];

  renderSection(
    ids.videos,
    `
    <section id="videos" class="block">
      <div class="container">
        ${sectionHeader({ eyebrow: copy.eyebrow, title: copy.title, text: copy.text })}
        <div class="video-layout ${variant}">
          <div class="video-player reveal">
            <div class="video-stage">
              ${
                state.videoPlaying
                  ? `
                <iframe src="${active.embed}&autoplay=1" title="${active.title}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
              `
                  : `
                <img src="${active.thumb}" alt="${active.title}" />
                <div class="video-play-overlay">
                  <button class="play-button" type="button" data-action="play-video">▶ ${t("common.playVideo")}</button>
                </div>
              `
              }
            </div>
            <div class="video-player-body">
              <h3 style="margin: 0;">${active.title}</h3>
              <p style="margin: 8px 0 0;">${t("common.duration")}: ${active.duration}</p>
            </div>
          </div>
          <div class="video-list">
            ${videos
              .map(
                (video, index) => `
              <button class="video-thumb reveal ${state.activeVideo === index ? "active" : ""}" type="button" data-action="select-video" data-index="${index}">
                <span class="video-thumb-media">
                  <img src="${video.thumb}" alt="${video.title}" />
                  <span class="video-duration">${video.duration}</span>
                </span>
                <span class="video-thumb-content">
                  <h3>${video.title}</h3>
                  <p>${copy.text}</p>
                </span>
              </button>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `,
  );
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
function renderTestimonials() {
  const variant = state.variants.testimonials;
  if (variant === "hide") return renderSection(ids.testimonials, "", true);
  const copy = t("testimonials");
  const active = testimonials[state.testimonialIndex];

  renderSection(
    ids.testimonials,
    `
    <section id="testimonials" class="block ${variant === "v2" ? "countdown v1" : "surface-dark"}" style="padding-top: 92px; padding-bottom: 92px;">
      <div class="container testimonial-shell">
        ${sectionHeader({ eyebrow: copy.eyebrow, title: copy.title, text: copy.text })}
        <div class="testimonial-panel reveal">
          <blockquote class="testimonial-quote">“${active.quote}”</blockquote>
          <div class="testimonial-meta">
            <strong>${active.name}</strong><br />
            <span>${active.title}</span>
          </div>
          <div class="testimonial-controls">
            <div class="dots">
              ${testimonials
                .map(
                  (_, index) => `
                <button class="dot ${index === state.testimonialIndex ? "active" : ""}" type="button" data-action="testimonial-dot" data-index="${index}" aria-label="Show testimonial ${index + 1}"></button>
              `,
                )
                .join("")}
            </div>
            <div class="controls">
              <button class="control-icon" type="button" data-action="testimonial-prev" aria-label="Previous testimonial">←</button>
              <button class="control-icon" type="button" data-action="testimonial-next" aria-label="Next testimonial">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  );
}

/* ============================================================
   PARTNERS
   ============================================================ */
function renderPartners() {
  const variant = state.variants.partners;
  if (variant === "hide") return renderSection(ids.partners, "", true);
  const copy = t("partners");
  renderSection(
    ids.partners,
    `
    <section id="partners" class="block">
      <div class="container">
        ${sectionHeader({ eyebrow: copy.eyebrow, title: copy.title, text: copy.text, centered: true })}
        <div class="partners-grid ${variant}">
          ${partners
            .map(
              (partner, index) => `
            <!-- PLACE YOUR LINK HERE: update href below to the real partner page -->
            <a href="${partner.url}" class="partner-card ${variant === "v2" ? "is-gradient" : ""} reveal" style="transition-delay:${index * 40}ms;">
              <div class="partner-icon">${partner.name
                .split(" ")
                .map((w) => w[0])
                .slice(0, 2)
                .join("")}</div>
              <h3 style="margin: 18px 0 0; font-size: 1.1rem;">${partner.name}</h3>
            </a>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `,
  );
}

/* ============================================================
   EXHIBITORS
   ============================================================ */
function renderExhibitors() {
  const variant = state.variants.exhibitors;
  if (variant === "hide") return renderSection(ids.exhibitors, "", true);
  const copy = t("exhibitors");
  renderSection(
    ids.exhibitors,
    `
    <section id="exhibitors" class="block surface-soft">
      <div class="container">
        ${sectionHeader({ eyebrow: copy.eyebrow, title: copy.title, text: copy.text })}
        <div class="exhibitor-grid ${variant}">
          ${exhibitors
            .map(
              (item, index) => `
            <!-- PLACE YOUR LINK HERE: update href below to the exhibitor page -->
            <a href="${item.url}" class="exhibitor-card reveal" style="transition-delay:${index * 50}ms;">
              <div class="exhibitor-topbar"></div>
              <div class="exhibitor-body">
                <span class="exhibitor-tag">${item.category}</span>
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <span class="exhibitor-link">${t("common.openProfile")} →</span>
              </div>
            </a>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `,
  );
}

/* ============================================================
   HOTELS
   ============================================================ */
function renderHotels() {
  const variant = state.variants.hotels;
  if (variant === "hide") return renderSection(ids.hotels, "", true);
  const copy = t("hotels");
  const areas = ["All", ...new Set(hotels.map((h) => h.area))];
  const types = ["All", ...new Set(hotels.map((h) => h.tag))];
  const filtered = hotels.filter(
    (h) =>
      (state.hotelArea === "All" || h.area === state.hotelArea) &&
      (state.hotelType === "All" || h.tag === state.hotelType),
  );

  renderSection(
    ids.hotels,
    `
    <section id="hotels" class="block">
      <div class="container">
        <div class="hotel-toolbar reveal">
          ${sectionHeader({ eyebrow: copy.eyebrow, title: copy.title, text: copy.text })}
          <div class="hotel-filters">
            <strong style="color: var(--muted);">${t("common.filters")}</strong>
            <select data-action="hotel-area" aria-label="Filter hotels by area">
              ${areas.map((area) => `<option value="${area}" ${state.hotelArea === area ? "selected" : ""}>${area}</option>`).join("")}
            </select>
            <select data-action="hotel-type" aria-label="Filter hotels by type">
              ${types.map((type) => `<option value="${type}" ${state.hotelType === type ? "selected" : ""}>${type}</option>`).join("")}
            </select>
          </div>
        </div>
        <div class="hotels-grid ${variant}">
          ${filtered
            .map(
              (hotel, index) => `
            <article class="hotel-card reveal" style="transition-delay:${index * 50}ms;">
              <div class="hotel-card-header">
                <div>
                  <h3 style="margin: 0;">${hotel.name}</h3>
                  <p style="margin: 8px 0 0; color: var(--muted);">📍 ${hotel.area}</p>
                </div>
                <span class="hotel-badge">${hotel.tag}</span>
              </div>
              <div class="star-row" aria-label="${hotel.stars} star hotel">${"★".repeat(hotel.stars)}</div>
              <p>${copy.text}</p>
              <div class="hotel-foot">
                <div>
                  <div class="hotel-price-label">${t("common.from")}</div>
                  <div class="hotel-price">$${hotel.price}</div>
                </div>
                <!-- PLACE YOUR LINK HERE: update href below with the actual booking URL -->
                <a href="${hotel.link}" class="hotel-book">${t("common.bookNow")}</a>
              </div>
            </article>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `,
  );
}

/* ============================================================
   TICKETS
   ============================================================ */
function renderTickets() {
  const variant = state.variants.tickets;
  if (variant === "hide") return renderSection(ids.tickets, "", true);
  const copy = t("tickets");
  renderSection(
    ids.tickets,
    `
    <section id="tickets" class="block ${variant === "v2" ? "surface-dark" : "surface-soft"}">
      <div class="container">
        ${sectionHeader({ eyebrow: copy.eyebrow, title: copy.title, text: copy.text, centered: true })}
        <div class="pricing-grid ${variant}">
          ${ticketTiers
            .map(
              (tier, index) => `
            <article class="pricing-card ${variant === "v2" ? "dark" : ""} ${tier.featured ? "featured" : ""} reveal" style="transition-delay:${index * 70}ms;">
              ${tier.featured ? `<span class="popular-badge">${t("common.popular")}</span>` : ""}
              <div class="pricing-tier">${tier.name}</div>
              <div class="pricing-price">${tier.price}</div>
              <ul class="pricing-features">
                ${tier.features.map((feature) => `<li><span class="icon-dot"></span><span>${feature}</span></li>`).join("")}
              </ul>
              <!-- PLACE YOUR LINK HERE or replace with a registration form trigger -->
              <button class="pricing-button" type="button">${tier.cta}</button>
            </article>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `,
  );
}

/* ============================================================
   BLOG / UPDATES
   ============================================================ */
function renderBlog() {
  const variant = state.variants.blog;
  if (variant === "hide") return renderSection(ids.blog, "", true);
  const copy = t("blog");
  renderSection(
    ids.blog,
    `
    <section id="blog" class="block">
      <div class="container">
        ${sectionHeader({ eyebrow: copy.eyebrow, title: copy.title, text: copy.text })}
        <div class="blog-grid ${variant}">
          ${blogPosts
            .map(
              (post) => `
            <article class="blog-card">
              <div class="blog-topline">
                <span class="blog-tag">${post.tag}</span>
                <span>${post.date}</span>
              </div>
              <div class="blog-icon">✎</div>
              <h3>${post.title}</h3>
              <p>${post.excerpt}</p>
              <!-- PLACE YOUR LINK HERE: update href below to the real article page -->
              <a href="${post.url}" class="blog-link" target="_blank" rel="noreferrer">${t("common.readPreview")} →</a>
            </article>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `,
  );
}

/* ============================================================
   EVENTS / HANDLERS
   ============================================================ */
function attachGlobalHandlers() {
  document.addEventListener("click", handleClick);
  document.addEventListener("change", handleChange);
  document
    .getElementById("lightboxClose")
    .addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", (event) => {
    if (event.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
  window.addEventListener("scroll", updateBackToTopVisibility, {
    passive: true,
  });
  document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function handleClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  switch (action) {
    case "variant":
      state.variants[target.dataset.section] = target.dataset.value;
      renderVariantControls();
      renderAll();
      break;
    case "program-day":
      state.programDay = target.dataset.day;
      renderProgram();
      initRevealObserver();
      break;
    case "toggle-accordion":
      const index = Number(target.dataset.index);
      state.openAccordion = state.openAccordion === index ? -1 : index;
      renderProgram();
      initRevealObserver();
      break;
    case "gallery-filter":
      state.galleryFilter = target.dataset.value;
      renderGallery();
      initRevealObserver();
      break;
    case "open-lightbox":
      const item = galleryItems.find(
        (photo) => String(photo.id) === target.dataset.id,
      );
      if (item) openLightbox(item);
      break;
    case "select-video":
      state.activeVideo = Number(target.dataset.index);
      state.videoPlaying = false;
      renderVideos();
      initRevealObserver();
      break;
    case "play-video":
      state.videoPlaying = true;
      renderVideos();
      initRevealObserver();
      break;
    case "testimonial-prev":
      state.testimonialIndex =
        (state.testimonialIndex - 1 + testimonials.length) %
        testimonials.length;
      renderTestimonials();
      initRevealObserver();
      resetTestimonials();
      break;
    case "testimonial-next":
      state.testimonialIndex =
        (state.testimonialIndex + 1) % testimonials.length;
      renderTestimonials();
      initRevealObserver();
      resetTestimonials();
      break;
    case "testimonial-dot":
      state.testimonialIndex = Number(target.dataset.index);
      renderTestimonials();
      initRevealObserver();
      resetTestimonials();
      break;
  }
}

function handleChange(event) {
  const target = event.target;
  const action = target.dataset.action;
  if (action === "hotel-area") {
    state.hotelArea = target.value;
    renderHotels();
    initRevealObserver();
  } else if (action === "hotel-type") {
    state.hotelType = target.value;
    renderHotels();
    initRevealObserver();
  }
}

/* ============================================================
   COUNTDOWN
   ============================================================ */
function getTimeLeft() {
  const diff = Math.max(0, EVENT_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function updateCountdown() {
  const values = getTimeLeft();
  document.querySelectorAll("[data-count]").forEach((node) => {
    const key = node.dataset.count;
    if (key in values) node.textContent = String(values[key]).padStart(2, "0");
  });
}

function startCountdown() {
  window.clearInterval(countdownInterval);
  countdownInterval = window.setInterval(updateCountdown, 1000);
}

/* ============================================================
   TESTIMONIALS AUTO-ROTATE
   ============================================================ */
function startTestimonials() {
  window.clearInterval(testimonialInterval);
  testimonialInterval = window.setInterval(() => {
    state.testimonialIndex = (state.testimonialIndex + 1) % testimonials.length;
    renderTestimonials();
    initRevealObserver();
  }, 4500);
}

function resetTestimonials() {
  startTestimonials();
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
function openLightbox(item) {
  const overlay = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImage");
  const caption = document.getElementById("lightboxCaption");
  img.src = item.image;
  img.alt = item.title;
  caption.textContent = `${item.category} — ${item.title}`;
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const overlay = document.getElementById("lightbox");
  if (!overlay) return;
  overlay.hidden = true;
  document.body.style.overflow = "";
}

/* ============================================================
   REVEAL ON SCROLL + BACK TO TOP VISIBILITY
   ============================================================ */
function initRevealObserver() {
  const revealNodes = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("revealed"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );
  revealNodes.forEach((node) => observer.observe(node));
}

function updateBackToTopVisibility() {
  const button = document.getElementById("backToTop");
  if (!button) return;
  button.classList.toggle("show", window.scrollY > 420);
}

/* ============================================================
   SVG PLACEHOLDER GENERATORS
   - Safe fallback until real assets are available.
   ============================================================ */
function svgPhoto(title, colors = ["#2563eb", "#22d3ee"]) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${colors[0]}"/>
          <stop offset="100%" stop-color="${colors[1]}"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#g)"/>
      <circle cx="1270" cy="180" r="210" fill="rgba(255,255,255,0.10)"/>
      <circle cx="260" cy="780" r="180" fill="rgba(255,255,255,0.08)"/>
      <g opacity="0.45" stroke="rgba(255,255,255,0.25)" fill="none">
        <path d="M80 710 C320 520, 520 760, 800 540 C1040 348, 1240 610, 1520 360" stroke-width="10"/>
        <path d="M100 860 C380 680, 560 920, 840 700 C1080 510, 1300 760, 1540 560" stroke-width="8"/>
      </g>
      <rect x="86" y="86" width="1428" height="828" rx="42" fill="none" stroke="rgba(255,255,255,0.24)" stroke-width="2"/>
      <text x="110" y="820" fill="white" opacity="0.96" font-family="Inter,Arial,sans-serif" font-size="92" font-weight="800">${escapeXml(title)}</text>
      <text x="112" y="892" fill="rgba(255,255,255,0.72)" font-family="Inter,Arial,sans-serif" font-size="32" font-weight="600" letter-spacing="8">CoReViP 2027</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function svgPortrait(name, role, colors = ["#2563eb", "#22d3ee"]) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1080" viewBox="0 0 900 1080">
      <defs>
        <linearGradient id="gp" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${colors[0]}"/>
          <stop offset="100%" stop-color="${colors[1]}"/>
        </linearGradient>
      </defs>
      <rect width="900" height="1080" fill="url(#gp)"/>
      <circle cx="730" cy="180" r="180" fill="rgba(255,255,255,0.14)"/>
      <circle cx="170" cy="920" r="160" fill="rgba(255,255,255,0.12)"/>
      <circle cx="450" cy="370" r="170" fill="rgba(255,255,255,0.92)"/>
      <path d="M230 880 C250 670, 650 670, 670 880 Z" fill="rgba(255,255,255,0.90)"/>
      <text x="450" y="414" text-anchor="middle" fill="${colors[0]}" font-family="Inter,Arial,sans-serif" font-size="112" font-weight="900">${escapeXml(initials)}</text>
      <text x="84" y="970" fill="white" font-family="Inter,Arial,sans-serif" font-size="54" font-weight="800">${escapeXml(name)}</text>
      <text x="84" y="1020" fill="rgba(255,255,255,0.80)" font-family="Inter,Arial,sans-serif" font-size="24" font-weight="700" letter-spacing="3">${escapeXml(role).toUpperCase()}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
