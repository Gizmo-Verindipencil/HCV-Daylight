import { Hex6Detector } from "../../../src/detector/hex6-detector.js";

// hex6
// 6桁の16進数表現(例: #000000 )に関するテスト

describe("Hex6Detector.match - ", () => {
    // 1:
    it("1: 数字6桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex6Detector();

        // 結果を検証
        for (const expression of [
            "#000000",
            "#123456",
            "#987654"
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // 2:
    it("2: アルファベット大文字6桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex6Detector();

        // 結果を検証
        for (const expression of [
            "#AAAAAA",
            "#ABCDEF",
            "#FEDCBA"
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // 3:
    it("3: アルファベット小文字6桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex6Detector();

        // 結果を検証
        for (const expression of [
            "#aaaaaa",
            "#abcdef",
            "#fedcba"
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // 4:
    it("4: 前後に空白あり", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex6Detector();

        // 結果を検証
        for (const expression of [
            " #000000 ",
            " #aaaaaa",
            "#AAAAAA "
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // 5:
    it("5: その他アンマッチ", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex6Detector();

        // 結果を検証
        for (const expression of [
            "abc",
            "#000",
            "#0000",
            "#00000000",
            "rgb(0,0,0)",
            "rgb(0%,0%,0%)",
            "rgb(0,0,0,0)",
            "rgb(0%,0%,0%,0)",
            "rgba(0,0,0,0)",
            "rgba(0%,0%,0%,0)",
            "hsl(0,0%,0%)",
            "hsl(0,0%,0%,0)",
            "hsla(0,0%,0%,0)"
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(false);
        }
    });
});