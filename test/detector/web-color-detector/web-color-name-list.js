import { WebColor } from "../../../src/web-color";

/**
 * WEBカラーの名称一覧を提供します。
 */
class WebColorNameList {
    /**
     * 名称を取得します。
     * @returns {Array<String>} 
     */
    static getNames() {
        return Object.keys(WebColor);
    }
}

export { WebColorNameList };