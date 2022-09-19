import { ExpressionSetFactory } from "../expression-set-factory";
import { ColorDetector } from "../../../src/detector/color-detector";

describe("ColorDetector.match - ", () => {
    // 1:
    it("1: 非色表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        for (const expression of expressionSet.none) {
            const result = detector.match(expression);

            // 結果確認
            // 色表現以外の文字列は該当なしとして判別されること
            expect(result).toBe("");
        }
    });

    // 2:
    it("2: 3桁の16進数表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        for (const expression of expressionSet.hex3) {
            const result = detector.match(expression);
            
            // 結果確認
            // 3桁の16進数表現として判別されること
            expect(result).toBe("hex3");
        }
    });

    // 3:
    it("3: 4桁の16進数表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        for (const expression of expressionSet.hex4) {
            const result = detector.match(expression);
            
            // 結果確認
            // 4桁の16進数表現として判別されること
            expect(result).toBe("hex4");
        }
    });
    
    // 4:
    it("4: 6桁の16進数表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        for (const expression of expressionSet.hex6) {
            const result = detector.match(expression);
            
            // 結果確認
            // 6桁の16進数表現として判別されること
            expect(result).toBe("hex6");
        }
    });
    
    // 5:
    it("5: 8桁の16進数表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        for (const expression of expressionSet.hex8) {
            const result = detector.match(expression);
            
            // 結果確認
            // 8桁の16進数表現として判別されること
            expect(result).toBe("hex8");
        }
    });

    // 6:
    it("6: アルファ値を含むHSL表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        for (const expression of expressionSet.hslAlpha) {
            const result = detector.match(expression);
            
            // 結果確認
            // アルファ値を含むHSL表現として判別されること
            expect(result).toBe("hsl-alpha");
        }
    });

    // 7:
    it("7: HSL表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        for (const expression of expressionSet.hsl) {
            const result = detector.match(expression);
            
            // 結果確認
            // アルファ値を含まないHSL表現として判別されること
            expect(result).toBe("hsl");
        }
    });

    // 8:
    it("8: HSLA表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        for (const expression of expressionSet.hsla) {
            const result = detector.match(expression);
            
            // 結果確認
            // アルファ値を含まないHSL表現として判別されること
            expect(result).toBe("hsla");
        }
    });

    // 9:
    it("9: アルファ値を含むRGB表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        for (const expression of expressionSet.rgbAlpha) {
            const result = detector.match(expression);
            
            // 結果確認
            // アルファ値を含むRGB表現として判別されること
            expect(result).toBe("rgb-alpha");
        }
    });

    // 10:
    it("10: RGB表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        for (const expression of expressionSet.rgb) {
            const result = detector.match(expression);
            
            // 結果確認
            // アルファ値を含まないRGB表現として判別されること
            expect(result).toBe("rgb");
        }
    });

    // 11:
    it("11: アルファ値を含む%指定RGB表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        for (const expression of expressionSet.rgbPercentAlpha) {
            const result = detector.match(expression);
            
            // 結果確認
            // アルファ値を含む%指定のRGB表現として判別されること
            expect(result).toBe("rgb-percent-alpha");
        }
    });

    // 12:
    it("12: アルファ値を含まない%指定RGB表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        for (const expression of expressionSet.rgbPercent) {
            const result = detector.match(expression);
            
            // 結果確認
            // アルファ値を含まない%指定のRGB表現として判別されること
            expect(result).toBe("rgb-percent");
        }
    });

    // 13:
    it("13: RGBA表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        for (const expression of expressionSet.rgba) {
            const result = detector.match(expression);
            
            // 結果確認
            // RGBA表現として判別されること
            expect(result).toBe("rgba");
        }
    });

    // 14:
    it("14: %指定RGBA表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        for (const expression of expressionSet.rgbaPercent) {
            const result = detector.match(expression);
            
            // 結果確認
            // %指定のRGBA表現として判別されること
            expect(result).toBe("rgba-percent");
        }
    });

    // 15:
    it("15: 空白文字区切りのHSL表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        for (const expression of expressionSet.spaceDelimitedHsl) {
            const result = detector.match(expression);
            
            // 結果確認
            // 空白文字区切りのHSL表現として判別されること
            expect(result).toBe("space-delimited-hsl");
        }
    });

    // 16:
    it("16: 空白文字区切りのアルファ値を含むHSL表現", () => {
        // テスト対象のインスタンスを作成
        const detector = new ColorDetector();

        // テスト対象の処理を実行
        const expressionSet = ExpressionSetFactory.create();
        for (const expression of expressionSet.spaceDelimitedHslAlpha) {
            const result = detector.match(expression);
            
            // 結果確認
            // 空白文字区切りのHSL表現として判別されること
            expect(result).toBe("space-delimited-hsl-alpha");
        }
    });
});