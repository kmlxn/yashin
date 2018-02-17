export const exercises = [
    {
        id: 1,
        text: "Ikkita sonni qo'shadigan dasturni tuzing.",
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
        id: 2,
        text: "Ikkita sonni kopaytiradigan dasturni tuzing.",
        tests: [
            { "input": "30 40", "output": "1200" },
            { "input": "8 2", "output": "16" },
            { "input": "88 23", "output": "2024" }
        ],
        example: {}
    },
    {
        id: 3,
        text: "Berilgan 10 sonlarni ichida eng kattasini toping.",
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
        id: 4,
        text: `Berilgan 10 sonlarni ichida eng kop qaytaradiganni toping.
            Shunaqa sonla bir-nechta bo'lsa, birinchi uchraganini tanlang.`,
        tests: [
            { "input": "4 4 54 22 -43 122 4343 0 1 44", "output": "4" },
            { "input": "432 12 -5453 324 0 -32 0 0 -5453 -5453", "output": "-5453" },
            { "input": "0 0 0 0 -1 -44 0 0 0 0", "output": "0" }
        ],
        example: {}
    },
    {
        id: 5,
        text: `Pitsani narxini aniqlang. Pitsa Amerikano - 30 000 so'm.
            Pitsa Italiano - 32 000 so'm. Pitsani 6km dan kamroq masofadan
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
        id: 6,
        text: `Dorixonada bir nechta dorila bor. Ularni ichida yaroqlik muddati
            otkan dorilar ham bor. Sizga dorilarni royxati beriladi. Yaroq emas dorilarni
            chop etishiz kerak. Birinchi qatorda berilgan sana bugungi sana deb oylang.
            Keyingi qatorlada dorini nomi va yaroqlik otishi sanasi berilgan.`,
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
        id: 7,
        text: `Sizda dokon bor. Dokonda har bitta sotilgan narsani siz komputerga yozin olasiz.
            Bugun qancha pul topganizni hisoblaydigan dasturni tuzing.`,
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