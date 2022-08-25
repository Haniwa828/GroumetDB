function searchArea(id){ // 検索エリア関連
    console.log('来たよ')
    addSearchBox(id);
    addFilterArea(id);
    filter("filter");
}


function addSearchBox(id){ // 検索ボックス追加
    $('#' + id).append(' \
        <div \
            class="searchContent"\
        > \
            <input id="search" \
                type="text" \
            > \
            <button \
                class="button" \
                onclick="search()" \
            > \
                検索 \
            </button> \
            <span> \
                <button \
                    class="button" \
                    onclick="filterOpen()" \
                > \
                    詳細設定 \
                </button> \
            </span> \
            <span \
                style=" \
                    position: absolute; \
                    right: 10px; \
                    margin-right: 10px; \
                "> \
                <button \
                    class="button" \
                    onclick="refresh()" \
                > \
                    更新 \
                </button> \
            </span> \
        </div> \
    ')
}

function addFilterArea(id){ // フィルター設置するエリア
    $('#' + id).append(' \
    <div id="filter" \
        class="searchContent" \
        style=" \
            margin-top: 5px; \
            display: none; \
            padding: 10px; \
            border: 1px solid; \
            border-color: #dcdcdc; \
            border-radius: 5px; \
            background-color: #fffafa; \
        " \
    > \
    </div> \
    ')
}


