import { Color } from "../../../src/color";
import { HslAlphaCreator } from "../../../src/creator/hsl-alpha-creator";

describe("HslAlphaCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new HslAlphaCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, 4));
        expect(result).toEqual("hsl(210,50%,1%,4%)");
    });

    // 2:
    it("2: アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new HslAlphaCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null));
        expect(result).toEqual("hsl(210,50%,1%,100%)");
    });
});