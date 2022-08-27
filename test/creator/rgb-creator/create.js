import { Color } from "../../../src/color.js";
import { RgbCreator } from "../../../src/creator/rgb-creator.js";

describe("RgbCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new RgbCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null));
        expect(result).toEqual("rgb(1,2,3)");
    });
});