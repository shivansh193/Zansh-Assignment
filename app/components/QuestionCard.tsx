"use client"
import { FC } from 'react';

interface Question {
  text: string;
  type: string;
  limit: string;
  canBeSkipped: boolean;
}

interface QuestionCardProps {
  question: Question;
  index: number;
  onEdit: () => void;
  onDelete: () => void;
}

const QuestionCard: FC<QuestionCardProps> = ({ question, index, onEdit, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800">
      <div className="flex-1 flex items-start">
        <span className="text-gray-900 dark:text-gray-100 text-lg font-semibold mr-4">{index + 1}.</span>
        <div>
          <p className="text-gray-900 dark:text-gray-100">{question.text}</p>
          <p className="text-gray-700 dark:text-gray-300">{question.type}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onEdit}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
