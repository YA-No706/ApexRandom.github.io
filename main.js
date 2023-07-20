function Weapon(_name, _type){
    this.name = _name;
    this.type = _type;
}

/*
SP : ケアパケ武器
AR : アサルトライフル
SMG : サブマシンガン
LMG : ライトマシンガン
SR : スナイパーライフル
SG : ショットガン
MR : マークスマンライフル
HG :　ピストル
*/

var WeaponList_SP = [
    new Weapon('ヘムロック',"SP"),
    new Weapon('Lスター',"SP"),
    new Weapon('クレーバー',"SP"),
    new Weapon('ボセック',"SP"),
]

var WeaponList_AR = [
    new Weapon('R301',"AR"),
    new Weapon('フラットライン',"AR"),
    new Weapon('ハボック',"AR"),
    new Weapon('ネメシス',"AR")

]
var WeaponList_SMG = [
    new Weapon('プラウラー',"SMG"),
    new Weapon('R99',"SMG"),
    new Weapon('オルタネーター',"SMG"),
    new Weapon('ボルト',"SMG"),
    new Weapon('C.A.R. SMG',"SMG")
]
var WeaponList_LMG = [
    new Weapon('スピットファイア',"LMG"),
    new Weapon('ディボーション',"LMG"),
    new Weapon('ランページLMG',"LMG")
]
var WeaponList_SR = [
    new Weapon('ロングボウ',"SR"),
    new Weapon('チャージライフル',"SR"),
    new Weapon('センチネル',"SR")
]
var WeaponList_SG = [
    new Weapon('モザンビーク',"SG"),
    new Weapon('マスティフ',"SG"),
    new Weapon('ピースキーパー',"SG"),
    new Weapon('EVA8',"SG")
]
var WeaponList_MR = [
    new Weapon('G7スカウト',"MR"),
    new Weapon('トリプルテイク',"MR"),
    new Weapon('30-30リピーター',"MR")

]
var WeaponList_HG = [
    new Weapon('RE45',"HG"),
    new Weapon('P2020',"HG"),
    new Weapon('ウィングマン',"HG")
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
    'ニューキャッスル',
    'ヴァンテージ',
    'カタリスト',
    'バリスティック'
]

function Execute(){
    var weaponText = document.getElementById("weapon");
    var characterText = document.getElementById("character");

    var WeaponList = [];

    //-----------------
    var checkbox = document.getElementById("checkbox_SP");
    if (checkbox.checked)
    {
        WeaponList = WeaponList.concat(WeaponList_SP);
    }
    checkbox = document.getElementById("checkbox_AR");
    if (checkbox.checked)
    {
        WeaponList = WeaponList.concat(WeaponList_AR);
    }
    checkbox = document.getElementById("checkbox_SMG");
    if (checkbox.checked)
    {
        WeaponList = WeaponList.concat(WeaponList_SMG);
    }
    checkbox = document.getElementById("checkbox_LMG");
    if (checkbox.checked)
    {
        WeaponList = WeaponList.concat(WeaponList_LMG);
    }
    checkbox = document.getElementById("checkbox_SR");
    if (checkbox.checked)
    {
        WeaponList = WeaponList.concat(WeaponList_SR);
    }
    checkbox = document.getElementById("checkbox_SG");
    if (checkbox.checked)
    {
        WeaponList = WeaponList = WeaponList.concat(WeaponList_SG);
    }
    checkbox = document.getElementById("checkbox_MR");
    if (checkbox.checked)
    {
        WeaponList = WeaponList.concat(WeaponList_MR);
    }
    checkbox = document.getElementById("checkbox_HG");
    if (checkbox.checked)
    {
        WeaponList = WeaponList.concat(WeaponList_HG);
    }
    console.log(WeaponList);
    //-----------------

    if(WeaponList.length == 0)
    {
        weaponText.innerHTML = "ERROR / ERROR";
        characterText.innerHTML = "全部チェック外すな";
    }
    else
    {
        var weapon_0 = WeaponList[Math.floor(Math.random() * WeaponList.length)].name
        var weapon_1 = WeaponList[Math.floor(Math.random() * WeaponList.length)].name
        var character = CharacterList[Math.floor(Math.random() * CharacterList.length)]
    
        weaponText.innerHTML = weapon_0 + " / " + weapon_1;
        characterText.innerHTML = character;
    }

}
