using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Server.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(typeof(IEnumerable<User>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetUsers()
        {
            List<User> users = new List<User> { new User { Id = 1, Name = "Lerato", Surname = "Letsepe" }, new User { Id = 2, Name = "Mason", Surname = "Smith" }, new User { Id = 3, Name = "Palesa", Surname = "Piliso" }, new User { }, };

            return Ok(users);
        }
    }

    [Route("api/[controller]")]
    [ApiController]

    public class PeopleController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(typeof(IEnumerable<User>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetPeople()
        {
            List<User> people = new List<User> { new User { Id = 1, Name = "Chris", Surname = "Tucker" }, new User { Id = 2, Name = "Brad", Surname = "Pitt" }, new User { Id = 3, Name = "Denzel", Surname = "Washington" }, new User { }, };

            return Ok(people);
        }
    }

    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
    }
}