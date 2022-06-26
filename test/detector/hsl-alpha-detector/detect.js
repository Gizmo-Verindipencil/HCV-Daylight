import { ExpressionSetFactory } from "../expression-set-factory.js";
import { HslAlphaDetector } from "../../../src/detector/hsl-alpha-detector.js";

// hsl-with-a
// アルファ値を含むHSL表現(例: hsl(0, 0%, 0%, 0) )に関するテスト

describe("HslAlphaDetector.detect - hsl-with-a_", () => {
    // hsl-with-a_1:
    it("1: 値が整数", () => {
        // テスト対象の正規表現を作成
        const detector = new HslAlphaDetector();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${x})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsl-with-a_2:
    it("2: 値が小数", () => {
        // テスト対象の正規表現を作成
        const detector = new HslAlphaDetector();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${x})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsl-with-a_3:
    it("3: アルファ値が整数パーセント", () => {
        // テスト対象の正規表現を作成
        const detector = new HslAlphaDetector();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${getPercent(x)})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsl-with-a_4:
    it("4: アルファ値が小数パーセント", () => {
        // テスト対象の正規表現を作成
        const detector = new HslAlphaDetector();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${getPercent(x)})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsl-with-a_5:
    it("5: 値がマイナス", () => {
        // テスト対象の正規表現を作成
        const detector = new HslAlphaDetector();

        // 結果を検証
        const expressions = [
            "hsl(-0,-0%,-0%,-0)",
            "hsl(-1,-1%,-1%,-1)",
            "hsl(-2,-2%,-2%,-2)"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsl-with-a_6:
    it("6: ドット始まりの小数", () => {
        // テスト対象の正規表現を作成
        const detector = new HslAlphaDetector();

        // 結果を検証
        const expressions = [
            "hsl(.0,.0%,.0%,.0)",
            "hsl(.1,.1%,.1%,.1)",
            "hsl(.2,.2%,.2%,.2)"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsl-with-a_7:
    it("7: その他", () => {
        // テスト対象の正規表現を作成
        const detector = new HslAlphaDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = Object.values(expressionSet).flat().join(" ");
        const result = detector.detect(expression);
        expect(result).toEqual(expressionSet.hslWithA);
    });
});