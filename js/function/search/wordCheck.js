function check(data, word){ // 一致する要素の検索
    for(let j = 0; j < word.length; j++){ // それぞれのwordで検索
        for(let i = 0; i < data.length; i++){ // それぞれの要素に対して検索
            if(
                (
                    (data[i].ジャンル).indexOf(word[j]) != -1 
                    || (data[i].店名.toUpperCase()).indexOf(word[j].toUpperCase()) != -1 
                    // || (data[i].形式).indexOf(word[j]) != -1 
                    || (data[i].説明.toUpperCase()).indexOf(word[j].toUpperCase()) != -1 
                    || (data[i].住所.toUpperCase()).indexOf(word[j].toUpperCase()) != -1 
                    || (data[i].投稿者.toUpperCase()).indexOf(word[j].toUpperCase()) != -1 
                ) 
                && document.getElementById('shop' + i).style.display == 'block'
                ){ // 一致する要素がある時ー!
                 // そのまま
            }
            else{ // 無いとき......
                target = document.getElementById('shop' + i);
                target.style.display = 'none' // 要素ブロックを非表示
            }
        }
    }
}

function searchShop(id){ // モーダルウィンドウ用
    let shopData = recall("shopData");
    let words = document.getElementById(id).value; // 入力文字列の取得
    words = words.replace(/　/g, " "); // 全角スペースを半角に
    let searchKey = words.split(' '); // 半角スペースごとにリストに分割して挿入
    let shopNames = [];

    for(let i = 0; i < shopData.length; i++){ // 一旦全ての要素ブロックを表示
        let target = document.getElementById('shopName' + i);
        shopNames.push(target.textContent)
        target.style.display = 'block'
    }

    for(let j = 0; j < searchKey.length; j++){ // それぞれのsearchKeyで検索
        for(let i = 0; i < shopNames.length; i++){ // それぞれの要素に対して検索
            if(shopNames[i].toUpperCase().indexOf(searchKey[j].toUpperCase()) != -1 && document.getElementById('shopName' + i).style.display == 'block'){ // 一致する要素がある時ー!
                // target = document.getElementById('shopName' + i);
                // target.style.display = 'block' // 要素ブロックを表示
            }
            else{ // 無いとき......
                target = document.getElementById('shopName' + i);
                target.style.display = 'none' // 要素ブロックを非表示
            }
        }
    }
    
    let block = 0;
    for(let i = 0; i < shopNames.length; i++){ // それぞれの要素に対して検索
        if(document.getElementById('shopName' + i).style.display == 'block'){ // 一致する要素がある時ー!
            block++;

            break;
        }
    }

    if(block == 0){
        document.getElementById('noMatch').style.display = 'block';
    }
    else{
        document.getElementById('noMatch').style.display = 'none';
    }
}
