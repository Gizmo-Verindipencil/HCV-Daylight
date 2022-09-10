import { WebColorDetector } from "../../../src/detector/web-color-detector";
import { ExpressionSetFactory } from "../expression-set-factory";
import { WebColorNameList } from "./web-color-name-list";

// web-color
// WEBカラー表現(例: red )に関するテスト

describe("WebColorDetector.match - ", () => {
    // 1:
    it("1: 大文字", () => {
        // テスト対象のインスタンスを作成
        const detector = new WebColorDetector();

        // テスト対象処理を実行
        const expressions = WebColorNameList.getNames().map(x => x.toUpperCase());
        for (const expression of expressions) {
            const result = detector.match(expression);

            // 結果確認
            // 大文字表記のWEBカラーが一致判定されること
            expect(result).toEqual(true);
        }
    });

    // 2:
    it("2: 小文字", () => {
        // テスト対象のインスタンスを作成
        const detector = new WebColorDetector();

        // テスト対象処理を実行
        const expressions = WebColorNameList.getNames().map(x => x.toLowerCase());
        for (const expression of expressions) {
            const result = detector.match(expression);

            // 結果確認
            // 小文字表記のWEBカラーが一致判定されること
            expect(result).toEqual(true);
        }
    });

    // 3:
    it("3: 前後マージン", () => {
        // テスト対象のインスタンスを作成
        const detector = new WebColorDetector();

        // テスト対象処理を実行
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
            
            // 結果確認
            // 前後の空白は無視されること
            expect(result).toEqual(true);
        }
    });

    // 4:
    it("4: その他", () => {
        // テスト対象のインスタンスを作成
        const detector = new WebColorDetector();

        // テスト対象処理を実行
        const expressions = [].concat(
            WebColorNameList.getNames().map(x => x + "x"),
            Object.values(ExpressionSetFactory.create()).flat()
        );
        for (const expression of expressions) {
            const result = detector.match(expression);
            
            // 結果確認
            // 該当以外の色表現は不一致判定されること
            expect(result).toEqual(false);
        }
    });
});