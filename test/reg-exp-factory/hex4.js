import { Hex4RegExpFactory } from "../../src/reg-exp-factory/hex4-reg-exp-factory.js";

// hex4
// 4桁の16進数表現(例: #000000 )に関するテスト

describe("Hex4RegExpFactory - hex4_", () => {
    // hex4_1:
    it("1: 数字4桁", () => {
        // テスト対象の正規表現を作成
        const factory = new Hex4RegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        for (const expression of [
            "#0000",
            "#1234",
            "#9876"
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    it("2: アルファベット大文字4桁", () => {
        // テスト対象の正規表現を作成
        const factory = new Hex4RegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        for (const expression of [
            "#AAAA",
            "#ABCD",
            "#FEDC"
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    it("3: アルファベット小文字4桁", () => {
        // テスト対象の正規表現を作成
        const factory = new Hex4RegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        for (const expression of [
            "#aaaa",
            "#abcd",
            "#fedc"
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    it("4: その他アンマッチ", () => {
        // テスト対象の正規表現を作成
        const factory = new Hex4RegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        for (const expression of [
            "abc",
            "#000",
            "#000000",
            "#00000000",
            "rgb(0,0,0)",
            "rgb(0,0,0,0)",
            "rgba(0,0,0,0)"
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(false);
        }
    });
});