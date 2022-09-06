import { Color } from "../color";

/**
 * RGB表現の作成処理を提供します。
 */
class RgbCreator {
    /**
     * 色表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    create(color) {
        return `rgb(${color.r},${color.g},${color.b})`;
    }
}

export { RgbCreator };