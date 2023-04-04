using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission_13_backend.Models;

namespace Mission_13_backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MovieController : Controller
    {
        private JoelHiltonMovieCollectionContext context;

        public MovieController(JoelHiltonMovieCollectionContext temp)
        {
            context = temp;
        }

        public IEnumerable<Movie> Get()
        {
            var x = context.Movies.Where(m => m.Edited != "").OrderBy(m => m.Title).ToArray();

            return x;
        }
    }
}
