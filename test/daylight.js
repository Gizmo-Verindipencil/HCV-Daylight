import { Daylight } from "../src/daylight.js";

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

    // hex3-1:
    it("hex3-1: 第1引数が16進数(3桁)の色表現の場合は、調整した色の16進数(3桁)表現が返却される", () => {
        // テストの準備
        const expression = "#012";
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            theme: {
                "11:00:00": "#345",
                "13:00:00": "#bdf"
            }
        };
        
        // テスト対象の処理を実行
        const result = Daylight.getReflectionColor(expression, config);
        
        // 結果を検証
        expect(result).toBe("#123");
        
        // NOTE :
        // 16進数(3桁)の各桁が示す値はRGB値で言うところの17を乗算した値となっている
        //  例 : 1 = 17, 2 = 34, 3 = 51
        //
        // 処理結果が17で割り切れる場合は n/17 の16進数表記を桁とするので問題ない
        //  例 : rgb(0, 17, 34) > #012
        //
        // 処理結果が17で割り切れない場合は、最も近い17の倍数に丸めた値を結果とする
        //  例 : rgb(1, 8, 9) > #001
    });

    // hex3-2:
    it("hex3-2: 第1引数が16進数(3桁)の色表現を含む場合は、調整した色の16進数(3桁)表現に置換した内容が返却される", () => {
        // テストの準備
        const expression = "linear-gradient(#012, #345);";
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            theme: {
                "11:00:00": "#678",
                "13:00:00": "#bdf"
            }
        };

        // テスト対象の処理を実行
        const result = Daylight.getReflectionColor(expression, config);

        // 結果を検証
        expect(result).toBe("linear-gradient(#123, #456);");
    });

    // hex4-1:
    it("hex4-1: 第1引数が16進数(4桁)の色表現の場合は、調整した色の16進数(4桁)表現が返却される", () => {
        // テストの準備
        const expression = "#012f";
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            theme: {
                "11:00:00": "#345",
                "13:00:00": "#bdf"
            }
        };
        
        // テスト対象の処理を実行
        const result = Daylight.getReflectionColor(expression, config);
        
        // 結果を検証
        expect(result).toBe("#123f");
        
        // NOTE :
        // 基本的な変換については hex3-1 を参照
        // hex4 の場合は、アルファ値に該当する4桁目が結果に付与
    });

    // hex4-2:
    it("hex4-2: 第1引数が16進数(4桁)の色表現を含む場合は、調整した色の16進数(4桁)表現に置換した内容が返却される", () => {
        // テストの準備
        const expression = "linear-gradient(#012e, #345f);";
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            theme: {
                "11:00:00": "#678",
                "13:00:00": "#bdf"
            }
        };

        // テスト対象の処理を実行
        const result = Daylight.getReflectionColor(expression, config);

        // 結果を検証
        expect(result).toBe("linear-gradient(#123e, #456f);");
    });

    // hex6-1:
    it("hex6-1: 第1引数が16進数(6桁)の色表現の場合は、調整した色の16進数(6桁)表現が返却される", () => {
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

    // hex6-2:
    it("hex6-2: 第1引数が16進数(6桁)の色表現を含む場合は、調整した色の16進数(6桁)表現に置換した内容が返却される", () => {
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

    // hex8-1:
    it("hex8-1: 第1引数が16進数(8桁)の色表現の場合は、調整した色の16進数(8桁)表現が返却される", () => {
        // テストの準備
        const expression = "#001122ff";
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
        expect(result).toBe("#0c1e30ff");
    });

    // hex8-2:
    it("hex8-2: 第1引数が16進数(8桁)の色表現を含む場合は、調整した色の16進数(8桁)表現に置換した内容が返却される", () => {
        // テストの準備
        const expression = "linear-gradient(#001122ee, #334455ff);";
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
        expect(result).toBe("linear-gradient(#0f2032ee, #3c4e60ff);");
    });

    // rgb-1:
    it("rgb-1: 第1引数がRGBの色表現の場合は、調整した色のRGB表現が返却される", () => {
        // テストの準備
        const rgb = [ 0*17, 1*17, 2*17 ];
        const delimiters = [ ",", ", ", " ,", " , " ];
        const expressions = delimiters.map(x => `rgb(${rgb.join(x)})`);
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            theme: {
                "11:00:00": `rgb(${[  3*17,  4*17,  5*17 ].join(",")})`,
                "13:00:00": `rgb(${[ 11*17, 13*17, 15*17 ].join(",")})`
            }
        };

        // テスト対象の処理を実行
        const results = expressions.map(x => Daylight.getReflectionColor(x, config));

        // 結果を検証
        results.forEach(x => expect(x).toBe("rgb(12,30,48)"));
    });

    // rgb-2:
    it("rgb-2: 第1引数がRGBの色表現を含む場合は、調整した色のRGB表現に置換した内容が返却される", () => {
        // テストの準備
        const rgb1 = [ 0*17, 1*17, 2*17 ];
        const rgb2 = [ 3*17, 4*17, 5*17 ];
        const delimiters = [",", ", ", " ,", " , "];
        const expressions = delimiters.map(x => `linear-gradient(rgb(${rgb1.join(delimiter)}, rgb(${rgb2.join(delimiter)}))`);
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            theme: {
                "11:00:00": `rgb(${[  6*17,  7*17,  8*17 ].join(",")})`,
                "13:00:00": `rgb(${[ 11*17, 13*17, 15*17 ].join(",")})`
            }
        };

        // テスト対象の処理を実行
        const results = expressions.map(x => Daylight.getReflectionColor(x, config));

        // 結果を検証
        results.forEach(x => expect(x).toBe("linear-gradient(rgb(15,32,50), rgb(60,78,96))"));
    });

    // rgb-with-a-1:
    it("rgb-with-a-1: 第1引数がアルファ値ありRGBの色表現の場合は、調整した色のアルファ値ありRGB表現が返却される", () => {
        // テストの準備
        const rgb = [ 0*17, 1*17, 2*17 ];
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
            const expression = `rgb(${rgb.join(delimiter)}${delimiter}${alpha})`;

            // テスト対象の処理を実行
            const result = Daylight.getReflectionColor(expression, config);

            // 結果を検証
            expect(result).toBe(`rgb(12,30,48,${alpha})`);
        }
    });

    // rgb-with-a-2:
    it("rgb-with-a-2: 第1引数がアルファ値ありRGBの色表現を含む場合は、調整した色のアルファ値ありRGB表現に置換した内容が返却される", () => {
        // テストの準備
        const rgb1 = [ 0*17, 1*17, 2*17 ];
        const rgb2 = [ 3*17, 4*17, 5*17 ];
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
            const createRgba = (rgb, a, delimiter) => `rgb(${rgb.join(delimiter)}${delimiter}${a})`;
            const rgba1 = createRgba(rgb1, alpha, delimiter);
            const rgba2 = createRgba(rgb2, alpha, delimiter);
            const expression = `linear-gradient(${rgba1}, ${rgba2}`;

            // テスト対象の処理を実行
            const result = Daylight.getReflectionColor(expression, config);

            // 結果を検証
            expect(result).toBe(`linear-gradient(rgba(15,32,50${alpha}),rgba(60,78,96,${alpha}))`);
        }
    });

    // rgba-1:
    it("rgba-1: 第1引数がRGBAの色表現の場合は、調整した色のRGBA表現が返却される", () => {
        // テストの準備
        const rgb = [ 0*17, 1*17, 2*17 ];
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
            expect(result).toBe(`rgb(12,30,48,${alpha})`);
        }
    });

    // rgba-2:
    it("rgba-2: 第1引数がRGBAの色表現を含む場合は、調整した色のRGBA表現に置換した内容が返却される", () => {
        // テストの準備
        const rgb1 = [ 0*17, 1*17, 2*17 ];
        const rgb2 = [ 3*17, 4*17, 5*17 ];
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
            expect(result).toBe(`linear-gradient(rgba(15,32,50${alpha}),rgba(60,78,96,${alpha}))`);
        }
    });

    // hsl-1
    it("hsl-1: 第1引数がHSLの色表現の場合は、調整した色のHSL表現が返却される", () => {
        // テストの準備
        const delimiters = [ ",", ", ", " ,", " , " ];
        const hue = 210;
        const saturationValues = [ "100%", "100.0%" ];
        const lightnessValues = [ "50%", "50.0%" ];
        const combinations = delimiters.flatMap(x => saturationValues.flatMap(y => lightnessValues.map(z => [x, y, z])));
        const expressions = combinations.map(x => `hsl(${[hue, x[1], x[2]].join(x[0])})`);
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            theme: {
                "11:00:00": `hsl(210, 25.0%, 26.7%)`,
                "13:00:00": `hsl(210, 100.0%, 86.7%)`
            }
        };

        // テスト対象の処理を実行
        const results = expressions.map(x => Daylight.getReflectionColor(x, config));

        // 結果を検証
        results.forEach(x => expect(x).toBe("hsl(210,92.9%,50.6%)"));
    });

    // hsl-2
    it("hsl-2: 第1引数がHSLの色表現を含む場合は、調整した色のHSL表現に置換した内容が返却される", () => {
        // テストの準備
        const delimiters = [ ",", ", ", " ,", " , " ];
        const hue = 210;
        const saturationValues1 = [ "100%", "100.0%" ];
        const saturationValues2 = [ "50%", "50.0%" ];
        const lightnessValues1 = [ "50%", "50.0%" ];
        const lightnessValues2 = [ "20%", "20.0%" ];
        const createCombinations = (arr1, arr2, arr3) => arr1.flatMap(x => arr2.flatMap(y => arr3.map(z => [x, y, z])));
        const combinations1 = createCombinations(delimiters, saturationValues1, lightnessValues1);
        const combinations2 = createCombinations(delimiters, saturationValues2, lightnessValues2);
        const createExpressions = combinations => combinations.map(x => `hsl(${[hue, x[1], x[2]].join(x[0])})`);
        const expressions1 = createExpressions(combinations1);
        const expressions2 = createExpressions(combinations2);
        const expressions = expressions1.flatMap(x => expressions2.map(y => [x, y])).map(x => `linear-gradient(${x[0]}, ${x[1]})`);
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            theme: {
                "11:00:00": `hsl(210, 14.3%, 46.7%)`,
                "13:00:00": `hsl(210, 100.0%, 86.7%)`
            }
        };

        // テスト対象の処理を実行
        const results = expressions.map(x => Daylight.getReflectionColor(x, config));

        // 結果を検証
        const hsl1 = "hsl(220,93.7%,62.9%)";
        const hsl2 = "hsl(211,40.2%,24.9%)";
        results.forEach(x => expect(x).toBe(`linear-gradient(${hsl1}, ${hsl2})`));
    });

    // hsl-with-a-1
    it("hsl-1: 第1引数がアルファ値ありHSLの色表現の場合は、調整した色のアルファ値ありHSL表現が返却される", () => {
        // テストの準備
        const delimiters = [ ",", ", ", " ,", " , " ];
        const hue = 210;
        const saturationValues = [ "100%", "100.0%" ];
        const lightnessValues = [ "50%", "50.0%" ];
        const alphas = [ "0", "0.5", "1", "0%", "50%", "100%", "0.0%", "50.0%", "100.0%", ".5", ".5%" ];
        const combinations = delimiters.flatMap(d => 
                                saturationValues.flatMap(s => 
                                    lightnessValues.flatMap(l =>
                                        alphas.map(a => [d, s, l, a]))));
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            theme: {
                "11:00:00": `hsl(210, 25.0%, 26.7%)`,
                "13:00:00": `hsl(210, 100.0%, 86.7%)`
            }
        };

        // 区切り文字と各種値の組合せごとにテストを実施
        for (const combination of combinations) {
            // テスト対象の表現を作成
            const delimiter = combination[0];
            const saturation = combination[1];
            const lightness = combination[2];
            const alpha = combination[3];
            const expression = `hsl(${[hue, saturation, lightness, alpha].join(delimiter)})`;

            // テスト対象の処理を実行
            const result = Daylight.getReflectionColor(expression, config);

            // 結果を検証
            expect(result).toBe(`hsl(210,92.9%,50.6%,${alpha})`);
        }
    });

    // hsl-with-a-2
    it("hsl-with-a-2: 第1引数がアルファ値ありHSLの色表現を含む場合は、調整した色のアルファ値ありHSL表現に置換した内容が返却される", () => {
        // テストの準備
        const delimiters = [ ",", ", ", " ,", " , " ];
        const hue = 210;
        const saturationValues1 = [ "100%", "100.0%" ];
        const saturationValues2 = [ "50%", "50.0%" ];
        const lightnessValues1 = [ "50%", "50.0%" ];
        const lightnessValues2 = [ "20%", "20.0%" ];
        const alphas = [ "0", "0.5", "1", "0%", "50%", "100%", "0.0%", "50.0%", "100.0%", ".5", ".5%" ];
        const createCombinations = (arr1, arr2, arr3, arr4) => arr1.flatMap(d =>
                                                                    arr2.flatMap(s =>
                                                                        arr3.flatMap(l =>
                                                                            arr4.map(a => [d, s, l, a]))));
        const combinations1 = createCombinations(delimiters, saturationValues1, lightnessValues1, alphas);
        const combinations2 = createCombinations(delimiters, saturationValues2, lightnessValues2, alphas);
        const combinationSets = combinations1.flatMap(x => combinations2.map(y => [x, y]));
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            theme: {
                "11:00:00": `hsl(210, 14.3%, 46.7%)`,
                "13:00:00": `hsl(210, 100.0%, 86.7%)`
            }
        };

        // 区切り文字と各種値の組合せごとにテストを実施
        for (const set of combinationSets) {
            // テスト対象の表現を作成
            const delimiter1 = set[0][0];
            const delimiter2 = set[1][0];
            const saturation1 = set[0][1];
            const saturation2 = set[1][1];
            const lightness1 = set[0][2];
            const lightness2 = set[1][2];
            const alpha1 = set[0][3];
            const alpha2 = set[1][3];
            const createExpression = (h, s, l, a, d) => `hsl(${[h, s, l, a].join(d)})`;
            const expression1 = createExpression(hue, saturation1, lightness1, alpha1, delimiter1);
            const expression2 = createExpression(hue, saturation2, lightness2, alpha2, delimiter2);
            const expression = `linear-gradient(${expression1}, ${expression2})`;

            // テスト対象の処理を実行
            const result = Daylight.getReflectionColor(expression, config);

            // 結果を検証
            const hsl1 = `hsl(220,93.7%,62.9%,${alpha1})`;
            const hsl2 = `hsl(211,40.2%,24.9%,${alpha2})`;
            expect(result).toBe(`linear-gradient(${hsl1}, ${hsl2})`);
        }

        // テスト対象の処理を実行
        const results = expressions.map(x => Daylight.getReflectionColor(x, config));

        // 結果を検証
        results.forEach(x => expect(x).toBe(`linear-gradient(${hsl1}, ${hsl2})`));
    });

    // hsla-1
    it("hsla-1: 第1引数がHSLAの色表現の場合は、調整した色のHSLA表現が返却される", () => {
        // テストの準備
        const delimiters = [ ",", ", ", " ,", " , " ];
        const hue = 210;
        const saturationValues = [ "100%", "100.0%" ];
        const lightnessValues = [ "50%", "50.0%" ];
        const alphas = [ "0", "0.5", "1", "0%", "50%", "100%", "0.0%", "50.0%", "100.0%", ".5", ".5%" ];
        const combinations = delimiters.flatMap(d => 
                                saturationValues.flatMap(s => 
                                    lightnessValues.flatMap(l =>
                                        alphas.map(a => [d, s, l, a]))));
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            theme: {
                "11:00:00": `hsl(210, 25.0%, 26.7%)`,
                "13:00:00": `hsl(210, 100.0%, 86.7%)`
            }
        };

        // 区切り文字と各種値の組合せごとにテストを実施
        for (const combination of combinations) {
            // テスト対象の表現を作成
            const delimiter = combination[0];
            const saturation = combination[1];
            const lightness = combination[2];
            const alpha = combination[3];
            const expression = `hsla(${[hue, saturation, lightness, alpha].join(delimiter)})`;

            // テスト対象の処理を実行
            const result = Daylight.getReflectionColor(expression, config);

            // 結果を検証
            expect(result).toBe(`hsla(210,92.9%,50.6%,${alpha})`);
        }
    });

    // hsla-2
    it("hsl-with-a-2: 第1引数がHSLAの色表現を含む場合は、調整した色のHSLA表現に置換した内容が返却される", () => {
        // テストの準備
        const delimiters = [ ",", ", ", " ,", " , " ];
        const hue = 210;
        const saturationValues1 = [ "100%", "100.0%" ];
        const saturationValues2 = [ "50%", "50.0%" ];
        const lightnessValues1 = [ "50%", "50.0%" ];
        const lightnessValues2 = [ "20%", "20.0%" ];
        const alphas = [ "0", "0.5", "1", "0%", "50%", "100%", "0.0%", "50.0%", "100.0%", ".5", ".5%" ];
        const createCombinations = (arr1, arr2, arr3, arr4) => arr1.flatMap(d =>
                                                                    arr2.flatMap(s =>
                                                                        arr3.flatMap(l =>
                                                                            arr4.map(a => [d, s, l, a]))));
        const combinations1 = createCombinations(delimiters, saturationValues1, lightnessValues1, alphas);
        const combinations2 = createCombinations(delimiters, saturationValues2, lightnessValues2, alphas);
        const combinationSets = combinations1.flatMap(x => combinations2.map(y => [x, y]));
        const config = {
            now: new Date(2000, 0, 1, 12, 0, 0),
            impact: 0.1,
            theme: {
                "11:00:00": `hsl(210, 14.3%, 46.7%)`,
                "13:00:00": `hsl(210, 100.0%, 86.7%)`
            }
        };

        // 区切り文字と各種値の組合せごとにテストを実施
        for (const set of combinationSets) {
            // テスト対象の表現を作成
            const delimiter1 = set[0][0];
            const delimiter2 = set[1][0];
            const saturation1 = set[0][1];
            const saturation2 = set[1][1];
            const lightness1 = set[0][2];
            const lightness2 = set[1][2];
            const alpha1 = set[0][3];
            const alpha2 = set[1][3];
            const createExpression = (h, s, l, a, d) => `hsl(${[h, s, l, a].join(d)})`;
            const expression1 = createExpression(hue, saturation1, lightness1, alpha1, delimiter1);
            const expression2 = createExpression(hue, saturation2, lightness2, alpha2, delimiter2);
            const expression = `linear-gradient(${expression1}, ${expression2})`;

            // テスト対象の処理を実行
            const result = Daylight.getReflectionColor(expression, config);

            // 結果を検証
            const hsla1 = `hsla(220,93.7%,62.9%,${alpha1})`;
            const hsla2 = `hsla(211,40.2%,24.9%,${alpha2})`;
            expect(result).toBe(`linear-gradient(${hsla1}, ${hsla2})`);
        }

        // テスト対象の処理を実行
        const results = expressions.map(x => Daylight.getReflectionColor(x, config));

        // 結果を検証
        results.forEach(x => expect(x).toBe(`linear-gradient(${hsl1}, ${hsl2})`));
    });
});