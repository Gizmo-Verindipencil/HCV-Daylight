import { ExpressionSetFactory } from "../expression-set-factory";
import { SpaceDelimitedHslAlphaDetector } from "../../../src/detector/space-delimited-hsl-alpha-detector";

// space-delimited-hsl-alpha
// 空白文字区切りのアルファ値を含むHSL表現(例: hsl(0 0% 0% / 0%) )に関するテスト

describe("SpaceDelimitedHslAlphaDetector.detect - ", () => {
    // 1:
    it("1: 値が整数", () => {
        // テスト対象のインスタンスを作成
        const detector = new SpaceDelimitedHslAlphaDetector();

        // テスト対象の処理を実行
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const valueSets = values.map(x => [ x, [...Array(2)].map(y => getPercent(x)), x ].flat());
        const expressions = valueSets.map(x => `hsl(${x.slice(0, 3).join(" ")}/${x.slice(-1)})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 整数のHSL表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 2:
    it("2: 値が小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new SpaceDelimitedHslAlphaDetector();

        // テスト対象の処理を実行
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const valueSets = values.map(x => [ x, [...Array(2)].map(y => getPercent(x)), x ].flat());
        const expressions = valueSets.map(x => `hsl(${x.slice(0, 3).join(" ")}/${x.slice(-1)})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 小数のHSL表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 3:
    it("3: アルファ値が整数パーセント", () => {
        // テスト対象のインスタンスを作成
        const detector = new SpaceDelimitedHslAlphaDetector();

        // テスト対象の処理を実行
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const valueSets = values.map(x => [ x, [...Array(3)].map(y => getPercent(x)) ].flat());
        const expressions = valueSets.map(x => `hsl(${x.slice(0, 3).join(" ")}/${x.slice(-1)})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // アルファ値が整数のHSL表現が検出されること
        expect(result).toEqual(expressions);
    });
    
    // 4:
    it("4: アルファ値が小数パーセント", () => {
        // テスト対象のインスタンスを作成
        const detector = new SpaceDelimitedHslAlphaDetector();

        // テスト対象の処理を実行
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const valueSets = values.map(x => [ x, [...Array(3)].map(y => getPercent(x)) ].flat());
        const expressions = valueSets.map(x => `hsl(${x.slice(0, 3).join(" ")}/${x.slice(-1)})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // アルファ値が小数のHSL表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 5:
    it("5: 値がマイナス", () => {
        // テスト対象のインスタンスを作成
        const detector = new SpaceDelimitedHslAlphaDetector();

        // テスト対象の処理を実行
        const values = [ "-1", " -2", "-3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const valueSets = values.map(x => [ x, [...Array(3)].map(y => getPercent(x)) ].flat());
        const expressions = valueSets.map(x => `hsl(${x.slice(0, 3).join(" ")}/${x.slice(-1)})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 負数のHSL表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 6:
    it("6: ドット始まりの小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new SpaceDelimitedHslAlphaDetector();

        // テスト対象の処理を実行
        const values = [ ".1", " .2", ".3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const valueSets = values.map(x => [ x, [...Array(3)].map(y => getPercent(x)) ].flat());
        const expressions = valueSets.map(x => `hsl(${x.slice(0, 3).join(" ")}/${x.slice(-1)})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 整数部が省略された小数のHSL表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 7:
    it("7: degキーワードあり", () => {
        // テスト対象のインスタンスを作成
        const detector = new SpaceDelimitedHslAlphaDetector();

        // テスト対象の処理を実行
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const getDegree = x => x != x.trimEnd() ? `${x.trimEnd()}deg ` : `${x}deg`;
        const valueSets = values.map(x => [ getDegree(x), [...Array(3)].map(y => getPercent(x)) ].flat());
        const expressions = valueSets.map(x => `hsl(${x.slice(0, 3).join(" ")}/${x.slice(-1)})`);
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // degキーワードを含むHSL表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 8:
    it("8: その他", () => {
        // テスト対象のインスタンスを作成
        const detector = new SpaceDelimitedHslAlphaDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = Object.values(expressionSet).flat().join(" ");
        const result = detector.detect(expression);

        // 結果確認
        // 空白文字区切りのHSL表現のみが検出されること
        expect(result).toEqual(expressionSet.spaceDelimitedHslAlpha);
    });
});