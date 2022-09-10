import { Color } from "../../../src/color";
import { HslaCreator } from "../../../src/creator/hsla-creator";

describe("HslaCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new HslaCreator();

        // テスト対象の処理を実行
        const result = creator.create(new Color(1, 2, 3, 4));
        
        // 結果確認
        // HSLA表現が生成されること
        expect(result).toEqual("hsla(210,50%,1%,4%)");
    });

    // 2:
    it("2: アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new HslaCreator();

        // テスト対象の処理を実行
        const result = creator.create(new Color(1, 2, 3, null));
        
        // 結果確認
        // アルファ値が100%で補完されること
        expect(result).toEqual("hsla(210,50%,1%,100%)");
    });
});