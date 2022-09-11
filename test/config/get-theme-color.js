import { Config } from "../../src/config";

describe("Config.getThemeColor - ", () => {
    // 1:
    it("1: 設定色", () => {
        // テスト対象のインスタンスを作成
        const config = new Config();
        config.brightness = {
            "00:00:00" : "#000000",
            "01:00:00" : "#888888",
            "02:00:00" : "#ffffff"
        };
        config.now = new Date("2000/01/01 01:00:00");

        // テスト対象の処理を実行
        const result = config.getThemeColor();

        // 結果確認
        // 時間のテーマの色であること
        const expected = [ "88", "88", "88" ].map(x => parseInt(x, 16));
        expect(result).toEqual(expected);
    });

    // 2:
    it("2: 中間色", () => {
        // テスト対象のインスタンスを作成
        const config = new Config();
        config.brightness = {
            "00:00:00" : "#000000",
            "02:00:00" : "#0f1f2f"
        };
        config.now = new Date("2000/01/01 01:00:00");

        // テスト対象の処理を実行
        const result = config.getThemeColor();

        // 結果確認
        // 時間に応じたテーマの中間色が取得されていること
        const expected = [ 1, 2, 3 ].map(x => Math.round(x * 16 / 2));
        expect(result).toEqual(expected);
    });
});