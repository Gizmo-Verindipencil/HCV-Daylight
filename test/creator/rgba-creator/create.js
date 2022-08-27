import { Color } from "../../../src/color.js";
import { RgbaCreator } from "../../../src/creator/rgba-creator.js";

describe("RgbaCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new RgbaCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, 4));
        expect(result).toEqual("rgba(1,2,3,4%)");
    });

    // 2:
    it("2: アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new RgbaCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null));
        expect(result).toEqual("rgba(1,2,3,100%)");
    });
});