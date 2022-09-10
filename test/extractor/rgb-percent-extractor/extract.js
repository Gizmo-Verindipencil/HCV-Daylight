import { RgbPercentExtractor } from "../../../src/extractor/rgb-percent-extractor";
import { Color } from "../../../src/color";

describe("RgbPercentExtractor.extract - ", () => {
    // 1:
    it("1: %指定RGB表現", () => {
        // テスト対象のインスタンスを作成
        const extractor = new RgbPercentExtractor();

        // テスト対象処理を実行
        const result = extractor.extract("rgb(10%, 20%, 30%)");
        const expected = new Color(26, 51, 77, null);

        // 結果確認
        // RGB表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 2:
    it("2: 変換不可", () => {
        // テスト対象のインスタンスを作成
        const extractor = new RgbPercentExtractor();

        // テスト対象処理を実行
        const result = extractor.extract("not rgb-percent");

        // 結果確認
        // %指定のRGB表現以外からは何も抽出されないこと
        expect(result).toBeNull();
    });
});