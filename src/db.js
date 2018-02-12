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
qatorlar = kiritilgan_malumot.split()
son_1 = int(qatorlar[0])
son_2 = int(qatorlar[1])

print(son_1 + son_2)`,
            8: `<?php
$kiritilgan_malumot = fgets(STDIN);
$qatorlar = explode(" ", $kiritilgan_malumot);
$son_1 = intval($qatorlar[0]);
$son_2 = intval($qatorlar[1]);

echo $son_1 + $son_2;`,
            4: `import java.util.*;
import java.lang.*;

class Rextester
{  
    public static void main(String args[])
    {
        Scanner inputReader = new Scanner(System.in);
        String kiritilgan_malumot = inputReader.nextLine();
        
        System.out.println(kiritilgan_malumot);
        String[] qatorlar = kiritilgan_malumot.split(" ");
        int son_1 = Integer.parseInt(qatorlar[0]);
        int son_2 = Integer.parseInt(qatorlar[1]);
        System.out.println(son_1 + son_2);
    }
}`
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
        example: {}
    },
    {
        id: 4,
        text: `Berilgan 10 sonlarni ichida eng kop qaytaradiganni toping.
            Shunaqa sonla bir-nechta bo'lsa, birinchi uchraydiganni tanlang.`,
        tests: [
            { "input": "4 4 54 22 -43 122 4343 0 1 44", "output": "4" },
            { "input": "432 12 -5453 324 0 -32 0 0 -5453 -5453", "output": "-5453" },
            { "input": "0 0 0 0 -1 -44 0 0 0 0", "output": "0" }
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
    { id: 17, name: "Javascript" },
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
    { id: 41, name: "Elixir" },
    { id: 42, name: "Ocaml" },
]