import { Color } from "../../src/color";

describe("Color.rgba - ", () => {
    // 1:
    it("1: 取得値", () => {
        // テスト対象のインスタンスを作成
        const color = new Color(1, 2, 3, 4);

        // 結果確認
        // RGB情報が取得されること
        expect(color.rgba).toEqual([ color.r, color.g, color.b, color.a ]);
    });
});