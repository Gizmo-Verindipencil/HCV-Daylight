import { Daylight } from "../../../src/daylight.js";

// rgb-percent
// %で指定したRGB表現(例: rgb(0%, 0%, 0%) )に関するテスト
//
// NOTE :
// R、G、Bのいずれかのみ%で指定するのは不可。

describe("Daylight.getReflectionColor - rgb-percent_", () => {
    // rgb-percent_1
    it("1: 第1引数がRGB(%)の色表現の場合は、調整した色のRGB(%)表現が返却される", () => {
        // テストの準備
        const rgb = [ 0*17, 1*17, 2*17 ].map(x => `${(x/255).toFixed(3)}%`);
        const delimiters = [ ",", ", ", " ,", " , " ];
        const expressions = delimiters.map(x => `rgb(${rgb.join(x)})`);
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            brightness: {
                "11:00:00": `rgb(${[  3*17,  4*17,  5*17 ].join(",")})`,
                "13:00:00": `rgb(${[ 11*17, 13*17, 15*17 ].join(",")})`
            }
        };

        // テスト対象の処理を実行
        const results = expressions.map(x => Daylight.getReflectionColor(x, config));

        // 結果を検証
        results.forEach(x => expect(x).toBe("rgb(4.7%,11.8%,18.8%)"));
    });

    // rgb-percent_2:
    it("2: 第1引数がRGB(%)の色表現を含む場合は、調整した色のRGB(%)表現に置換した内容が返却される", () => {
        // テストの準備
        const rgb1 = [ 0*17, 1*17, 2*17 ].map(x => `${(x/255).toFixed(3)}%`);
        const rgb2 = [ 3*17, 4*17, 5*17 ].map(x => `${(x/255).toFixed(3)}%`);
        const delimiters = [",", ", ", " ,", " , "];
        const expressions = delimiters.map(x => `linear-gradient(rgb(${rgb1.join(delimiter)}, rgb(${rgb2.join(delimiter)}))`);
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            brightness: {
                "11:00:00": `rgb(${[  6*17,  7*17,  8*17 ].join(",")})`,
                "13:00:00": `rgb(${[ 11*17, 13*17, 15*17 ].join(",")})`
            }
        };

        // テスト対象の処理を実行
        const results = expressions.map(x => Daylight.getReflectionColor(x, config));

        // 結果を検証
        results.forEach(x => expect(x).toBe("linear-gradient(rgb(5.9%,12.5%,19.6%), rgb(23.5%,30.6%,37.6%))"));
    });
});