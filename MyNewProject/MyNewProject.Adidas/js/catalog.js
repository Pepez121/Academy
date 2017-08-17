$(document).ready(function () {
    GetAllProducts();
    //$("#prueba").append(buildMyProduct(JSONCatalog));
});

//function buildMyProduct(obj) {
//    var html = "";
//    //Obj es mi Catalogo que recibo como parámetro, y object es cada elemento de éste
//    $.each(obj, function(element, object){
//        html += "<div class='col-xs-12 col-md-4'><div class='product-img'><img class='catalog-image' src='";
//        html += object.imageurl + "'></div><div class='product-desc'><p class='prod-desc-title'>";
//        html += "<a href='product-detail.html?id=" + object.id + "'>";
//        html += object.title + "</a></p><p class='prod-desc-text'>";
//        html += object.description + "</p></div></div></div>";
//    });
//    return html;
//}

function GetAllProducts() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:57172/api/test',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var html = "";
            //Data es mi Catalogo en formato json, y object es cada elemento de éste
            $.each(data, function (element, object) {

                html += "<div class='col-xs-12 col-md-4'><div class='product-img'><img class='catalog-image' src='";
                html += object.ImageUrl + "'></div><div class='product-desc'><p class='prod-desc-title'>";
                html += "<a href='product-detail.html?id=" + object.Id + "'>";
                html += object.Name + "</a></p><p class='prod-desc-text'>";
                html += object.ProductDescription + "</p></div></div></div>";
            });
            $("#prueba").append(html);
        },
        error: function (a, b, c) {

        }
    });
}