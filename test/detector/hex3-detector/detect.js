import { ExpressionSetFactory } from "../expression-set-factory.js";
import { Hex3Detector } from "../../../src/detector/hex3-detector.js";

// hex3
// 3桁の16進数表現(例: #000 )に関するテスト

describe("Hex3Detector.detect - ", () => {
    // 1:
    it("1: 数字3桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex3Detector();

        // 結果を検証
        const expressions = [
            "#000",
            "#123",
            "#987"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // 2:
    it("2: アルファベット大文字3桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex3Detector();

        // 結果を検証
        const expressions = [
            "#AAA",
            "#ABC",
            "#FED"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // 3:
    it("3: アルファベット小文字3桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex3Detector();

        // 結果を検証
        const expressions = [
            "#aaa",
            "#abc",
            "#fed"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // 4:
    it("4: その他", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex3Detector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = Object.values(expressionSet).flat().join(" ");
        const result = detector.detect(expression);
        expect(result).toEqual(expressionSet.hex3);
    });
});