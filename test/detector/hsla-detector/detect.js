import { ExpressionSetFactory } from "../expression-set-factory";
import { HslaDetector } from "../../../src/detector/hsla-detector";

// hsla
// HSLA表現(例: hsla(0, 0%, 0%, 0) )に関するテスト

describe("HslaDetector.detect - ", () => {
    // 1:
    it("1: 値が整数", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslaDetector();

        // テスト対象の処理を実行
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsla(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${x})`);
        const result = detector.detect(expressions.join(" "));
        
        // 結果確認
        // 整数のHSLA表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 2:
    it("2: 値が小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslaDetector();

        // テスト対象の処理を実行
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsla(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${x})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 小数のHSLA表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 3:
    it("3: アルファ値が整数パーセント", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslaDetector();

        // テスト対象の処理を実行
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsla(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${getPercent(x)})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // アルファ値が整数のHSLA表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 4:
    it("4: アルファ値が小数パーセント", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslaDetector();

        // テスト対象の処理を実行
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsla(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${getPercent(x)})`);
        const result = detector.detect(expressions.join(" "));
        
        // 結果確認
        // アルファ値が小数のHSLA表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 5:
    it("5: 値がマイナス", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslaDetector();

        // テスト対象の処理を実行
        const values = [ "-1", " -2", "-3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsla(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${getPercent(x)})`);
        const result = detector.detect(expressions.join(" "));
        
        // 結果確認
        // 負数のHSLA表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 6:
    it("6: ドット始まりの小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslaDetector();

        // テスト対象の処理を実行
        const values = [ ".1", " .2", ".3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsla(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${getPercent(x)})`);
        const result = detector.detect(expressions.join(" "));
        
        // 結果確認
        // 整数部が省略された小数のHSLA表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 6:
    it("6: degキーワードあり", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslaDetector();

        // テスト対象の処理を実行
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const getAngle = x => x != x.trimEnd() ? `${x.trimEnd()}deg ` : `${x}deg`;
        const expressions = values.map(x => `hsla(${getAngle(x)},${[...Array(2)].map(y => getPercent(x)).join(",")},${getPercent(x)})`);
        const result = detector.detect(expressions.join(" "));
        
        // 結果確認
        // degキーワードを含むHSLA表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 7:
    it("7: その他", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslaDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = Object.values(expressionSet).flat().join(" ");
        const result = detector.detect(expression);

        // 結果確認
        // HSLA表現のみが検出されること
        expect(result).toEqual(expressionSet.hsla);
    });
});