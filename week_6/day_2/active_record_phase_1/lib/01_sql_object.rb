require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    @columns ||= DBConnection.execute2("SELECT * FROM #{self.table_name} LIMIT 1")
      .first
      .map(&:to_sym)
  end

  def self.finalize!
    self.columns.each do |column|
      attr_accessor column
    end

    # self.attributes.each do |column, value|
    #   attr_accessor column
    #   self.instance_variable_set("@#{column.to_s}", value)
    # end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name || "#{self.name.downcase}s"
  end

  def self.all
    # ...
  end

  def self.parse_all(results)
    # ...
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    # ...
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
