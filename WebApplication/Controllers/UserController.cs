using System;
using System.Web.Mvc;
using WebApplication.Service;
using WebApplication.Models;

namespace WebApplication.Controllers
{
    public class UserController : Controller
    {
        private UserService userService = new UserService();

        // GET: User
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Register(string userName,string password,string phone,string email)
        {
            if (!ModelState.IsValid)
            {
                return Content("error");
            }
            User user = new User();
            user.UserName = userName;
            user.Password = password;
            user.Phone = phone;
            user.Email = email;
            bool reslut = userService.Register(user);
            if (reslut)
            {
                return Content("注册成功！");
            }
            else
            {
                return Content("注册失败！");
            }
        }

        public ActionResult Login(string userName,string password)
        {
            if (!ModelState.IsValid)
            {
                return Content("error");
            }
            User user = new User();
            user.UserName = userName;
            user.Password = password;
            bool reslut= userService.Login(user);
            if (reslut)
            {
                return Content("登录成功！");
            }
            else
            {
                return Content("登录失败！");
            }
        }
    }
}