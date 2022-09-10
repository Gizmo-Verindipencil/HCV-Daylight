import { ExpressionSetFactory } from "../expression-set-factory";
import { Hex8Detector } from "../../../src/detector/hex8-detector";

// hex8
// 8桁の16進数表現(例: #00000000 )に関するテスト

describe("Hex8Detector.detect - ", () => {
    // 1:
    it("1: 数字8桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex8Detector();

        // テスト対象処理を実行
        const expressions = [
            "#00000000",
            "#12345678",
            "#98765432"
        ];
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 8文字の数値で構成される16進数表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 2:
    it("2: アルファベット大文字8桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex8Detector();

        // テスト対象処理を実行
        const expressions = [
            "#AAAAAAAA",
            "#ABCDEFAB",
            "#FEDCBAFE"
        ];
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 8文字の大文字アルファベットで構成される16進数表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 3:
    it("3: アルファベット小文字8桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex8Detector();

        // テスト対象処理を実行
        const expressions = [
            "#aaaaaaaa",
            "#abcdefab",
            "#fedcbafe"
        ];
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 8文字の小文字アルファベットで構成される16進数表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 4:
    it("4: その他", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex8Detector();

        // テスト対象処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = Object.values(expressionSet).flat().join(" ");
        const result = detector.detect(expression);

        // 結果確認
        // 8桁の16進数表現のみが検出されること
        expect(result).toEqual(expressionSet.hex8);
    });
});