import { Hex3Detector } from "../../../src/detector/hex3-detector";
import { ExpressionSetFactory } from "../expression-set-factory";

// hex3
// 3桁の16進数表現(例: #000 )に関するテスト

describe("Hex3Detector.match - ", () => {
    // 1:
    it("1: 数字3桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex3Detector();

        // テスト対象の処理を実行
        for (const expression of [
            "#000",
            "#123",
            "#987"
        ]) {
            const result = detector.match(expression);

            // 結果確認
            // 3文字の数値で構成される16進数表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 2:
    it("2: アルファベット大文字3桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex3Detector();

        // テスト対象の処理を実行
        for (const expression of [
            "#AAA",
            "#ABC",
            "#FED"
        ]) {
            const result = detector.match(expression);

            // 結果確認
            // 3文字の大文字アルファベットで構成される16進数表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 3:
    it("3: アルファベット小文字3桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex3Detector();

        // テスト対象の処理を実行
        for (const expression of [
            "#aaa",
            "#abc",
            "#fed"
        ]) {
            const result = detector.match(expression);

            // 結果確認
            // 3文字の小文字アルファベットで構成される16進数表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 4:
    it("4: 前後に空白あり", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex3Detector();

        // テスト対象の処理を実行
        for (const expression of [
            " #000 ",
            " #aaa",
            "#AAA "
        ]) {
            const result = detector.match(expression);

            // 結果確認
            // 前後の空白は無視されること
            expect(result).toBe(true);
        }
    });

    // 5:
    it("5: その他アンマッチ", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex3Detector();

        // テスト対象の処理を実行
        for (const expression of ExpressionSetFactory.createElse("hex3")) {
            const result = detector.match(expression);

            // 結果確認
            // 該当以外の色表現は不一致判定されること
            expect(result).toBe(false);
        }
    });
});