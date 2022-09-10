import { Color } from "../../../src/color";
import { RgbAlphaCreator } from "../../../src/creator/rgb-alpha-creator";

describe("RgbAlphaCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new RgbAlphaCreator();

        // テスト対象の処理を実行
        const result = creator.create(new Color(1, 2, 3, 4));
        
        // 結果確認
        // アルファ値を含むRGB表現が生成されること
        expect(result).toEqual("rgb(1,2,3,4%)");
    });

    // 2:
    it("2: アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new RgbAlphaCreator();

        // テスト対象の処理を実行
        const result = creator.create(new Color(1, 2, 3, null));
        
        // 結果確認
        // アルファ値が100%で補完されること
        expect(result).toEqual("rgb(1,2,3,100%)");
    });
});