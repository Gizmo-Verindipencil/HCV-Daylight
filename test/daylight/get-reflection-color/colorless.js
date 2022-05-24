import { Daylight } from "../../../src/daylight.js";

describe("Daylight.getReflectionColor", () => {
    // colorless-1:
    it("colorless-1: 第1引数が色表現ではない/色表現を含まない場合は、そのまま返却される", () => {
        // テストの準備
        const expression = "not color";

        // テスト対象の処理を実行
        const result = Daylight.getReflectionColor(expression);

        // 結果を検証
        expect(result).toBe(expression);
    });
});