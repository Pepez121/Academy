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
    $.each(JSONDetails, function (element, object) {
        if (object.id == id)
            ProductDetails = object;
    });
    return ProductDetails;
}


//Dynamic build your collection
function buildMyProduct(myProduct) {
    var html = "<div class='row'><div class='col-xs-12'>";
    html += "<h1 class='heading1'>" + myProduct.title + "</h1><br></div></div>";
    html += "<div class='row'><div class='col-xs-12 col-md-4 thumb-main'><div class='main-prod-img'>";
    html += "<img class='product-image' src='" + myProduct.mainImage + "' alt=''></div>";
    html += "<div class='thumb-section'>";
    $.each(myProduct.thumbnails, function (element, thumb) {
        html += "<div class='thumb-img'><img class='thumb-image' src='";
        html += thumb.imageUrl + "' alt=''></div>";
    });
    html += "</div><div class='product-text'><p class='p-model'>";
    html += "Model: " + myProduct.model + "</p><p class='p-price'>Price: $" + myProduct.price;
    html += "</p></div></div><div class='col-xs-12 col-md-6'><div class='product-description'>";
    html += "<p style='text-align: justify;'>" + myProduct.description + "</p></div></div>";

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