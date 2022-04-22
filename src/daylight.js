import { Config } from "./config.js";

/**
 * 日の満ち欠けをページに反映する処理を提供します。
 */
class Daylight {
    /**
     * 日の満ち欠けを反映した色を取得します。
     * @param {String} expression 色表現。ヘックス表現(例 : #000000, #000)、RGB表現(例 : rgb(0, 0, 0))、RGBA表現(例 : rgba(0, 0, 0, 1.0))
     *                            を想定しています。または、色を含む表現(例 : linear-gradient(#000000, #ffffff))を指定することも可能です。
     * @param {Config} config 設定情報。
     * @returns {String} 日の満ち欠けを反映した色を返します。色表現は expression と同種類になります。例えば、expression がヘックス表現の場
     *                   合は、返却される色表現もヘックス表現です。expression が色を含む表現の場合は、その色表現のみが変更された
     */
    getReflectionColor = (expression, config) => {
        throw "not implemented.";
    }

    /**
     * 要素に色を反映します。
     * @param {HTMLElement} element 要素。
     * @param {String} property 色を反映するプロパティ。
     * @param {Config} config 設定情報。
     */
    reflectToElement = (element, property, config) => {
        throw "not implemented.";
    }

    /**
     * 全ての要素に色を反映します。
     * @param {String} property 色を反映するプロパティ。
     * @param {Config} config 設定情報。
     */
    reflectToPage = (property, config) => {
        const all = document.getElementsByTagName("*");
        for (const e of all) {
            this.reflectToElement(e, property, config);
        }
    }
}

// シングルトンとして提供
const instance = new Daylight();
export { instance as Daylight };