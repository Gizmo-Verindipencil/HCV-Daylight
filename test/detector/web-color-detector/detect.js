import { WebColorDetector } from "../../../src/detector/web-color-detector.js";
import { ExpressionSetFactory } from "../expression-set-factory.js";
import { WebColorNameList } from "./web-color-name-list.js";

// web-color
// WEBカラー表現(例: red )に関するテスト

describe("WebColorDetector.detect - ", () => {
    // 1:
    it("1: 大文字", () => {
        // テスト対象のインスタンスを作成
        const detector = new WebColorDetector();

        // 結果を検証
        const expressions = WebColorNameList.getNames().map(x => x.toUpperCase());
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // 2:
    it("2: 小文字", () => {
        // テスト対象のインスタンスを作成
        const detector = new WebColorDetector();

        // 結果を検証
        const expressions = WebColorNameList.getNames().map(x => x.toLowerCase());
        const result = detector.detect(expressions.join(" "));
        expect(result).toEqual(expressions);
    });

    // 3:
    it("3: その他", () => {
        // テスト対象のインスタンスを作成
        const detector = new WebColorDetector();

        // 結果を検証
        const expressions = [].concat(
            WebColorNameList.getNames().map(x => x + "x"),
            Object.values(ExpressionSetFactory.create()).flat()
        );
        const expression = Object.values(expressions).join(" ");
        const result = detector.detect(expression);
        expect(result).toEqual([]);
    });
});