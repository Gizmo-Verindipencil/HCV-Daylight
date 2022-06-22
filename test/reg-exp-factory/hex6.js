import { Hex6RegExpFactory } from "../../src/reg-exp-factory/hex6-reg-exp-factory.js";

// hex6
// 6桁の16進数表現(例: #000000 )に関するテスト

describe("Hex6RegExpFactory - hex6_", () => {
    // hex6_1:
    it("1: 数字6桁", () => {
        // テスト対象の正規表現を作成
        const factory = new Hex6RegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        for (const expression of [
            "#000000",
            "#123456",
            "#987654"
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // hex6_2:
    it("2: アルファベット大文字6桁", () => {
        // テスト対象の正規表現を作成
        const factory = new Hex6RegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        for (const expression of [
            "#AAAAAA",
            "#ABCDEF",
            "#FEDCBA"
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // hex6_3:
    it("3: アルファベット小文字6桁", () => {
        // テスト対象の正規表現を作成
        const factory = new Hex6RegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        for (const expression of [
            "#aaaaaa",
            "#abcdef",
            "#fedcba"
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // hex6_4:
    it("4: その他アンマッチ", () => {
        // テスト対象の正規表現を作成
        const factory = new Hex6RegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        for (const expression of [
            "abc",
            "#000",
            "#0000",
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