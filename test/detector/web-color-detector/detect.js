import { WebColorDetector } from "../../../src/detector/web-color-detector";
import { ExpressionSetFactory } from "../expression-set-factory";
import { WebColorNameList } from "./web-color-name-list";

// web-color
// WEBカラー表現(例: red )に関するテスト

describe("WebColorDetector.detect - ", () => {
    // 1:
    it("1: 大文字", () => {
        // テスト対象のインスタンスを作成
        const detector = new WebColorDetector();

        // テスト対象処理を実行
        const expressions = WebColorNameList.getNames().map(x => x.toUpperCase());
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 大文字表記のWEBカラーが検出されること
        expect(result).toEqual(expressions);
    });

    // 2:
    it("2: 小文字", () => {
        // テスト対象のインスタンスを作成
        const detector = new WebColorDetector();

        // テスト対象処理を実行
        const expressions = WebColorNameList.getNames().map(x => x.toLowerCase());
        const result = detector.detect(expressions.join(" "));

        // 結果確認
        // 小文字表記のWEBカラーが検出されること
        expect(result).toEqual(expressions);
    });

    // 3:
    it("3: その他", () => {
        // テスト対象のインスタンスを作成
        const detector = new WebColorDetector();

        // テスト対象処理を実行
        const expressions = [].concat(
            WebColorNameList.getNames().map(x => x + "x"),
            Object.values(ExpressionSetFactory.create()).flat()
        );
        const expression = Object.values(expressions).join(" ");
        const result = detector.detect(expression);

        // 結果確認
        // WEBカラー表記以外の表現は検出されないこと
        expect(result).toEqual([]);
    });
});