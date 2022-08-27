function submit(){ //　メインページでの要素配置　
    // formの要素取得
    let group = document.getElementById('group');
    let pass = document.getElementById('pass');
    let errorGroup = document.getElementById('errorGroup');
    let errorLength = document.getElementById('errorLength');

    // エラーメッセージ初期化
    errorGroup.style.display = "none";
    errorLength.style.display = "none";
    
    switch(true){
        case pass.value.length < 4:
        case group.value.length < 4:
            errorLength.style.display = "block";
            break;
        
        case group.value.indexOf('\"', 0) != -1:
        case group.value.indexOf('\'', 0) != -1:
        case group.value.indexOf('<', 0) != -1:
        case group.value.indexOf('>', 0) != -1:
        case group.value.indexOf('&', 0) != -1:
        case group.value.indexOf('　', 0) != -1:
        case group.value.indexOf(' ', 0) != -1:
        case pass.value.indexOf('\"', 0) != -1:
        case pass.value.indexOf('\'', 0) != -1:
        case pass.value.indexOf('<', 0) != -1:
        case pass.value.indexOf('>', 0) != -1:
        case pass.value.indexOf('&', 0) != -1:
        case pass.value.indexOf('　', 0) != -1:
        case pass.value.indexOf(' ', 0) != -1:
            break;

        default:
            let applyURL = "https://script.google.com/macros/s/AKfycbxJ93sAEqFO3pr4zlGufPjUiBirsEfSkd1q4S2s58Frv-rxJFnIE8MhaEPQz0UK9939dg/exec?group="

            // URLの作成
            applyURL = applyURL + group.value + "&pass=" + pass.value;
            
            // ウェブアプリの実行
            fetch(applyURL) // グループ名とパスワードが存在するかの確認及び登録
            .then(response => response.json())
            .then(data => {
                // 結果取得
                let result = data; 
                console.log(result);

                switch(true){
                    case result == "-1": // グループ名被りあり
                        errorGroup.style.display = "block";
                        break;
                    
                    default: // 新規登録成功
                        registerSucsess();
                        break;
                }
            });
    }
}