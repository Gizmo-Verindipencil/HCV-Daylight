import { Color } from "../color.js";

/**
 * 8桁の16進数表現の作成処理を提供します。
 */
class Hex8Creator {
    /**
     * 色表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    create(color) {
        const hex = x => ("0"+(Number(x).toString(16))).slice(-2);
        const alpha = Math.round((color.a || 100) / 100 * 255);
        const rgb = [ color.r, color.g, color.b, alpha ].map(x => hex(x));
        return `#${rgb.join("")}`;
    }
}

export { Hex8Creator };