import { Color } from "../../../src/color";
import { WebColorCreator } from "../../../src/creator/web-color-creator";

describe("WebColorCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new WebColorCreator();

        // テスト対象処理を実行
        const result = creator.create(new Color(255, 0, 0, null));

        // 結果確認
        // 該当するWEBカラーが生成されること
        expect(result).toEqual("red");
    });

    // 2:
    it("2: 該当なし", () => {
        // テスト対象のインスタンスを作成
        const creator = new WebColorCreator();

        // テスト対象処理を実行
        const result = creator.create(new Color(1, 2, 3, null));

        // 結果確認
        // 該当するWEBカラーがなければ何も生成されないこと
        expect(result).toBeNull();
    });
});