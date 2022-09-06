import { Color } from "../../../src/color";
import { Hex3Creator } from "../../../src/creator/hex3-creator";

describe("Hex3Creator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new Hex3Creator();

        // 結果を検証
        const result = creator.create(new Color(0, 17, 34, null));
        expect(result).toEqual("#012");
    });

    // 2:
    it("2: 丸め変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new Hex3Creator();

        // 結果を検証
        const result1 = creator.create(new Color(8, 9, 10, null));
        expect(result1).toEqual("#011");
    });
});