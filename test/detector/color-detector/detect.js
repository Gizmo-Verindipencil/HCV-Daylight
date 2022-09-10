import { ExpressionSetFactory } from "../expression-set-factory";
import { ColorDetectorResult } from "../../../src/detector/color-detector-result";
import { ColorDetector } from "../../../src/detector/color-detector";

describe("ColorDetector.detect - ", () => {
    // 1:
    it("1: 非色表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.none.join(" ");
        const result = detector.detect(expression);

        // 結果確認
        // 色表現以外の文字列が検出されないこと
        expect(result).toEqual([]);
    });

    // 2:
    it("2: 3桁の16進数表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.hex3.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.hex3.map(x => new ColorDetectorResult("hex3", x.trim()));

        // 結果確認
        // 3桁の16進数表現が検出されること
        expect(result).toEqual(expectation);
    });

    // 3:
    it("3: 4桁の16進数表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.hex4.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.hex4.map(x => new ColorDetectorResult("hex4", x.trim()));
        
        // 結果確認
        // 4桁の16進数表現が検出されること
        expect(result).toEqual(expectation);
    });
    
    // 4:
    it("4: 6桁の16進数表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.hex6.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.hex6.map(x => new ColorDetectorResult("hex6", x.trim()));
        
        // 結果確認
        // 6桁の16進数表現が検出されること
        expect(result).toEqual(expectation);
    });
    
    // 5:
    it("5: 8桁の16進数表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.hex8.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.hex8.map(x => new ColorDetectorResult("hex8", x.trim()));
        
        // 結果確認
        // 8桁の16進数表現が検出されること
        expect(result).toEqual(expectation);
    });

    // 6:
    it("6: アルファ値を含むHSL表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.hslAlpha.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.hslAlpha.map(x => new ColorDetectorResult("hsl-alpha", x.trim()));
        
        // 結果確認
        // アルファ値を含むHSL表現が検出されること
        expect(result).toEqual(expectation);
    });

    // 7:
    it("7: HSL表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.hsl.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.hsl.map(x => new ColorDetectorResult("hsl", x.trim()));
        
        // 結果確認
        // アルファ値を含まないHSL表現が検出されること
        expect(result).toEqual(expectation);
    });

    // 8:
    it("8: HSLA表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.hsla.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.hsla.map(x => new ColorDetectorResult("hsla", x.trim()));
        
        // 結果確認
        // HSLA表現が検出されること
        expect(result).toEqual(expectation);
    });

    // 9:
    it("9: アルファ値を含むRGB表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.rgbAlpha.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.rgbAlpha.map(x => new ColorDetectorResult("rgb-alpha", x.trim()));
        
        // 結果確認
        // アルファ値を含むRGB表現が検出されること
        expect(result).toEqual(expectation);
    });

    // 10:
    it("10: RGB表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.rgb.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.rgb.map(x => new ColorDetectorResult("rgb", x.trim()));
        
        // 結果確認
        // アルファ値を含まないRGB表現が検出されること
        expect(result).toEqual(expectation);
    });

    // 11:
    it("11: アルファ値を含む%指定RGB表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.rgbPercentAlpha.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.rgbPercentAlpha.map(x => new ColorDetectorResult("rgb-percent-alpha", x.trim()));
        
        // 結果確認
        // アルファ値を含む%指定のRGB表現が検出されること
        expect(result).toEqual(expectation);
    });

    // 12:
    it("12: アルファ値を含まない%指定RGB表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.rgbPercent.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.rgbPercent.map(x => new ColorDetectorResult("rgb-percent", x.trim()));
        
        // 結果確認
        // アルファ値を含まない%指定のRGB表現が検出されること
        expect(result).toEqual(expectation);
    });

    // 13:
    it("13: RGBA表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.rgba.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.rgba.map(x => new ColorDetectorResult("rgba", x.trim()));
        
        // 結果確認
        // RGBA表現が検出されること
        expect(result).toEqual(expectation);
    });

    // 14:
    it("14: %指定RGBA表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.rgbaPercent.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.rgbaPercent.map(x => new ColorDetectorResult("rgba-percent", x.trim()));
        
        // 結果確認
        // %指定のRGBA表現が検出されること
        expect(result).toEqual(expectation);
    });
});