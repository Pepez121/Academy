//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNewProject.WebApi.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ProductDescription { get; set; }
        public string Model { get; set; }
        public Nullable<decimal> Price { get; set; }
        public string Keywords { get; set; }
        public Nullable<bool> Active { get; set; }
        public Nullable<int> CategoryId { get; set; }
        public Nullable<System.DateTime> CreateDateTime { get; set; }
        public Nullable<System.DateTime> UpdateDateTime { get; set; }
    }
}
