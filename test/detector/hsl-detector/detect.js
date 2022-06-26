import { ExpressionSetFactory } from "../expression-set-factory.js";
import { HslDetector } from "../../../src/detector/hsl-detector.js";

// hsl
// HSL表現(例: hsl(0, 0%, 0%) )に関するテスト

describe("HslDetector.detect - hsl_", () => {
    // hsl_1:
    it("1: 値が整数", () => {
        // テスト対象の正規表現を作成
        const detector = new HslDetector();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsl_2:
    it("2: 値が小数", () => {
        // テスト対象の正規表現を作成
        const detector = new HslDetector();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsl_3:
    it("3: 値がマイナス", () => {
        // テスト対象の正規表現を作成
        const detector = new HslDetector();

        // 結果を検証
        const expressions = [
            "hsl(-0,-0%,-0%)",
            "hsl(-1,-1%,-1%)",
            "hsl(-2,-2%,-2%)"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsl_4:
    it("4: ドット始まりの小数", () => {
        // テスト対象の正規表現を作成
        const detector = new HslDetector();

        // 結果を検証
        const expressions = [
            "hsl(.0,.0%,.0%)",
            "hsl(.1,.1%,.1%)",
            "hsl(.2,.2%,.2%)"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsl_5:
    it("5: その他", () => {
        // テスト対象の正規表現を作成
        const detector = new HslDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = Object.values(expressionSet).flat().join(" ");
        const result = detector.detect(expression);
        expect(result).toEqual(expressionSet.hsl);
    });
});