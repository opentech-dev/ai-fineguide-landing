/**
 * Answer-first definitions and FAQs for the eight existing product pages on fineguide.ai, in English, Romanian and
 * Russian. Rendered visibly under each page and as FAQPage JSON-LD. Claims checked against the code on 2026-11-25.
 */
export type ProductPage = 'crm' | 'ai-assistants' | 'voice-ai' | 'voice-qa' | 'automations' | 'messages' | 'campaigns' | 'workspace';
export interface PageFaq { heading: string; definitionHeading: string; definition: string; items: { q: string; a: string }[] }

export const PRODUCT_FAQ: Record<ProductPage, { en: PageFaq; ro: PageFaq; ru: PageFaq }> = {
  // ------------------------------------------------------------------ CRM
  crm: {
    en: {
      heading: 'AI CRM: common questions',
      definitionHeading: 'What is an AI CRM?',
      definition:
        'An AI CRM is customer relationship management software in which AI assistants take on part of the work: they talk to customers, recognise who they are and keep the record up to date. Fineguide’s AI CRM keeps contacts, companies, deals and tasks on one customer record shared with its assistants on the website chat, WhatsApp, Telegram, Instagram, Messenger, email and phone calls. On paid plans the assistants write the details they collect straight into CRM deals, and working in the CRM itself uses no credits.',
      items: [
        {
          q: 'Is there a free CRM for small business?',
          a: 'Yes. Fineguide’s free plan includes the CRM for you and one teammate, with no card needed, and working with contacts, deals and tasks uses no credits. Paid plans add seats, monthly credits, AI lead capture and workflows.',
        },
        {
          q: 'Can a CRM connect to WhatsApp and Telegram?',
          a: 'Yes. When someone writes to your business on WhatsApp, Telegram, Instagram or Messenger, Fineguide makes them a contact and stores that handle next to their phone numbers and email. Their next message, on any channel, lands on the same record.',
        },
        {
          q: 'How does lead and pipeline management work in Fineguide?',
          a: 'Deals sit on a board or a table by stage, each with a value, currency, probability, expected close date and owner. The forecast weights every open deal by its stage, closing a deal asks for a win or loss reason, and a deal left too long in one stage is flagged on the board.',
        },
        {
          q: 'How do I import contacts from Excel into a CRM?',
          a: 'Upload an XLSX, XLS, CSV or TSV file, match its columns to Fineguide fields, custom fields included, and the import runs in the background. Selected contacts export back to CSV with the fields in the order you choose.',
        },
        {
          q: 'Does the CRM sync with Google Calendar?',
          a: 'Yes, both ways. A CRM task appears in Google Calendar, and a change made in the calendar comes back to the task.',
        },
        {
          q: 'Does Fineguide CRM have an API?',
          a: 'Yes. A REST API with your own API keys covers contacts, companies, deals, tasks, tags, comments and custom fields, and external ids let a sync from your shop or ERP run again without making copies. AI apps that support MCP can also connect to your workspace through the Fineguide MCP server.',
        },
      ],
    },
    ro: {
      heading: 'CRM cu AI: întrebări frecvente',
      definitionHeading: 'Ce este un CRM cu AI?',
      definition:
        'Un CRM cu AI este un program de gestionare a relațiilor cu clienții în care asistenții AI preiau o parte din muncă: vorbesc cu clienții, îi recunosc și țin fișa la zi. CRM-ul cu AI de la Fineguide păstrează contactele, companiile, dealurile și sarcinile pe o singură fișă de client, comună cu asistenții din chatul de pe site, WhatsApp, Telegram, Instagram, Messenger, email și apeluri telefonice. Pe planurile plătite, asistenții scriu direct în dealurile din CRM datele pe care le colectează, iar lucrul în CRM nu consumă credite.',
      items: [
        {
          q: 'Există un CRM gratuit pentru firme mici?',
          a: 'Da. Planul gratuit Fineguide include CRM-ul pentru tine și încă un coleg, fără card, iar lucrul cu contacte, dealuri și sarcini nu consumă credite. Planurile plătite adaugă locuri în echipă, credite lunare, colectarea lead-urilor de către AI și fluxuri de lucru.',
        },
        {
          q: 'Se poate lega CRM-ul de WhatsApp și Telegram?',
          a: 'Da. Când cineva îi scrie firmei tale pe WhatsApp, Telegram, Instagram sau Messenger, Fineguide îl adaugă ca contact și îi păstrează contul de pe acel canal lângă numerele de telefon și email. Următorul lui mesaj, pe orice canal, ajunge pe aceeași fișă.',
        },
        {
          q: 'Cum funcționează gestionarea lead-urilor și pipeline-ul de vânzări?',
          a: 'Dealurile stau pe o tablă sau într-un tabel, pe etape, fiecare cu valoare, monedă, probabilitate, dată estimată de închidere și responsabil. Prognoza ponderează fiecare deal deschis după etapa lui, la închidere se cere motivul câștigului sau al pierderii, iar un deal care stă prea mult într-o etapă este semnalat pe tablă.',
        },
        {
          q: 'Cum import contactele din Excel în CRM?',
          a: 'Încarci un fișier XLSX, XLS, CSV sau TSV, potrivești coloanele cu câmpurile Fineguide, inclusiv cele personalizate, iar importul rulează în fundal. Contactele selectate se exportă înapoi în CSV, cu câmpurile în ordinea aleasă de tine.',
        },
        {
          q: 'Se sincronizează CRM-ul cu Google Calendar?',
          a: 'Da, în ambele sensuri. O sarcină din CRM apare în Google Calendar, iar o modificare făcută în calendar revine în sarcină.',
        },
        {
          q: 'Are CRM-ul Fineguide un API?',
          a: 'Da. Un API REST cu cheile tale acoperă contacte, companii, dealuri, sarcini, etichete, comentarii și câmpuri personalizate, iar ID-urile externe permit ca sincronizarea din magazinul sau ERP-ul tău să ruleze din nou fără dubluri. Aplicațiile AI care suportă MCP se pot conecta și ele la spațiul tău prin serverul MCP Fineguide.',
        },
      ],
    },
    ru: {
      heading: 'CRM с ИИ: частые вопросы',
      definitionHeading: 'Что такое AI CRM?',
      definition:
        'AI CRM — это система управления клиентами, в которой часть работы берут на себя ИИ-ассистенты: они общаются с клиентами, узнают их и сами поддерживают карточку в актуальном виде. CRM с ИИ от Fineguide хранит контакты, компании, сделки и задачи в одной карточке клиента, общей с ассистентами в чате на сайте, WhatsApp, Telegram, Instagram, Messenger, почте и телефонных звонках. На платных тарифах ассистенты сами записывают собранные данные в сделки CRM, а работа в самой CRM не расходует кредиты.',
      items: [
        {
          q: 'Есть ли бесплатная CRM для малого бизнеса?',
          a: 'Да. Бесплатный тариф Fineguide включает CRM для вас и ещё одного сотрудника, без привязки карты, а работа с контактами, сделками и задачами не расходует кредиты. Платные тарифы добавляют места в команде, ежемесячные кредиты, сбор лидов ИИ и автоматизации.',
        },
        {
          q: 'Как подключить WhatsApp и Telegram к CRM?',
          a: 'Подключите канал к ассистенту, и каждый, кто напишет вашей компании в WhatsApp, Telegram, Instagram или Messenger, станет контактом, а его аккаунт в этом мессенджере сохранится рядом с телефонами и почтой. Следующее сообщение, из любого канала, попадёт в ту же карточку.',
        },
        {
          q: 'Как устроены воронка продаж и управление лидами?',
          a: 'Сделки видны на доске или в таблице по этапам, у каждой есть сумма, валюта, вероятность, ожидаемая дата закрытия и ответственный. Прогноз взвешивает открытые сделки по этапу, при закрытии CRM спрашивает причину выигрыша или проигрыша, а сделка, которая слишком долго стоит на одном этапе, помечается на доске.',
        },
        {
          q: 'Как загрузить контакты из Excel в CRM?',
          a: 'Загрузите файл XLSX, XLS, CSV или TSV, сопоставьте колонки с полями Fineguide, включая свои поля, и импорт пройдёт в фоне. Выбранные контакты выгружаются обратно в CSV с полями в нужном вам порядке.',
        },
        {
          q: 'Синхронизируется ли CRM с Google Календарём?',
          a: 'Да, в обе стороны. Задача из CRM появляется в Google Календаре, а изменение в календаре возвращается в задачу.',
        },
        {
          q: 'Есть ли у CRM Fineguide API?',
          a: 'Да. REST API с вашими ключами охватывает контакты, компании, сделки, задачи, теги, комментарии и свои поля, а внешние ID позволяют повторять синхронизацию с магазином или ERP без дублей. ИИ-приложения с поддержкой MCP подключаются к вашему пространству через MCP-сервер Fineguide.',
        },
      ],
    },
  },

  // ------------------------------------------------------------------ AI assistants
  'ai-assistants': {
    en: {
      heading: 'AI chatbots and assistants: common questions',
      definitionHeading: 'What is an AI customer service chatbot?',
      definition:
        'An AI customer service chatbot is software that answers customers in chat on its own, from the information a business gives it, and passes the conversation to a person when needed. Fineguide’s AI assistants answer from your own web pages, documents and PDFs on the website chat widget, WhatsApp, Telegram (a bot or a user account), Instagram, Messenger, Slack, Discord and JivoChat, and inside amoCRM and Kommo. A standard reply costs 1 credit, and the free plan starts you with 200.',
      items: [
        {
          q: 'How do I add an AI chatbot to my website?',
          a: 'Create an assistant, give it your web pages or documents to learn from, and paste the chat widget code into your site. The widget’s interface comes in 24 languages and has a voice mode for visitors who would rather talk.',
        },
        {
          q: 'Can I train a chatbot on my own website and documents?',
          a: 'Yes. Add URLs, upload documents or PDFs, and the assistant answers from them. You can also limit it to only what it has learned from you, so it does not answer from general knowledge.',
        },
        {
          q: 'Which channels can a Fineguide AI assistant answer on?',
          a: 'The website chat widget, WhatsApp, Telegram (as a bot or from a Telegram user account), Instagram, Messenger, Slack, Discord and JivoChat, plus conversations inside amoCRM and Kommo. The same assistant also takes phone calls through AI Telephony.',
        },
        {
          q: 'Can a chatbot hand the conversation over to a live agent?',
          a: 'Yes. The assistant hands over when the customer asks for a person or a rule you set applies, and the conversation waits in your team’s queue with its full history. In JivoChat it passes the chat to your Jivo operators.',
        },
        {
          q: 'Can an AI chatbot qualify leads and save them in the CRM?',
          a: 'Yes, on paid plans. You define the fields to collect, such as name, budget or intent, and the assistant fills them in during the conversation and creates or updates the lead in the CRM.',
        },
        {
          q: 'Can the assistant check orders or book appointments in my own system?',
          a: 'Yes, through actions: an HTTP request built from a pasted cURL command or, on paid plans, an n8n workflow imported as an action. The assistant calls it when the customer’s request needs it and answers with what your system returns.',
        },
      ],
    },
    ro: {
      heading: 'Chatboți și asistenți AI: întrebări frecvente',
      definitionHeading: 'Ce este un chatbot AI pentru site?',
      definition:
        'Un chatbot AI pentru site este un program care răspunde singur clienților în chat, din informațiile pe care i le dă firma, și predă conversația unui om când e nevoie. Asistenții AI Fineguide răspund din paginile, documentele și PDF-urile tale în widgetul de chat de pe site, pe WhatsApp, Telegram (bot sau cont de utilizator), Instagram, Messenger, Slack, Discord și JivoChat, precum și în amoCRM și Kommo. Un răspuns standard costă 1 credit, iar planul gratuit pornește cu 200.',
      items: [
        {
          q: 'Cum adaug un chatbot AI pe site?',
          a: 'Creezi un asistent, îi dai paginile sau documentele din care să învețe și lipești codul widgetului de chat în site. Interfața widgetului este disponibilă în 24 de limbi și are un mod vocal pentru vizitatorii care preferă să vorbească.',
        },
        {
          q: 'Pot antrena un chatbot pe site-ul și documentele mele?',
          a: 'Da. Adaugi linkuri, încarci documente sau PDF-uri, iar asistentul răspunde din ele. Îl poți limita doar la ce a învățat de la tine, ca să nu răspundă din cunoștințe generale.',
        },
        {
          q: 'Pe ce canale răspunde un asistent virtual Fineguide?',
          a: 'În widgetul de chat de pe site, pe WhatsApp, Telegram (ca bot sau de pe un cont de utilizator Telegram), Instagram, Messenger, Slack, Discord și JivoChat, plus conversațiile din amoCRM și Kommo. Același asistent preia și apeluri telefonice prin Telefonie AI.',
        },
        {
          q: 'Poate chatbotul să predea conversația unui operator?',
          a: 'Da. Asistentul predă conversația când clientul cere un om sau când se aplică o regulă stabilită de tine, iar conversația așteaptă în coada echipei, cu tot istoricul. În JivoChat, predă chatul operatorilor tăi Jivo.',
        },
        {
          q: 'Poate un chatbot AI să califice lead-uri și să le salveze în CRM?',
          a: 'Da, pe planurile plătite. Definești câmpurile de colectat, cum ar fi numele, bugetul sau intenția, iar asistentul le completează în timpul conversației și creează sau actualizează lead-ul în CRM.',
        },
        {
          q: 'Poate asistentul să verifice comenzi sau să facă programări în sistemul meu?',
          a: 'Da, prin acțiuni: o cerere HTTP construită dintr-o comandă cURL lipită sau, pe planurile plătite, un flux n8n importat ca acțiune. Asistentul o apelează când cererea clientului o cere și răspunde cu ce a întors sistemul tău.',
        },
      ],
    },
    ru: {
      heading: 'ИИ чат-боты и ассистенты: частые вопросы',
      definitionHeading: 'Что такое ИИ чат-бот для сайта?',
      definition:
        'ИИ чат-бот для сайта — это программа, которая сама отвечает клиентам в чате по информации, которую дала компания, и передаёт диалог оператору, когда нужно. ИИ-ассистенты Fineguide отвечают по вашим страницам, документам и PDF в чат-виджете на сайте, в WhatsApp, Telegram (бот или личный аккаунт), Instagram, Messenger, Slack, Discord и JivoChat, а также внутри amoCRM и Kommo. Обычный ответ стоит 1 кредит, а бесплатный тариф даёт 200 кредитов на старт.',
      items: [
        {
          q: 'Как добавить чат-бот на сайт?',
          a: 'Создайте ассистента, дайте ему страницы или документы для обучения и вставьте код чат-виджета на сайт. Интерфейс виджета доступен на 24 языках, а для тех, кто предпочитает говорить, есть голосовой режим.',
        },
        {
          q: 'Можно ли обучить чат-бот на своём сайте и документах?',
          a: 'Да. Добавьте ссылки, загрузите документы или PDF, и ассистент будет отвечать по ним. Его можно ограничить только тем, чему он научился у вас, чтобы он не отвечал из общих знаний.',
        },
        {
          q: 'В каких каналах отвечает ИИ-ассистент Fineguide?',
          a: 'В чат-виджете на сайте, WhatsApp, Telegram (как бот или с личного аккаунта Telegram), Instagram, Messenger, Slack, Discord и JivoChat, а также в диалогах внутри amoCRM и Kommo. Тот же ассистент принимает и телефонные звонки через ИИ-телефонию.',
        },
        {
          q: 'Может ли чат-бот передать диалог оператору?',
          a: 'Да. Ассистент передаёт диалог, когда клиент просит живого человека или срабатывает ваше правило, и разговор ждёт в очереди команды со всей историей. В JivoChat он передаёт чат вашим операторам Jivo.',
        },
        {
          q: 'Может ли чат-бот квалифицировать лиды и сохранять их в CRM?',
          a: 'Да, на платных тарифах. Вы задаёте поля для сбора, например имя, бюджет или цель обращения, ассистент заполняет их по ходу диалога и создаёт или обновляет лид в CRM.',
        },
        {
          q: 'Может ли ассистент проверить заказ или записать клиента в моей системе?',
          a: 'Да, через действия: HTTP-запрос, собранный из вставленной команды cURL, или, на платных тарифах, сценарий n8n, импортированный как действие. Ассистент вызывает его, когда это нужно по запросу клиента, и отвечает тем, что вернула ваша система.',
        },
      ],
    },
  },

  // ------------------------------------------------------------------ AI Telephony
  'voice-ai': {
    en: {
      heading: 'AI voice agents: common questions',
      definitionHeading: 'What is an AI voice agent?',
      definition:
        'An AI voice agent is software that answers and makes phone calls, understands what the caller says and replies by voice in real time. Fineguide’s AI Telephony puts your AI assistants on your own phone numbers through Twilio, Asterisk, FreePBX, 3CX or any SIP account, speaks 14 languages and saves every call as a transcript. Calls cost 10 credits per answered minute, with a one-minute minimum.',
      items: [
        {
          q: 'Can an AI answer my business phone calls?',
          a: 'Yes. Connect your carrier or PBX, give a number to an assistant, and it answers with your knowledge base, web search and the actions it already uses in chat. Outside business hours it can let the call ring out, forward it, or play an after-hours message and take a callback request.',
        },
        {
          q: 'Which languages does the AI phone agent speak?',
          a: 'Fourteen: English, Romanian, Russian, Spanish, French, German, Italian, Portuguese, Polish, Turkish, Arabic, Japanese, Korean and Chinese. Give one assistant several and it answers in the language the caller is speaking; on paid plans you also choose its voice and hear it first.',
        },
        {
          q: 'Can the AI receptionist transfer a call to a person?',
          a: 'Yes. A caller who asks for a person is transferred to your call-centre number, only within its hours if you set them. Otherwise the request is saved as a callback task in the CRM with the caller’s number and what they wanted.',
        },
        {
          q: 'Does the AI recognise returning callers?',
          a: 'Yes, when greeting by name is on. If the caller’s number is saved in your contacts, the assistant welcomes them by their first name.',
        },
        {
          q: 'Which phone systems does the AI voice agent work with?',
          a: 'Twilio, Asterisk, FreePBX, 3CX and any provider that gives you a standard SIP account. Your numbers and caller ID stay with your own carrier.',
        },
        {
          q: 'How much does an AI phone call cost?',
          a: '10 credits a minute, counted from the moment the call is answered and never while it rings, with a one-minute minimum. A call starts only when your balance covers its first minute.',
        },
      ],
    },
    ro: {
      heading: 'Agenți vocali AI: întrebări frecvente',
      definitionHeading: 'Ce este un agent vocal AI?',
      definition:
        'Un agent vocal AI este un program care răspunde la apeluri și sună singur, înțelege ce spune interlocutorul și îi răspunde cu voce, în timp real. Telefonia AI Fineguide pune asistenții tăi AI pe propriile tale numere, prin Twilio, Asterisk, FreePBX, 3CX sau orice cont SIP, vorbește 14 limbi și salvează fiecare apel ca transcriere. Apelurile costă 10 credite pe minut cu răspuns, cu minimum un minut.',
      items: [
        {
          q: 'Poate un robot telefonic AI să răspundă la apelurile firmei?',
          a: 'Da. Conectezi operatorul sau centrala telefonică, dai un număr unui asistent, iar el răspunde din baza de cunoștințe, cu căutare pe web și cu acțiunile pe care le folosește deja în chat. În afara programului poate lăsa apelul să sune, îl poate redirecționa sau poate reda un mesaj și prelua o cerere de revenire.',
        },
        {
          q: 'Ce limbi vorbește agentul vocal AI?',
          a: 'Paisprezece: engleză, română, rusă, spaniolă, franceză, germană, italiană, portugheză, poloneză, turcă, arabă, japoneză, coreeană și chineză. Dacă îi dai unui asistent mai multe, răspunde în limba în care vorbește clientul; pe planurile plătite îi alegi și vocea și o asculți înainte.',
        },
        {
          q: 'Poate operatorul virtual să transfere apelul către un om?',
          a: 'Da. Cine cere un om este transferat la numărul call centerului tău, doar în programul lui, dacă l-ai setat. Altfel, cererea se salvează în CRM ca sarcină de revenire, cu numărul clientului și ce a dorit.',
        },
        {
          q: 'Îi recunoaște AI-ul pe clienții care revin?',
          a: 'Da, când salutul pe nume este activat. Dacă numărul apelantului este salvat în contacte, asistentul îl salută pe prenume.',
        },
        {
          q: 'Cu ce centrale telefonice funcționează agentul vocal AI?',
          a: 'Cu Twilio, Asterisk, FreePBX, 3CX și orice furnizor care îți dă un cont SIP standard. Numerele și ID-ul de apelant rămân la operatorul tău.',
        },
        {
          q: 'Cât costă un apel făcut de AI?',
          a: '10 credite pe minut, socotite din momentul în care se răspunde, niciodată cât timp sună, cu minimum un minut. Un apel pornește doar dacă soldul acoperă primul minut.',
        },
      ],
    },
    ru: {
      heading: 'Голосовые ИИ-агенты: частые вопросы',
      definitionHeading: 'Что такое голосовой ИИ-агент?',
      definition:
        'Голосовой ИИ-агент — это программа, которая принимает и совершает телефонные звонки, понимает речь собеседника и отвечает голосом в реальном времени. ИИ-телефония Fineguide ставит ваших ИИ-ассистентов на ваши собственные номера через Twilio, Asterisk, FreePBX, 3CX или любой SIP-аккаунт, говорит на 14 языках и сохраняет каждый звонок как расшифровку. Звонки стоят 10 кредитов за минуту разговора, минимум одна минута.',
      items: [
        {
          q: 'Может ли голосовой робот отвечать на звонки компании?',
          a: 'Да. Подключите оператора связи или АТС, отдайте номер ассистенту, и он будет отвечать по базе знаний, с поиском в интернете и теми же действиями, что и в чате. В нерабочее время звонок можно оставить без ответа, переадресовать или включить сообщение и принять заявку на обратный звонок.',
        },
        {
          q: 'На каких языках говорит голосовой бот?',
          a: 'На четырнадцати: английском, румынском, русском, испанском, французском, немецком, итальянском, португальском, польском, турецком, арабском, японском, корейском и китайском. Если дать ассистенту несколько, он отвечает на языке звонящего; на платных тарифах можно ещё выбрать голос и заранее его прослушать.',
        },
        {
          q: 'Может ли ИИ-секретарь перевести звонок на сотрудника?',
          a: 'Да. Клиента, который просит живого человека, переводят на номер вашего колл-центра, при желании только в его рабочие часы. Иначе запрос сохраняется в CRM как задача на обратный звонок, с номером клиента и сутью вопроса.',
        },
        {
          q: 'Узнаёт ли робот постоянных клиентов?',
          a: 'Да, если включено приветствие по имени. Когда номер звонящего есть в контактах, ассистент здоровается с ним по имени.',
        },
        {
          q: 'С какой IP-телефонией работает голосовой ИИ-агент?',
          a: 'С Twilio, Asterisk, FreePBX, 3CX и любым провайдером, который даёт стандартный SIP-аккаунт. Номера и определитель остаются у вашего оператора.',
        },
        {
          q: 'Сколько стоит звонок ИИ-агента?',
          a: '10 кредитов за минуту, считая с момента ответа и никогда во время гудков, минимум одна минута. Звонок начинается, только если баланса хватает на первую минуту.',
        },
      ],
    },
  },

  // ------------------------------------------------------------------ Voice QA
  'voice-qa': {
    en: {
      heading: 'Call quality monitoring: common questions',
      definitionHeading: 'What is call quality monitoring software?',
      definition:
        'Call quality monitoring software checks recorded calls against a company’s standards and shows managers how each agent and team is doing. Fineguide’s Voice QA transcribes every call, separates agent and customer, and scores it against each department’s own rules and weights, with the reasoning, three to five quotes from the call and a suggestion for every rule. Reports come in 30 languages, and scoring costs 12 credits per minute of audio.',
      items: [
        {
          q: 'What is speech analytics software?',
          a: 'Speech analytics software turns recorded calls into text and data you can measure: what was said, why the customer called and how they felt. Voice QA adds a score for each of your rules, the customer’s mood across the call and any fields you ask it to capture, such as a product or a competitor named.',
        },
        {
          q: 'How does AI call scoring work?',
          a: 'You write the rules for each department and give them equal points or their own weights. The AI first works out which categories of rule the call is about and scores those, and a rule the call never gave the agent a chance to meet is marked not applicable instead of zero.',
        },
        {
          q: 'How do I get call recordings into Voice QA?',
          a: 'Upload files of up to 50 MB each, post them through the API, or connect your phone system so new calls arrive on their own. Moldcell’s virtual PBX has a ready template, and the Fineguide call-recording app for Android sends calls from a phone.',
        },
        {
          q: 'Does Voice QA work with calls in other languages?',
          a: 'Yes. It detects the spoken language itself, even when a call switches language halfway, and writes the report in your choice of 30 languages. Quotes stay in the language the customer used.',
        },
        {
          q: 'How much does AI call scoring cost?',
          a: '12 credits per minute of audio, with a one-minute minimum per call, and transcribing without scoring costs half. Nothing is processed until you ask for it, by hand or by turning on automatic scoring for a department.',
        },
        {
          q: 'Can call scores go to my CRM?',
          a: 'Yes. Calls match a contact by phone number and appear on that customer’s timeline in Fineguide, and every finished call can be pushed to your own webhook, amoCRM or Kommo. Agent scorecards can be emailed to the agent automatically.',
        },
      ],
    },
    ro: {
      heading: 'Monitorizarea calității apelurilor: întrebări frecvente',
      definitionHeading: 'Ce este un soft de monitorizare a calității apelurilor?',
      definition:
        'Un soft de monitorizare a calității apelurilor verifică apelurile înregistrate după standardele firmei și le arată managerilor cum se descurcă fiecare operator și fiecare echipă. Voice QA de la Fineguide transcrie fiecare apel, separă operatorul de client și îl evaluează după regulile și ponderile fiecărui departament, cu argumentul, trei-cinci citate din apel și o sugestie pentru fiecare regulă. Rapoartele sunt disponibile în 30 de limbi, iar evaluarea costă 12 credite pe minut de audio.',
      items: [
        {
          q: 'Ce este analiza vocală a apelurilor?',
          a: 'Analiza vocală transformă apelurile înregistrate în text și date care se pot măsura: ce s-a spus, de ce a sunat clientul și cum s-a simțit. Voice QA adaugă un scor pentru fiecare regulă a ta, starea clientului pe parcursul apelului și câmpurile pe care îi ceri să le rețină, de exemplu un produs sau un concurent pomenit.',
        },
        {
          q: 'Cum funcționează evaluarea apelurilor cu AI?',
          a: 'Scrii regulile pentru fiecare departament și le dai puncte egale sau ponderi proprii. AI-ul stabilește întâi la ce categorii de reguli se referă apelul și le evaluează doar pe acelea, iar o regulă pe care apelul nu i-a dat operatorului ocazia s-o respecte e marcată „nu se aplică”, nu cu zero.',
        },
        {
          q: 'Cum ajung înregistrările apelurilor în Voice QA?',
          a: 'Încarci fișiere de până la 50 MB fiecare, le trimiți prin API sau conectezi centrala telefonică, iar apelurile noi sosesc singure. Centrala virtuală Moldcell are un șablon gata făcut, iar aplicația Fineguide de înregistrare a apelurilor pentru Android trimite apelurile direct de pe telefon.',
        },
        {
          q: 'Funcționează Voice QA cu apeluri în alte limbi?',
          a: 'Da. Detectează singur limba vorbită, chiar și când apelul trece la altă limbă la jumătate, și scrie raportul în limba aleasă de tine, din 30. Citatele rămân în limba folosită de client.',
        },
        {
          q: 'Cât costă evaluarea apelurilor cu AI?',
          a: '12 credite pe minut de audio, cu minimum un minut pe apel, iar transcrierea fără evaluare costă jumătate. Nimic nu se procesează până nu ceri, manual sau pornind evaluarea automată pentru un departament.',
        },
        {
          q: 'Pot trimite scorurile apelurilor în CRM?',
          a: 'Da. Apelurile se leagă de un contact după numărul de telefon și apar în istoricul clientului în Fineguide, iar fiecare apel procesat poate fi trimis la webhook-ul tău, în amoCRM sau în Kommo. Fișele de evaluare pot pleca automat pe email la operator.',
        },
      ],
    },
    ru: {
      heading: 'Контроль качества звонков: частые вопросы',
      definitionHeading: 'Что такое система контроля качества звонков?',
      definition:
        'Система контроля качества звонков проверяет записанные разговоры по стандартам компании и показывает руководителю, как работает каждый оператор и каждая команда. Voice QA от Fineguide расшифровывает каждый звонок, разделяет реплики оператора и клиента и оценивает разговор по правилам и весам конкретного отдела: с обоснованием, тремя-пятью цитатами из звонка и рекомендацией по каждому правилу. Отчёты доступны на 30 языках, оценка стоит 12 кредитов за минуту записи.',
      items: [
        {
          q: 'Что такое речевая аналитика?',
          a: 'Речевая аналитика превращает записи звонков в текст и данные, которые можно измерить: что было сказано, зачем звонил клиент и как он себя чувствовал. Voice QA добавляет оценку по каждому вашему правилу, настроение клиента по ходу разговора и поля, которые вы просите извлечь, например упомянутый товар или конкурента.',
        },
        {
          q: 'Как работает оценка звонков с помощью ИИ?',
          a: 'Вы пишете чек-лист правил для каждого отдела и даёте им равные баллы или свои веса. ИИ сначала определяет, к каким категориям правил относится звонок, и оценивает только их, а правило, которое оператор в этом разговоре не мог выполнить, помечается как неприменимое, а не получает ноль.',
        },
        {
          q: 'Как загрузить записи звонков в Voice QA?',
          a: 'Загрузите файлы до 50 МБ каждый, отправьте их через API или подключите телефонию, и новые звонки будут приходить сами. Для виртуальной АТС Moldcell есть готовый шаблон, а приложение Fineguide для записи звонков на Android отправляет звонки прямо с телефона.',
        },
        {
          q: 'Работает ли Voice QA со звонками на разных языках?',
          a: 'Да. Язык разговора определяется автоматически, даже если звонок переходит на другой язык посередине, а отчёт пишется на выбранном вами языке из 30. Цитаты остаются на языке клиента.',
        },
        {
          q: 'Сколько стоит оценка звонков ИИ?',
          a: '12 кредитов за минуту записи, минимум одна минута на звонок, а транскрибация без оценки стоит вдвое дешевле. Ничего не обрабатывается, пока вы не попросите: вручную или включив автоматическую оценку для отдела.',
        },
        {
          q: 'Можно ли передавать оценки звонков в CRM?',
          a: 'Да. Звонки привязываются к контакту по номеру телефона и попадают в историю клиента в Fineguide, а каждый обработанный звонок можно отправить на ваш вебхук, в amoCRM или Kommo. Карточка оценки может автоматически уходить оператору на почту.',
        },
      ],
    },
  },

  // ------------------------------------------------------------------ Automations
  automations: {
    en: {
      heading: 'Workflow automation: common questions',
      definitionHeading: 'What is workflow automation?',
      definition:
        'Workflow automation is software that runs a business process on its own: when something happens, it carries out the steps a person would otherwise do by hand. Fineguide’s automations start from a chat, a call, an email, a CRM record change, a schedule or a post from another system, and run in its visual workflow builder or in n8n, hosted by Fineguide or your own. Workflows are on paid plans, and each step that runs costs a credit.',
      items: [
        {
          q: 'Does Fineguide have a visual workflow builder?',
          a: 'Yes, on paid plans. You pick a trigger, add steps on a canvas (CRM updates, tasks, emails, team notifications, AI steps that classify, summarize or extract text, and HTTP requests) and test the workflow on a real record before turning it on.',
        },
        {
          q: 'Can I use n8n with my CRM?',
          a: 'Yes. Fineguide can set up an n8n instance for you, or you connect your own with its address and an API token. An n8n workflow that starts with a webhook can be imported as an action your assistant calls in the middle of a conversation.',
        },
        {
          q: 'How do I automate follow-ups after a sale or a chat?',
          a: 'Start from a template such as “Deal won”, “After a chat is resolved” or “Follow up a new contact”, read the notes on its canvas, change the assignee or the wording, and turn it on. Each template becomes your own draft, off until you switch it on.',
        },
        {
          q: 'Can my AI assistant call my own API?',
          a: 'Yes. Paste a cURL command and Fineguide builds the action from it, with API keys kept as stored secrets, then run it from the test panel before customers use it. A reply that needs 2 to 4 actions costs 2 credits.',
        },
        {
          q: 'Which webhooks does Fineguide send?',
          a: 'An assistant can report each message, a session opened or closed, a ticket, a reply rated by the customer, an update to the collected information, a Facebook Lead Ads form, and a team reply that a channel refused or later accepted. Each event goes to your address as it happens, with an optional header your endpoint can check.',
        },
        {
          q: 'How much does workflow automation cost?',
          a: 'Each step a workflow runs costs at least one credit, and a loop counts once per record. The workflow builder and n8n come with paid plans, from the Starter plan.',
        },
      ],
    },
    ro: {
      heading: 'Automatizarea proceselor: întrebări frecvente',
      definitionHeading: 'Ce este automatizarea proceselor de afaceri?',
      definition:
        'Automatizarea proceselor de afaceri înseamnă un program care face singur un proces: când se întâmplă ceva, execută pașii pe care altfel i-ar face un om de mână. Automatizările Fineguide pornesc de la un chat, un apel, un email, o modificare în CRM, un program orar sau o cerere trimisă de alt sistem și rulează în editorul vizual de fluxuri sau în n8n, găzduit de Fineguide ori propriul tău. Fluxurile de lucru sunt incluse în planurile plătite, iar fiecare pas executat costă un credit.',
      items: [
        {
          q: 'Are Fineguide un editor vizual de fluxuri de lucru?',
          a: 'Da, pe planurile plătite. Alegi declanșatorul, adaugi pași pe canvas (modificări în CRM, sarcini, emailuri, notificări pentru echipă, pași AI care clasifică, rezumă sau extrag date din text și cereri HTTP) și testezi fluxul pe o înregistrare reală înainte să-l pornești.',
        },
        {
          q: 'Pot folosi n8n cu CRM-ul?',
          a: 'Da. Fineguide îți poate configura o instanță n8n sau o conectezi pe a ta, cu adresa și un token API. Un flux n8n care pornește cu un webhook poate fi importat ca acțiune pe care asistentul o apelează în mijlocul conversației.',
        },
        {
          q: 'Cum automatizez revenirile după o vânzare sau un chat?',
          a: 'Pornești de la un șablon, de exemplu „Deal won”, „After a chat is resolved” sau „Follow up a new contact”, citești notițele de pe canvas, schimbi responsabilul sau textul și îl activezi. Fiecare șablon devine ciorna ta, oprită până o pornești.',
        },
        {
          q: 'Poate asistentul AI să apeleze API-ul meu?',
          a: 'Da. Lipești o comandă cURL și Fineguide construiește acțiunea din ea, cu cheile API păstrate ca secrete, apoi o rulezi din panoul de test înainte s-o folosească clienții. Un răspuns care are nevoie de 2-4 acțiuni costă 2 credite.',
        },
        {
          q: 'Ce webhook-uri trimite Fineguide?',
          a: 'Un asistent poate raporta fiecare mesaj, o sesiune deschisă sau închisă, un tichet, un răspuns evaluat de client, o actualizare a informațiilor colectate, un formular Facebook Lead Ads și un răspuns al echipei refuzat sau acceptat ulterior de un canal. Fiecare eveniment ajunge la adresa ta pe loc, cu un antet opțional pe care îl poate verifica serverul tău.',
        },
        {
          q: 'Cât costă automatizarea fluxurilor?',
          a: 'Fiecare pas executat de un flux costă cel puțin un credit, iar o buclă se socotește o dată pentru fiecare înregistrare. Editorul de fluxuri și n8n vin cu planurile plătite, de la planul Starter.',
        },
      ],
    },
    ru: {
      heading: 'Автоматизация бизнес-процессов: частые вопросы',
      definitionHeading: 'Что такое автоматизация бизнес-процессов?',
      definition:
        'Автоматизация бизнес-процессов — это программа, которая сама выполняет процесс: когда что-то происходит, она делает шаги, которые иначе пришлось бы делать вручную. Автоматизации Fineguide запускаются от чата, звонка, письма, изменения в CRM, расписания или запроса из другой системы и работают в визуальном конструкторе сценариев или в n8n, размещённом Fineguide или вашем собственном. Сценарии доступны на платных тарифах, каждый выполненный шаг стоит кредит.',
      items: [
        {
          q: 'Есть ли в Fineguide визуальный конструктор сценариев?',
          a: 'Да, на платных тарифах. Вы выбираете триггер, добавляете шаги на холсте (изменения в CRM, задачи, письма, уведомления команде, ИИ-шаги, которые классифицируют, кратко пересказывают или извлекают данные из текста, и HTTP-запросы) и проверяете сценарий на реальной записи до включения.',
        },
        {
          q: 'Есть ли интеграция n8n с CRM?',
          a: 'Да. Fineguide может развернуть для вас n8n, или вы подключаете свой по адресу и API-токену. Сценарий n8n, который начинается с вебхука, можно импортировать как действие, которое ассистент вызывает прямо в диалоге.',
        },
        {
          q: 'Как автоматизировать работу с клиентом после сделки или чата?',
          a: 'Начните с шаблона, например «Deal won», «After a chat is resolved» или «Follow up a new contact», прочитайте заметки на холсте, поменяйте ответственного или текст и включите. Каждый шаблон становится вашим черновиком и выключен, пока вы его не запустите.',
        },
        {
          q: 'Может ли ИИ-ассистент обращаться к моему API?',
          a: 'Да. Вставьте команду cURL, и Fineguide соберёт из неё действие, а API-ключи хранятся как секреты; перед запуском действие проверяется в тестовой панели. Ответ, которому нужно от 2 до 4 действий, стоит 2 кредита.',
        },
        {
          q: 'Какие вебхуки отправляет Fineguide?',
          a: 'Ассистент может сообщать о каждом сообщении, открытии или закрытии сессии, тикете, оценке ответа клиентом, обновлении собранных данных, заявке из Facebook Lead Ads и ответе команды, который канал отклонил или позже принял. Каждое событие сразу приходит на ваш адрес, с необязательным заголовком для проверки на вашей стороне.',
        },
        {
          q: 'Сколько стоит автоматизация?',
          a: 'Каждый шаг, который выполняет сценарий, стоит минимум один кредит, а цикл считается один раз на каждую запись. Конструктор сценариев и n8n входят в платные тарифы, начиная со Starter.',
        },
      ],
    },
  },

  // ------------------------------------------------------------------ Messages & Inbox
  messages: {
    en: {
      heading: 'Shared inbox: common questions',
      definitionHeading: 'What is a shared inbox?',
      definition:
        'A shared inbox is one place where a team reads and answers customer messages from every channel, with each conversation assigned so nobody misses or doubles a reply. Fineguide’s Messages & Inbox brings the website chat, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, amoCRM, Kommo and your own email over IMAP and SMTP into one queue, where AI assistants answer first and hand over to your team. Reading and sending messages and email uses no credits.',
      items: [
        {
          q: 'What is an omnichannel inbox?',
          a: 'An omnichannel inbox treats a customer who writes on WhatsApp today and by email next week as one person with one history. In Fineguide, every channel feeds the same queue and every thread is filed on the customer’s record in the CRM.',
        },
        {
          q: 'Can I connect my own email domain to a shared inbox?',
          a: 'Yes. Any mailbox that offers IMAP and SMTP connects, on your own domain, and replies go out through it, so your sender reputation stays yours. Each mailbox has its own signature, routing rules and reporting.',
        },
        {
          q: 'Can AI reply to customer emails?',
          a: 'Yes, mailbox by mailbox, and it stays off until you turn it on. The assistant either leaves a draft for a person to approve or sends the reply itself after a two-minute pause, and stops after three AI replies in one thread; you can change both numbers.',
        },
        {
          q: 'How do I stop two agents answering the same customer?',
          a: 'Fineguide tells you when a colleague has the same conversation open, and again when they start typing in it. Waiting conversations sit in one queue to be accepted, so each one has a single owner.',
        },
        {
          q: 'How does routing work in a team inbox?',
          a: 'Routing rules and departments decide who picks up a conversation. Moving a thread to another department removes the current assignee and routes it again within that team.',
        },
        {
          q: 'Does the inbox have canned responses and an out-of-office reply?',
          a: 'Yes. Saved replies are shared by the team and inserted by typing “/”, and an out-of-hours auto-reply covers the whole team, separate from each agent’s own working hours.',
        },
      ],
    },
    ro: {
      heading: 'Inbox comun: întrebări frecvente',
      definitionHeading: 'Ce este un inbox comun?',
      definition:
        'Un inbox comun este locul în care o echipă citește și răspunde la mesajele clienților de pe toate canalele, fiecare conversație având un responsabil, ca nimeni să nu rateze sau să dubleze un răspuns. Mesaje și Inbox de la Fineguide aduce într-o singură coadă chatul de pe site, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, amoCRM, Kommo și emailul tău prin IMAP și SMTP, unde asistenții AI răspund primii și predau echipei. Citirea și trimiterea mesajelor și a emailurilor nu consumă credite.',
      items: [
        {
          q: 'Ce este un inbox omnicanal?',
          a: 'Un inbox omnicanal îl tratează pe clientul care scrie azi pe WhatsApp și săptămâna viitoare pe email ca pe o singură persoană, cu un singur istoric. În Fineguide, toate canalele intră în aceeași coadă, iar fiecare conversație ajunge pe fișa clientului din CRM.',
        },
        {
          q: 'Pot conecta emailul pe domeniul firmei la un inbox comun?',
          a: 'Da. Se conectează orice căsuță care oferă IMAP și SMTP, pe domeniul tău, iar răspunsurile pleacă prin ea, așa că reputația de expeditor rămâne a ta. Fiecare căsuță are semnătura, regulile de rutare și rapoartele ei.',
        },
        {
          q: 'Poate AI-ul să răspundă la emailurile clienților?',
          a: 'Da, pentru fiecare căsuță în parte, și este oprit până îl pornești. Asistentul fie lasă o ciornă pe care o aprobă un om, fie trimite singur răspunsul după o pauză de două minute, și se oprește după trei răspunsuri AI într-o conversație; ambele valori se pot schimba.',
        },
        {
          q: 'Cum evit ca doi operatori să răspundă aceluiași client?',
          a: 'Fineguide îți arată când un coleg are deschisă aceeași conversație și din nou când începe să scrie în ea. Conversațiile în așteptare stau într-o singură coadă, de unde sunt preluate, așa că fiecare are un singur responsabil.',
        },
        {
          q: 'Cum funcționează rutarea într-un inbox de echipă?',
          a: 'Regulile de rutare și departamentele decid cine preia o conversație. Când muți o conversație în alt departament, ea pierde responsabilul actual și este rutată din nou în acea echipă.',
        },
        {
          q: 'Are inboxul răspunsuri salvate și mesaj automat în afara programului?',
          a: 'Da. Răspunsurile salvate sunt comune echipei și se inserează tastând „/”, iar mesajul automat în afara programului acoperă toată echipa, separat de orele de lucru ale fiecărui operator.',
        },
      ],
    },
    ru: {
      heading: 'Общий ящик входящих: частые вопросы',
      definitionHeading: 'Что такое общий ящик входящих?',
      definition:
        'Общий ящик входящих — это единое место, где команда читает и отвечает на сообщения клиентов из всех каналов, а у каждого диалога есть ответственный, чтобы ни один ответ не потерялся и не задвоился. «Сообщения и входящие» Fineguide собирают в одну очередь чат на сайте, WhatsApp, Telegram, Instagram, Messenger, Slack, Discord, amoCRM, Kommo и вашу почту по IMAP и SMTP; первыми отвечают ИИ-ассистенты и передают диалог команде. Чтение и отправка сообщений и писем не расходуют кредиты.',
      items: [
        {
          q: 'Что такое омниканальный инбокс?',
          a: 'Омниканальный инбокс видит в клиенте, который сегодня пишет в WhatsApp, а через неделю на почту, одного человека с одной историей. В Fineguide все каналы попадают в одну очередь, а каждый диалог сохраняется в карточке клиента в CRM.',
        },
        {
          q: 'Можно ли подключить корпоративную почту на своём домене?',
          a: 'Да. Подключается любой ящик с IMAP и SMTP на вашем домене, и ответы уходят через него, так что репутация отправителя остаётся вашей. У каждого ящика своя подпись, правила маршрутизации и отчёты.',
        },
        {
          q: 'Может ли ИИ отвечать на письма клиентов?',
          a: 'Да, для каждого ящика отдельно, и по умолчанию это выключено. Ассистент либо оставляет черновик на одобрение сотруднику, либо сам отправляет ответ после двухминутной паузы и останавливается после трёх ИИ-ответов в одной переписке; оба значения можно изменить.',
        },
        {
          q: 'Как сделать, чтобы два оператора не отвечали одному клиенту?',
          a: 'Fineguide показывает, когда коллега открыл тот же диалог, и ещё раз, когда он начал печатать. Ожидающие диалоги стоят в одной очереди, откуда их принимают, поэтому у каждого один ответственный.',
        },
        {
          q: 'Как работает маршрутизация обращений?',
          a: 'Правила маршрутизации и отделы решают, кто возьмёт диалог. Если перевести диалог в другой отдел, текущий ответственный снимается, и обращение заново распределяется внутри этой команды.',
        },
        {
          q: 'Есть ли шаблоны ответов и автоответ в нерабочее время?',
          a: 'Да. Шаблоны ответов общие для команды и вставляются через «/», а автоответ в нерабочее время действует для всей команды, отдельно от личного графика каждого оператора.',
        },
      ],
    },
  },

  // ------------------------------------------------------------------ Campaigns
  campaigns: {
    en: {
      heading: 'Outbound call campaigns: common questions',
      definitionHeading: 'What is an auto dialer?',
      definition:
        'An auto dialer is software that calls a list of phone numbers on its own, so a team does not have to dial each one by hand. In Fineguide Campaigns, AI assistants hold the conversation on every call over your own phone system, for outreach, surveys or promotions, with retries, calling hours and as many calls at once as you set. Every call is saved as a transcript and billed per answered minute.',
      items: [
        {
          q: 'Can AI make outbound sales calls?',
          a: 'Yes. In an outreach campaign the assistant opens the call and takes the conversation where it needs to go, and the whole exchange is kept as a transcript. A promotion campaign records each outcome (accepted, declined, callback requested) so the run reads as a funnel.',
        },
        {
          q: 'How do I run an automated phone survey?',
          a: 'Create a survey campaign with your questions. The answers are extracted from each call as it ends and added up across the whole campaign, so you read results instead of listening to recordings.',
        },
        {
          q: 'How many calls can a campaign make at once?',
          a: 'As many as you set for that campaign, up to the limit of the phone channel it dials through. You can pause, resume or stop a running campaign at any time.',
        },
        {
          q: 'What happens when nobody answers the call?',
          a: 'The campaign retries on no answer or busy, after the delay you choose for each outcome, and a contact who declines is never called again by that campaign. Calls go out only within the hours you set for each day of the week.',
        },
        {
          q: 'Where does the call list come from?',
          a: 'Upload a CSV, pick existing contacts, select by tag, or combine all three. Save a filter as a segment and point later campaigns at it.',
        },
        {
          q: 'Can I test a call campaign before it calls customers?',
          a: 'Yes. Place a test call to your own number and hear exactly what a customer would, before any real contact is dialled.',
        },
      ],
    },
    ro: {
      heading: 'Campanii de apeluri: întrebări frecvente',
      definitionHeading: 'Ce este un autodialer?',
      definition:
        'Un autodialer este un program care sună singur o listă de numere de telefon, ca echipa să nu formeze fiecare număr de mână. În Campaniile Fineguide, asistenții AI duc conversația la fiecare apel, prin propria ta centrală telefonică, pentru campanii de contactare, sondaje sau promoții, cu reapelări, ore de apelare și atâtea apeluri simultane câte setezi. Fiecare apel se salvează ca transcriere și se taxează pe minut cu răspuns.',
      items: [
        {
          q: 'Poate AI-ul să facă apeluri de vânzări?',
          a: 'Da. Într-o campanie de contactare, asistentul deschide apelul și duce conversația unde trebuie, iar tot dialogul se păstrează ca transcriere. O campanie de promoție înregistrează fiecare rezultat (acceptat, refuzat, cere revenire), așa că o citești ca pe o pâlnie de conversie.',
        },
        {
          q: 'Cum fac un sondaj telefonic automat?',
          a: 'Creezi o campanie de tip sondaj cu întrebările tale. Răspunsurile se extrag din fiecare apel imediat ce se termină și se adună pe toată campania, așa că citești rezultate în loc să asculți înregistrări.',
        },
        {
          q: 'Câte apeluri simultane poate face o campanie?',
          a: 'Câte setezi pentru acea campanie, până la limita canalului telefonic prin care sună. O campanie pornită se poate pune pe pauză, relua sau opri oricând.',
        },
        {
          q: 'Ce se întâmplă când nu răspunde nimeni?',
          a: 'Campania reapelează când nu se răspunde sau e ocupat, după intervalul ales pentru fiecare caz, iar un contact care refuză nu mai este sunat de acea campanie. Apelurile pleacă doar în orele setate pentru fiecare zi a săptămânii.',
        },
        {
          q: 'De unde vine lista de apelat?',
          a: 'Încarci un CSV, alegi contacte existente, selectezi după etichetă sau le combini pe toate trei. Salvezi un filtru ca segment și îndrepți spre el campaniile următoare.',
        },
        {
          q: 'Pot testa o campanie de apeluri înainte să sune clienții?',
          a: 'Da. Faci un apel de test pe numărul tău și auzi exact ce ar auzi un client, înainte să fie sunat vreun contact real.',
        },
      ],
    },
    ru: {
      heading: 'Автообзвон: частые вопросы',
      definitionHeading: 'Что такое автообзвон?',
      definition:
        'Автообзвон — это программа, которая сама звонит по списку номеров, чтобы команде не приходилось набирать каждый вручную. В «Кампаниях» Fineguide разговор на каждом звонке ведут ИИ-ассистенты через вашу собственную телефонию: для обзвона клиентов, опросов или акций, с повторными звонками, часами обзвона и тем числом одновременных звонков, которое вы зададите. Каждый звонок сохраняется как расшифровка и оплачивается за минуту разговора.',
      items: [
        {
          q: 'Может ли голосовой робот делать исходящие звонки клиентам?',
          a: 'Да. В кампании обзвона ассистент начинает разговор и ведёт его туда, куда нужно, а весь диалог сохраняется как расшифровка. Кампания-акция фиксирует каждый исход (согласился, отказался, просит перезвонить), и результат читается как воронка.',
        },
        {
          q: 'Как провести автоматический телефонный опрос?',
          a: 'Создайте кампанию-опрос со своими вопросами. Ответы извлекаются из каждого звонка сразу после его окончания и сводятся по всей кампании, так что вы читаете итоги, а не слушаете записи.',
        },
        {
          q: 'Сколько звонков одновременно делает кампания?',
          a: 'Столько, сколько вы зададите для кампании, в пределах лимита телефонного канала, через который она звонит. Запущенную кампанию можно в любой момент поставить на паузу, продолжить или остановить.',
        },
        {
          q: 'Что происходит, если клиент не взял трубку?',
          a: 'Кампания перезванивает при «не ответил» или «занято» через выбранный вами интервал, а контакту, который отказался, эта кампания больше не звонит. Звонки идут только в часы, заданные для каждого дня недели.',
        },
        {
          q: 'Откуда берётся список для обзвона?',
          a: 'Загрузите CSV, выберите контакты из CRM, отберите по тегу или объедините все три способа. Фильтр можно сохранить как сегмент и использовать в следующих кампаниях.',
        },
        {
          q: 'Можно ли проверить кампанию до звонков клиентам?',
          a: 'Да. Сделайте тестовый звонок на свой номер и услышьте ровно то, что услышит клиент, до того как будет набран хоть один реальный контакт.',
        },
      ],
    },
  },

  // ------------------------------------------------------------------ Workspace
  workspace: {
    en: {
      heading: 'Team workspace: common questions',
      definitionHeading: 'What is a team workspace?',
      definition:
        'A team workspace is a shared place for a company’s documents, such as playbooks, briefs, procedures and notes, organised so everyone finds the current version. Fineguide Workspace is a block-based editor with slash commands, folders, favourites and links between documents, built into the same product as the CRM, so a case document can carry the contacts it is about.',
      items: [
        {
          q: 'What can I write in Fineguide Workspace?',
          a: 'Anything built from blocks: headings, paragraphs, lists, checklists, quotes, code, tables, images and files. Type “/” to add any block, drag blocks to reorder them and indent to nest them.',
        },
        {
          q: 'How do I organise documents for my team?',
          a: 'Put documents in folders and reorder both by dragging. Favourites and recents keep the documents you use most at hand, and search finds any document by its title.',
        },
        {
          q: 'Can I link documents to customers in the CRM?',
          a: 'Yes. A case document carries the contacts it concerns and its own properties, so whoever opens it sees who it is about, with the notes, files and decisions in one place.',
        },
        {
          q: 'Can one document link to another?',
          a: 'Yes. Insert a link to another document inside the text, and one click opens it, so a playbook can lead straight to the checklist it depends on.',
        },
        {
          q: 'What happens if I delete a document by mistake?',
          a: 'It goes to the trash, and you can restore it from there.',
        },
      ],
    },
    ro: {
      heading: 'Spațiu de lucru pentru echipă: întrebări frecvente',
      definitionHeading: 'Ce este un spațiu de lucru pentru echipă?',
      definition:
        'Un spațiu de lucru pentru echipă este locul comun pentru documentele firmei, cum ar fi ghiduri, briefuri, proceduri și notițe, organizat astfel încât oricine să găsească versiunea actuală. Workspace de la Fineguide este un editor pe blocuri, cu comenzi „/”, dosare, favorite și linkuri între documente, construit în același produs ca CRM-ul, așa că un document de caz poate purta contactele la care se referă.',
      items: [
        {
          q: 'Ce pot scrie în Workspace?',
          a: 'Orice se construiește din blocuri: titluri, paragrafe, liste, liste de verificare, citate, cod, tabele, imagini și fișiere. Tastezi „/” ca să adaugi orice bloc, tragi blocurile ca să le reordonezi și le indentezi ca să le imbrici.',
        },
        {
          q: 'Cum organizez documentele echipei?',
          a: 'Pui documentele în dosare și le reordonezi prin tragere. Favoritele și documentele recente îți țin la îndemână ce folosești des, iar căutarea găsește orice document după titlu.',
        },
        {
          q: 'Pot lega documente de clienții din CRM?',
          a: 'Da. Un document de caz poartă contactele la care se referă și proprietățile lui, așa că oricine îl deschide vede despre cine este vorba, cu notițele, fișierele și deciziile într-un singur loc.',
        },
        {
          q: 'Poate un document să trimită la altul?',
          a: 'Da. Inserezi în text un link către alt document și îl deschizi dintr-un clic, așa că un ghid poate duce direct la lista de verificare de care depinde.',
        },
        {
          q: 'Ce se întâmplă dacă șterg un document din greșeală?',
          a: 'Ajunge în coșul de gunoi, de unde îl poți restaura.',
        },
      ],
    },
    ru: {
      heading: 'Рабочее пространство команды: частые вопросы',
      definitionHeading: 'Что такое рабочее пространство для команды?',
      definition:
        'Рабочее пространство команды — это общее место для документов компании: регламентов, брифов, инструкций и заметок, устроенное так, чтобы каждый находил актуальную версию. Workspace от Fineguide — блочный редактор с командами через «/», папками, избранным и ссылками между документами, встроенный в тот же продукт, что и CRM, поэтому документ по делу может хранить контакты, к которым он относится.',
      items: [
        {
          q: 'Что можно создавать в Workspace?',
          a: 'Всё, что собирается из блоков: заголовки, абзацы, списки, чек-листы, цитаты, код, таблицы, изображения и файлы. Наберите «/», чтобы добавить любой блок, перетаскивайте блоки, чтобы менять порядок, и делайте отступ, чтобы вкладывать их.',
        },
        {
          q: 'Как организовать документы команды?',
          a: 'Разложите документы по папкам и меняйте порядок перетаскиванием. Избранное и недавние держат под рукой то, чем вы пользуетесь чаще всего, а поиск находит любой документ по названию.',
        },
        {
          q: 'Можно ли привязать документ к клиенту в CRM?',
          a: 'Да. Документ по делу хранит связанные контакты и свои свойства, поэтому любой, кто его откроет, видит, о ком речь, а заметки, файлы и решения собраны в одном месте.',
        },
        {
          q: 'Можно ли ссылаться из одного документа на другой?',
          a: 'Да. Вставьте в текст ссылку на другой документ, и он откроется одним кликом, так что регламент может вести прямо к нужному чек-листу.',
        },
        {
          q: 'Что будет, если случайно удалить документ?',
          a: 'Он попадёт в корзину, откуда его можно восстановить.',
        },
      ],
    },
  },
};
