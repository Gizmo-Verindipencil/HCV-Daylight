import { Daylight } from "../../../src/daylight.js";

// rgba-percent
// %で指定したRGBA表現(例: rgb(0%, 0%, 0%, 0%) )に関するテスト
//
// NOTE :
// R、G、Bのいずれかのみ%で指定するのは不可。

describe("Daylight.getReflectionColor - rgba-percent_", () => {
    // rgba-percent_1:
    it("1: 第1引数がRGBA(%)の色表現の場合は、調整した色のRGBA(%)表現が返却される", () => {
        // テストの準備
        const rgb = [ 0*17, 1*17, 2*17 ].map(x => `${(x/255).toFixed(3)}%`);
        const delimiters = [ ",", ", ", " ,", " , " ];
        const alphas = [ "0", "0.5", "1", "0%", "50%", "100%", "0.0%", "50.0%", "100.0%", ".5", ".5%" ];
        const combinations = delimiters.flatMap(x => alphas.map(y => [x, y]));
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            theme: {
                "11:00:00": `rgb(${[  3*17,  4*17,  5*17 ].join(",")})`,
                "13:00:00": `rgb(${[ 11*17, 13*17, 15*17 ].join(",")})`
            }
        };

        // 区切り文字とアルファ値の組合せごとにテストを実施
        for(const combination of combinations) {
            // テスト対象の表現を作成
            const delimiter = combination[0];
            const alpha = combination[1];
            const expression = `rgba(${rgb.join(delimiter)}${delimiter}${alpha})`;

            // テスト対象の処理を実行
            const result = Daylight.getReflectionColor(expression, config);

            // 結果を検証
            expect(result).toBe(`rgb(4.7%,11.8%,18.8%,${alpha})`);
        }
    });

    // rgba-percent_2:
    it("2: 第1引数がRGBA(%)の色表現を含む場合は、調整した色のRGBA(%)表現に置換した内容が返却される", () => {
        // テストの準備
        const rgb1 = [ 0*17, 1*17, 2*17 ].map(x => `${(x/255).toFixed(3)}%`);
        const rgb2 = [ 3*17, 4*17, 5*17 ].map(x => `${(x/255).toFixed(3)}%`);
        const delimiters = [ ",", ", ", " ,", " , " ];
        const alphas = [ "0", "0.5", "1", "0%", "50%", "100%", "0.0%", "50.0%", "100.0%", ".5", ".5%" ];
        const combinations = delimiters.flatMap(x => alphas.map(y => [x, y]));
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            theme: {
                "11:00:00": `rgb(${[  6*17,  7*17,  8*17 ].join(",")})`,
                "13:00:00": `rgb(${[ 11*17, 13*17, 15*17 ].join(",")})`
            }
        };

        // 区切り文字とアルファ値の組合せごとにテストを実施
        for(const combination of combinations) {
            // テスト対象の表現を作成
            const delimiter = combination[0];
            const alpha = combination[1];
            const createRgba = (rgb, a, delimiter) => `rgba(${rgb.join(delimiter)}${delimiter}${a})`;
            const rgba1 = createRgba(rgb1, alpha, delimiter);
            const rgba2 = createRgba(rgb2, alpha, delimiter);
            const expression = `linear-gradient(${rgba1}, ${rgba2}`;

            // テスト対象の処理を実行
            const result = Daylight.getReflectionColor(expression, config);

            // 結果を検証
            expect(result).toBe(`linear-gradient(rgba(5.9%,12.5%,19.6%,${alpha}),rgba(23.5%,30.6%,37.6%,${alpha}))`);
        }
    });
});