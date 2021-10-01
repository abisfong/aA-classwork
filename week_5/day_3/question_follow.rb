require_relative 'questions_db'
require_relative 'user'

class QuestionFollow
    attr_accessor :id, :user_id, :question_id

    def self.find_by_id(id)
        records = QuestionsDB.instance.execute("SELECT * FROM question_follows WHERE id= #{id}")
        QuestionFollow.new(records.first)
    end

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end

    def self.followers_for_questions_id(question_id)
        records = QuestionsDB.instance.execute(<<-SQL, question_id)
            SELECT
                users.id, fname, lname
            FROM
                users
            JOIN
                question_follows ON users.id = question_follows.user_id
            WHERE question_follows.question_id = ?
        SQL
        records.map {|record| User.new(record)}
    end

    def self.followed_questions_for_user_id(user_id)
        records = QuestionsDB.instance.execute(<<-SQL, user_id)
            SELECT
                questions.id, questions.title, questions.body, questions.author_id
            FROM
                questions
            JOIN
                question_follows ON questions.id = question_follows.question_id
            WHERE question_follows.user_id = ?
        SQL
        records.map {|record| Question.new(record)}
    end
    
    def self.most_followed_questions(n)
        records = QuestionsDB.instance.execute(<<-SQL, n)
            SELECT
                questions.id, questions.title, questions.body, questions.author_id,
                COUNT(*) AS num_followed
            FROM
                questions
            JOIN
                question_follows ON questions.id = question_follows.question_id
            GROUP BY
                questions.id
            ORDER BY
                num_followed DESC
            LIMIT
                ?
        SQL
        records.map {|record| Question.new(record)}
    end

end