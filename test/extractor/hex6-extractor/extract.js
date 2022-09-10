import { Hex6Extractor } from "../../../src/extractor/hex6-extractor";
import { Color } from "../../../src/color";

describe("Hex6Extractor.extract - ", () => {
    // 1:
    it("1: 6桁の16進数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new Hex6Extractor();

        // テスト対象の処理を実行
        const result = extractor.extract("#123456");
        const expected = new Color(18, 52, 86, null);
        
        // 結果確認
        // 6桁の16進数表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 2:
    it("2: 変換不可", () => {
        // テスト対象のインスタンスを作成
        const extractor = new Hex6Extractor();

        // テスト対象の処理を実行
        const result = extractor.extract("not hex6");
        
        // 結果確認
        // 6桁の16進数表現以外からは何も抽出されないこと
        expect(result).toBeNull();
    });
});