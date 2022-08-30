function checkAll(nameAll, name){ // 全選択を押したとき
    let checkAll = document.getElementsByName(nameAll);
    let el = document.getElementsByName(name);
    
    for (let i = 0; i < el.length; i++) { // 各選択を全選択にあわせる
        el[i].checked = checkAll[0].checked;
    }
}

function checkOne(nameAll, name){ // 各選択を押したとき
    let checkAll = document.getElementsByName(nameAll);
    let el = document.getElementsByName(name);

    let count = 0;
    for (let i = 0; i < el.length; i++) { // 何個押されてるかカウント
        if (el[i].checked) {
            count += 1;
        }
    }

    if (el.length === count) { // 全ての選択が押された場合全選択もtrueに
        checkAll[0].checked = true;
    } else {
        checkAll[0].checked = false;
    }
}
