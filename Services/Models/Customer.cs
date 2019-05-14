using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeCrud.Models
{
    public class Customer
    {
        public int CustomerId { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string CompanyName { get; set; }
        public string CompanyLocation { get; set; }
    }
}