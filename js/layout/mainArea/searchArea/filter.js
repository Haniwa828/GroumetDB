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
    // categoryAll = "categoryAll";
    // category = "category";
    // atmosphereAll = "atmosphereAll";
    // atmosphere = "atmosphere";
    // operateDayAll = "operateDayAll";
    // operateDay = "operateDay";
    // costAll = "costAll";
    // cost = "cost";
    // alcoholAll = "alcoholAll";
    // alcohol = "alcohol";
    // areaAll = "areaAll";
    // area = "area";

    $('#' + id).append(' \
    <div \
        style="margin-bottom: 5px;" \
    > \
        <div> \
            カテゴリー： \
        </div> \
        <div> \
            <label> \
                <input name="categoryAll" \
                    type="checkbox" \
                    value="全選択" \
                    checked \
                    onclick="checkAll(' + categoryAll + ',' + category + ')" \
                > \
                全選択　 \
            </label> \
            <br> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="和食" \
                    checked \
                    onclick="checkOne(' + categoryAll + ',' + category + ')" \
                > \
                和食　 \
            </label> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="マレー" \
                    checked \
                    onclick="checkOne(' + categoryAll + ',' + category + ')" \
                > \
                マレー　 \
            </label> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="中華" \
                    checked \
                    onclick="checkOne(' + categoryAll + ',' + category + ')" \
                > \
                中華　 \
            </label> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="洋食" \
                    checked \
                    onclick="checkOne(' + categoryAll + ',' + category + ')" \
                > \
                洋食　 \
            </label> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="海鮮" \
                    checked \
                    onclick="checkOne(' + categoryAll + ',' + category + ')" \
                > \
                海鮮　 \
            </label> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="喫茶" \
                    checked \
                    onclick="checkOne(' + categoryAll + ',' + category + ')" \
                > \
                喫茶　 \
        </label> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="デザート" \
                    checked \
                    onclick="checkOne(' + categoryAll + ',' + category + ')" \
                > \
                デザート　 \
            </label> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="ラーメン" \
                    checked \
                    onclick="checkOne(' + categoryAll + ',' + category + ')" \
                > \
                ラーメン　 \
            </label> \
            <label> \
                <input name="category" \
                    type="checkbox" \
                    value="その他" \
                    checked \
                    onclick="checkOne(' + categoryAll + ',' + category + ')" \
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
                <input name="atmosphereAll" \
                    type="checkbox" \
                    value="全選択" \
                    checked \
                    onclick="checkAll(' + atmosphereAll + ',' + atmosphere + ')" \
                > \
                全選択　 \
            </label> \
            <br> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="カフェ" \
                    checked \
                    onclick="checkOne(' + atmosphereAll + ',' + atmosphere + ')" \
                > \
                カフェ　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="居酒屋" \
                    checked \
                    onclick="checkOne(' + atmosphereAll + ',' + atmosphere + ')" \
                > \
                居酒屋　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="バー" \
                    checked \
                    onclick="checkOne(' + atmosphereAll + ',' + atmosphere + ')" \
                > \
                バー　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="フードコート" \
                    checked \
                    onclick="checkOne(' + atmosphereAll + ',' + atmosphere + ')" \
                > \
                フードコート　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="ファミレス" \
                    checked \
                    onclick="checkOne(' + atmosphereAll + ',' + atmosphere + ')" \
                > \
                ファミレス　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="キッチンカー" \
                    checked \
                    onclick="checkOne(' + atmosphereAll + ',' + atmosphere + ')" \
                > \
                キッチンカー　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="ファストフード" \
                    checked \
                    onclick="checkOne(' + atmosphereAll + ',' + atmosphere + ')" \
                > \
                ファストフード　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="フォーマル" \
                    checked \
                    onclick="checkOne(' + atmosphereAll + ',' + atmosphere + ')" \
                > \
                フォーマル　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="女子会" \
                    checked \
                    onclick="checkOne(' + atmosphereAll + ',' + atmosphere + ')" \
                > \
                女子会　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="放題系" \
                    checked \
                    onclick="checkOne(' + atmosphereAll + ',' + atmosphere + ')" \
                > \
                放題系　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="テイクアウト" \
                    checked \
                    onclick="checkOne(' + atmosphereAll + ',' + atmosphere + ')" \
                > \
                テイクアウト　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="レストラン" \
                    checked \
                    onclick="checkOne(' + atmosphereAll + ',' + atmosphere + ')" \
                > \
                レストラン　 \
            </label> \
            <label> \
                <input name="atmosphere" \
                    type="checkbox" \
                    value="お一人様" \
                    checked \
                    onclick="checkOne(' + atmosphereAll + ',' + atmosphere + ')" \
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
                <input name="operateDayAll" \
                    type="checkbox" \
                    value="全選択" \
                    checked \
                    onclick="checkAll(' + operateDayAll + ',' + operateDay + ')" \
                > \
                全選択　 \
            </label> \
            <br> \
            <label> \
                <input name="operateDay" \
                    type="checkbox" \
                    value="月曜" \
                    checked \
                    onclick="checkOne(' + operateDayAll + ',' + operateDay + ')" \
                > \
                月曜　 \
            </label> \
            <label> \
                <input name="operateDay" \
                    type="checkbox" \
                    value="火曜" \
                    checked \
                    onclick="checkOne(' + operateDayAll + ',' + operateDay + ')" \
                > \
                火曜　 \
            </label> \
            <label> \
                <input name="operateDay" \
                    type="checkbox" \
                    value="水曜" \
                    checked \
                    onclick="checkOne(' + operateDayAll + ',' + operateDay + ')" \
                > \
                水曜　 \
            </label> \
            <label> \
                <input name="operateDay" \
                    type="checkbox" \
                    value="木曜" \
                    checked \
                    onclick="checkOne(' + operateDayAll + ',' + operateDay + ')" \
                > \
                木曜　 \
            </label> \
            <label> \
                <input name="operateDay" \
                    type="checkbox" \
                    value="金曜" \
                    checked \
                    onclick="checkOne(' + operateDayAll + ',' + operateDay + ')" \
                > \
                金曜　 \
            </label> \
            <label> \
                <input name="operateDay" \
                    type="checkbox" \
                    value="土曜" \
                    checked \
                    onclick="checkOne(' + operateDayAll + ',' + operateDay + ')" \
                > \
                土曜　 \
            </label> \
            <label> \
                <input name="operateDay" \
                    type="checkbox" \
                    value="日曜" \
                    checked \
                    onclick="checkOne(' + operateDayAll + ',' + operateDay + ')" \
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
                <input name="costAll" \
                    type="checkbox" \
                    value="全選択" \
                    checked \
                    onclick="checkAll(' + costAll + ',' + cost + ')" \
                > \
                全選択　 \
            </label> \
            <br> \
            <label> \
                <input name="cost" \
                    type="checkbox" \
                    value="～RM10" \
                    checked \
                    onclick="checkOne(' + costAll + ',' + cost + ')" \
                > \
                ～RM10　 \
            </label> \
            <label> \
                <input name="cost" \
                    type="checkbox" \
                    value="RM11～RM30" \
                    checked \
                    onclick="checkOne(' + costAll + ',' + cost + ')" \
                > \
                RM11～RM30　 \
            </label> \
            <label> \
                <input name="cost" \
                    type="checkbox" \
                    value="RM31～RM50" \
                    checked \
                    onclick="checkOne(' + costAll + ',' + cost + ')" \
                > \
                RM31～RM50　 \
            </label> \
            <label> \
                <input name="cost" \
                    type="checkbox" \
                    value="RM51～RM100" \
                    checked \
                    onclick="checkOne(' + costAll + ',' + cost + ')" \
                > \
                RM51～RM100　 \
            </label> \
            <label> \
                <input name="cost" \
                    type="checkbox" \
                    value="RM101～" \
                    checked \
                    onclick="checkOne(' + costAll + ',' + cost + ')" \
                > \
                RM101～　 \
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
                <input name="alcoholAll" \
                    type="checkbox" \
                    value="全選択" \
                    checked \
                    onclick="checkAll(' + alcoholAll + ',' + alcohol + ')" \
                > \
                全選択　 \
            </label> \
            <br> \
            <label> \
                <input name="alcohol" \
                    type="checkbox" \
                    value="無し" \
                    checked \
                    onclick="checkOne(' + alcoholAll + ',' + alcohol + ')" \
                > \
                無し　 \
            </label> \
            <label> \
                <input name="alcohol" \
                    type="checkbox" \
                    value="有り" \
                    checked \
                    onclick="checkOne(' + alcoholAll + ',' + alcohol + ')" \
                > \
                有り　 \
            </label> \
            <label> \
                <input name="alcohol" \
                    type="checkbox" \
                    value="有り(豊富)" \
                    checked \
                    onclick="checkOne(' + alcoholAll + ',' + alcohol + ')" \
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
                <input name="areaAll" \
                    type="checkbox" \
                    value="全選択" \
                    checked \
                    onclick="checkAll(' + areaAll + ',' + area + ')" \
                > \
                全選択　 \
            </label> \
            <br> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="全地域" \
                    checked \
                    onclick="checkOne(' + areaAll + ',' + area + ')" \
                > \
                全地域　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="チェーン" \
                    checked \
                    onclick="checkOne(' + areaAll + ',' + area + ')" \
                > \
                チェーン　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Kuala Lumpur" \
                    checked \
                    onclick="checkOne(' + areaAll + ',' + area + ')" \
                > \
                Kuala Lumpur　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Selangor" \
                    checked \
                    onclick="checkOne(' + areaAll + ',' + area + ')" \
                > \
                Selangor　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Johor" \
                    checked \
                    onclick="checkOne(' + areaAll + ',' + area + ')" \
                > \
                Johor　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Putrajaya" \
                    checked \
                    onclick="checkOne(' + areaAll + ',' + area + ')" \
                > \
                Putrajaya　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Pinang" \
                    checked \
                    onclick="checkOne(' + areaAll + ',' + area + ')" \
                > \
                Pinang　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Kedah" \
                    checked \
                    onclick="checkOne(' + areaAll + ',' + area + ')" \
                > \
                Kedah　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Kelantan" \
                    checked \
                    onclick="checkOne(' + areaAll + ',' + area + ')" \
                > \
                Kelantan　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Melaka" \
                    checked \
                    onclick="checkOne(' + areaAll + ',' + area + ')" \
                > \
                Melaka　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Negeri" \
                    checked \
                    onclick="checkOne(' + areaAll + ',' + area + ')" \
                > \
                Negeri　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Pahang" \
                    checked \
                    onclick="checkOne(' + areaAll + ',' + area + ')" \
                > \
                Pahang　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Perak" \
                    checked \
                    onclick="checkOne(' + areaAll + ',' + area + ')" \
                > \
                Perak　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Perlis" \
                    checked \
                    onclick="checkOne(' + areaAll + ',' + area + ')" \
                > \
                Perlis　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Terengganu" \
                    checked \
                    onclick="checkOne(' + areaAll + ',' + area + ')" \
                > \
                Terengganu　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Sabah" \
                    checked \
                    onclick="checkOne(' + areaAll + ',' + area + ')" \
                > \
                Sabah　 \
            </label> \
            <label> \
                <input name="area" \
                    type="checkbox" \
                    value="Sarawak" \
                    checked \
                    onclick="checkOne(' + areaAll + ',' + area + ')" \
                > \
                Sarawak　 \
            </label> \
        </div> \
    </div> \
    ')
}






