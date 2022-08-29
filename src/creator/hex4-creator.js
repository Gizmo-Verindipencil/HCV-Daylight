import { Color } from "../color";

/**
 * 4桁の16進数表現の作成処理を提供します。
 */
class Hex4Creator {
    /**
     * 色表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    create(color) {
        // 利用可能な近似値の算出
        const available = [...Array(16).keys()].map(x => x.toString(16)).map(x => parseInt(String(x).repeat(2), 16));
        const approximation = value => {
            let match = available[0];
            for (const v of available.slice(1)) {
                const currentDistance = Math.abs(match - value);
                const distance = Math.abs(v - value);
                if (currentDistance > distance) {
                    match = v;
                }
            }
            return match;
        };

        // 色表現を生成
        const hex = x => (Number(x).toString(16)).slice(0, 1);
        const alpha = Math.round((color.a || 100) / 100 * 255);
        const rgba = [ color.r, color.g, color.b, alpha ].map(x => approximation(x)).map(x => hex(x));
        return `#${rgba.join("")}`;
    }
}

export { Hex4Creator };