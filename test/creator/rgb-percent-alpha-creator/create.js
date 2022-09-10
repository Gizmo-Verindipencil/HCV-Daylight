import { Color } from "../../../src/color";
import { RgbPercentAlphaCreator } from "../../../src/creator/rgb-percent-alpha-creator";

describe("RgbPercentAlphaCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new RgbPercentAlphaCreator();

        // テスト対象の処理を実行
        const result = creator.create(new Color(1, 2, 3, 4));
        
        // 結果確認
        // アルファ値を含む%指定のRGB表現が生成されること
        expect(result).toEqual("rgb(0%,1%,1%,4%)");
    });

    // 2:
    it("2: アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new RgbPercentAlphaCreator();

        // テスト対象の処理を実行
        const result = creator.create(new Color(1, 2, 3, null));
        
        // 結果確認
        // アルファ値が100%で補完されること
        expect(result).toEqual("rgb(0%,1%,1%,100%)");
    });
});