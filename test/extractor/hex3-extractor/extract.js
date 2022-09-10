import { Hex3Extractor } from "../../../src/extractor/hex3-extractor";
import { Color } from "../../../src/color";

describe("Hex3Extractor.extract - ", () => {
    // 1:
    it("1: 3桁の16進数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new Hex3Extractor();

        // テスト対象処理を実行
        const result = extractor.extract("#123");
        const expected = new Color(17, 34, 51, null);

        // 結果確認
        // 3桁の16進数表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 2:
    it("2: 変換不可", () => {
        // テスト対象のインスタンスを作成
        const extractor = new Hex3Extractor();

        // テスト対象処理を実行
        const result = extractor.extract("not hex3");

        // 結果確認
        // 3桁の16進数表現以外からは何も抽出されないこと
        expect(result).toBeNull();
    });
});