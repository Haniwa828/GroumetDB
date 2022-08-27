function logIn(){ // ログイン申請
    let applyURL = "https://script.google.com/macros/s/AKfycbzT52NKYHxqT6vdAQphXTgXFSRdRCeC7dpdhQ84spaxTgpZE0t3kpnHQdexTxg9Me178g/exec?group="

    let group = document.getElementById("group");
    let pass = document.getElementById("pass");
    let errorLogin = document.getElementById("errorLogin");
    let button = document.getElementById("btn");

    errorLogin.style.display = "none"; // 状態の初期化
    button.style.display = 'none';

    // URLの作成
    applyURL = applyURL + group.value + "&pass=" + pass.value;
    
    // ウェブアプリの実行
    fetch(applyURL) // グループ名とパスワードが一致するか確認
    .then(response => response.json())
    .then(data => { // 結果取得
        switch(true){
            case data == "-1": // ログイン失敗
                errorLogin.style.display = "block";
                button.style.display = "block";
                break;
            
            default: // ログイン成功
                // loginSucsess(data);

                // データ格納
                save(data[0], "sucsess");
                save(data[1], "announce");
                save(group.value, "groupName");
                save(pass.value, "password");

                // ページ遷移
                window.location.href = '/index.html';

                break;
        }
    });
}