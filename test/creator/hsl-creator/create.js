import { Color } from "../../../src/color";
import { HslCreator } from "../../../src/creator/hsl-creator";

describe("HslCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new HslCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null));
        expect(result).toEqual("hsl(210,50%,1%)");
    });
});