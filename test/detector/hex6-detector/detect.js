import { ExpressionSetFactory } from "../expression-set-factory";
import { Hex6Detector } from "../../../src/detector/hex6-detector";

// hex6
// 6桁の16進数表現(例: #000000 )に関するテスト

describe("Hex6Detector.detect - ", () => {
    // 1:
    it("1: 数字6桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex6Detector();

        // テスト対象の処理を実行
        const expressions = [
            "#000000",
            "#123456",
            "#987654"
        ];
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 6文字の数値で構成される16進数表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 2:
    it("2: アルファベット大文字6桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex6Detector();

        // テスト対象の処理を実行
        const expressions = [
            "#AAAAAA",
            "#ABCDEF",
            "#FEDCBA"
        ];
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 6文字の大文字アルファベットで構成される16進数表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 3:
    it("3: アルファベット小文字6桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex6Detector();

        // テスト対象の処理を実行
        const expressions = [
            "#aaaaaa",
            "#abcdef",
            "#fedcba"
        ];
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 6文字の小文字アルファベットで構成される16進数表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 4:
    it("4: 数値8桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex6Detector();

        // テスト対象の処理を実行
        const expressions = [
            "#12345612",
            "#abcdef12",
            "#ABCDEF12"
        ];
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 8文字の16進数表現から部分的な3文字の16進数表現が検出されないこと
        expect(result).toEqual([]);
    });

    // 5:
    it("5: その他", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex6Detector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = Object.values(expressionSet).flat().join(" ");
        const result = detector.detect(expression);

        // 結果確認
        // 6桁の16進数表現のみが検出されること
        expect(result).toEqual(expressionSet.hex6);
    });
});