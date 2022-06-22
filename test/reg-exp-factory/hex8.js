import { Hex8RegExpFactory } from "../../src/reg-exp-factory/hex8-reg-exp-factory.js";

// hex8
// 8桁の16進数表現(例: #000000 )に関するテスト

describe("Hex8RegExpFactory - hex8_", () => {
    // hex8_1:
    it("1: 数字8桁", () => {
        // テスト対象の正規表現を作成
        const factory = new Hex8RegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        for (const expression of [
            "#00000000",
            "#12345678",
            "#98765432"
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // hex8_2:
    it("2: アルファベット大文字8桁", () => {
        // テスト対象の正規表現を作成
        const factory = new Hex8RegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        for (const expression of [
            "#AAAAAAAA",
            "#ABCDEFAB",
            "#FEDCBAFE"
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // hex8_3:
    it("3: アルファベット小文字8桁", () => {
        // テスト対象の正規表現を作成
        const factory = new Hex8RegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        for (const expression of [
            "#aaaaaaaa",
            "#abcdefab",
            "#fedcbafe"
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(true);
        }
    });

    // hex8_4:
    it("4: その他アンマッチ", () => {
        // テスト対象の正規表現を作成
        const factory = new Hex8RegExpFactory();
        const regExp = factory.create();

        // 結果を検証
        for (const expression of [
            "abc",
            "#000",
            "#0000",
            "#000000",
            "rgb(0,0,0)",
            "rgb(0%,0%,0%)",
            "rgb(0,0,0,0)",
            "rgba(0,0,0,0)"
        ]) {
            const result = regExp.test(expression);
            expect(result).toBe(false);
        }
    });
});