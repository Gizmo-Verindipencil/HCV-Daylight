import { Color } from "../../../src/color";
import { HslAlphaCreator } from "../../../src/creator/hsl-alpha-creator";

describe("HslAlphaCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new HslAlphaCreator();

        // テスト対象処理を実行
        const result = creator.create(new Color(1, 2, 3, 4));

        // 結果確認
        // アルファ値を含むHSL表現が生成されること
        expect(result).toEqual("hsl(210,50%,1%,4%)");
    });

    // 2:
    it("2: アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new HslAlphaCreator();

        // テスト対象処理を実行
        const result = creator.create(new Color(1, 2, 3, null));
        
        // 結果確認
        // アルファ値が100%で補完されること
        expect(result).toEqual("hsl(210,50%,1%,100%)");
    });
});