import { RgbaRegExpFactory } from "../../src/reg-exp-factory/rgba-reg-exp-factory.js";

// rgba
// %で指定したRGB表現(例: rgb(0%, 0%, 0%) )に関するテスト

describe("RgbWithAlphaRegExpFactory - rgba_", () => {
    // rgba_1:
    it("1: 値が整数", () => {
        // テスト対象の正規表現を作成
        const factory = new RgbaRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const expressions = values.map(x => `rgba(${[1,2,3,4].map(y => x).join(",")})`);
        for (const expression of expressions) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // rgba_2:
    it("2: 値が小数", () => {
        // テスト対象の正規表現を作成
        const factory = new RgbaRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const expressions = values.map(x => `rgba(${[1,2,3,4].map(y => x).join(",")})`);
        for (const expression of expressions) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // rgba_3:
    it("3: アルファ値が整数パーセント", () => {
        // テスト対象の正規表現を作成
        const factory = new RgbaRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const getAlpha = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `rgba(${[1,2,3].map(y => x).join(",")},${getAlpha(x)})`);
        for (const expression of expressions) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // rgba_4:
    it("4: アルファ値が小数パーセント", () => {
        // テスト対象の正規表現を作成
        const factory = new RgbaRegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getAlpha = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `rgba(${[1,2,3].map(y => x).join(",")},${getAlpha(x)})`);
        for (const expression of expressions) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // rgba_5:
    it("5: その他アンマッチ", () => {
        // テスト対象の正規表現を作成
        const factory = new RgbaRegExpFactory();
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
            "rgb(0,0,0,0)"
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(false);
        }
    });
});