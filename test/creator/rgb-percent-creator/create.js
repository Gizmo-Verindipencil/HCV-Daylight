import { Color } from "../../../src/color";
import { RgbPercentCreator } from "../../../src/creator/rgb-percent-creator";

describe("RgbPercentCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new RgbPercentCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null));
        expect(result).toEqual("rgb(0%,1%,1%)");
    });
});