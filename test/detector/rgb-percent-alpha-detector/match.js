import { RgbPercentAlphaDetector } from "../../../src/detector/rgb-percent-alpha-detector";
import { ExpressionSetFactory } from "../expression-set-factory";

// rgb-percent-alpha
// アルファ値を含む%指定RGB表現(例: rgb(0%, 0%, 0%, 0) )に関するテスト

describe("RgbPercentAlphaDetector.match - ", () => {
    // 1:
    it("1: 値が整数", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbPercentAlphaDetector();

        // テスト対象の処理を実行
        const values = [ "1%", " 2%", "3% " ];
        const removePercent = x => x.replace("%", "");
        const expressions = values.map(x => `rgb(${[...Array(3)].map(y => x).join(",")},${removePercent(x)})`);
        for (const expression of expressions) {
            const result = detector.match(expression);

            // 結果確認
            // 整数のRGB表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 2:
    it("2: 値が小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbPercentAlphaDetector();

        // テスト対象の処理を実行
        const values = [ "0.1%", " 0.2%", "0.3% " ];
        const removePercent = x => x.replace("%", "");
        const expressions = values.map(x => `rgb(${[...Array(3)].map(y => x).join(",")},${removePercent(x)})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            
            // 結果確認
            // 小数のRGB表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 3:
    it("3: 前後に空白あり", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbPercentAlphaDetector();

        // テスト対象の処理を実行
        for (const expression of [
            " rgb(0%,0%,0%,0) ",
            " rgb(1%,1%,1%,1)",
            "rgb(2%,2%,2%,2) "
        ]) {
            const result = detector.match(expression);
            
            // 結果確認
            // 前後の空白は無視されること
            expect(result).toBe(true);
        }
    });

    // 4:
    it("4: 値がマイナス", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbPercentAlphaDetector();

        // テスト対象の処理を実行
        const values = [ "-1%", " -2%", "-3% " ];
        const removePercent = x => x.replace("%", "");
        const expressions = values.map(x => `rgb(${[...Array(3)].map(y => x).join(",")},${removePercent(x)})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            
            // 結果確認
            // 負数のRGB表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 5:
    it("5: ドット始まりの小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbPercentAlphaDetector();

        // テスト対象の処理を実行
        const values = [ ".1%", " .2%", ".3% " ];
        const removePercent = x => x.replace("%", "");
        const expressions = values.map(x => `rgb(${[...Array(3)].map(y => x).join(",")},${removePercent(x)})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            
            // 結果確認
            // 整数部が省略された小数のRGB表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 6:
    it("6: その他アンマッチ", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbPercentAlphaDetector();

        // テスト対象の処理を実行
        for (const expression of ExpressionSetFactory.createElse("rgb-percent-alpha")) {
            const result = detector.match(expression);
            
            // 結果確認
            // 該当以外の色表現は不一致判定されること
            expect(result).toBe(false);
        }
    });
});