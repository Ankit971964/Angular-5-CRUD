using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeCrud.Models
{
    public class Customers
    {
        public int CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
    }
}