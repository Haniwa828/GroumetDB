function filter(id){ // フィルター追加
    addSort(id);
    addCategoryFilter(id);
    addAtmosphereFilter(id);
    addOperateDayFilter(id);
    addCostFilter(id);
    addAlcoholFilter(id);
    addAreaFilter(id);

    // 適用ボタン
    $('#' + id).append(' \
    <button id="apply" \
        onclick="search()" \
        class="button" \
    > \
        適用 \
    </button>\
    ')
}


function addSort(id){ // ソート
    $('#' + id).append(' \
    <div \
        style="margin-bottom: 5px;" \
    > \
        <div> \
            ソート： \
        </div> \
        <div> \
            <label> \
                <input name="sort"\
                    type="radio" \
                    value="最終更新日" \
                    checked \
                > \
                最終更新日　 \
            </label> \
            <label> \
                <input name="sort" \
                    type="radio" \
                    value="店名(a-z)"\
                > \
                店名(a-z)　 \
            </label> \
            <label> \
                <input name="sort" \
                    type="radio" \
                    value="店名(z-a)" \
                > \
                店名(z-a)　 \
            </label> \
            <label> \
                <input name="sort" \
                    type="radio" \
                    value="レビュー" \
                > \
                レビュー　 \
            </label> \
        </div> \
    </div> \
    ')
}

function addCategoryFilter(id){ // カテゴリ
    $('#' + id).append(' \
    <div \
        style="margin-bottom: 5px;" \
    > \
        <div> \
            カテゴリー： \
        </div> \
        <div> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="和食" \
                    checked \
                > \
                和食　 \
            </label> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="マレー" \
                    checked \
                > \
                マレー　 \
            </label> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="中華" \
                    checked \
                > \
                中華　 \
            </label> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="洋食" \
                    checked \
                > \
                洋食　 \
            </label> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="海鮮" \
                    checked \
                > \
                海鮮　 \
            </label> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="喫茶" \
                    checked \
                    > \
                    喫茶　 \
            </label> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="デザート" \
                    checked \
                    > \
                    デザート　 \
            </label> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="ラーメン" \
                    checked \
                    > \
                    ラーメン　 \
            </label> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="その他" \
                    checked \
                    > \
                    その他　 \
            </label> \
        </div> \
    </div> \
    ')
}

function addAtmosphereFilter(id){ // 雰囲気
    $('#' + id).append(' \
    <div \
        style="margin-bottom: 5px;" \
    > \
        <div> \
            形式： \
        </div> \
        <div> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="カフェ" \
                    checked \
                > \
                カフェ　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="居酒屋" \
                    checked \
                > \
                居酒屋　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="バー" \
                    checked \
                > \
                バー　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="フードコート" \
                    checked \
                > \
                フードコート　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="ファミレス" \
                    checked \
                > \
                ファミレス　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="キッチンカー" \
                    checked \
                > \
                キッチンカー　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="ファストフード" \
                    checked \
                > \
                ファストフード　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="フォーマル" \
                    checked \
                > \
                フォーマル　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="女子会" \
                    checked \
                > \
                女子会　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="放題系" \
                    checked \
                > \
                放題系　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="テイクアウト" \
                    checked \
                > \
                テイクアウト　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="レストラン" \
                    checked \
                > \
                レストラン　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="お一人様" \
                    checked \
                > \
                お一人様　 \
            </label> \
        </div> \
    </div> \
    ')
}

function addOperateDayFilter(id){ // 営業日
    $('#' + id).append(' \
    <div \
        style="margin-bottom: 5px;" \
    > \
        <div> \
            営業日： \
        </div> \
        <div> \
            <label> \
                <input name="operateDay" \
                    type="checkbox" \
                    value="月曜" \
                    checked \
                > \
                月曜　 \
            </label> \
            <label> \
                <input name="operateDay" \
                    type="checkbox" \
                    value="火曜" \
                    checked \
                > \
                火曜　 \
            </label> \
            <label> \
                <input name="operateDay" \
                    type="checkbox" \
                    value="水曜" \
                    checked \
                > \
                水曜　 \
            </label> \
            <label> \
                <input name="operateDay" \
                    type="checkbox" \
                    value="木曜" \
                    checked \
                > \
                木曜　 \
            </label> \
            <label> \
                <input name="operateDay" \
                    type="checkbox" \
                    value="金曜" \
                    checked \
                > \
                金曜　 \
            </label> \
            <label> \
                <input name="operateDay" \
                    type="checkbox" \
                    value="土曜" \
                    checked \
                > \
                土曜　 \
            </label> \
            <label> \
                <input name="operateDay" \
                    type="checkbox" \
                    value="日曜" \
                    checked \
                > \
                日曜　 \
            </label> \
        </div> \
    </div> \
    ')
}

function addCostFilter(id){ // 金額
    $('#' + id).append(' \
    <div \
        style="margin-bottom: 5px;" \
    > \
        <div> \
            金額： \
        </div> \
        <div> \
            <label> \
                <input name="cost" \
                    type="checkbox" \
                    value="～RM10" \
                    checked \
                > \
                ～RM10　 \
            </label> \
            <label> \
                <input name="cost" \
                    type="checkbox" \
                    value="RM11～RM30" \
                    checked \
                > \
                RM11～RM30　 \
            </label> \
            <label> \
                <input name="cost" \
                    type="checkbox" \
                    value="RM31～RM50" \
                    checked \
                > \
                RM31～RM50　 \
            </label> \
            <label> \
                <input name="cost" \
                    type="checkbox" \
                    value="RM51～RM100" \
                    checked \
                > \
                RM51～RM100　 \
            </label> \
            <label> \
                <input name="cost" \
                    type="checkbox" \
                    value="RM101" \
                    checked \
                > \
                RM101　 \
            </label> \
        </div> \
    </div> \
    ')
}

function addAlcoholFilter(id){ // 酒の提供
    $('#' + id).append(' \
    <div \
        style="margin-bottom: 5px;" \
    > \
        <div> \
            酒の提供： \
        </div> \
        <div> \
            <label> \
                <input name="alcohol" \
                    type="checkbox" \
                    value="無し" \
                    checked \
                > \
                無し　 \
            </label> \
            <label> \
                <input name="alcohol" \
                    type="checkbox" \
                    value="有り" \
                    checked \
                > \
                有り　 \
            </label> \
            <label> \
                <input name="alcohol" \
                    type="checkbox" \
                    value="有り(豊富)" \
                    checked \
                > \
                有り(豊富)　 \
            </label> \
        </div> \
    </div> \
    ')
}

function addAreaFilter(id){ // 
    $('#' + id).append(' \
    <div \
        style="margin-bottom: 5px;" \
    > \
        <div> \
            地域： \
        </div> \
        <div> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="全地域" \
                    checked \
                > \
                全地域　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="チェーン" \
                    checked \
                > \
                チェーン　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Kuala Lumpur" \
                    checked \
                > \
                Kuala Lumpur　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Selangor" \
                    checked \
                > \
                Selangor　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Johor" \
                    checked \
                > \
                Johor　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Putrajaya" \
                    checked \
                > \
                Putrajaya　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Pinang" \
                    checked \
                > \
                Pinang　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Kedah" \
                    checked \
                > \
                Kedah　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Kelantan" \
                    checked \
                > \
                Kelantan　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Melaka" \
                    checked \
                > \
                Melaka　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Negeri" \
                    checked \
                > \
                Negeri　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Pahang" \
                    checked \
                > \
                Pahang　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Perak" \
                    checked \
                > \
                Perak　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Perlis" \
                    checked \
                > \
                Perlis　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Terengganu" \
                    checked \
                > \
                Terengganu　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Sabah" \
                    checked \
                > \
                Sabah　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Sarawak" \
                    checked \
                > \
                Sarawak　 \
            </label> \
        </div> \
    </div> \
    ')
}






