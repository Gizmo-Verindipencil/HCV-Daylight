import { Daylight } from "../../../src/daylight.js";

describe("Daylight.getReflectionColor - hex6_", () => {
    // hex6_1:
    it("1: 第1引数が16進数(6桁)の色表現の場合は、調整した色の16進数(6桁)表現が返却される", () => {
        // テストの準備
        const expression = "#001122";
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            theme: {
                "11:00:00": "#334455",
                "13:00:00": "#bbddff"
            }
        };

        // テスト対象の処理を実行
        const result = Daylight.getReflectionColor(expression, config);

        // 結果を検証
        expect(result).toBe("#0c1e30");
    });

    // hex6_2:
    it("2: 第1引数が16進数(6桁)の色表現を含む場合は、調整した色の16進数(6桁)表現に置換した内容が返却される", () => {
        // テストの準備
        const expression = "linear-gradient(#001122, #334455);";
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            theme: {
                "11:00:00": "#667788",
                "13:00:00": "#bbddff"
            }
        };

        // テスト対象の処理を実行
        const result = Daylight.getReflectionColor(expression, config);

        // 結果を検証
        expect(result).toBe("linear-gradient(#0f2032, #3c4e60);");
    });
});