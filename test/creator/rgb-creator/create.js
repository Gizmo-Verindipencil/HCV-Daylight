import { Color } from "../../../src/color";
import { RgbCreator } from "../../../src/creator/rgb-creator";

describe("RgbCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new RgbCreator();

        // テスト対象処理を実行
        const result = creator.create(new Color(1, 2, 3, null));
        
        // 結果確認
        // アルファ値を含まないRGB表現が生成されること
        expect(result).toEqual("rgb(1,2,3)");
    });
});