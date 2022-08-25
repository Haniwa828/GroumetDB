function shopArea(id, data){
    addshopArea(id);
    shop("shop", data);
}


function addshopArea(id){ // 
    $('#' + id).append(' \
    <div id="shop" \
        style="margin-top: 10px;" \
    ></div> \
    ')
}