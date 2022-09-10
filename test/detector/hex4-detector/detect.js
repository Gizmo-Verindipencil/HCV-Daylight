import { ExpressionSetFactory } from "../expression-set-factory";
import { Hex4Detector } from "../../../src/detector/hex4-detector";

// hex4
// 4桁の16進数表現(例: #0000 )に関するテスト

describe("Hex4Detector.detect - ", () => {
    // 1:
    it("1: 数字4桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex4Detector();

        // テスト対象の処理を実行
        const expressions = [
            "#0000",
            "#1234",
            "#9876"
        ];
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 4文字の数値で構成される16進数表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 2:
    it("2: アルファベット大文字4桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex4Detector();

        // テスト対象の処理を実行
        const expressions = [
            "#AAAA",
            "#ABCD",
            "#FEDE"
        ];
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 4文字の大文字アルファベットで構成される16進数表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 3:
    it("3: アルファベット小文字4桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex4Detector();

        // テスト対象の処理を実行
        const expressions = [
            "#aaaa",
            "#abcd",
            "#fede"
        ];
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 4文字の小文字アルファベットで構成される16進数表現が検出されること
        expect(result).toEqual(expressions);
    });

    // 4:
    it("4: 数値6桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex4Detector();

        // テスト対象の処理を実行
        const expressions = [
            "#123456",
            "#abcdef",
            "#ABCDEF"
        ];
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 6文字の16進数表現から部分的な4文字の16進数表現が検出されないこと
        expect(result).toEqual([]);
    });

    // 5:
    it("5: 数値8桁", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex4Detector();

        // テスト対象の処理を実行
        const expressions = [
            "#12345612",
            "#abcdef12",
            "#ABCDEF12"
        ];
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 8文字の16進数表現から部分的な4文字の16進数表現が検出されないこと
        expect(result).toEqual([]);
    });

    // 6:
    it("6: その他", () => {
        // テスト対象のインスタンスを作成
        const detector = new Hex4Detector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        const expression = Object.values(expressionSet).flat().join(" ");
        const result = detector.detect(expression);

        // 結果確認
        // 4桁の16進数表現のみが検出されること
        expect(result).toEqual(expressionSet.hex4);
    });
});