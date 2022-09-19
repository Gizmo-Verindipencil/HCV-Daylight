
/**
 * 表現セットの生成処理を提供します。
 */
class ExpressionSetFactory {
    /**
     * 表現セットを生成します。
     * @returns {Object} 表現セットを返します。
     */
    static create() {
        return {
            none : [
                "123", 
                "abc", 
                "ABC"
            ],
            hex3 : [
                "#000", 
                "#aaa", 
                "#AAA"
            ],
            hex4 : [
                "#0000", 
                "#aaaa", 
                "#AAAA"
            ],
            hex6 : [
                "#000000", 
                "#aaaaaa", 
                "#AAAAAA"
            ],
            hex8 : [
                "#00000000", 
                "#aaaaaaaa", 
                "#AAAAAAAA"
            ],
            rgb : [
                "rgb(0,0,0)",
                "rgb( 1, 1, 1)",
                "rgb(2 ,2 ,2 )",
                "rgb( 3 , 3 , 3 )"
            ],
            rgbAlpha : [
                "rgb(0,0,0,0)",
                "rgb( 1, 1, 1, 1)",
                "rgb(2 ,2 ,2 ,2 )",
                "rgb( 3 , 3 , 3 , 3 )"
            ],
            rgbPercent : [
                "rgb(0%,0%,0%)", 
                "rgb( 1%, 1%, 1%)", 
                "rgb(2% ,2% ,2% )", 
                "rgb( 3% , 3% , 3% )"
            ],
            rgbPercentAlpha : [
                "rgb(0%,0%,0%,0)",
                "rgb( 1%, 1%, 1%, 1)",
                "rgb(2% ,2% ,2% ,2 )",
                "rgb( 3% , 3% , 3% , 3 )"
            ],
            rgba : [
                "rgba(0,0,0,0)",
                "rgba( 1, 1, 1, 1)",
                "rgba(2 ,2 ,2 ,2 )",
                "rgba( 3 , 3 , 3 , 3 )"
            ],
            rgbaPercent : [
                "rgba(0%,0%,0%,0)",
                "rgba( 1%, 1%, 1%, 1)",
                "rgba(2% ,2% ,2% ,2 )",
                "rgba( 3% , 3% , 3% , 3 )"
            ],
            hsl : [
                "hsl(0,0%,0%)",
                "hsl( 1, 1%, 1%)",
                "hsl(2 ,2% ,2% )",
                "hsl( 3 , 3% , 3% )"
            ],
            spaceDelimitedHsl : [
                "hsl(0 0% 0%)",
                "hsl(   1   1%   1%   )"
            ],
            spaceDelimitedHslAlpha : [
                "hsl(0 0% 0%/0%)",
                "hsl(   1   1%   1%   /   1%   )"
            ],
            hslAlpha : [
                "hsl(0,0%,0%,0)",
                "hsl( 1, 1%, 1%, 1)",
                "hsl(2 ,2% ,2% ,2 )",
                "hsl( 3 , 3% , 3% , 3 )"
            ],
            hsla : [
                "hsla(0,0%,0%,0)",
                "hsla( 1, 1%, 1%, 1)",
                "hsla(2 ,2% ,2% ,2 )",
                "hsla( 3 , 3% , 3% , 3 )"
            ]
        };
    }

    /**
     * 除外対象以外の色表現を取得します。
     * @param {String} remove 除外対象。
     * @returns {Array<String>} 色表現を返します。
     */
    static createElse(remove) {
        /* ---------------------------------------------------------------------- */
        // 30-seconds-of-code (Licensed under CC BY 4.0)
        // https://www.30secondsofcode.org/js/s/to-kebab-case
        const toKebabCase = str =>
            str &&
            str
                .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                .map(x => x.toLowerCase())
                .join('-');
        /* ---------------------------------------------------------------------- */

        const expressionSet = ExpressionSetFactory.create();
        return Object.keys(expressionSet)
            .filter(x => x !== remove && toKebabCase(x) !== remove)
            .map(x => expressionSet[x])
            .flat();
    }
}

export { ExpressionSetFactory };