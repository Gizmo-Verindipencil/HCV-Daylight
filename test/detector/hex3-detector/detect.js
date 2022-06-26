import { Hex3Detector } from "../../../src/detector/hex3-detector.js";

// hex3
// 3桁の16進数表現(例: #000 )に関するテスト

describe("Hex3Detector.detect - hex3_", () => {
    // hex3_1:
    it("1: 数字3桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex3Detector();

        // 結果を検証
        const expressions = [
            "#000",
            "#123",
            "#987"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hex3_2:
    it("2: アルファベット大文字3桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex3Detector();

        // 結果を検証
        const expressions = [
            "#AAA",
            "#ABC",
            "#FED"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hex3_3:
    it("3: アルファベット小文字3桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex3Detector();

        // 結果を検証
        const expressions = [
            "#aaa",
            "#abc",
            "#fed"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hex3_4:
    it("4: その他", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex3Detector();

        // 結果を検証
        const expressionSet = {
            none : [
                "123", 
                "abc", 
                "ABC"
            ],
            hex3 : [
                "#000", 
                "#aaa", 
                "#AAA"
            ],
            hex4 : [
                "#0000", 
                "#aaaa", 
                "#AAAA"
            ],
            hex6 : [
                "#000000", 
                "#aaaaaa", 
                "#AAAAAA"
            ],
            hex8 : [
                "#00000000", 
                "#aaaaaaaa", 
                "#AAAAAAAA"
            ],
            rgb : [
                "rgb(0,0,0)",
                "rgb( 1, 1, 1)",
                "rgb(2 ,2 ,2 )",
                "rgb( 3 , 3 , 3 )"
            ],
            rgbWithA : [
                "rgb(0,0,0,0)",
                "rgb( 1, 1, 1, 1)",
                "rgb(2 ,2 ,2 ,2 )",
                "rgb( 3 , 3 , 3 , 3 )"
            ],
            rgbPercent : [
                "rgb(0%,0%,0%)", 
                "rgb( 1%, 1%, 1%)", 
                "rgb(2% ,2% ,2% )", 
                "rgb( 3% , 3% , 3% )"
            ],
            rgbPercentWithA : [
                "rgb(0%,0%,0%,0)",
                "rgb( 1%, 1%, 1%, 1)",
                "rgb(2% ,2% ,2% ,2 )",
                "rgb( 3% , 3% , 3% , 3 )"
            ],
            rgba : [
                "rgba(0,0,0,0)",
                "rgba( 1, 1, 1, 1)",
                "rgba(2 ,2 ,2 ,2 )",
                "rgba( 3 , 3 , 3 , 3 )"
            ],
            rgbaPercent : [
                "rgba(0%,0%,0%,0)",
                "rgba( 1%, 1%, 1%, 1)",
                "rgba(2% ,2% ,2% ,2 )",
                "rgba( 3% , 3% , 3% , 3 )"
            ],
            hsl : [
                "hsl(0,0%,0%)",
                "hsl( 1, 1%, 1%)",
                "hsl(2 ,2% ,2% )",
                "hsl( 3 , 3% , 3% )"
            ],
            hslWithA : [
                "hsl(0,0%,0%,0)",
                "hsl( 1, 1%, 1%, 1)",
                "hsl(2 ,2% ,2% ,2 )",
                "hsl( 3 , 3% , 3% , 3 )"
            ],
            hsla : [
                "hsla(0,0%,0%,0)",
                "hsla( 1, 1%, 1%, 1)",
                "hsla(2 ,2% ,2% ,2 )",
                "hsla( 3 , 3% , 3% , 3 )"
            ]
        };
        const expression = Object.values(expressionSet).flat().join(" ");
        const result = detector.detect(expression);
        expect(result).toEqual(expressionSet.hex3);
    });
});