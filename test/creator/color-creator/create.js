import { ColorExpressionType } from "../../../src/color-expression-type";
import { Color } from "../../../src/color";
import { ColorCreator } from "../../../src/creator/color-creator";

describe("ColorCreator.create - ", () => {
    // 1:
    it("1: 3桁の16進数表現 - 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(0, 17, 34, null), ColorExpressionType.hex3);
        expect(result).toEqual("#012");
    });

    // 2:
    it("2: 3桁の16進数表現 - 丸め変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result1 = creator.create(new Color(8, 9, 10, null), ColorExpressionType.hex3);
        expect(result1).toEqual("#011");
    });

    // 3:
    it("3: 4桁の16進数表現 - 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(8, 9, 10, 4), ColorExpressionType.hex4);
        expect(result).toEqual("#0111");
    });

    // 4:
    it("4: 4桁の16進数表現 - 丸め変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result1 = creator.create(new Color(8, 9, 10, 4), ColorExpressionType.hex4);
        expect(result1).toEqual("#0111");
    });

    // 5:
    it("5: 4桁の16進数表現 - アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result1 = creator.create(new Color(8, 9, 10, 4), ColorExpressionType.hex4);
        expect(result1).toEqual("#0111");
    });

    // 6:
    it("6: 6桁の16進数表現 - 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null), ColorExpressionType.hex6);
        expect(result).toEqual("#010203");
    });

    // 7:
    it("7: 8桁の16進数表現 - 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, 4), ColorExpressionType.hex8);
        expect(result).toEqual("#0102030a");
    });

    // 8:
    it("8: 8桁の16進数表現 - アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null), ColorExpressionType.hex8);
        expect(result).toEqual("#010203ff");
    });

    // 9:
    it("9: アルファ値を含むHSL表現 - 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, 4), ColorExpressionType.hslAlpha);
        expect(result).toEqual("hsl(210,50%,1%,4%)");
    });

    // 10:
    it("10: アルファ値を含むHSL表現 - アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null), ColorExpressionType.hslAlpha);
        expect(result).toEqual("hsl(210,50%,1%,100%)");
    });

    // 11:
    it("11: HSL表現 - 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null), ColorExpressionType.hsl);
        expect(result).toEqual("hsl(210,50%,1%)");
    });

    // 12:
    it("12: HSLA表現 - 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, 4), ColorExpressionType.hsla);
        expect(result).toEqual("hsla(210,50%,1%,4%)");
    });

    // 13:
    it("13: HSLA表現 - アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null), ColorExpressionType.hsla);
        expect(result).toEqual("hsla(210,50%,1%,100%)");
    });

    // 14:
    it("14: アルファ値を含むRGB表現 - 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, 4), ColorExpressionType.rgbAlpha);
        expect(result).toEqual("rgb(1,2,3,4%)");
    });

    // 15:
    it("15: アルファ値を含むRGB表現 - アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null), ColorExpressionType.rgbAlpha);
        expect(result).toEqual("rgb(1,2,3,100%)");
    });

    // 16:
    it("16: RGB表現 - 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null), ColorExpressionType.rgb);
        expect(result).toEqual("rgb(1,2,3)");
    });

    // 17:
    it("17: アルファ値を含む%指定RGB表現 - 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, 4), ColorExpressionType.rgbPercentAlpha);
        expect(result).toEqual("rgb(0%,1%,1%,4%)");
    });

    // 18:
    it("18: アルファ値を含む%指定RGB表現 - アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null), ColorExpressionType.rgbPercentAlpha);
        expect(result).toEqual("rgb(0%,1%,1%,100%)");
    });

    // 19:
    it("19: %指定RGB表現 - 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null), ColorExpressionType.rgbPercent);
        expect(result).toEqual("rgb(0%,1%,1%)");
    });

    // 20:
    it("20: RGBA表現 - 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, 4), ColorExpressionType.rgba);
        expect(result).toEqual("rgba(1,2,3,4%)");
    });

    // 21:
    it("21: RGBA表現 - アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null), ColorExpressionType.rgba);
        expect(result).toEqual("rgba(1,2,3,100%)");
    });

    // 22:
    it("22: %指定RGBA表現 - 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, 4), ColorExpressionType.rgbaPercent);
        expect(result).toEqual("rgba(0%,1%,1%,4%)");
    });

    // 23:
    it("23: %指定RGBA表現 - アルファ値補完", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null), ColorExpressionType.rgbaPercent);
        expect(result).toEqual("rgba(0%,1%,1%,100%)");
    });

    // 24:
    it("24: WEBカラー - 単純変換", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(255, 0, 0, null), ColorExpressionType.webColor);
        expect(result).toEqual("red");
    });

    // 25:
    it("25: WEBカラー - 該当なし", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result = creator.create(new Color(1, 2, 3, null), ColorExpressionType.webColor);
        expect(result).toEqual("#010203");
    });

    // 26:
    it("26: 不明な表現", () => {
        // テスト対象のインスタンスを作成
        const creator = new ColorCreator();

        // 結果を検証
        const result1 = creator.create(new Color(1, 2, 3, 4), "unknown type");
        expect(result1).toBeNull();
    });
});