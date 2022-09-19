import { ColorExtractor } from "../../../src/extractor/color-extractor";
import { Color } from "../../../src/color";

describe("ColorExtractor.extract - ", () => {
    // 1:
    it("1: 3桁の16進数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("#123");
        const expected = new Color(17, 34, 51, null);

        // 結果確認
        // 3桁の16進数表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 2:
    it("2: 4桁の16進数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("#1234");
        const expected = new Color(17, 34, 51, 27);
        
        // 結果確認
        // 4桁の16進数表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 3:
    it("3: 6桁の16進数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("#123456");
        const expected = new Color(18, 52, 86, null);
        
        // 結果確認
        // 6桁の16進数表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 4:
    it("4: 8桁の16進数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("#12345678");
        const expected = new Color(18, 52, 86, 47);
        
        // 結果確認
        // 8桁の16進数表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 5:
    it("5: アルファ値を含むHSL表現 - アルファ値が%", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("hsl(10, 20%, 30%, 40%)");
        const expected = new Color(92, 66, 61, 40);
        
        // 結果確認
        // アルファ値を含むHSL表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 6:
    it("6: アルファ値を含むHSL表現 - アルファ値が小数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("hsl(10, 20%, 30%, 0.4)");
        const expected = new Color(92, 66, 61, 40);
        
        // 結果確認
        // アルファ値を含むHSL表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 7:
    it("7: HSL表現", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("hsl(10, 20%, 30%)");
        const expected = new Color(92, 66, 61, null);
        
        // 結果確認
        // アルファ値を含まないHSL表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 8:
    it("8: HSLA表現 - アルファ値が%", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("hsla(10, 20%, 30%, 40%)");
        const expected = new Color(92, 66, 61, 40);
        
        // 結果確認
        // HSLA表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 9:
    it("9: HSLA表現 - アルファ値が小数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("hsla(10, 20%, 30%, 0.4)");
        const expected = new Color(92, 66, 61, 40);
        
        // 結果確認
        // HSLA表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 10:
    it("10: アルファ値を含むRGB表現 - アルファ値が%", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("rgb(10, 20, 30, 40%)");
        const expected = new Color(10, 20, 30, 40);
        
        // 結果確認
        // アルファ値を含むRGB表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 11:
    it("11: アルファ値を含むRGB表現 - アルファ値が小数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("rgb(10, 20, 30, 0.4)");
        const expected = new Color(10, 20, 30, 40);
        
        // 結果確認
        // アルファ値を含むRGB表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 12:
    it("12: RGB表現", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("rgb(10, 20, 30)");
        const expected = new Color(10, 20, 30, null);
        
        // 結果確認
        // アルファ値を含まないRGB表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 13:
    it("13: アルファ値を含む%指定RGB表現 - アルファ値が%", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("rgb(10%, 20%, 30%, 40%)");
        const expected = new Color(26, 51, 77, 40);
        
        // 結果確認
        // アルファ値を含む%指定のRGB表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 14:
    it("14: アルファ値を含む%指定RGB表現 - アルファ値が小数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("rgb(10%, 20%, 30%, 0.4)");
        const expected = new Color(26, 51, 77, 40);
        
        // 結果確認
        // アルファ値を含む%指定のRGB表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 15:
    it("15: %指定RGB表現", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("rgb(10%, 20%, 30%)");
        const expected = new Color(26, 51, 77, null);
        
        // 結果確認
        // アルファ値を含まない%指定のRGB表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 16:
    it("16: RGBA表現 - アルファ値が%", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("rgba(10, 20, 30, 40%)");
        const expected = new Color(10, 20, 30, 40);
        
        // 結果確認
        // RGBA表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 17:
    it("17: RGBA表現 - アルファ値が小数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("rgba(10, 20, 30, 0.4)");
        const expected = new Color(10, 20, 30, 40);
        
        // 結果確認
        // RGBA表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 18:
    it("18: %指定RGBA表現 - アルファ値が%", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("rgba(10%, 20%, 30%, 40%)");
        const expected = new Color(26, 51, 77, 40);
        
        // 結果確認
        // %指定のRGBA表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 19:
    it("19: %指定RGBA表現 - アルファ値が小数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("rgba(10%, 20%, 30%, 0.4)");
        const expected = new Color(26, 51, 77, 40);
        
        // 結果確認
        // %指定のRGBA表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 20:
    it("20: %指定RGBA表現 - アルファ値が小数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("rgba(10%, 20%, 30%, 0.4)");
        const expected = new Color(26, 51, 77, 40);
        
        // 結果確認
        // %指定のRGBA表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 21:
    it("21: 空白文字区切りのアルファ値を含むHSL表現 - アルファ値が%", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("hsl(10 20% 30%/40%)");
        const expected = new Color(92, 66, 61, 40);
        
        // 結果確認
        // アルファ値を含むHSL表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 22:
    it("22: 空白文字区切りのアルファ値を含むHSL表現 - アルファ値が小数", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("hsl(10 20% 30%/0.4)");
        const expected = new Color(92, 66, 61, 40);
        
        // 結果確認
        // アルファ値を含むHSL表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 23:
    it("23: 空白文字区切りのHSL表現", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("hsl(10 20% 30%)");
        const expected = new Color(92, 66, 61, null);
        
        // 結果確認
        // 空白文字区切りのHSL表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 24:
    it("24: WEBカラー", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        for (const pair of [
            [ "red"   , new Color(255 ,   0 ,   0 , null) ],
            [ "green" , new Color(  0 , 128 ,   0 , null) ],
            [ "blue"  , new Color(  0 ,   0 , 255 , null) ],
        ]) {
            const result = extractor.extract(pair[0]);
            
            // 結果確認
            // WEBカラーが抽出されること
            expect(result).toEqual(pair[1]);
        }
    });

    // 25:
    it("25: 変換不可", () => {
        // テスト対象のインスタンスを作成
        const extractor = new ColorExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("not color");

        // 結果確認
        // 色が検出されないこと
        expect(result).toBeNull();
    });
});