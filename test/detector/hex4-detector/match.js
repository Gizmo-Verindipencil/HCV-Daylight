import { Hex4Detector } from "../../../src/detector/hex4-detector.js";

// hex4
// 4桁の16進数表現(例: #0000 )に関するテスト

describe("Hex4Detector.detect - ", () => {
    // 1:
    it("1: 数字4桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex4Detector();

        // 結果を検証
        for (const expression of [
            "#0000",
            "#1234",
            "#9876"
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // 2:
    it("2: アルファベット大文字4桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex4Detector();

        // 結果を検証
        for (const expression of [
            "#AAAA",
            "#ABCD",
            "#FEDC"
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // 3:
    it("3: アルファベット小文字4桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex4Detector();

        // 結果を検証
        for (const expression of [
            "#aaaa",
            "#abcd",
            "#fedc"
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // 4:
    it("4: 前後に空白あり", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex4Detector();

        // 結果を検証
        for (const expression of [
            " #0000 ",
            " #aaaa",
            "#AAAA "
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // 5:
    it("5: その他アンマッチ", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex4Detector();

        // 結果を検証
        for (const expression of [
            "abc",
            "#000",
            "#000000",
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