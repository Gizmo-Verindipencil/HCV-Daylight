import { Color } from "../color";
import { WebColor } from "../web-color";

/**
 * RGBA表現の作成処理を提供します。
 */
class WebColorCreator {
    /**
     * 色表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    create(color) {
        const colors = Object.keys(WebColor)
            .map(x => {
                return {
                    name: x,
                    color: WebColor[x]
                }
            })
            .filter(x => 
                x.color.r === color.r 
                && x.color.g === color.g 
                && x.color.b === color.b
            );
        return colors.length > 0 ? colors[0].name : null;
    }
}

export { WebColorCreator };