using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication.Models
{
    public class UserInfo
    {
        private string userName;
        private string password;
        private string Email;

        public string UserName { get => userName; set => userName = value; }
        public string Password { get => password; set => password = value; }
        public string Email1 { get => Email; set => Email = value; }
    }
}