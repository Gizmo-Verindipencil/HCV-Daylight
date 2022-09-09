import { Hex6Extractor } from "../../../src/extractor/hex6-extractor";
import { Color } from "../../../src/color";

describe("Hex6Extractor.extract - ", () => {
    // 1:
    it("1: 6桁の16進数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new Hex6Extractor();

        // 結果を検証
        const result = extractor.extract("#123456");
        const expected = new Color(18, 52, 86, null);
        expect(result).toEqual(expected);
    });

    // 2:
    it("2: 変換不可", () => {
        // テスト対象のインスタンスを作成
        const extractor = new Hex6Extractor();

        // 結果を検証
        const result = extractor.extract("not hex6");
        expect(result).toBeNull();
    });
});