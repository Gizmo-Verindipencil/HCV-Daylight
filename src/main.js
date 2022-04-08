import { ColorConveter } from "./color-converter.js";
import { ColorReflector } from "./color-reflector.js";

// 変更対象の要素を取得
const target = document.getElementById("target");

// 変換対象の色を抽出
const expression = target.style.backgroundColor;
const converter = new ColorConveter();
const colors = converter.getColorsFrom(expression);

// 時刻を色に反映
const reflector = new ColorReflector();
const option = { now : new Date() };
const replacements = [];
for (const color of colors) {
    // 調整後の色を生成
    const reflection = reflector.reflect(color, option);

    // 置換対象として追加
    replacements.push({
        old: color,
        new: reflection
    });
}

// 対象のプロパティに反映結果を設定
replacements.forEach(x => expression.replace(x.old, x.new));
target.style.backgroundColor = expression;