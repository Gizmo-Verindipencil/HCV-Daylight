import { Hex3Detector } from "../../../src/detector/hex3-detector.js";

// hex3
// 3桁の16進数表現(例: #000 )に関するテスト

describe("Hex3Detector.detect - hex3_", () => {
    // hex3_1:
    it("1: 数字3桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex3Detector();

        // 結果を検証
        for (const expression of [
            "#000",
            "#123",
            "#987"
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // hex3_2:
    it("2: アルファベット大文字3桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex3Detector();

        // 結果を検証
        for (const expression of [
            "#AAA",
            "#ABC",
            "#FED"
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // hex3_3:
    it("3: アルファベット小文字3桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex3Detector();

        // 結果を検証
        for (const expression of [
            "#aaa",
            "#abc",
            "#fed"
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // hex3_4:
    it("4: 前後に空白あり", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex3Detector();

        // 結果を検証
        for (const expression of [
            " #000 ",
            " #aaa",
            "#AAA "
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // hex3_5:
    it("5: その他アンマッチ", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex3Detector();

        // 結果を検証
        for (const expression of [
            "abc",
            "#0000",
            "#000000",
            "#00000000",
            "rgb(0,0,0)",
            "rgb(0%,0%,0%)",
            "rgb(0%,0%,0%,0)",
            "rgb(0,0,0,0)",
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