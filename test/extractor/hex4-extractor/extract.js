import { Hex4Extractor } from "../../../src/extractor/hex4-extractor.js";
import { Color } from "../../../src/color.js";

describe("Hex4Extractor.extract - ", () => {
    // 1:
    it("1: 4桁の16進数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new Hex4Extractor();

        // 結果を検証
        const result = extractor.extract("#1234");
        const expected = new Color(17, 34, 51, 68);
        expect(result).toEqual(expected);
    });

    // 2:
    it("2: 変換不可", () => {
        // テスト対象のインスタンスを作成
        const extractor = new Hex4Extractor();

        // 結果を検証
        const result = extractor.extract("not hex4");
        expect(result).toBeNull();
    });
});