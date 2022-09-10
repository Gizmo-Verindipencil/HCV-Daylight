import { HslaDetector } from "../../../src/detector/hsla-detector";

// hsla
// HSLA表現(例: hsla(0, 0%, 0%, 0) )に関するテスト

describe("HslaDetector.match - ", () => {
    // 1:
    it("1: 値が整数", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslaDetector();

        // テスト対象処理を実行
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsla(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${x})`);
        for (const expression of expressions) {
            const result = detector.match(expression);

            // 結果確認
            // 整数のHSLA表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 2:
    it("2: 値が小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslaDetector();

        // テスト対象処理を実行
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsla(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${x})`);
        for (const expression of expressions) {
            const result = detector.match(expression);

            // 結果確認
            // 小数のHSLA表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 3:
    it("3: アルファ値が整数パーセント", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslaDetector();

        // テスト対象処理を実行
        const values = [ "1", " 2", "3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsla(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${getPercent(x)})`);
        for (const expression of expressions) {
            const result = detector.match(expression);

            // 結果確認
            // アルファ値が整数のHSLA表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 4:
    it("4: アルファ値が小数パーセント", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslaDetector();

        // テスト対象処理を実行
        const values = [ "0.1", " 0.2", "0.3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsla(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${getPercent(x)})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            
            // 結果確認
            // アルファ値が小数のHSLA表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 5:
    it("5: 前後に空白あり", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslaDetector();

        // テスト対象処理を実行
        for (const expression of [
            " hsla(0,0%,0%,0) ",
            " hsla(1,1%,1%,1)",
            "hsla(2,2%,2%,2) "
        ]) {
            const result = detector.match(expression);
            
            // 結果確認
            // 前後の空白は無視されること
            expect(result).toBe(true);
        }
    });

    // 6:
    it("6: 値がマイナス", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslaDetector();

        // テスト対象処理を実行
        const values = [ "-1", " -2", "-3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsla(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${getPercent(x)})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            
            // 結果確認
            // 負数のHSLA表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 7:
    it("7: ドット始まりの小数", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslaDetector();

        // テスト対象処理を実行
        const values = [ ".1", " .2", ".3 " ];
        const getPercent = x => x != x.trimEnd() ? `${x.trimEnd()}% ` : `${x}%`;
        const expressions = values.map(x => `hsla(${x},${[...Array(2)].map(y => getPercent(x)).join(",")},${getPercent(x)})`);
        for (const expression of expressions) {
            const result = detector.match(expression);
            
            // 結果確認
            // 整数部が省略された小数のHSLA表現が一致判定されること
            expect(result).toBe(true);
        }
    });

    // 8:
    it("8: その他アンマッチ", () => {
        // テスト対象のインスタンスを作成
        const detector = new HslaDetector();

        // テスト対象処理を実行
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
            "hsl(0,0%,0%)",
            "hsl(0,0%,0%,0)"
        ]) {
            const result = detector.match(expression);
            
            // 結果確認
            // 該当以外の色表現は不一致判定されること
            expect(result).toBe(false);
        }
    });
});