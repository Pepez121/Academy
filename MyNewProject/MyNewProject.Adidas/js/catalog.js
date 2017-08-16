$(document).ready(function () {
    $("#prueba").append(buildMyProduct(JSONCatalog));
    GetAllProducts();

});

function buildMyProduct(obj) {
    var html = "";
    //Obj es mi Catalogo, y object es cada elemento de éste
    $.each(obj, function(element, object){
        html += "<div class='col-xs-12 col-md-4'><div class='product-img'><img class='catalog-image' src='";
        html += object.imageurl + "'></div><div class='product-desc'><p class='prod-desc-title'>";
        html += "<a href='product-detail.html?id=" + object.id + "'>";
        html += object.title + "</a></p><p class='prod-desc-text'>";
        html += object.description + "</p></div></div></div>";
    });
    return html;
}

function GetAllProducts() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:57172/api/product',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

        },
        error: function (a, b, c) {

        }
    });
}

