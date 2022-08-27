import { Color } from "../../../src/color.js";
import { RgbPercentAlphaCreator } from "../../../src/creator/rgb-percent-alpha-creator.js";

describe("RgbPercentAlphaCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new RgbPercentAlphaCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, 4));
        expect(result).toEqual("rgb(0%,1%,1%,4%)");
    });

    // 2:
    it("2: アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new RgbPercentAlphaCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null));
        expect(result).toEqual("rgb(0%,1%,1%,100%)");
    });
});