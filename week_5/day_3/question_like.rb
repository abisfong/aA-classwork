require_relative 'questions_db'
require_relative 'user'

class QuestionLike
    attr_accessor :id, :user_id, :question_id

    def self.find_by_id(id)
        records = QuestionsDB.instance.execute("SELECT * FROM question_likes WHERE id= #{id}")
        QuestionLike.new(records.first)
    end

    def self.likers_for_question_id(question_id)
        records = QuestionsDB.instance.execute(<<-SQL, question_id)
            SELECT
                users.id, fname, lname
            FROM
                users
            JOIN
                question_likes ON users.id = question_likes.user_id
            WHERE question_likes.question_id = ?
        SQL
        records.map {|record| User.new(record)}
    end

    def self.num_likes_for_question_id(question_id)
        QuestionsDB.instance.execute(<<-SQL, question_id)
            SELECT
                COUNT(*) AS num_likes
            FROM
                question_likes
            WHERE
                question_likes.question_id = ?
        SQL
    end

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end
end