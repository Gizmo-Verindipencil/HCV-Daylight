import { Color } from "../../../src/color.js";
import { Hex4Creator } from "../../../src/creator/hex4-creator.js";

describe("Hex4Creator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new Hex4Creator();

        // 結果を検証
        const result = creator.create(new Color(0, 17, 34, 3));
        expect(result).toEqual("#0120");
    });

    // 2:
    it("2: 丸め変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new Hex4Creator();

        // 結果を検証
        const result1 = creator.create(new Color(8, 9, 10, 4));
        expect(result1).toEqual("#0111");
    });

    // 3:
    it("3: アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new Hex4Creator();

        // 結果を検証
        const result1 = creator.create(new Color(8, 9, 10, null));
        expect(result1).toEqual("#011f");
    });
});