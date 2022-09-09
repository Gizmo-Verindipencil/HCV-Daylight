import { WebColorExtractor } from "../../../src/extractor/web-color-extractor";
import { Color } from "../../../src/color";
import { WebColor } from "../../../src/web-color";

describe("WebColorExtractor.extract - ", () => {
    // 1:
    it("1: WEBカラー", () => {
        // テスト対象のインスタンスを作成
        const extractor = new WebColorExtractor();

        // 結果を検証
        const colors = Object.keys(WebColor);
        for (const color of colors) {
            const expected = WebColor[color];
            const result = extractor.extract(color);

            expect(result).toEqual(new Color(
                expected.r,
                expected.g,
                expected.b,
                null
            ));
        }
    });

    // 2:
    it("2: 非WEBカラー", () => {
        // テスト対象のインスタンスを作成
        const extractor = new WebColorExtractor();

        // 結果を検証
        const result = extractor.extract("unknown color");
        expect(result).toBeNull();
    });
});