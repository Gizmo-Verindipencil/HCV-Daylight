import { HslDetector } from "../../../src/detector/hsl-detector.js";

// hsl
// HSL表現(例: hsl(0, 0%, 0%) )に関するテスト

describe("HslDetector.detect - hsl_", () => {
    // hsl_1:
    it("1: 値が整数", () => {
        // テスト対象の正規表現を作成
        const detector = new HslDetector();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // hsl_2:
    it("2: 値が小数", () => {
        // テスト対象の正規表現を作成
        const detector = new HslDetector();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsl(${x},${[...Array(2)].map(y => getPercent(x)).join(",")})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // hsl_3:
    it("3: 前後に空白あり", () => {
        // テスト対象の正規表現を作成
        const detector = new HslDetector();

        // 結果を検証
        for (const expression of [
            " hsl(0,0%,0%) ",
            " hsl(1,1%,1%)",
            "hsl(2,2%,2%) "
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // hsl_4:
    it("4: 値がマイナス", () => {
        // テスト対象の正規表現を作成
        const detector = new HslDetector();

        // 結果を検証
        for (const expression of [
            "hsl(-0,-0%,-0%)",
            "hsl(-1,-1%,-1%)",
            "hsl(-2,-2%,-2%)"
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // hsl_5:
    it("5: ドット始まりの小数", () => {
        // テスト対象の正規表現を作成
        const detector = new HslDetector();

        // 結果を検証
        for (const expression of [
            "hsl(.0,.0%,.0%)",
            "hsl(.1,.1%,.1%)",
            "hsl(.2,.2%,.2%)"
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // hsl_6:
    it("6: その他アンマッチ", () => {
        // テスト対象の正規表現を作成
        const detector = new HslDetector();

        // 結果を検証
        for (const expression of [
            "abc",
            "#000",
            "#0000",
            "#000000",
            "#00000000",
            "rgb(0,0,0)",
            "rgb(0%,0%,0%)",
            "rgb(0,0,0,0)",
            "rgb(0%,0%,0%,0)",
            "rgba(0,0,0,0)",
            "hsl(0,0%,0%,0)",
            "hsla(0,0%,0%,0)"
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(false);
        }
    });
});