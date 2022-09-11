import { Color } from "../../../src/color";
import { Hex6Creator } from "../../../src/creator/hex6-creator";

describe("Hex6Creator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new Hex6Creator();

        // テスト対象の処理を実行
        const result = creator.create(new Color(1, 2, 3, null));

        // 結果確認
        // 6桁の16進数表現が生成されること
        expect(result).toEqual("#010203");
    });
});