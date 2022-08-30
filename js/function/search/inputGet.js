function wordGet(){ // 検索窓に入力された文字を取得
    let word = document.getElementById('search').value; // 入力文字列の取得
    word = word.replace(/　/g, " "); // 全角スペースを半角に
    let words = word.split(' '); // 半角スペースごとにリストに分割して挿入

    return words;
}

function selectGet(){
    // それぞれの選択保持用
    let category = [];
    let operate = [];
    let cost = [];
    let atmosphere = [];
    let area = [];
    let alcohol = [];
    let sort = '';

    // それぞれの選択取得用
    let categoryCategory = document.getElementsByName("category");
    let categoryOperate = document.getElementsByName("OperateDay");
    let categoryCost = document.getElementsByName("cost");
    let categoryAtmosphere = document.getElementsByName("atmosphere");
    let categoryArea = document.getElementsByName("area");
    let categoryAlcohol = document.getElementsByName("alcohol");
    let categorySort = document.getElementsByName("sort");

    category = checkCheck(category, categoryCategory);
    operate = checkCheck(operate, categoryOperate);
    cost = checkCheck(cost, categoryCost);
    atmosphere = checkCheck(atmosphere, categoryAtmosphere);
    area = checkCheck(area, categoryArea);
    alcohol = checkCheck(alcohol, categoryAlcohol);

    for (let i = 0; i < categorySort.length; i++){
        if (categorySort.item(i).checked){
            sort = categorySort.item(i).value;
            break;
        }
    }
    
    return [alcohol, area, atmosphere, category, cost, operate, sort];
}

function checkCheck(selected, category){ // 選択されたものの格納
    for (let i = 0; i < category.length; i++) {
        if (category[i].checked) { //(category[i].checked === true)と同じ
          selected.push(category[i].value);
        }
    }

    return selected;
}