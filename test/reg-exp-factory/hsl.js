import { HslRegExpFactory } from "../../src/reg-exp-factory/hsl-reg-exp-factory.js";

// hsl
// HSL表現(例: hsl(0, 0%, 0%) )に関するテスト

describe("HslRegExpFactory - hsl_", () => {
    // hsl_1:
    it("1: 値が整数", () => {
        // テスト対象の正規表現を作成
        const factory = new HslRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")})`);
        for (const expression of expressions) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // hsl_2:
    it("2: 値が小数", () => {
        // テスト対象の正規表現を作成
        const factory = new HslRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")})`);
        for (const expression of expressions) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // hsl_3:
    it("3: 前後に空白あり", () => {
        // テスト対象の正規表現を作成
        const factory = new HslRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        for (const expression of [
            " hsl(0,0%,0%) ",
            " hsl(1,1%,1%)",
            "hsl(2,2%,2%) "
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // hsl_4:
    it("4: その他アンマッチ", () => {
        // テスト対象の正規表現を作成
        const factory = new HslRegExpFactory();
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
            "rgba(0,0,0,0)",
            "hsl(0,0%,0%,0)",
            "hsla(0,0%,0%,0)"
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(false);
        }
    });
});