class Action < ApplicationRecord
  validates_presence_of :description, allow_blank: false
  belongs_to :card, foreign_key: 'card_id', class_name: 'Card', required: true

  def field_to_description(field, content)
    {
      title: " Changed title to #{content}",
      list_id: " Changed list to #{List.find(content.to_i).title}",
      position: " Changed position to #{content}",
      description: " Changed description to #{content}",
      archived: " Changed archived to #{content}",
      due_date: " Changed due date to #{content}",
      completed: " Marked completed as #{content}",
      labels: " Added labels #{content}"
    }
  end
end