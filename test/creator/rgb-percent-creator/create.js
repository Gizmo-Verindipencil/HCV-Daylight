import { Color } from "../../../src/color";
import { RgbPercentCreator } from "../../../src/creator/rgb-percent-creator";

describe("RgbPercentCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new RgbPercentCreator();

        // テスト対象の処理を実行
        const result = creator.create(new Color(1, 2, 3, null));

        // 結果確認
        // アルファ値を含まない%指定のRGB表現が生成されること
        expect(result).toEqual("rgb(0%,1%,1%)");
    });
});