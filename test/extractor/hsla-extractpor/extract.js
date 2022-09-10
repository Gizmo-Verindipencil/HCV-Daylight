import { HslaExtractor } from "../../../src/extractor/hsla-extractor";
import { Color } from "../../../src/color";

describe("HslaExtractor.extract - ", () => {
    // 1:
    it("1: アルファ値が%", () => {
        // テスト対象のインスタンスを作成
        const extractor = new HslaExtractor();

        // テスト対象処理を実行
        const result = extractor.extract("hsla(10, 20%, 30%, 40%)");
        const expected = new Color(92, 66, 61, 40);
        
        // 結果確認
        // アルファ値が百分率のHSLA表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 2:
    it("2: アルファ値が小数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new HslaExtractor();

        // テスト対象処理を実行
        const result = extractor.extract("hsla(10, 20%, 30%, 0.4)");
        const expected = new Color(92, 66, 61, 40);
        
        // 結果確認
        // アルファ値が小数のHSLA表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 3:
    it("3: 変換不可", () => {
        // テスト対象のインスタンスを作成
        const extractor = new HslaExtractor();

        // テスト対象処理を実行
        const result = extractor.extract("not hsla");
        
        // 結果確認
        // HSLA表現以外からは何も抽出されないこと
        expect(result).toBeNull();
    });
});