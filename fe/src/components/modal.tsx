import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  // onSubmit: {
  //   data: {
  //     title: string;
  //     date: string;
  //     startTime: string;
  //     endTime: string
  //   }
  // }
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onSubmit({ title, date, startTime, endTime });
    onClose();
    // Clear fields after submission
    setTitle('');
    setDate('');
    setStartTime('');
    setEndTime('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Add Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="title">Title</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="date">Date</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="startTime">Start Time</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="time"
              id="startTime"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="endTime">End Time</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="time"
              id="endTime"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="text-gray-500 hover:underline"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-4 py-2"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
