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
    new Weapon('クレーバー',"SP"),
    new Weapon('P2020',"SP"),
    new Weapon('C.A.R. SMG',"SP")
]

var WeaponList_AR = [
    new Weapon('R301',"Light"),
    new Weapon('フラットライン',"Heavy"),
    new Weapon('ヘムロック',"Heavy"),
    new Weapon('ハボック',"Energy"),
    new Weapon('ネメシス',"Energy")
]
var WeaponList_SMG = [
    new Weapon('オルタネーター',"Light"),
    new Weapon('ボルト',"Energy"),
    new Weapon('R99',"Light"),
    new Weapon('プラウラーバーストPDW',"Heavy")   
]
var WeaponList_LMG = [
    new Weapon('スピットファイア',"Light"),
    new Weapon('Lスター',"Energy"),
    new Weapon('ランページLMG',"Heavy"),
    new Weapon('ディヴォーション',"Energy")
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
    new Weapon('G7スカウト',"Light"),
    new Weapon('30-30リピーター',"Heavy"),
    new Weapon('ボセック',"Arrow"),
     new Weapon('トリプルテイク',"Energy")
]
var WeaponList_HG = [
    new Weapon('RE45',"Energy"),    
    new Weapon('ウィングマン',"SR")
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
    'バリスティック',
    'コンジット',
    'オルター',
    'スパロー'
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
