import { ExpressionSetFactory } from "../expression-set-factory.js";
import { Hex6Detector } from "../../../src/detector/hex6-detector.js";

// hex6
// 6桁の16進数表現(例: #000000 )に関するテスト

describe("Hex6Detector.detect - ", () => {
    // 1:
    it("1: 数字3桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex6Detector();

        // 結果を検証
        const expressions = [
            "#000000",
            "#123456",
            "#987654"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // 2:
    it("2: アルファベット大文字3桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex6Detector();

        // 結果を検証
        const expressions = [
            "#AAAAAA",
            "#ABCDEF",
            "#FEDCBA"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // 3:
    it("3: アルファベット小文字3桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex6Detector();

        // 結果を検証
        const expressions = [
            "#aaaaaa",
            "#abcdef",
            "#fedcba"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // 4:
    it("4: その他", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex6Detector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = Object.values(expressionSet).flat().join(" ");
        const result = detector.detect(expression);
        expect(result).toEqual(expressionSet.hex6);
    });
});