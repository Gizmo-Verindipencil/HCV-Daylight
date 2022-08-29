import { Config } from "./config";
import { Daylight } from "./daylight";

// 反映処理の設定を作成(任意)
const option = new Config();

// 単一の要素に色を反映
const target = document.getElementById("target");
Daylight.reflectToElement(target, "backgroundColor", option);

// 全ての要素に色を反映
Daylight.reflectToPage("backgroundColor", option);