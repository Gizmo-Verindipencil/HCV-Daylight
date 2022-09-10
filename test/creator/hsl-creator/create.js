import { Color } from "../../../src/color";
import { HslCreator } from "../../../src/creator/hsl-creator";

describe("HslCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new HslCreator();

        // テスト対象処理を実行
        const result = creator.create(new Color(1, 2, 3, null));
        
        // 結果確認
        // アルファ値を含まないHSL表現が生成されること
        expect(result).toEqual("hsl(210,50%,1%)");
    });
});