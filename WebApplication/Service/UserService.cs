using System;
using System.Collections.Generic;
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

        public string FindByAll()
        {
            return userDao.FindByAll();
        }

        public string DeleteUser(string userName)
        {
            return userDao.DeleteUser(userName);
        }

        public string FindUserByUserName(string userName)
        {
            return userDao.FindUserByUserName(userName);
        }

        public bool UpdateUser(string oldName, User user)
        {
            return userDao.UpdateUser(oldName,user);
        }
    }
}