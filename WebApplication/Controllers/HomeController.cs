using System;
using System.Web.Mvc;
using WebApplication.Models;

namespace WebApplication.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public ActionResult Register(UserInfo userInfo)
        {
            if (!ModelState.IsValid)
            {
                return Content("error");
            }
            Console.WriteLine(userInfo.UserName);
            Console.WriteLine(userInfo.Password);
            return Content("ok");
        }

        [HttpPost]
        public ActionResult Login(User user)
        {
            if (!ModelState.IsValid)
            {
                return Content("error");
            }
            Console.WriteLine(user.UserName);
            Console.WriteLine(user.Password);
            return Content("ok");
        }
    }
}