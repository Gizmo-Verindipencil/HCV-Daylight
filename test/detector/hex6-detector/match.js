import { Hex6Detector } from "../../../src/detector/hex6-detector";

// hex6
// 6桁の16進数表現(例: #000000 )に関するテスト

describe("Hex6Detector.match - ", () => {
    // 1:
    it("1: 数字6桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex6Detector();

        // テスト対象の処理を実行
        for (const expression of [
            "#000000",
            "#123456",
            "#987654"
        ]) {
            const result = detector.match(expression);

            // 結果確認
            // 6文字の数値で構成される16進数表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 2:
    it("2: アルファベット大文字6桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex6Detector();

        // テスト対象の処理を実行
        for (const expression of [
            "#AAAAAA",
            "#ABCDEF",
            "#FEDCBA"
        ]) {
            const result = detector.match(expression);

            // 結果確認
            // 6文字の大文字アルファベットで構成される16進数表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 3:
    it("3: アルファベット小文字6桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex6Detector();

        // テスト対象の処理を実行
        for (const expression of [
            "#aaaaaa",
            "#abcdef",
            "#fedcba"
        ]) {
            const result = detector.match(expression);

            // 結果確認
            // 6文字の小文字アルファベットで構成される16進数表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 4:
    it("4: 前後に空白あり", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex6Detector();

        // テスト対象の処理を実行
        for (const expression of [
            " #000000 ",
            " #aaaaaa",
            "#AAAAAA "
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
        const detector = new Hex6Detector();

        // テスト対象の処理を実行
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
            "hsl(0 0% 0%)",
            "hsl(0,0%,0%,0)",
            "hsla(0,0%,0%,0)"
        ]) {
            const result = detector.match(expression);

            // 結果確認
            // 該当以外の色表現は不一致判定されること
            expect(result).toBe(false);
        }
    });
});