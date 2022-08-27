import { RgbPercentAlphaExtractor } from "../../../src/extractor/rgb-percent-alpha-extractor.js";
import { Color } from "../../../src/color.js";

describe("RgbPercentAlphaExtractor.extract - ", () => {
    // 1:
    it("1: アルファ値が%", () => {
        // テスト対象のインスタンスを作成
        const extractor = new RgbPercentAlphaExtractor();

        // 結果を検証
        const result = extractor.extract("rgb(10%, 20%, 30%, 40%)");
        const expected = new Color(26, 51, 77, 40);
        expect(result).toEqual(expected);
    });

    // 2:
    it("2: アルファ値が小数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new RgbPercentAlphaExtractor();

        // 結果を検証
        const result = extractor.extract("rgb(10%, 20%, 30%, 0.4)");
        const expected = new Color(26, 51, 77, 40);
        expect(result).toEqual(expected);
    });

    // 3:
    it("3: 変換不可", () => {
        // テスト対象のインスタンスを作成
        const extractor = new RgbPercentAlphaExtractor();

        // 結果を検証
        const result = extractor.extract("not rgb-percent-alpha");
        expect(result).toBeNull();
    });
});