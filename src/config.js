/**
 * 日の満ち欠けの反映処理の設定を提供します。
 */
class Config {
    /**
     * 日の満ち欠けを表現する日時。
     * @type {Date} 
     */
    now = new Date();

    /**
     * 日の満ち欠けが要素に与える影響度。0 は朝でも夜でも影響がないことを意味します。
     * 1 は日の満ち欠けのみが色を決め、要素本来の色が調整後に影響しないことを意味します。
     * @type {Number}
     */
    impact = 0.1;

    /**
     * 要素への最大反射回数。1 を指定した場合は最初の実行のみ色への反映が適用されます。
     * @type {Number}
     */
    numberOfLimitReflection = 1;
}

export { Config }