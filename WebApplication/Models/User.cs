using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication.Models
{
    public class User
    {
        string userName;
        string password;
        string email;
        string phone;

        public User()
        {
        }

        public User(string userName, string password, string email, string phone)
        {
            this.UserName = userName;
            this.Password = password;
            this.Email = email;
            this.Phone = phone;
        }

        public string UserName { get => userName; set => userName = value; }
        public string Password { get => password; set => password = value; }
        public string Email { get => email; set => email = value; }
        public string Phone { get => phone; set => phone = value; }
    }
}