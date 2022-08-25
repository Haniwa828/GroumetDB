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
        
        default:
            let applyURL = "https://script.google.com/macros/s/AKfycbyThsWVsnqcryy23-1Tl4FEcLN6LP_Lpc4wiQciTnmktq8NGqdzFlpBT8qS9mE82yqS/exec?group="

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