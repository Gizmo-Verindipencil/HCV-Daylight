import { ExpressionSetFactory } from "../expression-set-factory.js";
import { HslaDetector } from "../../../src/detector/hsla-detector.js";

// hsla
// HSLA表現(例: hsla(0, 0%, 0%, 0%) )に関するテスト

describe("HslaDetector.detect - hsla_", () => {
    // hsla_1:
    it("1: 値が整数", () => {
        // テスト対象の正規表現を作成
        const detector = new HslaDetector();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsla(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${x})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsla_2:
    it("2: 値が小数", () => {
        // テスト対象の正規表現を作成
        const detector = new HslaDetector();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsla(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${x})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsla_3:
    it("3: アルファ値が整数パーセント", () => {
        // テスト対象の正規表現を作成
        const detector = new HslaDetector();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsla(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${getPercent(x)})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsla_4:
    it("4: アルファ値が小数パーセント", () => {
        // テスト対象の正規表現を作成
        const detector = new HslaDetector();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsla(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${getPercent(x)})`);
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsla_5:
    it("5: 値がマイナス", () => {
        // テスト対象の正規表現を作成
        const detector = new HslaDetector();

        // 結果を検証
        const expressions = [
            "hsla(-0,-0%,-0%,-0)",
            "hsla(-1,-1%,-1%,-1)",
            "hsla(-2,-2%,-2%,-2)"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsla_6:
    it("6: ドット始まりの小数", () => {
        // テスト対象の正規表現を作成
        const detector = new HslaDetector();

        // 結果を検証
        const expressions = [
            "hsla(.0,.0%,.0%,.0)",
            "hsla(.1,.1%,.1%,.1)",
            "hsla(.2,.2%,.2%,.2)"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hsla_7:
    it("7: その他", () => {
        // テスト対象の正規表現を作成
        const detector = new HslaDetector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = Object.values(expressionSet).flat().join(" ");
        const result = detector.detect(expression);
        expect(result).toEqual(expressionSet.hsla);
    });
});