import { HslAlphaRegExpFactory } from "../../src/reg-exp-factory/hsl-alpha-reg-exp-factory.js";

// hsl-with-a
// アルファ値を含むHSL表現(例: hsl(0, 0, 0, 0) )に関するテスト

describe("HslAlphaRegExpFactory - hsl-with-a_", () => {
    // hsl-with-a_1:
    it("1: 値が整数", () => {
        // テスト対象の正規表現を作成
        const factory = new HslAlphaRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${x})`);
        for (const expression of expressions) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // hsl-with-a_2:
    it("2: 値が小数", () => {
        // テスト対象の正規表現を作成
        const factory = new HslAlphaRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${x})`);
        for (const expression of expressions) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // hsl-with-a_3:
    it("3: アルファ値が整数パーセント", () => {
        // テスト対象の正規表現を作成
        const factory = new HslAlphaRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${getPercent(x)})`);
        for (const expression of expressions) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // hsl-with-a_4:
    it("4: アルファ値が小数パーセント", () => {
        // テスト対象の正規表現を作成
        const factory = new HslAlphaRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${getPercent(x)})`);
        for (const expression of expressions) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // hsl-with-a_5:
    it("5: 前後に空白あり", () => {
        // テスト対象の正規表現を作成
        const factory = new HslAlphaRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        for (const expression of [
            " hsl(0,0%,0%,0) ",
            " hsl(1,1%,1%,1)",
            "hsl(2,2%,2%,2) "
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // hsl-with-a_6:
    it("6: 値がマイナス", () => {
        // テスト対象の正規表現を作成
        const factory = new HslAlphaRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        for (const expression of [
            "hsl(-0,-0%,-0%,-0)",
            "hsl(-1,-1%,-1%,-1)",
            "hsl(-2,-2%,-2%,-2)"
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // hsl-with-a_7:
    it("7: その他アンマッチ", () => {
        // テスト対象の正規表現を作成
        const factory = new HslAlphaRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        for (const expression of [
            "abc",
            "#000",
            "#0000",
            "#000000",
            "#00000000",
            "rgb(0,0,0)",
            "rgb(0%,0%,0%)",
            "rgb(0,0,0,0)",
            "rgb(0%,0%,0%,0)",
            "rgba(0,0,0,0)",
            "rgba(0%,0%,0%,0)",
            "hsl(0,0%,0%)",
            "hsla(0,0%,0%,0)"
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(false);
        }
    });
});