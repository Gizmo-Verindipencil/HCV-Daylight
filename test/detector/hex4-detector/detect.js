import { ExpressionSetFactory } from "../expression-set-factory.js";
import { Hex4Detector } from "../../../src/detector/hex4-detector.js";

// hex4
// 4桁の16進数表現(例: #0000 )に関するテスト

describe("Hex4Detector.detect - ", () => {
    // 1:
    it("1: 数字3桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex4Detector();

        // 結果を検証
        const expressions = [
            "#0000",
            "#1234",
            "#9876"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // 2:
    it("2: アルファベット大文字3桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex4Detector();

        // 結果を検証
        const expressions = [
            "#AAAA",
            "#ABCD",
            "#FEDE"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // 3:
    it("3: アルファベット小文字3桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex4Detector();

        // 結果を検証
        const expressions = [
            "#aaaa",
            "#abcd",
            "#fede"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // 4:
    it("4: その他", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex4Detector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = Object.values(expressionSet).flat().join(" ");
        const result = detector.detect(expression);
        expect(result).toEqual(expressionSet.hex4);
    });
});