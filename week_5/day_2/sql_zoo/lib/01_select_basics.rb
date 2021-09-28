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

def example_select
  execute(<<-SQL)
    SELECT
      population
    FROM
      countries
    WHERE
      name = 'France'
  SQL
end

def select_population_of_germany
  execute(<<-SQL)
    SELECT
      population
    FROM
      countries
    WHERE
      name = 'Germany'
  SQL
end

def per_capita_gdp
  # Show the name and per capita gdp (gdp/population) for each country where
  # the area is over 5,000,000 km^2
  execute(<<-SQL)
    SELECT
      countries.name, (countries.gdp / countries.population) AS per_capita_gdp
    FROM
      countries
    WHERE
      countries.area > 5000000
  SQL
end

def small_and_wealthy
  # Show the name and continent of countries where the area is less than 2,000
  # and the gdp is more than 5,000,000,000.
  execute(<<-SQL)
    SELECT
      countries.name, countries.continent
    FROM
      countries
    WHERE
      (countries.gdp > 5000000000 AND countries.area < 2000) 
  SQL
end

def scandinavia
  # Show the name and the population for 'Denmark', 'Finland', 'Norway', and
  # 'Sweden'
  execute(<<-SQL)
    SELECT
      countries.name, countries.population
    FROM
      countries
    WHERE
      (countries.name = 'Denmark' OR 
      countries.name = 'Finland' OR 
      countries.name = 'Norway' OR 
      countries.name = 'Sweden')
  SQL
end

def starts_with_g
  # Show each country that begins with the letter G
  execute(<<-SQL)
    SELECT
      countries.name
    FROM
      countries
    WHERE
      countries.name LIKE 'G%'
  SQL
end

def just_the_right_size
  # Show the country and the area in 1000's of square kilometers for countries
  # with an area between 200,000 and 250,000.
  # BETWEEN allows range checking - note that it is inclusive.
  execute(<<-SQL)
    SELECT
      countries.name, (countries.area / 1000) AS area
    FROM
      countries
    WHERE
      countries.area BETWEEN 200000 AND 250000
  SQL
end
