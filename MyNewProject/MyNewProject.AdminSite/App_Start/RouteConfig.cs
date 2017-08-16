using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace MyNewProject.AdminSite
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                //Controller = Entidad (Producto)
                //Action = CRUD, HTML soporta CRUD
                /* 
                 * CREATE - POST, Requiere parámetros
                 * READ - GET
                 * UPDATE - Create con parámetros opcionales
                 * DELETE - Parámetros opcionales
                */
                //Id = 
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );


        }
    }
}
