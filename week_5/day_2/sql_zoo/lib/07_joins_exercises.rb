# == Schema Information
#
# Table name: actors
#
#  id          :integer      not null, primary key
#  name        :string
#
# Table name: movies
#
#  id          :integer      not null, primary key
#  title       :string
#  yr          :integer
#  score       :float
#  votes       :integer
#  director_id :integer
#
# Table name: castings
#
#  movie_id    :integer      not null, primary key
#  actor_id    :integer      not null, primary key
#  ord         :integer

require_relative './sqlzoo.rb'

def example_join
  execute(<<-SQL)
    SELECT
      *
    FROM
      movies
    JOIN
      castings ON movies.id = castings.movie_id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      actors.name = 'Sean Connery'
  SQL
end

def ford_films
  # List the films in which 'Harrison Ford' has appeared.
  execute(<<-SQL)
    SELECT
      title
    FROM
      movies
    JOIN
      castings ON movies.id = castings.movie_id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      actors.name = 'Harrison Ford'
  SQL
end

def ford_supporting_films
  # List the films where 'Harrison Ford' has appeared - but not in the star
  # role. [Note: the ord field of casting gives the position of the actor. If
  # ord=1 then this actor is in the starring role]
  execute(<<-SQL)
    SELECT
      title
    FROM
      movies
    JOIN
      castings ON movies.id = castings.movie_id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      actors.name = 'Harrison Ford' AND castings.ord != 1
  SQL
end

def films_and_stars_from_sixty_two
  # List the title and leading star of every 1962 film.
  execute(<<-SQL)
    SELECT
      movies.title, actors.name
    FROM
      movies
    JOIN
      castings ON movies.id = castings.movie_id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      movies.yr = 1962 AND castings.ord = 1
  SQL
end

def travoltas_busiest_years
  # Which were the busiest years for 'John Travolta'? Show the year and the
  # number of movies he made for any year in which he made at least 2 movies.
  execute(<<-SQL)
    SELECT
      yr, COUNT(*) AS num_movies
    FROM
      movies
    JOIN
      castings ON movies.id = castings.movie_id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      actors.name = 'John Travolta'
    GROUP BY yr
    HAVING COUNT(*) >= 2
  SQL
end

def andrews_films_and_leads
  # List the film title and the leading actor for all of the films 'Julie
  # Andrews' played in.
  execute(<<-SQL)
    SELECT
      title, actors.name
    FROM
      movies
    JOIN
      castings ON movies.id = castings.movie_id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      ord = 1 AND title IN (
        SELECT
          title
        FROM
          movies
        JOIN
          castings ON movies.id = castings.movie_id
        JOIN
          actors ON castings.actor_id = actors.id
        WHERE actors.name = 'Julie Andrews'
      )
  SQL
end

def prolific_actors
  # Obtain a list in alphabetical order of actors who've had at least 15
  # starring roles.
  execute(<<-SQL)
    SELECT outer_actors.name
    FROM castings
    JOIN movies ON movies.id = castings.movie_id
    JOIN actors AS outer_actors ON outer_actors.id = castings.actor_id
    GROUP BY outer_actors.name
    HAVING 15 <= (
      SELECT COUNT(*)
      FROM castings
      JOIN movies ON movies.id = castings.movie_id
      JOIN actors ON actors.id = castings.actor_id
      WHERE actors.name = outer_actors.name AND castings.ord = 1
    )
    ORDER BY outer_actors.name ASC
  SQL
end

def films_by_cast_size
  # List the films released in the year 1978 ordered by the number of actors
  # in the cast (descending), then by title (ascending).
  execute(<<-SQL)
    SELECT movies.title, COUNT(*) AS cast_size
    FROM castings
    JOIN movies ON movies.id = castings.movie_id
    JOIN actors AS actors ON actors.id = castings.actor_id
    WHERE yr = 1978
    GROUP BY movies.title
    ORDER BY COUNT(*) DESC, movies.title ASC
  SQL
end

def colleagues_of_garfunkel
  # List all the people who have played alongside 'Art Garfunkel'.
  execute(<<-SQL)
    SELECT actors.name
    FROM castings
    JOIN movies ON movies.id = castings.movie_id
    JOIN actors AS actors ON actors.id = castings.actor_id
    WHERE actors.name != 'Art Garfunkel' AND movies.id IN (
      SELECT movies.id
      FROM castings
      JOIN movies ON movies.id = castings.movie_id
      JOIN actors AS actors ON actors.id = castings.actor_id
      WHERE actors.name = 'Art Garfunkel'
      GROUP BY movies.id
    )
    GROUP BY actors.name
  SQL
end
