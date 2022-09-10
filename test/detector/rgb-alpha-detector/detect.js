import { ExpressionSetFactory } from "../expression-set-factory";
import { RgbAlphaDetector } from "../../../src/detector/rgb-alpha-detector";

// rgb-alpha
// アルファ値を含むRGB表現(例: rgb(0, 0, 0, 0) )に関するテスト

describe("RgbAlphaDetector.detect - ", () => {
    // 1:
    it("1: 値が整数", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbAlphaDetector();

        // テスト対象処理を実行
        const values = [ "1", " 2", "3 " ];
        const expressions = values.map(x => `rgb(${[...Array(4)].map(y => x).join(",")})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 整数のRGB表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 2:
    it("2: 値が小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbAlphaDetector();

        // テスト対象処理を実行
        const values = [ "0.1", " 0.2", "0.3 " ];
        const expressions = values.map(x => `rgb(${[...Array(4)].map(y => x).join(",")})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 小数のRGB表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 3:
    it("3: アルファ値が整数パーセント", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbAlphaDetector();

        // テスト対象処理を実行
        const values = [ "1", " 2", "3 " ];
        const getAlpha = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `rgb(${[...Array(3)].map(y => x).join(",")},${getAlpha(x)})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // アルファ値が整数のRGB表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 4:
    it("4: アルファ値が小数パーセント", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbAlphaDetector();

        // テスト対象処理を実行
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getAlpha = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `rgb(${[...Array(3)].map(y => x).join(",")},${getAlpha(x)})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // アルファ値が小数のRGB表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 5:
    it("5: 値がマイナス", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbAlphaDetector();

        // テスト対象処理を実行
        const values = [ "-1", " -2", "-3 " ];
        const getAlpha = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `rgb(${[...Array(3)].map(y => x).join(",")},${getAlpha(x)})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 負数のRGB表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 6:
    it("6: ドット始まりの小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbAlphaDetector();

        // テスト対象処理を実行
        const values = [ ".1", " .2", ".3 " ];
        const getAlpha = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `rgb(${[...Array(3)].map(y => x).join(",")},${getAlpha(x)})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 整数部が省略された小数のRGB表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 7:
    it("7: その他", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbAlphaDetector();

        // テスト対象処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = Object.values(expressionSet).flat().join(" ");
        const result = detector.detect(expression);

        // 結果確認
        // アルファ値を含むRGB表現のみが検出されること
        expect(result).toEqual(expressionSet.rgbAlpha);
    });
});