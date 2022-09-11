import { ExpressionSetFactory } from "../expression-set-factory";
import { RgbaPercentDetector } from "../../../src/detector/rgba-percent-detector";

// rgba-percent
// RGBA表現(例: rgba(0%, 0%, 0%, 0) )に関するテスト

describe("RgbaPercentDetector.detect - ", () => {
    // 1:
    it("1: 値が整数", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaPercentDetector();

        // テスト対象の処理を実行
        const values = [ "1%", " 2%", "3% " ];
        const removePercent = x => x.replace("%", "");
        const expressions = values.map(x => `rgba(${[...Array(3)].map(y => x).join(",")},${removePercent(x)})`);
        const result = detector.detect(expressions.join(" "));
        
        // 結果確認
        // 整数のRGBA表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 2:
    it("2: 値が小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaPercentDetector();

        // テスト対象の処理を実行
        const values = [ "0.1%", " 0.2%", "0.3% " ];
        const removePercent = x => x.replace("%", "");
        const expressions = values.map(x => `rgba(${[...Array(3)].map(y => x).join(",")},${removePercent(x)})`);
        const result = detector.detect(expressions.join(" "));
        
        // 結果確認
        // 小数のRGBA表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 3:
    it("3: アルファ値が整数パーセント", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaPercentDetector();

        // テスト対象の処理を実行
        const values = [ "1%", " 2%", "3% " ];
        const expressions = values.map(x => `rgba(${[...Array(4)].map(y => x).join(",")})`);
        const result = detector.detect(expressions.join(" "));
        
        // 結果確認
        // アルファ値が整数のRGBA表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 4:
    it("4: アルファ値が小数パーセント", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaPercentDetector();

        // テスト対象の処理を実行
        const values = [ "0.1%", " 0.2%", "0.3% " ];
        const expressions = values.map(x => `rgba(${[...Array(4)].map(y => x).join(",")})`);
        const result = detector.detect(expressions.join(" "));
        
        // 結果確認
        // アルファ値が小数のRGBA表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 5:
    it("5: 値がマイナス", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaPercentDetector();

        // テスト対象の処理を実行
        const values = [ "-1%", " -2%", "-3% " ];
        const removePercent = x => x.replace("%", "");
        const expressions = values.map(x => `rgba(${[...Array(3)].map(y => x).join(",")},${removePercent(x)})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 負数のRGBA表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 6:
    it("6: ドット始まりの小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaPercentDetector();

        // テスト対象の処理を実行
        const values = [ ".1%", " .2%", ".3% " ];
        const removePercent = x => x.replace("%", "");
        const expressions = values.map(x => `rgba(${[...Array(3)].map(y => x).join(",")},${removePercent(x)})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 整数部が省略された小数のRGBA表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 7:
    it("7: その他", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaPercentDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = Object.values(expressionSet).flat().join(" ");
        const result = detector.detect(expression);
        
        // 結果確認
        // RGBA表現のみが検出されること
        expect(result).toEqual(expressionSet.rgbaPercent);
    });
});