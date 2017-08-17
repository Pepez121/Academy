using MyNewProject.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Http;
using System.Data.Entity;
using System.Web.Http.Cors;

namespace MyNewProject.WebApi.Controllers
{
    [EnableCors(origins: "http://localhost:59643", headers: "*", methods: "*")]
    public class ProductController : ApiController
    {
        // GET: api/Product
        private AdidasProductsEntities db = new AdidasProductsEntities();
        public IEnumerable<Product> Get()
        {
            var products = db.Products.AsEnumerable();
            return products.ToList();
        }
    }
}