import { useState } from "react";
import Modal from "../../Ui/Modal";
import { HiOutlinePlus } from "react-icons/hi";
function Classes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">My Classes</h1>
            <span>Manage your class roster and curriculum</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 "
          >
            <HiOutlinePlus />
            <span>Create Class</span>
          </button>
        </div>
        <div  className="w-full">
     <input
        type="text"
        placeholder="Search classess..."
        className="w-full mb-4 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
        </div>
       

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Create Class Form</h2>
          <form>
            <input
              type="text"
              placeholder="Class Name"
              className="border p-2 mb-4 w-full"
            />
            <input
              type="text"
              placeholder="Class Name"
              className="border p-2 mb-4 w-full"
            />
            <input
              type="text"
              placeholder="Class Name"
              className="border p-2 mb-4 w-full"
            />

            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </Modal>
      </div>
   
    </>
  );
}

export default Classes;
