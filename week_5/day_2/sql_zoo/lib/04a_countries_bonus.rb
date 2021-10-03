# == Schema Information
#
# Table name: countries
#
#  name        :string       not null, primary key
#  continent   :string
#  area        :integer
#  population  :integer
#  gdp         :integer

require_relative './sqlzoo.rb'

def highest_gdp
  # Which countries have a GDP greater than every country in Europe? (Give the
  # name only. Some countries may have NULL gdp values)
  execute(<<-SQL)
    SELECT
      countries.name
    FROM
      countries
    WHERE
      countries.continent != 'Europe' AND gdp > (
        SELECT
          MAX(gdp)
        FROM
          countries
        WHERE
          countries.continent = 'Europe'
      )
  SQL
end

def largest_in_continent
  # Find the largest country (by area) in each continent. Show the continent,
  # name, and area.
  execute(<<-SQL)
    SELECT countries.continent, countries.name, countries.area
    FROM countries
    WHERE countries.area IN (
      SELECT MAX(area)
      FROM countries
      GROUP BY countries.continent
    )
  SQL
end

def large_neighbors
  # Some countries have populations more than three times that of any of their
  # neighbors (in the same continent). Give the countries and continents.
  execute(<<-SQL)
    SELECT
      outer_countries.name, outer_countries.continent
    FROM
      countries AS outer_countries
    WHERE
      outer_countries.population > ALL (
        SELECT
          (countries.population * 3) AS population
        FROM
          countries
        WHERE
          countries.continent = outer_countries.continent AND countries.name != outer_countries.name
      )
    
  SQL
end
