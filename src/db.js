export const exercises = [
    {
        id: 'ffbfcf27-a0fb-428b-9971-8750a0124017',
        text: "<i>Asosiy</i>. Dasturga berilgan ma'lumotni chop eting.",
        tests: [
            { input: "Assalomu alaykum", output: "Assalomu alaykum" },
            { input: "Hayrli tong", output: "Hayrli tong" },
            { input: "Taqvim, uchar, ohangrabo, unsur, riyoziyot.", output: "Taqvim, uchar, ohangrabo, unsur, riyoziyot." },
        ],
        example: {
            24: `kiritilgan_malumot = input()
print(kiritilgan_malumot)`,
        }
    },
    {
        id: '2cf9f012-dfb9-4343-a703-3759845112ce',
        text: "<i>Asosiy</i>. Foydalanuvchidan oylik maoshini so'rang. Yiliga topadigan pulini hisoblab bering.",
        tests: [
            { input: "100000", output: "1200000" },
            { input: "800000", output: "9600000" },
            { input: "3500000", output: "42000000" },
        ],
        example: {
            24: `kiritilgan_malumot = input()
print(kiritilgan_malumot * 12)`,   
        }
    },
    {
        id: 'aa6b138f-b342-49eb-867c-3cfa96c4dda1',
        text: "<i>Asosiy</i>. Foydalanuvchidan oylik maoshini so'rang. Yiliga topadigan pulini hisoblab bering. 25% soliqni inobatga oling.",
        tests: [
            { input: "100000", output: "900000" },
            { input: "800000", output: "7200000" },
            { input: "3500000", output: "31500000" },
        ],
        example: {    
            24: `kiritilgan_malumot = input()
print(kiritilgan_malumot * 12 * 0.75)`,
        }
    },
    {
        id: '6b791c6a-f93b-446f-968e-c07fee49ad58',
        text: "<i>Asosiy</i>. Foydalanuvchidan oylik maoshini so'rang. Foydalanuvchi 90% oylik maoshini sarflaydi. Yiliga saqlab qoladigan pulini hisoblab bering.",
        tests: [
            { input: "100000", output: "120000" },
            { input: "800000", output: "960000" },
            { input: "3500000", output: "4200000" },
        ],
        example: {
            24: `kiritilgan_malumot = input()
print(kiritilgan_malumot * 12 * 0.1)`,
        }
    },
    {
        id: '4e36353c-8ff1-4a7b-9c17-2626b806b9e1',
        text: "<i>Asosiy</i>. Foydalanuvchidan oylik maoshini so'rang. Foydalanuvchi 90% oylik maoshini sarflaydi. Yiliga saqlab qoladigan pulini hisoblab bering. 25% soliqni inobatga oling.",
        tests: [
            { input: "100000", output: "90000" },
            { input: "800000", output: "720000" },
            { input: "3500000", output: "3150000" },
        ],
        example: {
            24: `kiritilgan_malumot = input()
print(kiritilgan_malumot * 12 * 0.1 * 0.75)`,
        }
    },
    {
        id: '1110c285-8da4-488d-9ba4-baa9e0179434',
        text: `<i>Agar</i>. Foydalanuvchidan yoshini so'rang. Yoshi 59 dan yuqori bo'lsa, unga <code>Qarisiz!</code> deb yozing.<br>
            Yoshi 59 dan kichik, yoki teng bo'lsa <code>Yoshsiz!</code> deb chiqaring.`,
        tests: [
            { input: "50", output: "Yoshsiz!" },
            { input: "60", output: "Qarisiz!" },
            { input: "59", output: "Yoshsiz!" },
        ],
        example: {}
    },
    {
        id: '9f75f9b3-31c2-4fb1-89ba-c8f670f96ae3',
        text: `<i>Agar</i>. Foydalanuvchidan somsani narxini so'rang. 4000 yoki qimmatroq bo'lsa, unga <code>Qimmat!</code> deb yozing.<br>
            4000 dan arzonroq bo'lsa <code>Arzon!</code> deb chiqaring.`,
        tests: [
            { input: "4000", output: "Qimmat!" },
            { input: "60", output: "Arzon!" },
            { input: "98500", output: "Qimmat!" },
        ],
        example: {}
    },
    {
        id: '8d590c51-4385-48e9-b84e-9af95da45369',
        text: `<i>Agar</i>. Foydalanuvchidan ismini so'rang. <code>Ali</code> bo'lsa, unga <code>Sizga kirish mumkin emas!</code> deb yozing.<br>
            Boshqa ism bo'lsa, hech narsani yozmang.`,
        tests: [
            { input: "Ali", output: "Sizga kirish mumkin emas!" },
            { input: "Toshmat", output: "" },
            { input: "Pishloq", output: "" },
        ],
        example: {}
    },
    {
        id: 'f0c58b36-3a28-488e-8e69-079130475493',
        text: `<i>Agar</i>. Foydalanuvchidan sir so'zni so'rang. <code>achchiqpishloq</code> deb kiritsa, <code>Xush kelibsiz, ma'mur</code> deb yozing.
            Boshqa narsani kiritsa, <code>Kirish xatoligi</code> deb yozing.`,
        tests: [
            { input: "achchiqpishloq", output: "Xush kelibsiz, ma'mur" },
            { input: "bir ikki uch tort", output: "Kirish xatoligi" },
            { input: "pishloq", output: "Kirish xatoligi" },
        ],
        example: {}
    },
    {
        id: 'a93cf0ce-50a9-48d1-be94-5d17142866c2',
        text: `<i>Agar</i>. Foydalanuvchidan yoshini so'rang. Yoshi 50 dan yuqori bo'lsa, unga <code>Qarisiz!</code> deb yozing.<br>
            Yoshi 50 dan kichik bo'lsa <code>Yoshsiz!</code> deb chiqaring. Yoshi 50 bo'lsa <code>Yoshingiz o'rtacha</code> deb yozing.`,
        tests: [
            { input: "50", output: "Yoshingiz o'rtacha" },
            { input: "60", output: "Qarisiz!" },
            { input: "59", output: "Yoshsiz!" },
        ],
        example: {}
    },
    {
        id: '6efedf6e-541c-4594-8628-c06e5d292a1a',
        text: `<i>Agar</i>. Foydalanuvchidan somsani narxini so'rang. 4000 dan qimmatroq bo'lsa, unga <code>Qimmat!</code> deb yozing.<br>
            4000 dan arzonroq bo'lsa <code>Arzon!</code> deb chiqaring. 4000 ming bo'lsa <code>Bo'laveradi</code> deb yozing.`,
        tests: [
            { input: "4000", output: "Bo'laveradi" },
            { input: "60", output: "Arzon!" },
            { input: "98500", output: "Qimmat!" },
        ],
        example: {}
    },
    {
        id: '5aa155b7-d16e-4c48-91c6-56774b4b1d00',
        text: `<i>Agar</i>. Foydalanuvchidan sir so'zni so'rang. <code>achchiqqpishloq</code> deb kiritsa, <code>Xush kelibsiz, ma'mur</code> deb yozing.
            <code>zanjabil</code> dev kiritsa, <code>Assalomu alaykum muharrir</code> unga deb yozish kerak. 
            Boshqa narsani kiritsa, hech narsani yozish kerak emas.`,
        tests: [
            { input: "achchiqqpishloq", output: "Xush kelibsiz, ma'mur" },
            { input: "zanjabil", output: "Assalomu alaykum muharrir" },
            { input: "pishloq", output: "" },
        ],
        example: {}
    },
    {
        id: '592e07cc-0a16-45c5-abf7-c900d77e41a8',
        text: `<i>Agar</i>. Foydalanuvchidan ismini so'rang. <code>Ali</code> bo'lsa, unga <code>Sizga kirish mumkin emas!</code> deb yozing.<br>
            <code>Bobur</code> bo'lsa, <code>Siz faqat o'qiy olasiz!</code> deb yozing. Boshqa ism bo'lsa, hech narsani yozmang.`,
        tests: [
            { input: "Ali", output: "Sizga kirish mumkin emas!" },
            { input: "Bobur", output: "Siz faqat o'qiy olasiz!" },
            { input: "Pishloq", output: "" },
        ],
        example: {}
    },
    {
        id: '20509758-0a32-4fe9-b035-f08934804cf7',
        text: `<i>Agar</i>. Foydalanuvchidan oylik maoshini so'rang va soliqni inobatga olishni yoki olmaslikni so'rang. Yiliga topadigan pulini hisoblab bering.
        <pre><code>
800000
ha
        </code></pre> deb kiritsa, demak oylik maoshi 800000 ga teng, va soliqni inobadga olish kerak.
        <pre><code>
1000000
yo'q
        </code></pre> deb kiritsa, demak oylik maoshi 1000000 ga teng, va soliqni inobadga olish kerak emas.`,
        tests: [
            { input: "100000\nha", output: "900000" },
            { input: "800000\nyo'q", output: "9600000" },
            { input: "3500000\nha", output: "31500000" },
        ],
        example: {}
    },
    {
        id: 'ca0988bb-5409-4bb8-93f6-eac553a3bdc2',
        text: `<i>Agar</i>. Foydalanuvchidan oylik maoshini so'rang va soliqni inobatga olishni yoki olmaslikni so'rang. Foydalanuvchi 90% oylik maoshini sarflaydi. Yiliga saqlaydigan pulini hisoblab bering.
        <pre><code>
800000
ha
        </code></pre> deb kiritsa, demak oylik maoshi 800000 ga teng, va soliqni inobadga olish kerak.
        <pre><code>
1000000
yo'q
        </code></pre> deb kiritsa, demak oylik maoshi 1000000 ga teng, va soliqni inobadga olish kerak emas.`,
        tests: [
            { input: "100000\nha", output: "90000" },
            { input: "800000\nyo'q", output: "960000" },
            { input: "3500000\nha", output: "3150000" },
        ],
        example: {}
    },
    {
        id: 'dbc169aa-0f16-4d32-9a1c-68d8c06e4a3f',
        text: `<i>Agar</i>. Foydalanuvchidan pulni so'rang va valyutani so'rang. Va kiritgan miqdorini boshqa valyutaga aylantirib bering.
        <pre><code>
5
dollar
        </code></pre> deb kiritsa, demak 5 dollarni so'mga aylantirish kerak. Demak <code>42500</code> deb chiqarib bershingiz kerak (1 dollar 8500 so'm deymiz).
        <pre><code>
8500
so'm
        </code></pre> deb kiritsa, demak 8500 so'mni dollarga aylantirish kerak. Demak <code>1</code> deb chiqarib berasiz.`,
        tests: [
            { input: "5\ndollar", output: "42500" },
            { input: "8500\nso'm", output: "1" },
            { input: "3500000\nso'm", output: "412" },
        ],
        example: {}
    },
    {
        id: '88ec0b10-258f-4a39-a600-564da8a480d7',
        text: `<i>Agar</i>. Foydalanuvchidan moshinaning nomini so'rang va moshina yurayatgan vaqtini so'rang (soatlarda). Va unga moshina
            bosib o'tgan masofani chiqarib bering.
            <ul>
              <li>spark - 80 km soatiga</li>
              <li>tico - 70 km soatiga</li>
              <li>zaparoj - 60 km soatiga</li>
            </li>
              `,
        tests: [
            { input: "tico\n3", output: "210 km" },
            { input: "zaparoj\n2", output: "120 km" },
            { input: "zaparoj\n4", output: "240 km" },
        ],
        example: {}
    },
    {
        id: '392ed14b-fb86-4755-aab7-b72556f1576d',
        text: `<i>Agar</i>. Foydalanuvchidan taomning nomini so'rang. Va unga taomning narxini chiqarib bering.
            <ul>
              <li>osh - 15000 so'm</li>
              <li>somsa - 3500 so'm</li>
              <li>gumma - 2500 so'm</li>
            </li>
              `,
        tests: [
            { input: "osh", output: "15000 so'm" },
            { input: "somsa", output: "3500 so'm" },
            { input: "gumma", output: "2500 so'm" },
        ],
        example: {}
    },
    {
        id: 'acca1367-345f-4853-8033-884cc12b259f',
        text: `<i>Agar</i>. Foydalanuvchidan 3 marta taomning nomini so'rang. Va unga tanlangan taomlarning
            umumiy narxini chiqarib bering.
            <ul>
              <li>osh - 15000 so'm</li>
              <li>somsa - 3500 so'm</li>
              <li>gumma - 2500 so'm</li>
            </li>
              `,
        tests: [
            { input: "osh\nosh\nsomsa", output: "33500 so'm" },
            { input: "somsa\ngumma\nsomsa", output: "9500 so'm" },
            { input: "gumma\nosh\nsomsa", output: "21000 so'm" },
        ],
        example: {}
    },
    {
        id: 'b582cbb0-7920-441d-b460-5941c823e1b6',
        text: `<i>Agar</i>. Foydalanuvchidan 3 marta taomning nomini so'rang. Va unga tanlangan taomlarning
            umumiy narxini chiqarib bering. Xizmatchiga beriladigan 10% ni inobatga oling.
            <ul>
              <li>osh - 15000 so'm</li>
              <li>somsa - 3500 so'm</li>
              <li>gumma - 2500 so'm</li>
            </li>
              `,
        tests: [
            { input: "osh\nosh\nsomsa", output: "36850 so'm" },
            { input: "somsa\ngumma\nsomsa", output: "10450 so'm" },
            { input: "gumma\nosh\nsomsa", output: "23100 so'm" },
        ],
        example: {}
    },
    {
        id: '41b0518c-0a75-434f-b575-920bdc79af58',
        text: `<i>Agar</i>. Foydalanuvchidan joyni so'rang. Va unga u joyga boradigan avtobuslarni ko'rsating.
            <ul>
              <li>chorsu - 2342, 431, 3231</li>
              <li>parkent bozori - 3234, 642, 123</li>
              <li>oloy bozori - 953, 23, 123</li>
            </li>
              `,
        tests: [
            { input: "chorsu", output: "2342, 431, 3231" },
            { input: "parkent bozori", output: "3234, 642, 123" },
            { input: "oloy bozori", output: "953, 23, 123" },
        ],
        example: {}
    },
    {
        id: '6f736e74-94d2-4ab4-96ec-175a60b4954d',
        text: `<i>Agar</i>. Dasturga "salomlashish" satr berilsa "Assalomu alaykum!" chop eting.
            Dasturga 'hayrlashish' satr berilgan bo'lsa "Sog' bo'ling" chop eting.`,
        tests: [
            { input: "salomlashish", output: "Assalomu alaykum!" },
            { input: "hayrlashish", output: "Sog' bo'ling" },
        ],
        example: {}
    },
    {
        id: '2ad1aa8f-ba9c-4faa-85ba-cc4d6b5416ec',
        text: `<i>Agar</i>. Dasturga ism berilsa, u taklifnomani chop etishi kerak.`,
        tests: [
            {
                input: "Kamollidin",
                output: "Assalomu alaykum xurmatli Kamollidin! Sizni mehmonga taklif kilyapmiz. Kamollidin, sizni kutamiz."
            },
            {
                input: "Akmal",
                output: "Assalomu alaykum xurmatli Akmal! Sizni mehmonga taklif kilyapmiz. Akmal, sizni kutamiz."
            },
        ],
        example: {}
    },
    {
        id: 'd0158124-3702-4ff2-9ebc-689a6b7c21e5',
        text: `<i>Davr</i>. "Davrdan foydalanib "Assalomu alaykum" ni 10 marta chop eting.`,
        tests: [
            { input: "", output: "Assalomu alaykum\nAssalomu alaykum\nAssalomu alaykum\nAssalomu alaykum\nAssalomu alaykum\nAssalomu alaykum\nAssalomu alaykum\nAssalomu alaykum\nAssalomu alaykum\nAssalomu alaykum\n" },
        ],
        example: {}
    },
    {
        id: 'db459a05-0367-4392-828d-06be5e6589eb',
        text: `<i>Davr</i>. "Davrdan foydalanib 0 dan 10 gacha sonlarni chop eting.`,
        tests: [
            { input: "", output: "0 1 2 3 4 5 6 7 8 9 10" },
        ],
        example: {}
    },
    {
        id: '7f32875c-4998-4a5f-9828-1a018b263ea1',
        text: `<i>Davr</i>. "Davrdan foydalanib 10 dan 20 gacha sonlarni chop eting.`,
        tests: [
            { input: "", output: "10 11 12 13 14 15 16 17 18 19 20" },
        ],
        example: {}
    },
    {
        id: '6e4d245b-747e-4a02-a690-48fc2a6ffec8',
        text: `<i>Davr</i>. "Davrdan foydalanib -10 dan 10 gacha sonlarni chop eting.`,
        tests: [
            { input: "", output: "-10 -9 -8 -7 -6 -5 -4 -3 -2 -1 0 1 2 3 4 5 6 7 8 9 10" },
        ],
        example: {}
    },
    {
        id: 'b15799c6-ebf3-43c4-951d-6bb19d4a9c1d',
        text: `<i>Davr</i>. "Davrdan foydalanib 0 2 4 6 8 ... 20 sonlarni chop eting.`,
        tests: [
            { input: "", output: "0 2 4 6 8 10 12 14 16 18 20" },
        ],
        example: {}
    },
    {
        id: 'ce58e574-abf2-425e-a162-df20ceae3b99',
        text: `<i>Davr</i>. "Davrdan foydalanib 1 3 5 7 9 11 13 15 17 19 sonlarni chop eting.`,
        tests: [
            { input: "", output: "1 3 5 7 9 11 13 15 17 19" },
        ],
        example: {}
    },
    {
        id: 'e1144856-6986-4b3a-a789-78711dabccc9',
        text: `<i>Davr</i>. "Davrdan foydalanib 4 12 36 108 ... 26244 sonlarni chop eting.`,
        tests: [
            { input: "", output: "4 12 36 108 324 972 2916 8748 26244" },
        ],
        example: {}
    },
    {
        id: '560e12d9-9b32-4610-b0b6-77fbb6591d5a',
        text: `<i>Davr</i>. "Davrdan foydalanib 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60 sonlarni chop eting.`,
        tests: [
            { input: "", output: "12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60" },
        ],
        example: {}
    },
    {
        id: '445eba60-8a01-4f10-bd18-ef9db1d2c8c3',
        text: `<i>Davr</i>. "Davrdan foydalanib 0 -1 2 -3 4 -5 6 -7 8 -9 10 -11 12 -13 14 -15 16 -17 18 -19 20 sonlarni chop eting.`,
        tests: [
            { input: "", output: "0 -1 2 -3 4 -5 6 -7 8 -9 10 -11 12 -13 14 -15 16 -17 18 -19 20" },
        ],
        example: {}
    },
    {
        id: 'fab23d1d-3a9b-4805-88f3-2bee15545a9c',
        text: `<i>Davr</i>. "Davrdan foydalanib 4 -12 36 -108 ... 26244 sonlarni chop eting.`,
        tests: [
            { input: "", output: "4 -12 36 -108 324 -972 2916 -8748 26244" },
        ],
        example: {}
    },
    {
        id: 'a9726a06-bbdd-4aab-b9a2-559c6fcca3ff',
        text: `<i>Davr</i>. "Davrdan foydalanib 32000 16000 8000 4000 2000 1000 500 250 125 sonlarni chop eting.`,
        tests: [
            { input: "", output: "32000 16000 8000 4000 2000 1000 500 250 125" },
        ],
        example: {}
    },
    {
        id: '9ce664a2-9f50-4afb-958c-57113753c7a9',
        text: `<i>Davr</i>. "Davrdan foydalanib 13.5 16.0 18.5 21.0 23.5 26.0 28.5 31.0 33.5 36.0 38.5 41.0 sonlarni chop eting.`,
        tests: [
            { input: "", output: "13.5 16.0 18.5 21.0 23.5 26.0 28.5 31.0 33.5 36.0 38.5 41.0" },
        ],
        example: {}
    },
    {
        id: 'c0d18aba-3ac1-4280-bc41-c2183eaec003',
        text: `<i>Davr</i>. "Davrdan foydalanib 2 ning 13 darajasini chiqarib bering.`,
        tests: [
            { input: "", output: "8192" },
        ],
        example: {}
    },
    {
        id: '8b9c5986-82f5-4609-80cd-827ebb220716',
        text: `<i>Davr</i>. "Davrdan foydalanib 1 2 3 4 5 6 7 8 9 ... 300 sonlarni qo'shib chiqaring.`,
        tests: [
            { input: "", output: "45150" },
        ],
        example: {}
    },
    {
        id: '35628d4c-01df-4812-9446-2e16df432151',
        text: `<i>Davr</i>. "Davrdan foydalanib 1 2 3 4 5 6 7 8 9 ... 50 sonlarni bir biriga ko'paytirib chiqaring.`,
        tests: [
            { input: "", output: "30414093201713378043612608166064768844377641568960512000000000000" },
        ],
        example: {}
    },
    {
        id: '72d7fb27-95ba-402c-9cf6-23b0824c811b',
        text: `<i>Davr</i>. "Davrdan foydalanib 10 11 9 12 8 13 7 14 6 15 5 16 4 17 3 18 2 19 1 20 0 sonlarni chiqaring.`,
        tests: [
            { input: "", output: "10 11 9 12 8 13 7 14 6 15 5 16 4 17 3 18 2 19 1 20 0" },
        ],
        example: {}
    },
    {
        id: 'a8cc266c-aebd-416d-9166-22d662d64e7b',
        text: `<i>Davr</i>. "Davrdan foydalanib 1 dan 100 hamma 3 bo'linadigan sonlarni bir biriga ko'paytirib chiqaring.`,
        tests: [
            { input: "", output: "48271088561613960642858365853327381832862269440000000" },
        ],
        example: {}
    },
    {
        id: 'b6b14cc8-69b3-4d7b-a399-a4e472f6cea0',
        text: `<i>Davr</i>. "Davrdan foydalanib 1 dan 100 hamma 3 ga yoki 7 ga bo'linadigan sonlarni qo'shing.`,
        tests: [
            { input: "", output: "2208" },
        ],
        example: {
            24: `
jami = 0
for son in range(1, 101):
    if son % 3 == 0 or son % 7 == 0:
        jami += son
    
print(jami)`,
        }
    },
    {
        id: '7bbc4857-9e8a-4681-9dec-64f7e01068b6',
        text: `<i>Davr</i>. "Ob-havo ma'lumoti.
            <ul>
            <li>Dushanba - 30 daraja issiq.</li>
            <li>Seshanba 28 daraja issiq. </li>
            <li>Chorshanba 31 daraja issiq. </li>
            <li>Payshanba - 21 daraja issiq, kichik yomg'ir. </li>
            <li>Juma - 25 daraja issiq. </li>
            <li>Shanba - 27 daraja issiq. </li>
            <li>Yakshanba - 35 daraja issiq.</li>
            </ul>
            Foydalanuvchidan hafta kunini so'rang. Berilgan ob-havo ma'lumoti bo'yicha unga javob qaytaring.
            `,
        tests: [
            { input: "Dushanba", output: "30 daraja issiq." },
            { input: "Payshanba", output: "21 daraja issiq, kichik yomg'ir." },
            { input: "Yakshanba", output: "35 daraja issiq." },
        ],
        example: {}
    },
    {
        id: '6edd0df9-be52-402a-92d8-690635eb6c95',
        text: `<i>Davr</i>. "Ob-havo ma'lumoti.
            <ul>
            <li>Dushanba - 30 daraja issiq.</li>
            <li>Seshanba 28 daraja issiq. </li>
            <li>Chorshanba 31 daraja issiq. </li>
            <li>Payshanba - 21 daraja issiq, kichik yomg'ir. </li>
            <li>Juma - 25 daraja issiq. </li>
            <li>Shanba - 27 daraja issiq. </li>
            <li>Yakshanba - 35 daraja issiq.</li>
            </ul>
            Foydalanuvchidan hafta kunini so'rang. Berilgan ob-havo ma'lumoti bo'yicha unga javob qaytaring.
            Keyin yana hafta kunini so'rang, va yana javob qaytaring. Savol-javobni to'xtatmang. Faqat foydalanuvchi
            <code>to'xtash</code> deb yozsa unga <code>salomat bo'ling</code> deb javob qaytaring va dasturni to'xtating.
            `,
        tests: [
            { input: "Dushanba\nPayshanba\nto'xtash", output: "30 daraja issiq.\n21 daraja issiq, kichik yomg'ir.\nsalomat bo'ling" },
            { input: "Dushanba\nPayshanba\nPayshanba\nto'xtash", output: "30 daraja issiq.\n21 daraja issiq, kichik yomg'ir.\n21 daraja issiq, kichik yomg'ir.\nsalomat bo'ling" },
            { input: "Juma\nto'xtash\nShanba", output: "25 daraja issiq.\nsalomat bo'ling" },
        ],
        example: {}
    },
    {
        id: 'd26e5e61-817d-4796-90e9-dedb60d25680',
        text: "<i>Satrlar</i>. Dasturga sozlarni vergul bilan ajratib chop eting.",
        tests: [
            { input: "Taqvim uchar ohangrabo unsur riyoziyot", output: "Taqvim, uchar, ohangrabo, unsur, riyoziyot" },
            { input: "bir ikki uch tort", output: "bir, ikki, uch, tort" },
            { input: "Pishloq sarimsoq", output: "Pishloq, sarimsoq" },
        ],
        example: {}
    },
    // {
    //     id: '76cee693-432f-4eab-bc5f-7496c0c0e2d8',
    //     text: `Qaysi avto'ulo'v tezroq?`,
    //     tests: [
    //         {
    //             input: "Kamollidin",
    //             output: ""
    //         },
    //         {
    //             input: "Akmal",
    //             output: "Assalomu alaykum xurmatli Akmal! Sizni mehmonga taklif kilyapmiz. Akmal, sizni kutamiz."
    //         },
    //     ],
    //     example: {}
    // },
    {
        id: 'a515a1a1-a532-4a4b-91a0-4992d0abf5df',
        text: "<i>Satrlar</i>. Ikkita sonni qo'shadigan dasturni tuzing.",
        tests: [
            { "input": "435 33", "output": "468" },
            { "input": "400 33", "output": "433" },
            { "input": "133 111", "output": "244" }
        ],
        example: {
            24: `kiritilgan_malumot = input()
satrlar = kiritilgan_malumot.split()
son_1 = int(satrlar[0])
son_2 = int(satrlar[1])

print(son_1 + son_2)`,
            8: `<?php
$kiritilgan_malumot = fgets(STDIN);
$satrlar = explode(" ", $kiritilgan_malumot);
$son_1 = intval($satrlar[0]);
$son_2 = intval($satrlar[1]);

echo $son_1 + $son_2;`,
            4: `import java.util.*;
import java.lang.*;

class Rextester
{  
    public static void main(String args[])
    {
        Scanner inputReader = new Scanner(System.in);
        String kiritilgan_malumot = inputReader.nextLine();
        
        String[] satrlar = kiritilgan_malumot.split(" ");
        int son_1 = Integer.parseInt(satrlar[0]);
        int son_2 = Integer.parseInt(satrlar[1]);
        System.out.println(son_1 + son_2);
    }
}`,
            23: `var stdin = process.openStdin();

stdin.addListener("data", function(kiritilgan_malumot) { 
    var satrlar = kiritilgan_malumot.toString().split(" ");
    var son_1 = parseInt(satrlar[0]);
    var son_2 = parseInt(satrlar[1]);
    console.log(son_1 + son_2);
});`
        },
    },
    {
        id: '7468c487-0fd1-401d-8cb7-ee0b35c8cd43',
        text: "<i>Satrlar</i>. Ikkita sonni kopaytiradigan dasturni tuzing.",
        tests: [
            { "input": "30 40", "output": "1200" },
            { "input": "8 2", "output": "16" },
            { "input": "88 23", "output": "2024" }
        ],
        example: {}
    },
    {
        id: '1e543265-fb25-4672-8e29-1ad770fe0204',
        text: "<i>Ro'yxatlar</i>. Berilgan 10 sonlarni ichida eng kattasini toping.",
        tests: [
            { "input": "4 4 54 22 -43 122 4343 0 1 44", "output": "4343" },
            { "input": "432 12 43 324 23 -32 0 0 -5453 55", "output": "432" },
            { "input": "0 0 0 0 -1 -44 0 0 0 0", "output": "0" }
        ],
        example: {
            24: `kiritilgan_malumot = input()
satrlar = kiritilgan_malumot.split()
sonlar = []

for satr in satrlar:
    sonlar.append(int(satr))

eng_katta_son = sonlar[0]
for son in sonlar:
    if eng_katta_son < son:
        eng_katta_son = son

print(eng_katta_son)`,
            23: `var stdin = process.openStdin();

stdin.addListener("data", function(kiritilganMalumot) { 
    var satrlar = kiritilganMalumot.toString().split(" ");
    var sonlar = [];
    for (var joy = 0; joy < satrlar.length; ++joy) {
        var son = parseInt(satrlar[joy]);
        sonlar.push(son);
    }
    
    var engKattaSon = sonlar[0];
    for (var joy = 0; joy < sonlar.length; ++joy) {
        var son = sonlar[joy];
        if (son > engKattaSon) {
            engKattaSon = son;
        }
    }
    
    console.log(engKattaSon);
});`,
            8: `<?php
$kiritilganMalumot = fgets(STDIN);
$satrlar = explode(" ", $kiritilganMalumot);

$sonlar = array();
foreach ($satrlar as $satr) {
    $son = intval($satr);
    $sonlar[] = $son;
}

$engKattaSon = $sonlar[0];
foreach ($sonlar as $son) {
    if ($son > $engKattaSon) {
        $engKattaSon = $son;
    }
}

echo $engKattaSon;`
        }
    },
    {
        id: 'b96876cf-c448-4820-8478-57ba38bbe911',
        text: `<i>Ro'yxatlar</i>. Berilgan 10 sonlarni ichida eng kop qaytaraladiganini toping.
            Shunaqa sonla bir-nechta bo'lsa, birinchi uchraganini tanlang.`,
        tests: [
            { "input": "4 4 54 22 -43 122 4343 0 1 44", "output": "4" },
            { "input": "432 12 -5453 324 0 -32 0 0 -5453 -5453", "output": "-5453" },
            { "input": "0 0 0 0 -1 -44 0 0 0 0", "output": "0" }
        ],
        example: {}
    },
    {
        id: '52f3f3c6-ef03-4ea6-8dfc-96e1fd935434',
        text: `Pitsani narxini aniqlang. Pitsa Amerikano - 30 000 so'm.
            Pitsa Italiano - 32 000 so'm. Pitsani 6 km dan kamroq masofadan
            buyruq qilishsa, olib kelishi - 5 000 so'm. Bo'lmasa - har bir
            kilometrga 1 000 so'm.`,
        tests: [
            { "input": "pitsa: Amerikano, masofa: 5km", "output": "35000" },
            { "input": "pitsa: Italiano, masofa: 4km", "output": "37000" },
            { "input": "pitsa: Italiano, masofa: 8km", "output": "40000" }
        ],
        example: {}
    },
    {
        id: 'ab9c0027-e350-45e2-be75-c11875ebaa19',
        text: `Dorixonada bir nechta dorilar bor. Ularni ichida yaroqlik muddati
            o'tkan dorilar ham bor. Sizga dorilarni royxati beriladi. Yaroq emas dorilarni
            chop etishiz kerak. Birinchi qatorda berilgan sana bugungi sana deb o'ylang.
            Keyingi qatorlarda dorini nomi va yaroqlik muddati otishi sanasi berilgan.`,
        tests: [
            {
                "input": "10.10.2019\n" + 
                    "Makropen 12.12.2020\n" + 
                    "Aspirin 30.01.2000\n" +
                    "Pikovit 16.04.2018",
                "output": "Aspirin Pikovit"
            },
            {
                "input": "05.03.2020\n" +
                    "Trimekor 13.05.2015\n" +
                    "Polioksidoniy 21.11.2021\n" +
                    "Progast 01.03.2020",
                "output": "Trimekor"
            },
            {
                "input": "15.06.2021\n" +
                    "Tsiprolet 01.05.2021\n" +
                    "Kadelak 01.05.2021\n" +
                    "Egilok 05.04.2021\n" +
                    "Metokard 05.07.2021\n" +
                    "Karvedilol 11.01.2021",
                "output": "Tsiprolet Kadelak Egilok Karvedilol"
            }
        ],
        example: {}
    },
    {
        id: 'f499a593-c249-4f06-9f20-d0c5d9e877cc',
        text: `Sizda do'kon bor. Do'konda har bitta sotilgan narsani siz
            komputerga kiritasiz. Bugun qancha pul topganizni hisoblaydigan
            dasturni tuzing.`,
        tests: [
            { 
                "input":
                    "Narxlar\n" +
                    "Non: 750\n" +
                    "Kir yuvish kukuni: 15000\n" +
                    "Sovun: 3000\n" +
                    "\n" +
                    "Sotilgan\n" +
                    "Non\n" +
                    "Non\n" +
                    "Non\n" +
                    "Kir yuvish kukuni\n" +
                    "Sovun\n" +
                    "Non\n" +
                    "Sovun\n",
                "output": "24000"
            },
            { 
                "input":
                    "Narxlar\n" +
                    "Saqich: 150\n" +
                    "Teshkulcha: 3000\n" +
                    "Gugurt: 150\n" +
                    "\n" +
                    "Sotilgan\n" +
                    "Saqich\n" +
                    "Saqich\n" +
                    "Teshkulcha\n" +
                    "Teshkulcha\n" +
                    "Gugurt\n" +
                    "Saqich\n" +
                    "Gugurt\n" +
                    "Gugurt\n",
                "output": "6900"
            },
            { 
                "input":
                    "Narxlar\n" +
                    "Quruq choy: 5000\n" +
                    "Yopgan non: 1000\n" +
                    "Sabzi 1kg: 2000\n" +
                    "Guruch 1kg: 2200\n" +
                    "Daftar: 800\n" +
                    "\n" +
                    "Sotilgan\n" +
                    "Quruq choy\n" +
                    "Yopgan non\n" +
                    "Daftar\n" +
                    "Quruq choy\n" +
                    "Yopgan non\n" +
                    "Daftar\n" +
                    "Yopgan non\n" +
                    "Quruq choy\n" +
                    "Guruch 1kg\n" +
                    "Quruq choy\n" +
                    "Yopgan non\n" +
                    "Daftar\n",
                "output": "35800"
            },
        ],
        example: {}
    }
]

export const languages = [
    { id: 24, name: "Python 3" },
    { id: 5, name: "Python 2" },
    { id: 8, name: "PHP" },
    { id: 1, name: "C#" },
    { id: 4, name: "Java" },
    { id: 23, name: "Javascript (Node.js)" },
    { id: 6, name: "C (gcc)" },
    { id: 7, name: "C++ (gcc)" },
    { id: 20, name: "Go" },
    { id: 37, name: "Swift" },
    { id: 10, name: "Objective-C" },
    { id: 43, name: "Kotlin" },
    { id: 12, name: "Ruby" },
    { id: 9, name: "Pascal" },
    { id: 11, name: "Haskell" },
    { id: 18, name: "Lisp" },
    { id: 21, name: "Scala" },
    { id: 25, name: "Octave" },
    { id: 38, name: "Bash" },
    { id: 40, name: "Erlang" },
]

export const editorLanguages = [
    { languageId: 24, mode: { name: 'python', mime: 'text/x-python', version: 3 }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/python/python.min.js' },
    { languageId: 5, mode: { mime: 'text/x-python', version: 2 }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/python/python.min.js' },
    { languageId: 8, mode: { mime: 'application/x-httpd-php' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/php/php.min.js' },
    { languageId: 1, mode: { mime: 'text/x-csharp' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/clike/clike.min.js' },
    { languageId: 4, mode: { mime: 'text/x-java' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/clike/clike.min.js' },
    { languageId: 6, mode: { mime: 'text/x-csrc' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/clike/clike.min.js' },
    { languageId: 7, mode: { mime: 'text/x-c++src' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/clike/clike.min.js' },
    { languageId: 10, mode: { mime: 'text/x-objectivec' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/clike/clike.min.js' },
    { languageId: 21, mode: { mime: 'text/x-scala' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/clike/clike.min.js' },
    { languageId: 43, mode: { mime: 'text/x-kotlin' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/clike/clike.min.js' },
    { languageId: 23, mode: { mime: 'text/javascript' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/javascript/javascript.min.js' },
    { languageId: 20, mode: { mime: 'text/x-go' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/go/go.min.js' },
    { languageId: 37, mode: { mime: 'text/x-swift' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/swift/swift.min.js' },
    { languageId: 12, mode: { mime: 'text/x-ruby' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/ruby/ruby.min.js' },
    { languageId: 9, mode: { mime: 'text/x-pascal' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/pascal/pascal.min.js' },
    { languageId: 11, mode: { mime: 'text/x-haskell' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/haskell/haskell.min.js' },
    { languageId: 18, mode: { mime: 'text/x-common-lisp' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/commonlisp/commonlisp.min.js' },
    { languageId: 25, mode: { mime: 'text/x-octave' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/octave/octave.min.js' },
    { languageId: 38, mode: { mime: 'text/x-sh' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/shell/shell.min.js' },
    { languageId: 40, mode: { mime: 'text/x-erlang' }, url: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/erlang/erlang.min.js' },
]


export const themes = [
    'solarized light',
    'darcula',
]