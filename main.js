var WeaponList = [
    'G7スカウト',
    'R301',
    'ヘムロック',
    'フラットライン',
    'ハボック',
    'プラウラー',
    'R99',
    'オルタネーター',
    'ボルト',
    'スピットファイア',
    'ディボーション',
    'Lスター',
    'クレーバー',
    'トリプルテイク',
    'ロングボウ',
    'チャージライフル',
    'センチネル',
    'モザンビーク',
    'マスティフ',
    'ピースキーパー',
    'EVA8',
    'ウィングマン',
    'RE45',
    'P2020',
    '30-30リピーター',
    'ボセック',
    'ランページLMG',
    'C.A.R. SMG'
]
var CharacterList = [
    'ブラッドハウンド',
    'ジブラルタル',
    'ライフライン',
    'パスファインダー',
    'レイス',
    'バンガロール',
    'ミラージュ',
    'コースティック',
    'オクタン',
    'ワットソン',
    'クリプト',
    'レヴナント',
    'ローバ',
    'ランパード',
    'ホライゾン',
    'ヒューズ',
    'ヴァルキリー',
    'シア',
    'アッシュ',
    'マッドマギー',
    'ニューキャッスル'
]


function Execute(){
    var weaponText = document.getElementById("weapon");
    var characterText = document.getElementById("character");

    var weapon_0 = WeaponList[Math.floor(Math.random() * WeaponList.length)]
    var weapon_1 = WeaponList[Math.floor(Math.random() * WeaponList.length)]
    var character = CharacterList[Math.floor(Math.random() * CharacterList.length)]

    weaponText.innerHTML = weapon_0 + " / " + weapon_1;
    characterText.innerHTML = character;

}
