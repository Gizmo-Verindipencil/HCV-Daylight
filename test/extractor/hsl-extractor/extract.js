import { HslExtractor } from "../../../src/extractor/hsl-extractor.js";
import { Color } from "../../../src/color.js";

describe("HslExtractor.extract - ", () => {
    // 1:
    it("1: HSL表現", () => {
        // テスト対象のインスタンスを作成
        const extractor = new HslExtractor();

        // 結果を検証
        const result = extractor.extract("hsl(10, 20%, 30%)");
        const expected = new Color(92, 66, 61, null);
        expect(result).toEqual(expected);
    });

    // 2:
    it("2: 変換不可", () => {
        // テスト対象のインスタンスを作成
        const extractor = new HslExtractor();

        // 結果を検証
        const result = extractor.extract("not hsl");
        expect(result).toBeNull();
    });
});