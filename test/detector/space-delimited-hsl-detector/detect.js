import { ExpressionSetFactory } from "../expression-set-factory";
import { SpaceDelimitedHslDetector } from "../../../src/detector/space-delimited-hsl-detector";

// space-delimited-hsl
// 空白文字区切りのHSL表現(例: hsl(0 0% 0%) )に関するテスト

describe("SpaceDelimitedHslDetector.detect - ", () => {
    // 1:
    it("1: 値が整数", () => {
        // テスト対象のインスタンスを作成
        const detector = new SpaceDelimitedHslDetector();

        // テスト対象の処理を実行
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x} ${[...Array(2)].map(y => getPercent(x)).join(" ")})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 整数のHSL表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 2:
    it("2: 値が小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new SpaceDelimitedHslDetector();

        // テスト対象の処理を実行
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x} ${[...Array(2)].map(y => getPercent(x)).join(" ")})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 小数のHSL表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 3:
    it("3: 値がマイナス", () => {
        // テスト対象のインスタンスを作成
        const detector = new SpaceDelimitedHslDetector();

        // テスト対象の処理を実行
        const values = [ "-1", " -2", "-3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x} ${[...Array(2)].map(y => getPercent(x)).join(" ")})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 負数のHSL表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 4:
    it("4: ドット始まりの小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new SpaceDelimitedHslDetector();

        // テスト対象の処理を実行
        const values = [ ".1", " .2", ".3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x} ${[...Array(2)].map(y => getPercent(x)).join(" ")})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 整数部が省略された小数のHSL表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 5:
    it("5: その他", () => {
        // テスト対象のインスタンスを作成
        const detector = new SpaceDelimitedHslDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = Object.values(expressionSet).flat().join(" ");
        const result = detector.detect(expression);

        // 結果確認
        // 空白文字区切りのHSL表現のみが検出されること
        expect(result).toEqual(expressionSet.spaceDelimitedHsl);
    });
});