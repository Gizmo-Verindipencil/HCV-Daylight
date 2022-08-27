import { Color } from "../color.js";

/**
 * RGBA表現の作成処理を提供します。
 */
class RgbaCreator {
    /**
     * 色表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    create(color) {
        return `rgba(${color.r},${color.g},${color.b},${color.a || 100}%)`;
    }
}

export { RgbaCreator };