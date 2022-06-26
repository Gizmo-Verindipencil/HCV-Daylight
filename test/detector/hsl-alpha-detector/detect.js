import { HslAlphaDetector } from "../../../src/detector/hsl-alpha-detector.js";

// hsl-with-a
// アルファ値を含むHSL表現(例: hsl(0, 0%, 0%, 0%) )に関するテスト

describe("HslAlphaDetector.detect - hsl-with-a_", () => {
    // hsl-with-a_1:
    it("1: 値が整数", () => {
        // テスト対象の正規表現を作成
        const detector = new HslAlphaDetector();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${x})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsl-with-a_2:
    it("2: 値が小数", () => {
        // テスト対象の正規表現を作成
        const detector = new HslAlphaDetector();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${x})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsl-with-a_3:
    it("3: アルファ値が整数パーセント", () => {
        // テスト対象の正規表現を作成
        const detector = new HslAlphaDetector();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${getPercent(x)})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsl-with-a_4:
    it("4: アルファ値が小数パーセント", () => {
        // テスト対象の正規表現を作成
        const detector = new HslAlphaDetector();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${getPercent(x)})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsl-with-a_5:
    it("5: 値がマイナス", () => {
        // テスト対象の正規表現を作成
        const detector = new HslAlphaDetector();

        // 結果を検証
        const expressions = [
            "hsl(-0,-0%,-0%,-0)",
            "hsl(-1,-1%,-1%,-1)",
            "hsl(-2,-2%,-2%,-2)"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsl-with-a_6:
    it("6: ドット始まりの小数", () => {
        // テスト対象の正規表現を作成
        const detector = new HslAlphaDetector();

        // 結果を検証
        const expressions = [
            "hsl(.0,.0%,.0%,.0)",
            "hsl(.1,.1%,.1%,.1)",
            "hsl(.2,.2%,.2%,.2)"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsl-with-a_7:
    it("7: その他", () => {
        // テスト対象の正規表現を作成
        const detector = new HslAlphaDetector();

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
        expect(result).toEqual(expressionSet.hslWithA);
    });
});