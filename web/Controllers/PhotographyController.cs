using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace web.Controllers
{
    public class PhotographyController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
