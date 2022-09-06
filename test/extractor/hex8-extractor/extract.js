import { Hex8Extractor } from "../../../src/extractor/hex8-extractor";
import { Color } from "../../../src/color";

describe("Hex8Extractor.extract - ", () => {
    // 1:
    it("1: 8桁の16進数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new Hex8Extractor();

        // 結果を検証
        const result = extractor.extract("#12345678");
        const expected = new Color(18, 52, 86, 47);
        expect(result).toEqual(expected);
    });

    // 2:
    it("2: 変換不可", () => {
        // テスト対象のインスタンスを作成
        const extractor = new Hex8Extractor();

        // 結果を検証
        const result = extractor.extract("not hex8");
        expect(result).toBeNull();
    });
});