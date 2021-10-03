def what_was_that_one_with(those_actors)
  # Find the movies starring all `those_actors` (an array of actor names).
  # Show each movie's title and id.
  Movie
    .joins(:actors)
    .where(actors: {name: those_actors})
    .group("movies.id")
    .having("COUNT(*) >= #{those_actors.length}")
    .select("movies.title, movies.id")
end

def golden_age
  # Find the decade with the highest average movie score.
  Movie
    .select("((yr / 10) * 10) AS decade, AVG(score) AS avg_score")
    .group("decade")
    .order("avg_score DESC")
    .first
    .decade
end

def costars(name)
  # List the names of the actors that the named actor has ever
  # appeared with.
  # Hint: use a subquery
  Movie
    .joins(:actors)
    .where.not(actors: {name: name})
    .where(movies: {
      id: Casting
            .joins(:actor)
            .where(actors: {name: name})
            .group("castings.movie_id")
            .pluck("movie_id")
    })
    .group('actors.name')
    .pluck("name")
end

def actor_out_of_work
  # Find the number of actors in the database who have not appeared in a movie
  Actor
    .left_joins(:movies)
    .where("movies.id IS NULL")
    .count("*")
end

def starring(whazzername)
  # Find the movies with an actor who had a name like `whazzername`.
  # A name is like whazzername if the actor's name contains all of the
  # letters in whazzername, ignoring case, in order.

  # ex. "Sylvester Stallone" is like "sylvester" and "lester stone" but
  # not like "stallone sylvester" or "zylvester ztallone"
  whazzername =  whazzername.split('').join('%')
  Movie
    .joins(:actors)
    .where("actors.name ILIKE ?", "%#{whazzername}%")
    .select("movies.*")
end

def longest_career
  # Find the 3 actors who had the longest careers
  # (the greatest time between first and last movie).
  # Order by actor names. Show each actor's id, name, and the length of
  # their career.
  Movie
    .joins(:actors)
    .select("actors.id, actors.name, (MAX(movies.yr) - MIN(movies.yr)) AS career")
    .group("actors.id, actors.name")
    .order("career DESC")
    .limit(3)
end
