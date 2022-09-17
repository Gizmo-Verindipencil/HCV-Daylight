import { Color } from "../../../src/color";
import { SpaceDelimitedHslCreator } from "../../../src/creator/space-delimited-hsl-creator";

describe("SpaceDelimitedHslCreator.create - ", () => {
    // 1:
    it("1: 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new SpaceDelimitedHslCreator();

        // テスト対象の処理を実行
        const result = creator.create(new Color(1, 2, 3, null));
        
        // 結果確認
        // 空白文字区切りのが生成されること
        expect(result).toEqual("hsl(210 50% 1%)");
    });
});