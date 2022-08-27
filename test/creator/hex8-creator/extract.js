import { Color } from "../../../src/color.js";
import { Hex8Creator } from "../../../src/creator/hex8-creator.js";

describe("Hex8Creator.extract - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new Hex8Creator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, 4));
        expect(result).toEqual("#01020304");
    });
});