using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication.Dao;
using WebApplication.Models;

namespace WebApplication.Service
{
    public class UserService
    {
        private UserDao userDao = new UserDao();

        public bool Login(User user)
        {
            return userDao.Login(user);
        }
        public bool Register(User user)
        {
            return userDao.Register(user);
        }
    }
}