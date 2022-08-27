import { Color } from "../../../src/color.js";
import { WebColorCreator } from "../../../src/creator/web-color-creator.js";

describe("WebColorCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new WebColorCreator();

        // 結果を検証
        const result = creator.create(new Color(255, 0, 0, null));
        expect(result).toEqual("red");
    });

    // 2:
    it("2: 該当なし", () => {
        // テスト対象のインスタンスを作成
        const creator = new WebColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null));
        expect(result).toBeNull();
    });
});