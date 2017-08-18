using MyNewProject.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;

namespace MyNewProject.WebApi.Controllers
{
    [EnableCors(origins: "http://localhost:59643", headers: "*", methods: "*")]
    public class TestController : ApiController
    {
        // GET: api/Product
        private AdidasProductsEntities db = new AdidasProductsEntities();
        public IEnumerable<Object> Get()
        {
            //var products = db.Products.AsEnumerable();
            //return products.ToList();

            //var catalog = (from p in db.Products.AsEnumerable()
            //               join i in db.ProductImages.AsEnumerable()
            //               on p.Id equals i.ProductId
            //               select new { p.Id,
            //                            p.Name,
            //                            p.ProductDescription,
            //                            i.ImageUrl,
            //                            p.Price,
            //                            p.Model}).ToList();
            var catalog = (from p in db.Products.AsEnumerable()
                           join i in db.ProductImages.AsEnumerable()
                           on p.Id equals i.ProductId
                           select new
                           {
                               p.Id,
                               p.Name,
                               p.ProductDescription,
                               i.ImageUrl,
                               p.Price,
                               p.Model
                           }).ToList();
            return catalog;
        }
    }
}