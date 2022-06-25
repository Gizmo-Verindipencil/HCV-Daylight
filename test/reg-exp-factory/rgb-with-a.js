import { RgbAlphaRegExpFactory } from "../../src/reg-exp-factory/rgb-alpha-reg-exp-factory.js";

// rgb-with-a
// アルファ値を含むRGB表現(例: rgb(0, 0, 0, 0) )に関するテスト

describe("RgbAlphaRegExpFactory - rgb-with-a_", () => {
    // rgb-with-a_1:
    it("1: 値が整数", () => {
        // テスト対象の正規表現を作成
        const factory = new RgbAlphaRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const expressions = values.map(x => `rgb(${[...Array(4)].map(y => x).join(",")})`);
        for (const expression of expressions) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // rgb-with-a_2:
    it("2: 値が小数", () => {
        // テスト対象の正規表現を作成
        const factory = new RgbAlphaRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const expressions = values.map(x => `rgb(${[...Array(4)].map(y => x).join(",")})`);
        for (const expression of expressions) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // rgb-with-a_3:
    it("3: アルファ値が整数パーセント", () => {
        // テスト対象の正規表現を作成
        const factory = new RgbAlphaRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const getAlpha = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `rgb(${[...Array(3)].map(y => x).join(",")},${getAlpha(x)})`);
        for (const expression of expressions) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // rgb-with-a_4:
    it("4: アルファ値が小数パーセント", () => {
        // テスト対象の正規表現を作成
        const factory = new RgbAlphaRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getAlpha = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `rgb(${[...Array(3)].map(y => x).join(",")},${getAlpha(x)})`);
        for (const expression of expressions) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // rgb-with-a_5:
    it("5: 前後に空白あり", () => {
        // テスト対象の正規表現を作成
        const factory = new RgbAlphaRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        for (const expression of [
            " rgb(0,0,0,0) ",
            " rgb(1,1,1,1)",
            "rgb(2,2,2,2) "
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // rgb-with-a_6:
    it("6: その他アンマッチ", () => {
        // テスト対象の正規表現を作成
        const factory = new RgbAlphaRegExpFactory();
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
            "rgba(0,0,0,0)",
            "hsl(0,0%,0%)",
            "hsl(0,0%,0%,0)",
            "hsla(0,0%,0%,0)"
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(false);
        }
    });
});