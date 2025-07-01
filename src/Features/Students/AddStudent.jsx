import { useState } from "react";
import Modal from "../../Ui/Modal";
import { HiOutlinePlus, HiOutlineSearch } from "react-icons/hi";
function AddStudent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold"> Classes</h1>
            <span className="text-md  text-gray-500">Manage your class roster and curriculum</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center gap-2 cursor-pointer"
          >
            <HiOutlinePlus />
            <span>Create Class</span>
          </button>
        </div>
      <SearchInput/>
       

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




function SearchInput() {
  return (
    <div className="bg-white p-6 border rounded-2xl border-gray-200">
    <div  className="flex items-center w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
      <HiOutlineSearch className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search classess..."
        className="w-full outline-none bg-transparent"
      />
    </div>
    </div>
  );
}


export default AddStudent;
