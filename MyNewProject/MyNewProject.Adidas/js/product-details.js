$(document).ready(function () {
    loadProduct();

});

function loadProduct() {
    var myProduct = FindMyProduct(getJsonFromUrl())
    buildMyProduct(myProduct);
}

function FindMyProduct(id) {
    var ProductDetails = "";
    //JSONDetails es mi Catalogo.json, y object es cada elemento de éste
    $.ajax({
        type: 'GET',
        url: 'http://localhost:57172/api/test', //Puerto 57172 es de WebApi
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //Data es mi Catalogo en formato json, y object es cada elemento de éste
            $.each(data, function (element, object) {
                if (object.Id == id) {
                    ProductDetails = object;
                    buildMyProduct(ProductDetails);
                }
                //console.log(object);
                //console.log(ProductDetails);
            });            
        },
        error: function (a, b, c) {

        }
    });
    console.log(ProductDetails);
    //return ProductDetails;
}

//Dynamic build your collection
function buildMyProduct(myProduct) {
    var html = "<div class='row'><div class='col-xs-12'>";
    html += "<h1 class='heading1'>" + myProduct.Name + "</h1><br></div></div>";
    html += "<div class='row'><div class='col-xs-12 col-md-4 thumb-main'><div class='main-prod-img'>";
    html += "<img class='product-image' src='" + myProduct.ImageUrl + "' alt=''></div>";
    html += "<div class='thumb-section'>";
    html += "<div class='thumb-img'><img class='thumb-image' src='";
    html += myProduct.imageUrl + "' alt=''></div>";
    html += "<div class='thumb-img'><img class='thumb-image' src='";
    html += myProduct.imageUrl + "' alt=''></div>";
    html += "<div class='thumb-img'><img class='thumb-image' src='";
    html += myProduct.imageUrl + "' alt=''></div>";
    //$.each(myProduct.thumbnails, function (element, thumb) {
    //    html += "<div class='thumb-img'><img class='thumb-image' src='";
    //    html += thumb.imageUrl + "' alt=''></div>";
    //});
    html += "</div><div class='product-text'><p class='p-model'>";
    html += "Model: " + myProduct.Model + "</p><p class='p-price'>Price: $" + myProduct.Price;
    html += "</p></div></div><div class='col-xs-12 col-md-6'><div class='product-description'>";
    html += "<p style='text-align: justify;'>" + myProduct.ProductDescription + "</p></div></div>";

    $("#prueba2").append(html);
}

function getJsonFromUrl() {
    var query = location.search.substr(1);
    var result = {};
    query.split("&").forEach(function (part) {
        var item = part.split("=");

        //Decode to avoid errors due to blank spaces on the URL
        result[item[0]] = decodeURIComponent(item[1]);
    });
    //we need only the ID
    return result.id;
}