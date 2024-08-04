"use client"
import { FC, useState, useEffect } from 'react';

interface QuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (question: Question) => void;
  initialData?: Question;
}

interface Question {
  text: string;
  type: string;
  limit: string;
  canBeSkipped: boolean;
}

const QuestionModal: FC<QuestionModalProps> = ({ isOpen, onClose, onSave, initialData }) => {
  const [question, setQuestion] = useState<Question>({
    text: '',
    type: 'Text Based',
    limit: '120 Words',
    canBeSkipped: true,
  });

  useEffect(() => {
    if (initialData) {
      setQuestion(initialData);
    }
  }, [initialData]);

  // Handles changes for text input fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuestion({
      ...question,
      [name]: value,
    });
  };

  // Handles changes for textarea specifically
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion({
      ...question,
      text: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSave(question);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md w-3/4 max-w-2xl">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Question Modal</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">Question</label>
          <textarea
            name="text"
            value={question.text}
            onChange={handleTextAreaChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">Question Type</label>
          <select
            name="type"
            value={question.type}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
          >
            <option>Text Based</option>
            <option>Multiple Choice</option>
          </select>
        </div>
        <div className='flex flex-row cols-2 justify-between'>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">Limit</label>
            <input
              type="text"
              name="limit"
              value={question.limit}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">Can be Skipped</label>
            <select
              name="canBeSkipped"
              value={question.canBeSkipped ? 'Yes' : 'No'}
              onChange={(e) =>
                setQuestion({
                  ...question,
                  canBeSkipped: e.target.value === 'Yes',
                })
              }
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-200 py-2 px-4 rounded hover:bg-blue-700 dark:hover:bg-blue-400"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-600 dark:bg-gray-500 text-white dark:text-gray-200 py-2 px-4 rounded hover:bg-gray-700 dark:hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
