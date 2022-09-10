import { Color } from "../../../src/color";
import { Hex8Creator } from "../../../src/creator/hex8-creator";

describe("Hex8Creator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new Hex8Creator();

        // テスト対象処理を実行
        const result = creator.create(new Color(1, 2, 3, 4));

        // 結果確認
        // 8桁の16進数表現が生成されること
        expect(result).toEqual("#0102030a");
    });

    // 2:
    it("2: アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new Hex8Creator();

        // テスト対象処理を実行
        const result = creator.create(new Color(1, 2, 3, null));
        
        // 結果確認
        // アルファ値が100%で補完されること
        expect(result).toEqual("#010203ff");
    });
});