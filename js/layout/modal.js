function modal(id){ // モーダル関連追加
    addOverlay(id);
    addModal1(id);
    addModal2(id);
}


function addOverlay(id){ // オーバーレイ
    $('#' + id).append(' \
    <div \
        id="overlay" \
        class="overlay"\
    ></div> \
    ')
}

function addModal1(id){ // モーダルウィンドウ1
    $('#' + id).append(' \
    <div \
        class="modal-window" \
        data-id="modal1" \
        id="modal1" \
        style="overflow: auto;" \
    > \
        <p> \
            目的の店名のコピーが推奨されます \
        </p> \
        <input \
            id="searchShop" \
            type="text" \
        > \
        <button \
            onclick="searchShop(' + ')" \
        > \
            検索 \
        </button> \
        <br><br> \
        <div \
            id="forReviewLink1" \
            style=" \
                height: 55%; \
                overflow: auto; \
            " \
        ></div> \
        <br> \
        <button \
            class=" \
                js-close \
                button-close \
                button \
            " \
        > \
            戻る \
        </button> \
        <a \
            class="button" \
            href="https://forms.gle/YUpxgStCMJSPURJbA" \
            target="_blank" \
        > \
            進む \
        </a> \
    </div> \
    ') // +のところに'searchShop'
    // ""にするとバグるから注意
}

function addModal2(id){ // モーダルウィンドウ2
    $('#' + id).append(' \
    <div \
        class="modal-window" \
        data-id="modal2" \
    > \
        <p> \
            既出か確認して下さい \
        </p> \
        <input \
            id="searchShops" \
            type="text" \
        > \
        <button \
            onclick="searchShop(' + ')" \
        > \
            検索 \
        </button> \
        <br><br> \
        <div \
            id="forReviewLink2" \
            style=" \
                height: 55%; \
                overflow: auto; \
            " \
        ></div> \
        <br> \
        <button \
            class=" \
                js-close \
                button-close \
                button \
            " \
        > \
            戻る \
        </button> \
        <a \
            class="button" \
            href="https://forms.gle/Zhvo9QcPjUVPpQyj6" \
            target="_blank" \
        > \
            進む \
        </a> \
    </div> \
    ') // +のところに'searchShops'
    // ""にするとバグるから注意
}

