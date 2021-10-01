require_relative 'questions_db'
require_relative 'user'
require_relative 'reply'
require_relative 'question_follow'

class Question
    attr_accessor :id, :title, :body, :author_id

    def self.find_by_id(id)
        records = QuestionsDB.instance.execute("SELECT * FROM questions WHERE id= #{id}")
        Question.new(records.first)
    end

    def self.find_by_author_id(author_id)
        records = QuestionsDB.instance.execute(<<-SQL, author_id) 
          SELECT 
            * 
          FROM 
            questions 
          WHERE 
            author_id = ? 
        SQL
        records.map {|record| Question.new(record)}
    end

    def self.most_followed(n)
      QuestionFollow.most_followed_questions(n)
    end

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @author_id = options['author_id']
    end

    def author
      user = User.find_by_id(author_id)
      "#{user.fname} #{user.lname}"
    end

    def replies
      Reply.find_by_question_id(id)
    end

    def followers
      QuestionFollow.followers_for_questions_id(id)
    end    
end


