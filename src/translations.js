// Тексты лендинга и общих элементов (шапка, подвал) по языкам
export const translations = {
    pl: {
        // Header
        logoText: 'Locksmith',
        logoSubtext: 'Kraków',
        headerPhone: '+48 536 409 660',
        headerSlogan: 'Dostępni 24/7',
        orderBtn: 'Zamów usługę',

        // Hero
        heroTitle: 'Ślusarz Kraków 24/7 – otwieranie drzwi i samochodów',
        heroSubtitle: 'Pogotowie zamkowe – szybko, bezpiecznie, profesjonalnie',
        heroDescription: 'Zamknięte drzwi? Zgubione klucze? Zepsuty zamek? Jesteśmy do Twojej dyspozycji przez całą dobę!',
        heroBtn: 'Zamów teraz',

        // Features
        featuresTitle: 'Dlaczego my?',
        feature1Title: 'Dostępność 24/7',
        feature1Desc: 'Pracujemy przez całą dobę, 7 dni w tygodniu',
        feature2Title: 'Szybka reakcja',
        feature2Desc: 'Docieramy na miejsce w ciągu 30 minut',
        feature3Title: 'Profesjonalizm',
        feature3Desc: 'Doświadczeni specjaliści z nowoczesnym sprzętem',
        feature4Title: 'Przejrzyste ceny',
        feature4Desc: 'Uczciwe ceny bez ukrytych opłat',

        // Services
        servicesTitle: 'Nasze usługi',
        service1Title: 'Otwieranie drzwi i mieszkań',
        service1Desc: 'Otwieranie drzwi wejściowych i wewnętrznych',
        service2Title: 'Otwieranie samochodów',
        service2Desc: 'Otwieranie drzwi i bagażników bez uszkodzeń',
        service3Title: 'Regeneracja zamków stacyjki + wymiana',
        service3Desc: 'Regeneracja i wymiana zamków stacyjki (zapłonu)',
        service4Title: 'Wymiana zamków i wkładek',
        service4Desc: 'Wymiana wkładek i zamków w drzwiach mieszkań i domów',
        servicesNote: 'Otwieramy również wszelkie inne zamki i urządzenia zabezpieczające – zadzwoń i zapytaj.',

        // FAQ (тот же текст уходит в JSON-LD FAQPage при пререндере)
        faqTitle: 'Najczęściej zadawane pytania',
        faq: [
            {
                q: 'Jak szybko przyjedziecie?',
                a: 'Zwykle jesteśmy na miejscu w ciągu około 30 minut od zgłoszenia. Dojeżdżamy do wszystkich dzielnic Krakowa.',
            },
            {
                q: 'Gdzie pracujecie?',
                a: 'W całym Krakowie – we wszystkich dzielnicach: Stare Miasto (w tym Kazimierz), Grzegórzki, Prądnik Czerwony, Prądnik Biały, Krowodrza, Bronowice, Zwierzyniec, Dębniki, Łagiewniki-Borek Fałęcki, Swoszowice, Podgórze Duchackie, Bieżanów-Prokocim, Podgórze, Czyżyny, Mistrzejowice, Bieńczyce, Wzgórza Krzesławickie i Nowa Huta. Dojeżdżamy też do miejscowości w województwie małopolskim, m.in. Wieliczki, Skawiny, Zabierzowa i Niepołomic.',
            },
            {
                q: 'Czy pracujecie w nocy, w weekendy i w święta?',
                a: 'Tak. Działamy 24 godziny na dobę, 7 dni w tygodniu – także w nocy, w weekendy i w święta.',
            },
            {
                q: 'Ile kosztuje otwarcie drzwi lub samochodu?',
                a: 'Cena zależy od rodzaju zamka i stopnia trudności. Podajemy ją przed rozpoczęciem pracy – bez ukrytych opłat. Zadzwoń i opisz sytuację, a od razu powiemy, czego się spodziewać.',
            },
            {
                q: 'Czy otworzycie drzwi bez uszkodzenia zamka?',
                a: 'W większości przypadków tak – zatrzaśnięte drzwi i standardowe wkładki otwieramy bez wiercenia. Jeśli zamek jest uszkodzony lub ma wysoką klasę zabezpieczeń, przed rozpoczęciem pracy wyjaśniamy, co trzeba zrobić, i możemy od razu wymienić wkładkę.',
            },
            {
                q: 'Czy otwieracie też samochody?',
                a: 'Tak. Otwieramy samochody i bagażniki specjalistycznymi narzędziami, bez wybijania szyb i bez uszkadzania lakieru czy uszczelek. Zajmujemy się też regeneracją i wymianą stacyjki.',
            },
            {
                q: 'Jak zamówić ślusarza?',
                a: 'Zadzwoń pod numer +48 536 409 660 albo wypełnij formularz na tej stronie – oddzwonimy natychmiast.',
            },
        ],

        // Contact form section
        contactTitle: 'Potrzebujesz pomocy teraz?',
        contactSubtitle: 'Wypełnij formularz - skontaktujemy się natychmiast',

        // Form
        formName: 'Imię',
        formNamePlaceholder: 'Twoje imię',
        formPhone: 'Telefon',
        formPhonePlaceholder: '+48xxxxxxxxx',
        formAddress: 'Adres',
        formAddressPlaceholder: 'ul. Przykładowa 123',
        formCity: 'Miasto',
        formCityPlaceholder: 'Kraków',
        formGdpr: 'Wyrażam zgodę na przetwarzanie danych osobowych (RODO)',
        formSubmit: 'Wyślij zgłoszenie',
        formSubmitting: 'Wysyłanie...',
        formError: 'Błąd. Spróbuj ponownie.',
        formSuccess: 'Zgłoszenie wysłane pomyślnie!',

        // Footer
        footerText: `© ${new Date().getFullYear()} Locksmith Kraków. Wszelkie prawa zastrzeżone.`,
    },
    en: {
        // Header
        logoText: 'Locksmith',
        logoSubtext: 'Kraków',
        headerPhone: '+48 536 409 660',
        headerSlogan: 'Available 24/7',
        orderBtn: 'Order Service',

        // Hero
        heroTitle: '24/7 Locksmith in Kraków – Door & Car Opening',
        heroSubtitle: 'Emergency lockout service – fast, safe, professional',
        heroDescription: 'Locked out? Lost keys? Broken lock? We are at your service around the clock!',
        heroBtn: 'Order now',

        // Features
        featuresTitle: 'Why choose us?',
        feature1Title: '24/7 Availability',
        feature1Desc: 'We work around the clock, 7 days a week',
        feature2Title: 'Quick response',
        feature2Desc: 'We arrive within 30 minutes',
        feature3Title: 'Professionalism',
        feature3Desc: 'Experienced specialists with modern equipment',
        feature4Title: 'Transparent pricing',
        feature4Desc: 'Fair prices with no hidden fees',

        // Services
        servicesTitle: 'Our services',
        service1Title: 'Apartment opening',
        service1Desc: 'Opening entrance and interior doors',
        service2Title: 'Car opening',
        service2Desc: 'Opening doors and trunks without damage',
        service3Title: 'Ignition lock regeneration + replacement',
        service3Desc: 'Regeneration and replacement of ignition locks',
        service4Title: 'Lock and cylinder replacement',
        service4Desc: 'Replacing cylinders and locks in apartment and house doors',
        servicesNote: 'We also open all other types of locks and security devices – call us and ask.',

        // FAQ (тот же текст уходит в JSON-LD FAQPage при пререндере)
        faqTitle: 'Frequently asked questions',
        faq: [
            {
                q: 'How quickly can you get here?',
                a: 'We are usually on site within about 30 minutes of your call. We cover all districts of Kraków.',
            },
            {
                q: 'Which areas do you cover?',
                a: 'All of Kraków – every district: Stare Miasto (including Kazimierz), Grzegórzki, Prądnik Czerwony, Prądnik Biały, Krowodrza, Bronowice, Zwierzyniec, Dębniki, Łagiewniki-Borek Fałęcki, Swoszowice, Podgórze Duchackie, Bieżanów-Prokocim, Podgórze, Czyżyny, Mistrzejowice, Bieńczyce, Wzgórza Krzesławickie and Nowa Huta. We also travel to towns across the Małopolska region, including Wieliczka, Skawina, Zabierzów and Niepołomice.',
            },
            {
                q: 'Do you work at night, at weekends and on holidays?',
                a: 'Yes. We work 24 hours a day, 7 days a week – including nights, weekends and public holidays.',
            },
            {
                q: 'How much does it cost to open a door or a car?',
                a: 'The price depends on the type of lock and how difficult the job is. We tell you the price before we start – with no hidden fees. Call us and describe the situation, and we will tell you right away what to expect.',
            },
            {
                q: 'Can you open the door without damaging the lock?',
                a: 'In most cases, yes – slammed doors and standard cylinders are opened without drilling. If the lock is broken or has a high security rating, we explain what needs to be done before we start, and we can replace the cylinder on the spot.',
            },
            {
                q: 'Do you open cars too?',
                a: 'Yes. We open cars and boots with specialist tools, without breaking windows and without damaging the paintwork or seals. We also repair and replace ignition locks.',
            },
            {
                q: 'How do I book a locksmith?',
                a: 'Call +48 536 409 660 or fill in the form on this page – we will call you back immediately.',
            },
        ],

        // Contact form section
        contactTitle: 'Need help now?',
        contactSubtitle: 'Fill out the form - we will contact you immediately',

        // Form
        formName: 'Name',
        formNamePlaceholder: 'Your name',
        formPhone: 'Phone',
        formPhonePlaceholder: '+48xxxxxxxxx',
        formAddress: 'Address',
        formAddressPlaceholder: 'Example Street 123',
        formCity: 'City',
        formCityPlaceholder: 'Krakow',
        formGdpr: 'I consent to the processing of personal data (GDPR)',
        formSubmit: 'Submit request',
        formSubmitting: 'Submitting...',
        formError: 'Error. Please try again.',
        formSuccess: 'Request submitted successfully!',

        // Footer
        footerText: `© ${new Date().getFullYear()} Locksmith Kraków. All rights reserved.`,
    },
    uk: {
        // Header
        logoText: 'Locksmith',
        logoSubtext: 'Kraków',
        headerPhone: '+48 536 409 660',
        headerSlogan: 'Працюємо 24/7',
        orderBtn: 'Замовити послугу',

        // Hero
        heroTitle: 'Слюсар Краків 24/7 – Відкриття дверей і автомобілів',
        heroSubtitle: 'Аварійне відкриття замків – швидко, безпечно, професійно',
        heroDescription: 'Зачинилися двері? Загубили ключі? Зламався замок? Ми на зв’язку цілодобово!',
        heroBtn: 'Замовити зараз',

        // Features
        featuresTitle: 'Чому ми?',
        feature1Title: 'Цілодобово 24/7',
        feature1Desc: 'Працюємо цілодобово, 7 днів на тиждень',
        feature2Title: 'Швидкий приїзд',
        feature2Desc: 'Приїжджаємо протягом 30 хвилин',
        feature3Title: 'Професіоналізм',
        feature3Desc: 'Досвідчені майстри з сучасним обладнанням',
        feature4Title: 'Чесні ціни',
        feature4Desc: 'Прозорі ціни без прихованих доплат',

        // Services
        servicesTitle: 'Наші послуги',
        service1Title: 'Відкриття дверей і квартир',
        service1Desc: 'Відкриття вхідних і міжкімнатних дверей',
        service2Title: 'Відкриття автомобілів',
        service2Desc: 'Відкриття дверей і багажників без пошкоджень',
        service3Title: 'Ремонт і заміна замка запалювання',
        service3Desc: 'Відновлення та заміна замків запалювання',
        service4Title: 'Заміна замків і циліндрів',
        service4Desc: 'Заміна циліндрів і замків у дверях квартир і будинків',
        servicesNote: 'Також відкриваємо будь-які інші замки і захисні пристрої – зателефонуйте й запитайте.',

        // FAQ (тот же текст уходит в JSON-LD FAQPage при пререндере)
        faqTitle: 'Часті запитання',
        faq: [
            {
                q: 'Як швидко ви приїдете?',
                a: 'Зазвичай ми на місці приблизно за 30 хвилин після звернення. Приїжджаємо в усі райони Кракова.',
            },
            {
                q: 'Де ви працюєте?',
                a: 'По всьому Кракову – в усіх районах: Старе Місто (зокрема Казімєж), Гжегужки, Пронднік Червоний, Пронднік Білий, Кроводжа, Броновіце, Звежинець, Дембніки, Лагевники-Борек Фаленцький, Свошовіце, Подгуже Духацьке, Бежанув-Прокоцим, Подгуже, Чижини, Містшейовіце, Бєньчице, Взгужа Кшеславицькі та Нова Гута. Також приїжджаємо в міста Малопольського воєводства, зокрема Велічку, Скавіну, Забежув і Неполоміце.',
            },
            {
                q: 'Чи працюєте ви вночі, у вихідні та свята?',
                a: 'Так. Працюємо 24 години на добу, 7 днів на тиждень – також уночі, у вихідні та у свята.',
            },
            {
                q: 'Скільки коштує відкриття дверей або авто?',
                a: 'Ціна залежить від типу замка і складності роботи. Ми називаємо її до початку роботи – без прихованих доплат. Зателефонуйте й опишіть ситуацію, і ми одразу скажемо, чого очікувати.',
            },
            {
                q: 'Чи відкриєте ви двері без пошкодження замка?',
                a: 'Здебільшого так – захлопнуті двері і стандартні циліндри відкриваємо без свердління. Якщо замок пошкоджений або має високий клас захисту, ще до початку роботи пояснюємо, що потрібно зробити, і можемо одразу замінити циліндр.',
            },
            {
                q: 'Чи відкриваєте ви автомобілі?',
                a: 'Так. Відкриваємо автомобілі та багажники спеціальним інструментом, без розбивання скла і без пошкодження лаку чи ущільнювачів. Також ремонтуємо і замінюємо замки запалювання.',
            },
            {
                q: 'Як викликати слюсаря?',
                a: 'Зателефонуйте за номером +48 536 409 660 або заповніть форму на цій сторінці – ми одразу передзвонимо.',
            },
        ],

        // Contact form section
        contactTitle: 'Потрібна допомога зараз?',
        contactSubtitle: 'Заповніть форму – ми одразу зв’яжемося з вами',

        // Form
        formName: 'Ім’я',
        formNamePlaceholder: 'Ваше ім’я',
        formPhone: 'Телефон',
        formPhonePlaceholder: '+48xxxxxxxxx',
        formAddress: 'Адреса',
        formAddressPlaceholder: 'ul. Przykładowa 123',
        formCity: 'Місто',
        formCityPlaceholder: 'Kraków',
        formGdpr: 'Я погоджуюся на обробку персональних даних (RODO/GDPR)',
        formSubmit: 'Надіслати заявку',
        formSubmitting: 'Надсилання...',
        formError: 'Помилка. Спробуйте ще раз.',
        formSuccess: 'Заявку успішно надіслано!',

        // Footer
        footerText: `© ${new Date().getFullYear()} Locksmith Kraków. Усі права захищено.`,
    },
    ru: {
        // Header
        logoText: 'Locksmith',
        logoSubtext: 'Kraków',
        headerPhone: '+48 536 409 660',
        headerSlogan: 'Работаем 24/7',
        orderBtn: 'Заказать услугу',

        // Hero
        heroTitle: 'Слесарь Краков 24/7 – Вскрытие дверей и автомобилей',
        heroSubtitle: 'Аварийное вскрытие замков – быстро, безопасно, профессионально',
        heroDescription: 'Захлопнулась дверь? Потеряли ключи? Сломался замок? Мы на связи круглосуточно!',
        heroBtn: 'Заказать сейчас',

        // Features
        featuresTitle: 'Почему мы?',
        feature1Title: 'Круглосуточно 24/7',
        feature1Desc: 'Работаем круглосуточно, 7 дней в неделю',
        feature2Title: 'Быстрый приезд',
        feature2Desc: 'Приезжаем в течение 30 минут',
        feature3Title: 'Профессионализм',
        feature3Desc: 'Опытные мастера с современным оборудованием',
        feature4Title: 'Честные цены',
        feature4Desc: 'Прозрачные цены без скрытых доплат',

        // Services
        servicesTitle: 'Наши услуги',
        service1Title: 'Вскрытие дверей и квартир',
        service1Desc: 'Вскрытие входных и межкомнатных дверей',
        service2Title: 'Вскрытие автомобилей',
        service2Desc: 'Вскрытие дверей и багажников без повреждений',
        service3Title: 'Ремонт и замена замка зажигания',
        service3Desc: 'Восстановление и замена замков зажигания',
        service4Title: 'Замена замков и личинок',
        service4Desc: 'Замена личинок и замков в дверях квартир и домов',
        servicesNote: 'Также вскрываем любые другие замки и защитные устройства – позвоните и спросите.',

        // FAQ (тот же текст уходит в JSON-LD FAQPage при пререндере)
        faqTitle: 'Частые вопросы',
        faq: [
            {
                q: 'Как быстро вы приедете?',
                a: 'Обычно мы на месте примерно через 30 минут после обращения. Приезжаем во все районы Кракова.',
            },
            {
                q: 'Где вы работаете?',
                a: 'По всему Кракову – во всех районах: Старе Място (включая Казимеж), Гжегужки, Прондник Червоны, Прондник Бялы, Кроводжа, Броновице, Звежинец, Дембники, Лагевники-Борек Фаленцки, Свошовице, Подгуже Духацке, Бежанув-Прокоцим, Подгуже, Чижины, Мистшеёвице, Беньчице, Взгужа Кшеславицке и Нова Гута. Также приезжаем в города Малопольского воеводства, в том числе в Величку, Скавину, Забежув и Неполомице.',
            },
            {
                q: 'Работаете ли вы ночью, в выходные и праздники?',
                a: 'Да. Работаем 24 часа в сутки, 7 дней в неделю – в том числе ночью, в выходные и в праздники.',
            },
            {
                q: 'Сколько стоит вскрытие двери или машины?',
                a: 'Цена зависит от типа замка и сложности работы. Мы называем её до начала работы – без скрытых доплат. Позвоните и опишите ситуацию, и мы сразу скажем, чего ожидать.',
            },
            {
                q: 'Вскроете ли вы дверь без повреждения замка?',
                a: 'В большинстве случаев да – захлопнутые двери и стандартные личинки открываем без сверления. Если замок повреждён или имеет высокий класс защиты, ещё до начала работы объясняем, что нужно сделать, и можем сразу заменить личинку.',
            },
            {
                q: 'Вскрываете ли вы автомобили?',
                a: 'Да. Вскрываем автомобили и багажники специальным инструментом, без разбивания стёкол и без повреждения лака или уплотнителей. Также ремонтируем и меняем замки зажигания.',
            },
            {
                q: 'Как вызвать слесаря?',
                a: 'Позвоните по номеру +48 536 409 660 или заполните форму на этой странице – мы сразу перезвоним.',
            },
        ],

        // Contact form section
        contactTitle: 'Нужна помощь прямо сейчас?',
        contactSubtitle: 'Заполните форму – мы сразу свяжемся с вами',

        // Form
        formName: 'Имя',
        formNamePlaceholder: 'Ваше имя',
        formPhone: 'Телефон',
        formPhonePlaceholder: '+48xxxxxxxxx',
        formAddress: 'Адрес',
        formAddressPlaceholder: 'ul. Przykładowa 123',
        formCity: 'Город',
        formCityPlaceholder: 'Kraków',
        formGdpr: 'Я согласен на обработку персональных данных (RODO/GDPR)',
        formSubmit: 'Отправить заявку',
        formSubmitting: 'Отправка...',
        formError: 'Ошибка. Попробуйте ещё раз.',
        formSuccess: 'Заявка успешно отправлена!',

        // Footer
        footerText: `© ${new Date().getFullYear()} Locksmith Kraków. Все права защищены.`,
    },
};
