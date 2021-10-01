require_relative 'questions_db'
require_relative 'question'
require_relative 'reply'
require_relative 'question_follow'

class User
    attr_accessor :id, :fname, :lname

    def self.find_by_id(id)
        records = QuestionsDB.instance.execute("SELECT * FROM users WHERE id= #{id}")
        User.new(records.first)
    end

    def self.find_by_name(fname, lname)
        records = QuestionsDB.instance.execute(<<-SQL, fname, lname) 
          SELECT 
            * 
          FROM 
            users
          WHERE 
            fname = ? AND lname = ? 
        SQL
        User.new(records.first)
    end

    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
    end

    def authored_questions
      Question.find_by_author_id(id) 
    end

    def authored_replies
      Reply.find_by_user_id(id)
    end

    def followed_questions
      QuestionFollow.followed_questions_for_user_id(id) 
    end

    
end