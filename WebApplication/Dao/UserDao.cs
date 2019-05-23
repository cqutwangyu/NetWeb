using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using WebApplication.Models;
using WebApplication.Utils;

namespace WebApplication.Dao
{
    public class UserDao
    {
        public bool Login(User user)
        {
            SqlParameter[] sp = {
                new SqlParameter("@userName", user.UserName),
                new SqlParameter("@password", user.Password),
            };
            DataSet ds=SqlHelper.GetDataSet("select * from Users where userName = @userName and password = @password", sp);

            return ds.Tables[0].Rows.Count>0?true:false;
        }
        public bool Register(User user)
        {
            SqlParameter[] sp = {
                new SqlParameter("@userName", user.UserName),
                new SqlParameter("@password", user.Password),
                new SqlParameter("@phone", user.Phone),
                new SqlParameter("@email", user.Email),
            };
            int count=SqlHelper.ExcuteSQL("insert into Users values(@userName,@password,@phone,@email)", sp);
            return count>0?true:false;
        }
        public string FindByAll()
        {
            DataTable dt=SqlHelper.GetTable("select * from Users");
            string json = Newtonsoft.Json.JsonConvert.SerializeObject(dt);
            return json;
        }
        public string FindUserByUserName(string userName)
        {
            DataTable dt=SqlHelper.GetTable("select * from Users where userName='"+userName+"'");
            string json = Newtonsoft.Json.JsonConvert.SerializeObject(dt);
            return json;
        }
        public string DeleteUser(string userName)
        {
            SqlHelper.ExcuteSQL("delete from users where userName='" + userName + "'");
            return FindByAll();
        }
        public bool UpdateUser(string oldName,User user)
        {
            SqlParameter[] sp = {
                new SqlParameter("@oldName", oldName),
                new SqlParameter("@userName", user.UserName),
                new SqlParameter("@password", user.Password),
                new SqlParameter("@phone", user.Phone),
                new SqlParameter("@email", user.Email),
            };
            int count = SqlHelper.ExcuteSQL("update users set userName = @userName , password = @password , phone = @phone , email = @email where userName = @oldName", sp);
            return count > 0 ? true : false;
        }
    }
}