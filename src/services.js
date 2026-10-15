// Страницы услуг: тексты по языкам. Используются в ServicePage, Landing (ссылки из карточек),
// src/seo.js (список страниц для пререндера и sitemap).
//
// Секция: { heading, paragraphs?, list?, link? } — link: { to: '<ключ услуги>', label }.

export const serviceUi = {
    pl: {
        home: 'Strona główna',
        call: 'Zadzwoń',
        order: 'Zamów online',
        otherServices: 'Inne usługi',
        ctaTitle: 'Potrzebujesz ślusarza teraz?',
        ctaText: 'Działamy 24/7 na terenie całego Krakowa. Zadzwoń albo wypełnij formularz – oddzwonimy natychmiast.',
        stepsTitle: 'Jak to wygląda krok po kroku',
        steps: [
            'Dzwonisz albo wypełniasz formularz – opisujesz problem i podajesz adres.',
            'Od razu mówimy, od czego zależy cena i kiedy możemy być na miejscu.',
            'Przyjeżdżamy w ciągu około 30 minut – o każdej porze dnia i nocy.',
            'Na miejscu oceniamy zamek i podajemy cenę, zanim zaczniemy pracę.',
            'Wykonujemy usługę i razem z Tobą sprawdzamy, czy wszystko działa.',
        ],
    },
    en: {
        home: 'Home',
        call: 'Call now',
        order: 'Order online',
        otherServices: 'Other services',
        ctaTitle: 'Need a locksmith right now?',
        ctaText: 'We work 24/7 across all of Kraków. Call us or fill in the form – we will call you back immediately.',
        stepsTitle: 'How it works, step by step',
        steps: [
            'You call us or fill in the form – describe the problem and give us the address.',
            'We tell you right away what the price depends on and when we can be there.',
            'We arrive within about 30 minutes – at any time of day or night.',
            'On site we assess the lock and give you the price before we start.',
            'We do the job and check together with you that everything works.',
        ],
    },
    uk: {
        home: 'Головна',
        call: 'Зателефонувати',
        order: 'Замовити онлайн',
        otherServices: 'Інші послуги',
        ctaTitle: 'Потрібен слюсар просто зараз?',
        ctaText: 'Працюємо 24/7 по всьому Кракову. Зателефонуйте або заповніть форму – ми одразу передзвонимо.',
        stepsTitle: 'Як це відбувається крок за кроком',
        steps: [
            'Ви телефонуєте або заповнюєте форму – описуєте проблему і вказуєте адресу.',
            'Ми одразу кажемо, від чого залежить ціна і коли зможемо приїхати.',
            'Приїжджаємо приблизно за 30 хвилин – у будь-який час дня і ночі.',
            'На місці оцінюємо замок і називаємо ціну до початку роботи.',
            'Виконуємо роботу і разом з вами перевіряємо, що все працює.',
        ],
    },
    ru: {
        home: 'Главная',
        call: 'Позвонить',
        order: 'Заказать онлайн',
        otherServices: 'Другие услуги',
        ctaTitle: 'Нужен слесарь прямо сейчас?',
        ctaText: 'Работаем 24/7 по всему Кракову. Позвоните или заполните форму – мы сразу перезвоним.',
        stepsTitle: 'Как это происходит шаг за шагом',
        steps: [
            'Вы звоните или заполняете форму – описываете проблему и указываете адрес.',
            'Мы сразу говорим, от чего зависит цена и когда сможем приехать.',
            'Приезжаем примерно за 30 минут – в любое время дня и ночи.',
            'На месте оцениваем замок и называем цену до начала работы.',
            'Выполняем работу и вместе с вами проверяем, что всё работает.',
        ],
    },
};

export const services = {
    door: {
        icon: 'door',
        pages: {
            pl: {
                path: '/otwieranie-drzwi',
                name: 'Otwieranie drzwi',
                title: 'Otwieranie drzwi Kraków 24/7 – awaryjne otwieranie mieszkań',
                description: 'Zatrzaśnięte drzwi lub zgubione klucze? Otwieramy drzwi mieszkań i domów w Krakowie 24/7, w większości przypadków bez uszkodzenia zamka. Dojazd do 30 minut.',
                h1: 'Otwieranie drzwi i mieszkań w Krakowie 24/7',
                lead: 'Zatrzasnęły się drzwi, klucz złamał się w zamku albo zgubiłeś klucze? Przyjedziemy w ciągu 30 minut o każdej porze dnia i nocy – także w weekendy i święta – i otworzymy drzwi tak, aby zamek nadawał się do dalszego użytku, kiedy tylko jest to możliwe.',
                sections: [
                    {
                        heading: 'Kiedy warto nas wezwać',
                        list: [
                            'drzwi zatrzasnęły się, a klucze zostały w środku',
                            'klucze zginęły lub zostały skradzione',
                            'klucz złamał się albo utknął we wkładce',
                            'zamek się zaciął i nie reaguje na klucz',
                            'drzwi są zamknięte od środka, a w mieszkaniu został ktoś, kto nie może ich otworzyć',
                        ],
                        paragraphs: [
                            'Jeśli komuś w zamkniętym mieszkaniu grozi niebezpieczeństwo, najpierw zadzwoń pod numer alarmowy 112.',
                        ],
                    },
                    {
                        heading: 'Jak otwieramy drzwi',
                        paragraphs: [
                            'Najpierw oceniamy rodzaj drzwi i zamka. Zatrzaśnięte drzwi oraz większość standardowych wkładek otwieramy metodami bezinwazyjnymi – specjalistycznymi narzędziami, bez wiercenia i bez niszczenia drzwi.',
                            'Jeśli zamek jest uszkodzony albo ma wysoką klasę zabezpieczeń i nie da się go otworzyć bez ingerencji, przed rozpoczęciem pracy wyjaśniamy, co trzeba zrobić i ile to będzie kosztować. Na miejscu możemy też od razu wymienić wkładkę, żeby drzwi dało się bezpiecznie zamknąć.',
                        ],
                        link: { to: 'locks', label: 'Wymiana zamków i wkładek' },
                    },
                    {
                        heading: 'Bezpieczeństwo przede wszystkim',
                        paragraphs: [
                            'Otwieramy drzwi wyłącznie osobom, które mają prawo wejść do lokalu. Przed otwarciem prosimy o dokument tożsamości, a po wejściu – o potwierdzenie adresu, np. umowę najmu, rachunek lub zaświadczenie o zameldowaniu. To chroni Ciebie i Twoich sąsiadów.',
                        ],
                    },
                    {
                        heading: 'Ile kosztuje otwarcie drzwi?',
                        paragraphs: [
                            'Cena zależy od rodzaju drzwi i zamka oraz od stopnia trudności. Podajemy ją przed rozpoczęciem pracy – bez ukrytych opłat. Zadzwoń, opisz sytuację, a od razu powiemy, czego się spodziewać.',
                        ],
                    },
                    {
                        heading: 'Gdzie działamy',
                        paragraphs: [
                            'Dojeżdżamy do wszystkich dzielnic Krakowa – od Starego Miasta i Kazimierza, przez Podgórze, Krowodrzę i Bronowice, po Nową Hutę.',
                        ],
                    },
                ],
            },
            en: {
                path: '/en/door-opening',
                name: 'Door opening',
                title: 'Door Opening Kraków 24/7 – Emergency Lockout Service',
                description: 'Locked out or lost your keys? We open apartment and house doors in Kraków 24/7, in most cases without damaging the lock. On site within 30 minutes.',
                h1: 'Door and Apartment Opening in Kraków 24/7',
                lead: 'Door slammed shut, key broken in the lock or keys lost? We will be there within 30 minutes, day or night – weekends and holidays included – and open the door so that the lock can still be used whenever possible.',
                sections: [
                    {
                        heading: 'When to call us',
                        list: [
                            'the door has slammed shut with the keys inside',
                            'your keys have been lost or stolen',
                            'a key has broken off or got stuck in the cylinder',
                            'the lock has jammed and does not respond to the key',
                            'the door is locked from the inside and the person inside cannot open it',
                        ],
                        paragraphs: [
                            'If someone inside a locked apartment is in danger, call the emergency number 112 first.',
                        ],
                    },
                    {
                        heading: 'How we open doors',
                        paragraphs: [
                            'First we assess the type of door and lock. Slammed doors and most standard cylinders are opened non-destructively – with specialist tools, without drilling and without damaging the door.',
                            'If the lock is broken or has a high security rating and cannot be opened without intervention, we explain what needs to be done and how much it will cost before we start. We can also replace the cylinder on the spot, so the door can be locked securely straight away.',
                        ],
                        link: { to: 'locks', label: 'Lock and cylinder replacement' },
                    },
                    {
                        heading: 'Security comes first',
                        paragraphs: [
                            'We only open doors for people who have the right to enter the property. Before opening we ask for an ID, and once inside – for proof of address, such as a rental agreement, a utility bill or a registration certificate. This protects you and your neighbours.',
                        ],
                    },
                    {
                        heading: 'How much does it cost?',
                        paragraphs: [
                            'The price depends on the type of door and lock and on how difficult the job is. We tell you the price before we start – with no hidden fees. Call us, describe the situation and we will tell you right away what to expect.',
                        ],
                    },
                    {
                        heading: 'Where we work',
                        paragraphs: [
                            'We cover all districts of Kraków – from the Old Town and Kazimierz, through Podgórze, Krowodrza and Bronowice, to Nowa Huta.',
                        ],
                    },
                ],
            },
            uk: {
                path: '/ua/vidkryttia-dverei',
                name: 'Відкриття дверей',
                title: 'Відкриття дверей Краків 24/7 – аварійне відкриття квартир',
                description: 'Зачинилися двері або загубили ключі? Відкриваємо двері квартир і будинків у Кракові 24/7, здебільшого без пошкодження замка. Приїзд за 30 хвилин.',
                h1: 'Відкриття дверей і квартир у Кракові 24/7',
                lead: 'Двері зачинилися, ключ зламався в замку або ви загубили ключі? Ми приїдемо протягом 30 хвилин у будь-який час дня і ночі – також у вихідні та свята – і відкриємо двері так, щоб замком можна було користуватися далі, коли це можливо.',
                sections: [
                    {
                        heading: 'Коли варто нас викликати',
                        list: [
                            'двері зачинилися, а ключі залишилися всередині',
                            'ключі загубилися або їх викрали',
                            'ключ зламався або застряг у циліндрі',
                            'замок заклинило, і він не реагує на ключ',
                            'двері зачинені зсередини, а людина в квартирі не може їх відчинити',
                        ],
                        paragraphs: [
                            'Якщо комусь у зачиненій квартирі загрожує небезпека, спершу зателефонуйте на номер екстреної допомоги 112.',
                        ],
                    },
                    {
                        heading: 'Як ми відкриваємо двері',
                        paragraphs: [
                            'Спочатку оцінюємо тип дверей і замка. Захлопнуті двері та більшість стандартних циліндрів відкриваємо безпошкоджувальними методами – спеціальним інструментом, без свердління і без руйнування дверей.',
                            'Якщо замок пошкоджений або має високий клас захисту і відкрити його без втручання неможливо, ще до початку роботи пояснюємо, що потрібно зробити і скільки це коштуватиме. На місці можемо одразу замінити циліндр, щоб двері можна було надійно зачинити.',
                        ],
                        link: { to: 'locks', label: 'Заміна замків і циліндрів' },
                    },
                    {
                        heading: 'Безпека понад усе',
                        paragraphs: [
                            'Ми відкриваємо двері лише тим, хто має право увійти до приміщення. Перед відкриттям просимо документ, що посвідчує особу, а після входу – підтвердження адреси, наприклад договір оренди, рахунок або довідку про реєстрацію (meldunek). Це захищає вас і ваших сусідів.',
                        ],
                    },
                    {
                        heading: 'Скільки коштує відкриття дверей?',
                        paragraphs: [
                            'Ціна залежить від типу дверей і замка та від складності роботи. Ми називаємо її до початку роботи – без прихованих доплат. Зателефонуйте, опишіть ситуацію, і ми одразу скажемо, чого очікувати.',
                        ],
                    },
                    {
                        heading: 'Де ми працюємо',
                        paragraphs: [
                            'Приїжджаємо в усі райони Кракова – від Старого Міста і Казімежа, через Подгуже, Кроводжу і Броновіце, до Нової Гути.',
                        ],
                    },
                ],
            },
            ru: {
                path: '/ru/vskrytie-dverej',
                name: 'Вскрытие дверей',
                title: 'Вскрытие дверей Краков 24/7 – аварийное открытие квартир',
                description: 'Захлопнулась дверь или потеряли ключи? Вскрываем двери квартир и домов в Кракове 24/7, в большинстве случаев без повреждения замка. Приезд за 30 минут.',
                h1: 'Вскрытие дверей и квартир в Кракове 24/7',
                lead: 'Захлопнулась дверь, ключ сломался в замке или потерялись ключи? Мы приедем в течение 30 минут в любое время дня и ночи – в том числе в выходные и праздники – и откроем дверь так, чтобы замком можно было пользоваться дальше, когда это возможно.',
                sections: [
                    {
                        heading: 'Когда стоит нас вызвать',
                        list: [
                            'дверь захлопнулась, а ключи остались внутри',
                            'ключи потерялись или их украли',
                            'ключ сломался или застрял в личинке',
                            'замок заклинило, и он не реагирует на ключ',
                            'дверь закрыта изнутри, а человек в квартире не может её открыть',
                        ],
                        paragraphs: [
                            'Если кому-то в закрытой квартире угрожает опасность, сначала позвоните по номеру экстренной помощи 112.',
                        ],
                    },
                    {
                        heading: 'Как мы вскрываем двери',
                        paragraphs: [
                            'Сначала оцениваем тип двери и замка. Захлопнутые двери и большинство стандартных личинок открываем без повреждений – специальным инструментом, без сверления и без разрушения двери.',
                            'Если замок повреждён или имеет высокий класс защиты и открыть его без вмешательства невозможно, ещё до начала работы объясняем, что нужно сделать и сколько это будет стоить. На месте можем сразу заменить личинку, чтобы дверь можно было надёжно закрыть.',
                        ],
                        link: { to: 'locks', label: 'Замена замков и личинок' },
                    },
                    {
                        heading: 'Безопасность прежде всего',
                        paragraphs: [
                            'Мы открываем двери только тем, у кого есть право войти в помещение. Перед вскрытием просим документ, удостоверяющий личность, а после входа – подтверждение адреса, например договор аренды, счёт или справку о регистрации (meldunek). Это защищает вас и ваших соседей.',
                        ],
                    },
                    {
                        heading: 'Сколько стоит вскрытие двери?',
                        paragraphs: [
                            'Цена зависит от типа двери и замка и от сложности работы. Мы называем её до начала работы – без скрытых доплат. Позвоните, опишите ситуацию, и мы сразу скажем, чего ожидать.',
                        ],
                    },
                    {
                        heading: 'Где мы работаем',
                        paragraphs: [
                            'Приезжаем во все районы Кракова – от Старого города и Казимежа, через Подгуже, Кроводжу и Броновице, до Новой Гуты.',
                        ],
                    },
                ],
            },
        },
    },
    car: {
        icon: 'car',
        pages: {
            pl: {
                path: '/otwieranie-samochodow',
                name: 'Otwieranie samochodów',
                title: 'Otwieranie samochodów Kraków 24/7 – bez uszkodzeń',
                description: 'Kluczyki zatrzaśnięte w aucie albo zablokowany bagażnik? Otwieramy samochody w Krakowie 24/7 bez uszkodzeń zamka i lakieru. Dojazd do 30 minut.',
                h1: 'Otwieranie samochodów w Krakowie bez uszkodzeń',
                lead: 'Kluczyki zostały w środku, a drzwi się zatrzasnęły? Pilot przestał działać albo bagażnik nie chce się otworzyć? Przyjedziemy na miejsce – pod dom, na parking czy pod sklep – w ciągu 30 minut, 24 godziny na dobę.',
                sections: [
                    {
                        heading: 'Z czym najczęściej pomagamy',
                        list: [
                            'kluczyki zamknięte w samochodzie lub w bagażniku',
                            'rozładowany lub uszkodzony pilot',
                            'zamarznięty lub zablokowany zamek drzwi',
                            'zacięty bagażnik, który nie reaguje na przycisk ani kluczyk',
                        ],
                    },
                    {
                        heading: 'Jak pracujemy',
                        paragraphs: [
                            'Do otwierania samochodów używamy specjalistycznych narzędzi, dzięki którym dostajemy się do środka bez wybijania szyby i bez uszkadzania uszczelek, zamka czy lakieru. Metodę dobieramy do marki, modelu i rocznika auta.',
                            'Po otwarciu sprawdzamy razem z Tobą, czy drzwi i zamek działają prawidłowo.',
                        ],
                    },
                    {
                        heading: 'Nie otwieraj auta na własną rękę',
                        paragraphs: [
                            'Próby otwarcia drzwi wieszakiem, linijką czy śrubokrętem często kończą się porysowanym lakierem, rozdartą uszczelką albo uszkodzonym mechanizmem zamka. W nowszych autach łatwo też uszkodzić okablowanie w drzwiach lub uruchomić alarm. Naprawa takich szkód zwykle kosztuje więcej niż wezwanie fachowca.',
                        ],
                    },
                    {
                        heading: 'Jakie dokumenty są potrzebne',
                        paragraphs: [
                            'Przed otwarciem prosimy o dokument tożsamości, a po otwarciu – o potwierdzenie, że masz prawo korzystać z auta, np. dowód rejestracyjny. Często leży on w samochodzie, więc sprawdzamy go od razu po otwarciu drzwi.',
                        ],
                    },
                    {
                        heading: 'Problem ze stacyjką, a nie z drzwiami?',
                        paragraphs: [
                            'Jeśli drzwi otwierają się normalnie, ale kluczyk nie chce się przekręcić w zamku zapłonu albo się w nim zaciął, potrzebna jest naprawa stacyjki. Tym też się zajmujemy.',
                        ],
                        link: { to: 'ignition', label: 'Regeneracja i wymiana stacyjki' },
                    },
                    {
                        heading: 'Ile kosztuje otwarcie samochodu?',
                        paragraphs: [
                            'Koszt zależy od modelu samochodu i rodzaju zabezpieczeń. Podajemy cenę przez telefon albo na miejscu, zanim zaczniemy pracę – bez ukrytych opłat.',
                        ],
                    },
                ],
            },
            en: {
                path: '/en/car-opening',
                name: 'Car opening',
                title: 'Car Opening Kraków 24/7 – Car Lockout Without Damage',
                description: 'Keys locked in the car or the boot will not open? We open cars in Kraków 24/7 without damaging the lock or paintwork. On site within 30 minutes.',
                h1: 'Car Opening in Kraków Without Damage',
                lead: 'Keys left inside and the door has locked? Remote stopped working or the boot will not open? We will come to you – at home, in a car park or outside a shop – within 30 minutes, 24 hours a day.',
                sections: [
                    {
                        heading: 'What we help with most often',
                        list: [
                            'keys locked inside the car or in the boot',
                            'a flat or broken remote key',
                            'a frozen or jammed door lock',
                            'a stuck boot that does not respond to the button or the key',
                        ],
                    },
                    {
                        heading: 'How we work',
                        paragraphs: [
                            'We use specialist car-opening tools that get us inside without breaking a window and without damaging the seals, the lock or the paintwork. We choose the method according to the make, model and year of the car.',
                            'Once the car is open, we check together with you that the doors and lock work properly.',
                        ],
                    },
                    {
                        heading: 'Do not try to open the car yourself',
                        paragraphs: [
                            'Trying to open a door with a coat hanger, a ruler or a screwdriver often ends with scratched paint, a torn seal or a damaged lock mechanism. In newer cars it is also easy to damage the wiring inside the door or set off the alarm. Repairing that kind of damage usually costs more than calling a professional.',
                        ],
                    },
                    {
                        heading: 'Which documents you need',
                        paragraphs: [
                            'Before opening we ask for an ID, and after opening – for proof that you are entitled to use the car, such as the vehicle registration certificate. It is often kept in the car, so we check it as soon as the door is open.',
                        ],
                    },
                    {
                        heading: 'Problem with the ignition, not the doors?',
                        paragraphs: [
                            'If the doors open normally but the key will not turn in the ignition or has got stuck in it, the ignition lock needs repairing. We handle that too.',
                        ],
                        link: { to: 'ignition', label: 'Ignition lock repair and replacement' },
                    },
                    {
                        heading: 'How much does car opening cost?',
                        paragraphs: [
                            'The cost depends on the car model and the type of security. We give you the price over the phone or on site before we start – with no hidden fees.',
                        ],
                    },
                ],
            },
            uk: {
                path: '/ua/vidkryttia-avtomobiliv',
                name: 'Відкриття автомобілів',
                title: 'Відкриття автомобілів Краків 24/7 – без пошкоджень',
                description: 'Ключі зачинилися в авто або не відкривається багажник? Відкриваємо автомобілі в Кракові 24/7 без пошкодження замка і лаку. Приїзд за 30 хвилин.',
                h1: 'Відкриття автомобілів у Кракові без пошкоджень',
                lead: 'Ключі залишилися всередині, а двері зачинилися? Перестав працювати брелок або не відкривається багажник? Ми приїдемо на місце – до дому, на парковку чи до магазину – протягом 30 хвилин, цілодобово.',
                sections: [
                    {
                        heading: 'З чим ми допомагаємо найчастіше',
                        list: [
                            'ключі зачинені в салоні або в багажнику',
                            'розряджений або пошкоджений брелок',
                            'замерзлий або заблокований замок дверей',
                            'заклинений багажник, який не реагує ні на кнопку, ні на ключ',
                        ],
                    },
                    {
                        heading: 'Як ми працюємо',
                        paragraphs: [
                            'Для відкриття автомобілів використовуємо спеціальний інструмент, завдяки якому потрапляємо всередину без розбивання скла і без пошкодження ущільнювачів, замка чи лакофарбового покриття. Метод підбираємо під марку, модель і рік випуску авто.',
                            'Після відкриття разом з вами перевіряємо, чи правильно працюють двері та замок.',
                        ],
                    },
                    {
                        heading: 'Не відкривайте авто самотужки',
                        paragraphs: [
                            'Спроби відкрити двері вішаком, лінійкою чи викруткою часто закінчуються подряпаним лаком, розірваним ущільнювачем або пошкодженим механізмом замка. У новіших авто також легко пошкодити проводку в дверях або увімкнути сигналізацію. Ремонт таких пошкоджень зазвичай коштує дорожче, ніж виклик фахівця.',
                        ],
                    },
                    {
                        heading: 'Які документи потрібні',
                        paragraphs: [
                            'Перед відкриттям просимо документ, що посвідчує особу, а після відкриття – підтвердження, що ви маєте право користуватися авто, наприклад техпаспорт (dowód rejestracyjny). Часто він лежить в авто, тож перевіряємо його одразу після відкриття дверей.',
                        ],
                    },
                    {
                        heading: 'Проблема із замком запалювання, а не з дверима?',
                        paragraphs: [
                            'Якщо двері відчиняються нормально, але ключ не провертається в замку запалювання або застряг у ньому, потрібен ремонт замка запалювання. Цим ми теж займаємося.',
                        ],
                        link: { to: 'ignition', label: 'Ремонт і заміна замка запалювання' },
                    },
                    {
                        heading: 'Скільки коштує відкриття авто?',
                        paragraphs: [
                            'Вартість залежить від моделі автомобіля і типу захисту. Називаємо ціну по телефону або на місці до початку роботи – без прихованих доплат.',
                        ],
                    },
                ],
            },
            ru: {
                path: '/ru/vskrytie-avtomobilej',
                name: 'Вскрытие автомобилей',
                title: 'Вскрытие автомобилей Краков 24/7 – без повреждений',
                description: 'Ключи захлопнулись в машине или не открывается багажник? Вскрываем автомобили в Кракове 24/7 без повреждения замка и лака. Приезд за 30 минут.',
                h1: 'Вскрытие автомобилей в Кракове без повреждений',
                lead: 'Ключи остались внутри, а двери захлопнулись? Перестал работать брелок или не открывается багажник? Мы приедем на место – к дому, на парковку или к магазину – в течение 30 минут, круглосуточно.',
                sections: [
                    {
                        heading: 'С чем мы помогаем чаще всего',
                        list: [
                            'ключи закрыты в салоне или в багажнике',
                            'разряженный или повреждённый брелок',
                            'замёрзший или заблокированный замок двери',
                            'заклинивший багажник, который не реагирует ни на кнопку, ни на ключ',
                        ],
                    },
                    {
                        heading: 'Как мы работаем',
                        paragraphs: [
                            'Для вскрытия автомобилей используем специальный инструмент, благодаря которому попадаем внутрь без разбивания стекла и без повреждения уплотнителей, замка или лакокрасочного покрытия. Метод подбираем под марку, модель и год выпуска машины.',
                            'После вскрытия вместе с вами проверяем, правильно ли работают двери и замок.',
                        ],
                    },
                    {
                        heading: 'Не вскрывайте машину самостоятельно',
                        paragraphs: [
                            'Попытки открыть дверь вешалкой, линейкой или отвёрткой часто заканчиваются поцарапанным лаком, порванным уплотнителем или повреждённым механизмом замка. В новых машинах также легко повредить проводку в двери или включить сигнализацию. Ремонт таких повреждений обычно обходится дороже, чем вызов специалиста.',
                        ],
                    },
                    {
                        heading: 'Какие документы нужны',
                        paragraphs: [
                            'Перед вскрытием просим документ, удостоверяющий личность, а после – подтверждение, что вы имеете право пользоваться машиной, например техпаспорт (dowód rejestracyjny). Часто он лежит в машине, поэтому проверяем его сразу после открытия дверей.',
                        ],
                    },
                    {
                        heading: 'Проблема с замком зажигания, а не с дверями?',
                        paragraphs: [
                            'Если двери открываются нормально, но ключ не проворачивается в замке зажигания или застрял в нём, нужен ремонт замка зажигания. Этим мы тоже занимаемся.',
                        ],
                        link: { to: 'ignition', label: 'Ремонт и замена замка зажигания' },
                    },
                    {
                        heading: 'Сколько стоит вскрытие автомобиля?',
                        paragraphs: [
                            'Стоимость зависит от модели автомобиля и типа защиты. Называем цену по телефону или на месте до начала работы – без скрытых доплат.',
                        ],
                    },
                ],
            },
        },
    },
    ignition: {
        icon: 'key',
        pages: {
            pl: {
                path: '/regeneracja-stacyjki',
                name: 'Regeneracja stacyjki',
                title: 'Regeneracja i wymiana stacyjki Kraków – naprawa zamka zapłonu',
                description: 'Kluczyk nie przekręca się w stacyjce albo się zaciął? Regenerujemy i wymieniamy zamki zapłonu w Krakowie. Dojeżdżamy do klienta, cena przed rozpoczęciem pracy.',
                h1: 'Regeneracja i wymiana stacyjki w Krakowie',
                lead: 'Stacyjka, czyli zamek zapłonu, zużywa się latami – aż pewnego dnia kluczyk nie chce się przekręcić, zacina się albo nie da się go wyjąć. Zamiast od razu kupować nowy zamek, często wystarczy go zregenerować. Przyjedziemy do Twojego samochodu i ocenimy, które rozwiązanie ma sens.',
                sections: [
                    {
                        heading: 'Objawy zużytej stacyjki',
                        list: [
                            'kluczyk przekręca się z trudem albo tylko po kilku próbach',
                            'kluczyk zacina się lub nie da się go wyjąć',
                            'zamek obraca się bez oporu albo „przeskakuje”',
                            'kluczyk złamał się w stacyjce',
                            'zamek został uszkodzony podczas próby kradzieży',
                        ],
                    },
                    {
                        heading: 'Regeneracja czy wymiana?',
                        paragraphs: [
                            'Przy regeneracji rozbieramy zamek, czyścimy go i wymieniamy zużyte elementy – przede wszystkim zapadki, które ścierają się od wieloletniego używania kluczyka. Zregenerowana stacyjka znów działa płynnie, a Ty nadal korzystasz z dotychczasowego kluczyka.',
                            'Jeśli zamek jest zbyt zniszczony lub uszkodzony mechanicznie, proponujemy wymianę na nowy. Zawsze mówimy, co wybrać i dlaczego, zanim zaczniemy pracę.',
                        ],
                    },
                    {
                        heading: 'Nie czekaj, aż stacyjka się zablokuje',
                        paragraphs: [
                            'Zużyta stacyjka zwykle psuje się stopniowo, ale potrafi zablokować się w najmniej odpowiednim momencie – z kluczykiem w środku albo bez możliwości uruchomienia auta. Jeśli kluczyk zaczął chodzić ciężko, lepiej zareagować wcześniej.',
                            'Nie przekręcaj kluczyka na siłę i nie wlewaj do zamka przypadkowych smarów ani olejów – to często pogłębia uszkodzenie i utrudnia regenerację.',
                        ],
                    },
                    {
                        heading: 'Ile kosztuje naprawa stacyjki?',
                        paragraphs: [
                            'Cena zależy od marki i modelu samochodu oraz od tego, czy wystarczy regeneracja, czy potrzebna jest wymiana. Wycenę podajemy przed rozpoczęciem pracy – bez ukrytych opłat.',
                        ],
                    },
                    {
                        heading: 'Zatrzaśnięte drzwi auta?',
                        paragraphs: [
                            'Jeśli nie możesz dostać się do samochodu, zacznij od otwarcia drzwi – też to robimy, bez uszkodzeń.',
                        ],
                        link: { to: 'car', label: 'Otwieranie samochodów' },
                    },
                ],
            },
            en: {
                path: '/en/ignition-lock-repair',
                name: 'Ignition lock repair',
                title: 'Ignition Lock Repair & Replacement Kraków',
                description: 'Key will not turn in the ignition or keeps getting stuck? We repair and replace ignition locks in Kraków. We come to you and quote before we start.',
                h1: 'Ignition Lock Repair and Replacement in Kraków',
                lead: 'An ignition lock wears out over the years – until one day the key will not turn, keeps sticking or cannot be removed. Instead of buying a new lock straight away, a rebuild is often enough. We will come to your car and assess which option makes sense.',
                sections: [
                    {
                        heading: 'Signs of a worn ignition lock',
                        list: [
                            'the key turns with difficulty or only after several attempts',
                            'the key sticks or cannot be removed',
                            'the lock turns with no resistance or "slips"',
                            'the key has broken off in the ignition',
                            'the lock was damaged during an attempted theft',
                        ],
                    },
                    {
                        heading: 'Repair or replacement?',
                        paragraphs: [
                            'When rebuilding, we take the lock apart, clean it and replace the worn parts – above all the wafers, which wear down after years of using the key. A rebuilt ignition lock works smoothly again, and you keep using your existing key.',
                            'If the lock is too worn or mechanically damaged, we suggest replacing it with a new one. We always tell you which option to choose and why before we start.',
                        ],
                    },
                    {
                        heading: 'Do not wait until it locks up',
                        paragraphs: [
                            'A worn ignition lock usually fails gradually, but it can lock up at the worst possible moment – with the key stuck in it or with no way to start the car. If the key has started to feel stiff, it is better to act early.',
                            'Do not force the key and do not pour random lubricants or oils into the lock – this often makes the damage worse and the repair harder.',
                        ],
                    },
                    {
                        heading: 'How much does the repair cost?',
                        paragraphs: [
                            'The price depends on the make and model of the car and on whether a rebuild is enough or a replacement is needed. We give you a quote before we start – with no hidden fees.',
                        ],
                    },
                    {
                        heading: 'Locked out of your car?',
                        paragraphs: [
                            'If you cannot get into the car, start by opening the door – we do that too, without damage.',
                        ],
                        link: { to: 'car', label: 'Car opening' },
                    },
                ],
            },
            uk: {
                path: '/ua/remont-zamka-zapaliuvannia',
                name: 'Ремонт замка запалювання',
                title: 'Ремонт і заміна замка запалювання Краків',
                description: 'Ключ не провертається в замку запалювання або заїдає? Відновлюємо і замінюємо замки запалювання в Кракові. Приїжджаємо до клієнта, ціна – до початку роботи.',
                h1: 'Ремонт і заміна замка запалювання в Кракові',
                lead: 'Замок запалювання зношується роками – аж поки одного дня ключ не провертається, заїдає або його не вдається витягти. Замість одразу купувати новий замок, часто достатньо його відновити. Ми приїдемо до вашого авто й оцінимо, яке рішення має сенс.',
                sections: [
                    {
                        heading: 'Ознаки зношеного замка запалювання',
                        list: [
                            'ключ провертається важко або лише з кількох спроб',
                            'ключ заїдає або його не вдається витягти',
                            'замок провертається без опору або «проскакує»',
                            'ключ зламався в замку запалювання',
                            'замок пошкоджено під час спроби крадіжки',
                        ],
                    },
                    {
                        heading: 'Відновлення чи заміна?',
                        paragraphs: [
                            'Під час відновлення ми розбираємо замок, чистимо його і замінюємо зношені деталі – насамперед пластини (сувальди), які стираються від багаторічного користування ключем. Відновлений замок знову працює плавно, а ви й далі користуєтеся своїм ключем.',
                            'Якщо замок надто зношений або механічно пошкоджений, пропонуємо замінити його на новий. Ми завжди пояснюємо, що обрати і чому, ще до початку роботи.',
                        ],
                    },
                    {
                        heading: 'Не чекайте, поки замок заблокується',
                        paragraphs: [
                            'Зношений замок запалювання зазвичай псується поступово, але може заблокуватися в найневдаліший момент – із ключем усередині або без можливості завести авто. Якщо ключ почав провертатися важко, краще звернутися заздалегідь.',
                            'Не провертайте ключ силою і не заливайте в замок випадкові мастила чи оливи – це часто поглиблює пошкодження і ускладнює ремонт.',
                        ],
                    },
                    {
                        heading: 'Скільки коштує ремонт?',
                        paragraphs: [
                            'Ціна залежить від марки та моделі автомобіля і від того, чи достатньо відновлення, чи потрібна заміна. Вартість називаємо до початку роботи – без прихованих доплат.',
                        ],
                    },
                    {
                        heading: 'Зачинилися двері авто?',
                        paragraphs: [
                            'Якщо ви не можете потрапити в автомобіль, почніть із відкриття дверей – це ми теж робимо, без пошкоджень.',
                        ],
                        link: { to: 'car', label: 'Відкриття автомобілів' },
                    },
                ],
            },
            ru: {
                path: '/ru/remont-zamka-zazhiganiya',
                name: 'Ремонт замка зажигания',
                title: 'Ремонт и замена замка зажигания Краков',
                description: 'Ключ не проворачивается в замке зажигания или заедает? Восстанавливаем и меняем замки зажигания в Кракове. Приезжаем к клиенту, цену называем до начала работы.',
                h1: 'Ремонт и замена замка зажигания в Кракове',
                lead: 'Замок зажигания изнашивается годами – пока однажды ключ не перестаёт проворачиваться, начинает заедать или его не получается вынуть. Вместо того чтобы сразу покупать новый замок, часто достаточно его восстановить. Мы приедем к вашей машине и оценим, какое решение имеет смысл.',
                sections: [
                    {
                        heading: 'Признаки изношенного замка зажигания',
                        list: [
                            'ключ проворачивается с трудом или только с нескольких попыток',
                            'ключ заедает или его не получается вынуть',
                            'замок проворачивается без сопротивления или «проскакивает»',
                            'ключ сломался в замке зажигания',
                            'замок повреждён при попытке угона',
                        ],
                    },
                    {
                        heading: 'Восстановление или замена?',
                        paragraphs: [
                            'При восстановлении мы разбираем замок, чистим его и меняем изношенные детали – прежде всего пластины (сувальды), которые стираются от многолетнего использования ключа. Восстановленный замок снова работает плавно, а вы продолжаете пользоваться своим ключом.',
                            'Если замок слишком изношен или механически повреждён, предлагаем заменить его на новый. Мы всегда объясняем, что выбрать и почему, ещё до начала работы.',
                        ],
                    },
                    {
                        heading: 'Не ждите, пока замок заблокируется',
                        paragraphs: [
                            'Изношенный замок зажигания обычно портится постепенно, но может заблокироваться в самый неподходящий момент – с ключом внутри или без возможности завести машину. Если ключ начал проворачиваться туго, лучше обратиться заранее.',
                            'Не проворачивайте ключ силой и не заливайте в замок случайные смазки или масла – это часто усугубляет повреждение и усложняет ремонт.',
                        ],
                    },
                    {
                        heading: 'Сколько стоит ремонт?',
                        paragraphs: [
                            'Цена зависит от марки и модели автомобиля и от того, достаточно ли восстановления или нужна замена. Стоимость называем до начала работы – без скрытых доплат.',
                        ],
                    },
                    {
                        heading: 'Захлопнулись двери машины?',
                        paragraphs: [
                            'Если вы не можете попасть в автомобиль, начните со вскрытия дверей – это мы тоже делаем, без повреждений.',
                        ],
                        link: { to: 'car', label: 'Вскрытие автомобилей' },
                    },
                ],
            },
        },
    },
    locks: {
        icon: 'lock',
        pages: {
            pl: {
                path: '/wymiana-zamkow',
                name: 'Wymiana zamków',
                title: 'Wymiana zamków i wkładek Kraków – ślusarz 24/7',
                description: 'Zgubione klucze, przeprowadzka lub uszkodzony zamek? Wymieniamy zamki i wkładki w drzwiach w Krakowie. Doradzimy, jaką klasę zabezpieczeń wybrać.',
                h1: 'Wymiana zamków i wkładek w drzwiach – Kraków',
                lead: 'Zamek to pierwsza linia ochrony Twojego domu. Wymieniamy wkładki i zamki w drzwiach mieszkań, domów i biur na terenie całego Krakowa – szybko i czysto, a w nagłych sytuacjach także w nocy i w weekendy.',
                sections: [
                    {
                        heading: 'Kiedy warto wymienić zamek',
                        list: [
                            'po zgubieniu lub kradzieży kluczy',
                            'po przeprowadzce – nie wiesz, kto jeszcze ma klucze do mieszkania',
                            'po próbie włamania lub uszkodzeniu zamka',
                            'gdy klucz chodzi ciężko, zacina się albo zamek się blokuje',
                            'po awaryjnym otwarciu drzwi, jeśli wkładkę trzeba było usunąć',
                        ],
                    },
                    {
                        heading: 'Wkładka czy cały zamek?',
                        paragraphs: [
                            'W większości drzwi wystarczy wymiana samej wkładki (bębenka) – to szybka operacja, po której stare klucze przestają działać. Wymiana całego zamka jest potrzebna, gdy uszkodzony jest mechanizm wewnątrz drzwi, rygle się blokują albo chcesz podnieść poziom zabezpieczeń.',
                        ],
                    },
                    {
                        heading: 'Jaką wkładkę wybrać?',
                        paragraphs: [
                            'Wkładki różnią się klasą zabezpieczeń i odpornością na metody włamania, takie jak wyłamywanie, rozwiercanie czy otwieranie wytrychem. Do drzwi wejściowych warto wybrać wkładkę o podwyższonej klasie, najlepiej z kartą kodową, dzięki której dodatkowe klucze dorobi tylko uprawniony punkt.',
                            'Pomożemy dobrać rozwiązanie do Twoich drzwi i budżetu – bez wciskania niepotrzebnie drogich zamków.',
                        ],
                    },
                    {
                        heading: 'Po wymianie',
                        paragraphs: [
                            'Dostajesz komplet nowych kluczy, a stare przestają pasować. Sprawdzamy, czy zamek pracuje lekko zarówno przy otwartych, jak i zamkniętych drzwiach, i podpowiadamy, jak dbać o wkładkę, żeby służyła jak najdłużej.',
                        ],
                    },
                    {
                        heading: 'Ile kosztuje wymiana zamka?',
                        paragraphs: [
                            'Na cenę wpływa rodzaj wkładki lub zamka oraz zakres pracy. Przed wymianą przedstawiamy dostępne opcje i ich koszt – bez ukrytych opłat.',
                        ],
                    },
                    {
                        heading: 'Zatrzasnąłeś drzwi?',
                        paragraphs: [
                            'Jeśli nie możesz wejść do mieszkania, najpierw otworzymy drzwi, a potem – jeśli trzeba – od razu wymienimy zamek.',
                        ],
                        link: { to: 'door', label: 'Otwieranie drzwi' },
                    },
                ],
            },
            en: {
                path: '/en/lock-replacement',
                name: 'Lock replacement',
                title: 'Lock & Cylinder Replacement Kraków – 24/7 Locksmith',
                description: 'Lost keys, moving house or a broken lock? We replace door locks and cylinders in Kraków and help you choose the right security grade.',
                h1: 'Door Lock and Cylinder Replacement in Kraków',
                lead: 'A lock is the first line of protection for your home. We replace cylinders and locks in apartment, house and office doors all over Kraków – quickly and cleanly, and in emergencies also at night and at weekends.',
                sections: [
                    {
                        heading: 'When to replace a lock',
                        list: [
                            'after your keys have been lost or stolen',
                            'after moving in – you do not know who else has keys to the apartment',
                            'after an attempted break-in or damage to the lock',
                            'when the key is stiff, sticks or the lock jams',
                            'after an emergency opening, if the cylinder had to be removed',
                        ],
                    },
                    {
                        heading: 'Cylinder or the whole lock?',
                        paragraphs: [
                            'For most doors, replacing just the cylinder is enough – a quick job, after which the old keys stop working. Replacing the whole lock is needed when the mechanism inside the door is damaged, the bolts jam, or you want to raise the level of security.',
                        ],
                    },
                    {
                        heading: 'Which cylinder to choose?',
                        paragraphs: [
                            'Cylinders differ in security grade and resistance to break-in methods such as snapping, drilling or picking. For a front door it is worth choosing a higher-grade cylinder, ideally with a key code card, so that extra keys can only be cut by an authorised outlet.',
                            'We will help you find a solution that fits your door and budget – without pushing unnecessarily expensive locks.',
                        ],
                    },
                    {
                        heading: 'After the replacement',
                        paragraphs: [
                            'You get a set of new keys, and the old ones no longer fit. We check that the lock works smoothly with the door both open and closed, and give you tips on looking after the cylinder so it lasts as long as possible.',
                        ],
                    },
                    {
                        heading: 'How much does lock replacement cost?',
                        paragraphs: [
                            'The price depends on the type of cylinder or lock and the scope of work. Before replacing anything we present the available options and their cost – with no hidden fees.',
                        ],
                    },
                    {
                        heading: 'Locked out?',
                        paragraphs: [
                            'If you cannot get into your apartment, we will open the door first and then – if needed – replace the lock straight away.',
                        ],
                        link: { to: 'door', label: 'Door opening' },
                    },
                ],
            },
            uk: {
                path: '/ua/zamina-zamkiv',
                name: 'Заміна замків',
                title: 'Заміна замків і циліндрів Краків – слюсар 24/7',
                description: 'Загубили ключі, переїхали або зламався замок? Замінюємо замки і циліндри в дверях у Кракові. Допоможемо обрати потрібний клас захисту.',
                h1: 'Заміна замків і циліндрів у дверях – Краків',
                lead: 'Замок – перша лінія захисту вашого дому. Замінюємо циліндри і замки в дверях квартир, будинків і офісів по всьому Кракову – швидко й акуратно, а в екстрених випадках також уночі та у вихідні.',
                sections: [
                    {
                        heading: 'Коли варто замінити замок',
                        list: [
                            'після втрати або крадіжки ключів',
                            'після переїзду – ви не знаєте, у кого ще є ключі від квартири',
                            'після спроби зламу або пошкодження замка',
                            'коли ключ провертається важко, заїдає або замок блокується',
                            'після аварійного відкриття дверей, якщо циліндр довелося видалити',
                        ],
                    },
                    {
                        heading: 'Циліндр чи весь замок?',
                        paragraphs: [
                            'У більшості дверей достатньо замінити лише циліндр (личинку) – це швидка операція, після якої старі ключі перестають працювати. Заміна всього замка потрібна, коли пошкоджено механізм усередині дверей, блокуються ригелі або ви хочете підвищити рівень захисту.',
                        ],
                    },
                    {
                        heading: 'Який циліндр обрати?',
                        paragraphs: [
                            'Циліндри відрізняються класом захисту і стійкістю до методів зламу, таких як вибивання, висвердлювання чи відкриття відмичкою. Для вхідних дверей варто обрати циліндр підвищеного класу, найкраще з кодовою карткою, завдяки якій додаткові ключі виготовить лише авторизований пункт.',
                            'Допоможемо підібрати рішення під ваші двері та бюджет – без нав’язування невиправдано дорогих замків.',
                        ],
                    },
                    {
                        heading: 'Після заміни',
                        paragraphs: [
                            'Ви отримуєте комплект нових ключів, а старі більше не підходять. Перевіряємо, чи замок працює легко як при відчинених, так і при зачинених дверях, і підказуємо, як доглядати за циліндром, щоб він прослужив якомога довше.',
                        ],
                    },
                    {
                        heading: 'Скільки коштує заміна замка?',
                        paragraphs: [
                            'На ціну впливає тип циліндра або замка та обсяг роботи. Перед заміною пропонуємо доступні варіанти та їхню вартість – без прихованих доплат.',
                        ],
                    },
                    {
                        heading: 'Зачинилися двері?',
                        paragraphs: [
                            'Якщо ви не можете потрапити до квартири, спершу відкриємо двері, а потім – якщо потрібно – одразу замінимо замок.',
                        ],
                        link: { to: 'door', label: 'Відкриття дверей' },
                    },
                ],
            },
            ru: {
                path: '/ru/zamena-zamkov',
                name: 'Замена замков',
                title: 'Замена замков и личинок Краков – слесарь 24/7',
                description: 'Потеряли ключи, переехали или сломался замок? Меняем замки и личинки в дверях в Кракове. Поможем выбрать нужный класс защиты.',
                h1: 'Замена замков и личинок в дверях – Краков',
                lead: 'Замок – первая линия защиты вашего дома. Меняем личинки и замки в дверях квартир, домов и офисов по всему Кракову – быстро и аккуратно, а в экстренных случаях также ночью и в выходные.',
                sections: [
                    {
                        heading: 'Когда стоит заменить замок',
                        list: [
                            'после потери или кражи ключей',
                            'после переезда – вы не знаете, у кого ещё есть ключи от квартиры',
                            'после попытки взлома или повреждения замка',
                            'когда ключ проворачивается туго, заедает или замок блокируется',
                            'после аварийного вскрытия двери, если личинку пришлось удалить',
                        ],
                    },
                    {
                        heading: 'Личинка или весь замок?',
                        paragraphs: [
                            'В большинстве дверей достаточно заменить только личинку (цилиндр) – это быстрая операция, после которой старые ключи перестают работать. Замена всего замка нужна, когда повреждён механизм внутри двери, блокируются ригели или вы хотите повысить уровень защиты.',
                        ],
                    },
                    {
                        heading: 'Какую личинку выбрать?',
                        paragraphs: [
                            'Личинки отличаются классом защиты и устойчивостью к методам взлома, таким как вырывание, высверливание или вскрытие отмычкой. Для входной двери стоит выбрать личинку повышенного класса, лучше всего с кодовой картой, благодаря которой дополнительные ключи изготовит только авторизованная мастерская.',
                            'Поможем подобрать решение под вашу дверь и бюджет – без навязывания неоправданно дорогих замков.',
                        ],
                    },
                    {
                        heading: 'После замены',
                        paragraphs: [
                            'Вы получаете комплект новых ключей, а старые больше не подходят. Проверяем, легко ли работает замок как при открытой, так и при закрытой двери, и подсказываем, как ухаживать за личинкой, чтобы она прослужила как можно дольше.',
                        ],
                    },
                    {
                        heading: 'Сколько стоит замена замка?',
                        paragraphs: [
                            'На цену влияет тип личинки или замка и объём работы. Перед заменой предлагаем доступные варианты и их стоимость – без скрытых доплат.',
                        ],
                    },
                    {
                        heading: 'Захлопнулась дверь?',
                        paragraphs: [
                            'Если вы не можете попасть в квартиру, сначала вскроем дверь, а затем – если нужно – сразу заменим замок.',
                        ],
                        link: { to: 'door', label: 'Вскрытие дверей' },
                    },
                ],
            },
        },
    },
};

export const servicePath = (key, lang) => services[key].pages[lang].path;
