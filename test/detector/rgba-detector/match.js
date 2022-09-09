import { RgbaDetector } from "../../../src/detector/rgba-detector";

// rgba
// RGBA表現(例: rgba(0, 0, 0, 0) )に関するテスト

describe("RgbaDetector.match - ", () => {
    // 1:
    it("1: 値が整数", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaDetector();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const expressions = values.map(x => `rgba(${[...Array(4)].map(y => x).join(",")})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // 2:
    it("2: 値が小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaDetector();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const expressions = values.map(x => `rgba(${[...Array(4)].map(y => x).join(",")})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // 3:
    it("3: アルファ値が整数パーセント", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaDetector();

        // 結果を検証
        const values = [ "1", " 2", "3 " ];
        const getAlpha = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `rgba(${[...Array(3)].map(y => x).join(",")},${getAlpha(x)})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // 4:
    it("4: アルファ値が小数パーセント", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaDetector();

        // 結果を検証
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getAlpha = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `rgba(${[...Array(3)].map(y => x).join(",")},${getAlpha(x)})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // 5:
    it("5: 前後に空白あり", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaDetector();

        // 結果を検証
        for (const expression of [
            " rgba(0,0,0,0) ",
            " rgba(1,1,1,1)",
            "rgba(2,2,2,2) "
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // 6:
    it("6: 値がマイナス", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaDetector();

        // 結果を検証
        const values = [ "-1", " -2", "-3 " ];
        const expressions = values.map(x => `rgba(${[...Array(4)].map(y => x).join(",")})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // 7:
    it("7: ドット始まりの小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaDetector();

        // 結果を検証
        const values = [ ".1", " .2", ".3 " ];
        const expressions = values.map(x => `rgba(${[...Array(4)].map(y => x).join(",")})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            expect(result).toBe(true);
        }
    });

    // 8:
    it("8: その他アンマッチ", () => {
        // テスト対象のインスタンスを作成
        const detector = new RgbaDetector();

        // 結果を検証
        for (const expression of [
            "abc",
            "#000",
            "#0000",
            "#000000",
            "#00000000",
            "rgb(0,0,0)",
            "rgb(0%,0%,0%)",
            "rgb(0%,0%,0%,0)",
            "rgb(0,0,0,0)",
            "rgba(0%,0%,0%,0)",
            "hsl(0,0%,0%)",
            "hsl(0,0%,0%,0)",
            "hsla(0,0%,0%,0)"
        ]) {
            const result = detector.match(expression);
            expect(result).toBe(false);
        }
    });
});