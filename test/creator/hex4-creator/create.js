import { Color } from "../../../src/color";
import { Hex4Creator } from "../../../src/creator/hex4-creator";

describe("Hex4Creator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new Hex4Creator();

        // テスト対象処理を実行
        const result = creator.create(new Color(0, 17, 34, 3));
        
        // 結果確認
        // 4桁の16進数表現が生成されること
        expect(result).toEqual("#0120");
    });

    // 2:
    it("2: 丸め変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new Hex4Creator();

        // テスト対象処理を実行
        const result1 = creator.create(new Color(8, 9, 10, 4));
        
        // 結果確認
        // 近似値が生成されること
        expect(result1).toEqual("#0111");
    });

    // 3:
    it("3: アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new Hex4Creator();

        // テスト対象処理を実行
        const result1 = creator.create(new Color(8, 9, 10, null));
        
        // 結果確認
        // アルファ値が100%で補完されること
        expect(result1).toEqual("#011f");
    });
});