import { Color } from "../../../src/color";
import { Hex6Creator } from "../../../src/creator/hex6-creator";

describe("Hex6Creator.extract - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new Hex6Creator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null));
        expect(result).toEqual("#010203");
    });
});