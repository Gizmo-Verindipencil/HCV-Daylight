import { RgbExtractor } from "../../../src/extractor/rgb-extractor";
import { Color } from "../../../src/color";

describe("RgbExtractor.extract - ", () => {
    // 1:
    it("1: RGB表現", () => {
        // テスト対象のインスタンスを作成
        const extractor = new RgbExtractor();

        // 結果を検証
        const result = extractor.extract("rgb(10, 20, 30)");
        const expected = new Color(10, 20, 30, null);
        expect(result).toEqual(expected);
    });

    // 2:
    it("2: 変換不可", () => {
        // テスト対象のインスタンスを作成
        const extractor = new RgbExtractor();

        // 結果を検証
        const result = extractor.extract("not rgb");
        expect(result).toBeNull();
    });
});