import { ExpressionSetFactory } from "../expression-set-factory.js";
import { ColorDetectorResult } from "../../../src/detector/color-detector-result.js";
import { ColorDetector } from "../../../src/detector/color-detector.js";

describe("ColorDetector.detect - ", () => {
    // 1:
    it("1: 非色表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.none.join(" ");
        const result = detector.detect(expression);
        expect(result).toEqual([]);
    });

    // 2
    it("2: 3桁の16進数表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.hex3.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.hex3.map(x => new ColorDetectorResult("hex3", x.trim()));
        expect(result).toEqual(expectation);
    });

    // 3
    it("3: 4桁の16進数表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.hex4.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.hex4.map(x => new ColorDetectorResult("hex4", x.trim()));
        expect(result).toEqual(expectation);
    });
    
    // 4
    it("4: 6桁の16進数表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.hex6.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.hex6.map(x => new ColorDetectorResult("hex6", x.trim()));
        expect(result).toEqual(expectation);
    });
    
    // 5
    it("5: 8桁の16進数表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.hex8.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.hex8.map(x => new ColorDetectorResult("hex8", x.trim()));
        expect(result).toEqual(expectation);
    });

    // 6
    it("6: アルファ値を含むHSL表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.hslWithA.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.hslWithA.map(x => new ColorDetectorResult("hsl-alpha", x.trim()));
        expect(result).toEqual(expectation);
    });

    // 7
    it("7: HSL表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.hsl.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.hsl.map(x => new ColorDetectorResult("hsl", x.trim()));
        expect(result).toEqual(expectation);
    });

    // 8
    it("8: HSLA表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.hsla.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.hsla.map(x => new ColorDetectorResult("hsla", x.trim()));
        expect(result).toEqual(expectation);
    });

    // 9
    it("9: アルファ値を含むRGB表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.rgbWithA.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.rgbWithA.map(x => new ColorDetectorResult("rgb-alpha", x.trim()));
        expect(result).toEqual(expectation);
    });

    // 10
    it("10: RGB表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.rgb.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.rgb.map(x => new ColorDetectorResult("rgb", x.trim()));
        expect(result).toEqual(expectation);
    });

    // 11
    it("11: アルファ値を含む%指定RGB表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.rgbPercentWithA.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.rgbPercentWithA.map(x => new ColorDetectorResult("rgb-percent-alpha", x.trim()));
        expect(result).toEqual(expectation);
    });

    // 12
    it("12: アルファ値を含まない%指定RGB表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.rgbPercent.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.rgbPercent.map(x => new ColorDetectorResult("rgb-percent", x.trim()));
        expect(result).toEqual(expectation);
    });

    // 13
    it("13: RGBA表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.rgba.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.rgba.map(x => new ColorDetectorResult("rgba", x.trim()));
        expect(result).toEqual(expectation);
    });

    // 14
    it("14: %で指定したRGBA表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = expressionSet.rgbaPercent.join(" ");
        const result = detector.detect(expression);
        const expectation = expressionSet.rgbaPercent.map(x => new ColorDetectorResult("rgba-percent", x.trim()));
        expect(result).toEqual(expectation);
    });
});