import { ExpressionSetFactory } from "../expression-set-factory.js";
import { Hex8Detector } from "../../../src/detector/hex8-detector.js";

// hex8
// 8桁の16進数表現(例: #00000000 )に関するテスト

describe("Hex8Detector.detect - hex8_", () => {
    // hex8_1:
    it("1: 数字3桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex8Detector();

        // 結果を検証
        const expressions = [
            "#00000000",
            "#12345678",
            "#98765432"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hex8_2:
    it("2: アルファベット大文字3桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex8Detector();

        // 結果を検証
        const expressions = [
            "#AAAAAAAA",
            "#ABCDEFAB",
            "#FEDCBAFE"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hex8_3:
    it("3: アルファベット小文字3桁", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex8Detector();

        // 結果を検証
        const expressions = [
            "#aaaaaaaa",
            "#abcdefab",
            "#fedcbafe"
        ];
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // hex8_4:
    it("4: その他", () => {
        // テスト対象の正規表現を作成
        const detector = new Hex8Detector();

        // 結果を検証
        const expressionSet = ExpressionSetFactory.create();
        const expression = Object.values(expressionSet).flat().join(" ");
        const result = detector.detect(expression);
        expect(result).toEqual(expressionSet.hex8);
    });
});