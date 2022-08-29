import { Color } from "../color";

/**
 * 6桁の16進数表現の作成処理を提供します。
 */
class Hex6Creator {
    /**
     * 色表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    create(color) {
        const hex = x => ("0"+(Number(x).toString(16))).slice(-2);
        const rgb = [ color.r, color.g, color.b ].map(x => hex(x));
        return `#${rgb.join("")}`;
    }
}

export { Hex6Creator };