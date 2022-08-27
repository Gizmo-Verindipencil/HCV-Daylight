import { Color } from "../color.js";

/**
 * %指定RGBA表現の作成処理を提供します。
 */
class RgbaPercentCreator {
    /**
     * 色表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    create(color) {
        const rgb = [ color.r, color.g, color.b ].map(x => Math.round(x / 255 * 100)).map(x => `${x}%`);
        return `rgba(${rgb.join(",")},${color.a || 100}%)`;
    }
}

export { RgbaPercentCreator };