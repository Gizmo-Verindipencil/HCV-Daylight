import { WebColorDetector } from "../../../src/detector/web-color-detector.js";
import { ExpressionSetFactory } from "../expression-set-factory.js";
import { WebColorNameList } from "./web-color-name-list.js";

// web-color
// WEBカラー表現(例: red )に関するテスト

describe("WebColorDetector.match - ", () => {
    // 1:
    it("1: 大文字", () => {
        // テスト対象のインスタンスを作成
        const detector = new WebColorDetector();

        // 結果を検証
        const expressions = WebColorNameList.getNames().map(x => x.toUpperCase());
        for (const expression of expressions) {
            const result = detector.match(expression);
            expect(result).toEqual(true);
        }
    });

    // 2:
    it("2: 小文字", () => {
        // テスト対象のインスタンスを作成
        const detector = new WebColorDetector();

        // 結果を検証
        const expressions = WebColorNameList.getNames().map(x => x.toLowerCase());
        for (const expression of expressions) {
            const result = detector.match(expression);
            expect(result).toEqual(true);
        }
    });

    // 3:
    it("3: 前後マージン", () => {
        // テスト対象のインスタンスを作成
        const detector = new WebColorDetector();

        // 結果を検証
        let i = 0;
        const addMargins = x => {
            const result = i === 0 ? x :
                i === 1 ? ` ${x}` :
                i === 2 ? `${x} ` :
                "";
            i = i === 2 ? 0 : i + 1;
            return result;
        }
        const expressions = WebColorNameList.getNames().map(x => addMargins(x));
        for (const expression of expressions) {
            const result = detector.match(expression);
            expect(result).toEqual(true);
        }
    });

    // 4:
    it("4: その他", () => {
        // テスト対象のインスタンスを作成
        const detector = new WebColorDetector();

        // 結果を検証
        const expressions = [].concat(
            WebColorNameList.getNames().map(x => x + "x"),
            Object.values(ExpressionSetFactory.create()).flat()
        );
        for (const expression of expressions) {
            const result = detector.match(expression);
            expect(result).toEqual(false);
        }
    });
});