"use client"
import { FC, useState } from 'react';
import { StarIcon } from '@heroicons/react/outline';
import QuestionModal from './QuestionModal';
import QuestionCard from './QuestionCard';

interface Question {
  text: string;
  type: string;
  limit: string;
  canBeSkipped: boolean;
}

const EditApplication: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const openModal = (index?: number) => {
    setEditIndex(index ?? null);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditIndex(null);
  };

  const handleSaveQuestion = (question: Question) => {
    if (editIndex !== null) {
      const updatedQuestions = [...questions];
      updatedQuestions[editIndex] = question;
      setQuestions(updatedQuestions);
    } else {
      setQuestions([...questions, question]);
    }
    closeModal();
  };

  const handleEditQuestion = (index: number) => {
    openModal(index);
  };

  const handleDeleteQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  return (
    <div className="relative p-8 bg-white dark:bg-gray-800">
      <header className={`${questions.length > 0 ? 'mb-4' : 'mb-6'}`}>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Edit your application</h1>
        <p className="text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
      </header>

      {questions.length === 0 && (
        <div>
          <nav className="mb-6">
            <ul className="flex space-x-4 border-b-2 border-gray-200 dark:border-gray-600">
              <li>
                <a href="#" className="text-gray-700 dark:text-gray-300 py-2 px-4 hover:text-gray-900">General Details</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 dark:text-gray-300 py-2 px-4 bg-gray-100 dark:bg-gray-700 rounded-t">Edit Application Questions</a>
              </li>
            </ul>
          </nav>
          
          <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md">
            <StarIcon className="h-12 w-12 text-gray-400 dark:text-gray-500" />
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-4">Let’s add some questions to your applications</h2>
            <p className="text-gray-500 dark:text-gray-400">Click the button below to get your survey up and running.</p>
            <button
              onClick={() => openModal()}
              className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Add a question
            </button>
          </div>
        </div>
      )}

      {questions.length > 0 && (
        <div className="absolute bottom-4 right-4">
          <button
            onClick={() => openModal()}
            className="bg-green-600 dark:bg-green-500 text-white dark:text-gray-200 py-2 px-4 rounded hover:bg-green-700 dark:hover:bg-green-400"
          >
            Add Question
          </button>
        </div>
      )}

      {questions.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Questions:</h3>
          <ul>
            {questions.map((q, index) => (
              <li key={index} className="mb-2">
                <QuestionCard
                  question={q}
                  index={index}
                  onEdit={() => handleEditQuestion(index)}
                  onDelete={() => handleDeleteQuestion(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      <QuestionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSaveQuestion}
        initialData={editIndex !== null ? questions[editIndex] : undefined}
      />
    </div>
  );
};

export default EditApplication;
