import { Hex3Extractor } from "../../../src/extractor/hex3-extractor.js";
import { Color } from "../../../src/color.js";

describe("Hex3Extractor.extract - ", () => {
    // 1:
    it("1: 3桁の16進数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new Hex3Extractor();

        // 結果を検証
        const result = extractor.extract("#123");
        const expected = new Color(17, 34, 51, null);
        expect(result).toEqual(expected);
    });

    // 2:
    it("2: 変換不可", () => {
        // テスト対象のインスタンスを作成
        const extractor = new Hex3Extractor();

        // 結果を検証
        const result = extractor.extract("not hex3");
        expect(result).toBeNull();
    });
});