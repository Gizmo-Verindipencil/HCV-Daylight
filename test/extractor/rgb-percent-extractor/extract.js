import { RgbPercentExtractor } from "../../../src/extractor/rgb-percent-extractor";
import { Color } from "../../../src/color";

describe("RgbPercentExtractor.extract - ", () => {
    // 1:
    it("1: %指定RGB表現", () => {
        // テスト対象のインスタンスを作成
        const extractor = new RgbPercentExtractor();

        // 結果を検証
        const result = extractor.extract("rgb(10%, 20%, 30%)");
        const expected = new Color(26, 51, 77, null);
        expect(result).toEqual(expected);
    });

    // 2:
    it("2: 変換不可", () => {
        // テスト対象のインスタンスを作成
        const extractor = new RgbPercentExtractor();

        // 結果を検証
        const result = extractor.extract("not rgb-percent");
        expect(result).toBeNull();
    });
});