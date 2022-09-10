import { Hex4Detector } from "../../../src/detector/hex4-detector";

// hex4
// 4桁の16進数表現(例: #0000 )に関するテスト

describe("Hex4Detector.match - ", () => {
    // 1:
    it("1: 数字4桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex4Detector();

        // テスト対象の処理を実行
        for (const expression of [
            "#0000",
            "#1234",
            "#9876"
        ]) {
            const result = detector.match(expression);

            // 結果確認
            // 4文字の数値で構成される16進数表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 2:
    it("2: アルファベット大文字4桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex4Detector();

        // テスト対象の処理を実行
        for (const expression of [
            "#AAAA",
            "#ABCD",
            "#FEDC"
        ]) {
            const result = detector.match(expression);

            // 結果確認
            // 4文字の大文字アルファベットで構成される16進数表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 3:
    it("3: アルファベット小文字4桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex4Detector();

        // テスト対象の処理を実行
        for (const expression of [
            "#aaaa",
            "#abcd",
            "#fedc"
        ]) {
            const result = detector.match(expression);

            // 結果確認
            // 4文字の小文字アルファベットで構成される16進数表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 4:
    it("4: 前後に空白あり", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex4Detector();

        // テスト対象の処理を実行
        for (const expression of [
            " #0000 ",
            " #aaaa",
            "#AAAA "
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
        const detector = new Hex4Detector();

        // テスト対象の処理を実行
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

            // 結果確認
            // 該当以外の色表現は不一致判定されること
            expect(result).toBe(false);
        }
    });
});