import { HslExtractor } from "../../../src/extractor/hsl-extractor";
import { Color } from "../../../src/color";

describe("HslExtractor.extract - ", () => {
    // 1:
    it("1: HSL表現", () => {
        // テスト対象のインスタンスを作成
        const extractor = new HslExtractor();

        // テスト対象処理を実行
        const result = extractor.extract("hsl(10, 20%, 30%)");
        const expected = new Color(92, 66, 61, null);

        // 結果確認
        // HSL表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 2:
    it("2: 変換不可", () => {
        // テスト対象のインスタンスを作成
        const extractor = new HslExtractor();

        // テスト対象処理を実行
        const result = extractor.extract("not hsl");
        
        // 結果確認
        // HSL表現以外からは何も抽出されないこと
        expect(result).toBeNull();
    });
});