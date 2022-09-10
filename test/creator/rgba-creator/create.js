import { Color } from "../../../src/color";
import { RgbaCreator } from "../../../src/creator/rgba-creator";

describe("RgbaCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new RgbaCreator();

        // テスト対象処理を実行
        const result = creator.create(new Color(1, 2, 3, 4));

        // 結果確認
        // RGBA表現が生成されること
        expect(result).toEqual("rgba(1,2,3,4%)");
    });

    // 2:
    it("2: アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new RgbaCreator();

        // テスト対象処理を実行
        const result = creator.create(new Color(1, 2, 3, null));
        
        // 結果確認
        // アルファ値が100%で補完されること
        expect(result).toEqual("rgba(1,2,3,100%)");
    });
});