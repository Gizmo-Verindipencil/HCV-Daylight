import { ColorExtractor } from "./extractor/color-extractor";

/**
 * 日の満ち欠けの反映処理の設定を提供します。
 */
class Config {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        /**
         * 日の満ち欠けを表現する日時。
         */
        this.now = new Date();

        /**
         * 日の満ち欠けが要素に与える影響度。0 は朝でも夜でも影響がないことを意味します。
         * 1 は日の満ち欠けのみが色を決め、要素本来の色が調整後に影響しないことを意味します。
         */
        this.impact = 0.1;

        /**
         * 要素への最大反射回数。1 を指定した場合は最初の実行のみ色への反映が適用されます。
         */
        this.numberOfLimitReflection = 1;

        /**
         * 1日の明るさの定義。それぞれの時間帯の明るさを表します。プロパティは時刻を表す 
         * hh:mm:ss 形式の文字列で、値は明るさを示すヘックスコードです。
         */
        this.brightness = {
            "00:00:00": "#000000",
            "04:00:00": "#000000",
            "05:00:00": "#474747",
            "06:00:00": "#8c8c8c",
            "07:00:00": "#b8b8b8",
            "08:00:00": "#f2f2f2",
            "09:00:00": "#f2f2f2",
            "18:00:00": "#b8b8b8",
            "19:00:00": "#8c8c8c",
            "20:00:00": "#474747",
            "21:00:00": "#000000",
            "23:59:59": "#000000",
        }
    }

    /**
     * 現在時刻のテーマ色を取得します。
     * @returns {Array<Number>} rgbを返します。
     */
    getThemeColor() {
        // 基準となる日付を生成
        const times = Object.keys(this.brightness);
        const format = n => ("00" + n).slice(-2);
        const date = `${this.now.getFullYear()}/${format(this.now.getMonth() + 1)}/${format(this.now.getDate())}`;
        
        // 設定された季節
        const distances = [];
        for(const time of times) {
            const themeTime = new Date(`${date} ${time}`);

            // 秒数差の計算
            const getSecondDifference = (date1, date2) => {
                const secondMilliseconds = 1000;
                return Math.abs(Math.ceil((date1 - date2) / secondMilliseconds));
            }

            // 時間毎の距離を記録
            distances.push({
                time: time,
                distance: getSecondDifference(themeTime, this.now)
            });
        }

        // 秒数差で昇順ソート
        distances.sort((a, b) => {
            return a.distance - b.distance;
        });

        // 最も近い時間帯2つ以外を排除
        while (distances.length > 2) {
            distances.pop();
        };

        // 全体を100として比率を計算
        const amount = [ 0, 1 ].map(x => distances[x].distance).reduce((a, b) => a + b, 0);
        [ 0, 1 ].forEach(x => distances[x].distance = Math.round((distances[x].distance / amount * 100)));

        // 2つの時間帯の中間色を算出
        const extractor = new ColorExtractor();
        const [ color1, color2 ] = [ 0, 1 ]
            .map(x => this.brightness[distances[x].time])
            .map(x => {
                const c = extractor.extract(x);
                return [ c.r, c.g, c.b ];
            });
        const midColor = [ 0, 1, 2 ].map(x => {
            const gap = color1[x] - color2[x];
            return color2[x] + Math.round(gap * distances[0].distance / 100);
        });
        return midColor;
    }
}

export { Config }