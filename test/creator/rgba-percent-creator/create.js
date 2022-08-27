import { Color } from "../../../src/color.js";
import { RgbaPercentCreator } from "../../../src/creator/rgba-percent-creator.js";

describe("RgbaPercentCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new RgbaPercentCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, 4));
        expect(result).toEqual("rgba(0%,1%,1%,4%)");
    });

    // 2:
    it("2: アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new RgbaPercentCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null));
        expect(result).toEqual("rgba(0%,1%,1%,100%)");
    });
});