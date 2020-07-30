using Microsoft.AspNetCore.Mvc;

namespace web.Controllers
{
    public class ResumeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
