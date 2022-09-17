import { SpaceDelimitedHslExtractor } from "../../../src/extractor/space-delimited-hsl-extractor";
import { Color } from "../../../src/color";

describe("SpaceDelimitedHslExtractor.extract - ", () => {
    // 1:
    it("1: 空白文字区切りのHSL表現", () => {
        // テスト対象のインスタンスを作成
        const extractor = new SpaceDelimitedHslExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("hsl(10 20% 30%)");
        const expected = new Color(92, 66, 61, null);

        // 結果確認
        // HSL表現が抽出されること
        expect(result).toEqual(expected);
    });

    // 2:
    it("2: 変換不可", () => {
        // テスト対象のインスタンスを作成
        const extractor = new SpaceDelimitedHslExtractor();

        // テスト対象の処理を実行
        const result = extractor.extract("not space-delimited-hsl");
        
        // 結果確認
        // 空白文字区切りのHSL表現以外からは何も抽出されないこと
        expect(result).toBeNull();
    });
});