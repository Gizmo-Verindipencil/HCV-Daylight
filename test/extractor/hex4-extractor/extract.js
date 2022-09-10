import { Hex4Extractor } from "../../../src/extractor/hex4-extractor";
import { Color } from "../../../src/color";

describe("Hex4Extractor.extract - ", () => {
    // 1:
    it("1: 4桁の16進数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new Hex4Extractor();

        // テスト対象処理を実行
        const result = extractor.extract("#1234");
        const expected = new Color(17, 34, 51, 27);
        
        // 結果確認
        // 4桁の16進数表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 2:
    it("2: 変換不可", () => {
        // テスト対象のインスタンスを作成
        const extractor = new Hex4Extractor();

        // テスト対象処理を実行
        const result = extractor.extract("not hex4");
        
        // 結果確認
        // 4桁の16進数表現以外からは何も抽出されないこと
        expect(result).toBeNull();
    });
});