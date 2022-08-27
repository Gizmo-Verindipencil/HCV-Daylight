/**
 * 色表現の情報を保持します。
 */
class Color {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        /**
         * 赤色を表現する値
         */
        this.red    = 0;
        /**
         * 緑色を表現する値
         */
        this.green  = 0;
        /**
         * 青色を表現する値
         */
        this.blue   = 0;
        /**
         * 透明度を表現する値
         */
        this.alpha  = 0;
    }
}

export { Color };
