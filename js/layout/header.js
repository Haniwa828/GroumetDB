function header(id){ // ヘッダー追加
    addHeader(id)
}


function addHeader(id){ // 
    $('#' + id).append(' \
    ')
}

function addHeader(){ // ヘッダー
    $('#sucsess').append(' \
    <div \
        style=" \
            font-size: large; \
            font-weight: bold; \
            background-color: #ffffff; \
            color: #BC002D; \
            text-align: center; \
        " \
    > \
        <img \
            style=" \
                height: 50px;" \
                src="/images/icon.png" \
                style="width: 15vw; \
            " \
        > \
        日本グルメDB(仮) \
    </div> \
    ')
}

