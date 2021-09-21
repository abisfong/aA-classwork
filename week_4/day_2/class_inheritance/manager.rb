require_relative "employee"

class Manager < Employee
  attr_accessor :employees

  def initialize(name, title, salary, boss, employees=[])
    super(name, title, salary, boss)
    @employees = employees
  end
  
  def bonus(multiplier)
    multiplier * self.subemployee_salaries
  end

  def subemployee_salaries
    self.employees.inject(0) do |acc, employee|
      if employee.is_a?(Manager)
        acc + employee.subemployee_salaries + employee.salary
      else
        acc + employee.salary
      end
    end
  end
end

ned = Manager.new("Ned", "Founder", 1000000, nil)
darren = Manager.new("Darren", "TA Manager", 78000, ned)
david = Employee.new("David", "TA", 10000, darren)
shawna = Employee.new("Shawna", "TA", 12000, darren)

ned.employees = [darren]
darren.employees = [david, shawna]

p ned.bonus(5)
p darren.bonus(4)
p david.bonus(3)