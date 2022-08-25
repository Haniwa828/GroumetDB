function filterCheck(Category, Operate, Cost, Atmosphere, Area, Alcohol, data){ // フィルター適用
    
    for(let j = 0; j < Category.length; j++){ // それぞれので検索
        for(let k = 0; k < Operate.length; k++){
            for(let l = 0; l < Cost.length; l++){
                for(let m = 0; m < Atmosphere.length; m++){
                    for(let o = 0; o < Area.length; o++){
                        for(let p = 0; p < Alcohol.length; p++){
                            for(let i = 0; i < data.length; i++){ // それぞれの要素に対して検索
                                let target = document.getElementById('shop' + i);

                                let tempCate = data[i].ジャンル.join(','); // 一時的にジャンル名復元
                                tempCate = tempCate.replace('/images/japan.png', '和食');
                                tempCate = tempCate.replace('/images/china.png', '中華');
                                tempCate = tempCate.replace('/images/italy.png', 'イタリアン');
                                tempCate = tempCate.replace('/images/cake.png', 'デザート');
                                tempCate = tempCate.replace('/images/cafe.png', '喫茶');
                                tempCate = tempCate.replace('/images/ramen.png', 'ラーメン');

                                if(typeof(data[i].定休日) != 'string'){
                                    data[i].定休日 = data[i].定休日.join(', ');
                                }

                                if(
                                    (data[i].定休日).indexOf(Operate[k]) != -1 
                                    && (
                                        (data[i].昼営業の金額目安).indexOf(Cost[l]) != -1 
                                        || (data[i].夜営業の金額目安).indexOf(Cost[l]) != -1
                                    ) 
                                    && (data[i].形式).indexOf(Atmosphere[m]) != -1
                                    && (
                                        (data[i].住所.toUpperCase()).indexOf(Area[o]) != -1 
                                        || Area[o] == "全地域"
                                    )
                                    && (data[i].酒の提供).indexOf(Alcohol[p]) != -1 
                                    && target.style.display == 'none'
                                ){
                                    if((tempCate.indexOf(Category[j]) != -1)){ // カテゴリー名が含まれている場合
                                        target.style.display = 'block' // 要素ブロックを表示
                                    }
                                    else if(Category[j] == 'その他'){ // カテゴリー名が「その他」の場合
                                        tempCate = tempCate.replace('和食', '');
                                        tempCate = tempCate.replace('中華', '');
                                        tempCate = tempCate.replace('洋食', '');
                                        tempCate = tempCate.replace('イタリアン', '');
                                        tempCate = tempCate.replace('デザート', '');
                                        tempCate = tempCate.replace('喫茶', '');
                                        tempCate = tempCate.replace('ラーメン', '');
                                        tempCate = tempCate.replace(/, /g, '');

                                        if(tempCate != ''){ // 自由記述のジャンルがある場合\
                                            target.style.display = 'block' // 要素ブロックを表示
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // console.log(data)
}