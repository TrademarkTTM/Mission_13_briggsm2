using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Mission_13_backend.Models
{
    public partial class JoelHiltonMovieCollectionContext : DbContext
    {
        public JoelHiltonMovieCollectionContext(DbContextOptions<JoelHiltonMovieCollectionContext> options) : base(options) { }

        public virtual DbSet<Movie> Movies { get; set; }
    }
}
