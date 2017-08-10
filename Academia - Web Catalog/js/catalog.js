var myCatalog = {
        "Product1": {
            "id": 0,
            "title": "Product 1",
            "description": "fsion Product1 Description",
            "imageurl": "img/products/hoodie1.jpg"
        },

        "Product2": {
            "id": 1,
            "title": "Product 2",
            "description": "Product2 Description Product2 DescriptionProduct2 Description",
            "imageurl": "img/products/hoodie2.jpg"
        },

        "Product3": {
            "id": 2,
            "title": "Product 3",
            "description": "Product3 Description Product3 Description Product3 Description",
            "imageurl": "img/products/hoodie3.jpg"
        }
}

$(document).ready(function () {
    $("#prueba").append(buildMyProduct(myCatalog));

});

function buildMyProduct(obj) {
    var html = "";
    //Obj es mi Catalogo, y object es cada elemento de éste
    $.each(obj, function(element, object){
        html += "<div class='col-xs-12 col-md-4'><div class='product-img'><img class='catalog-image' src='";
        html += object.imageurl + "'></div><div class='product-desc'><p class='prod-desc-title'>";
        html += object.title + "</p><p class='prod-desc-text'>";
        html += object.description + "</p></div></div></div>";
    });
    return html;
}

