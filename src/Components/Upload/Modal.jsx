import React, { useState, useRef } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const config_input = useRef(null);
  const click_config = () => {
    // config_input.current.click();
    console.log(config_input.current.files);
    };

  const data_input = useRef(null);
  const click_data = () => {
    // data_input.current.click();
    console.log(data_input.current.files);
    };

  return (
    <div className='font-poppins'>
      {/* Modal toggle */}
      <button
        data-modal-target="select-modal"
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Upload Data
      </button>

      {/* Main modal */}
      {isOpen && (
        <div
          id="select-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-screen"
        >
          <div className="absolute w-full h-full bg-black opacity-50" onClick={toggleModal}></div>
          <div className="relative p-4 w-[45vw] max-h-full overflow-y-auto overflow-x-hidden">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Upload Data
                </h3>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5">
                {/* <p className="text-gray-500 dark:text-gray-400 mb-4">*Accepted file formats: xlsx, csv</p> */}

                {/* <div className='flex justify-center my-4'>
                    <input type="file" ref={config_input} accept=".xlsx,.csv" style={{ display: 'none' }} />
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={click_config}>Upload Configuration File</button>
                </div> */}

                <div className='my-3'>                
                <label class="block mb-2 text-sm font-medium text-gray-800 dark:text-white" for="file_input">Upload Configuration file</label>
                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" ref={config_input} accept=".xlsx,.csv"></input>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">XLSX or CSV</p>
                </div>

                <div className='my-3'>                
                <label class="block mb-2 text-sm font-medium text-gray-800 dark:text-white" for="file_input">Upload Data file</label>
                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" ref={data_input} accept=".xlsx,.csv"></input>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">XLSX or CSV</p>
                </div>
                
                <div className='flex justify-center'>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {click_config(); click_data(); toggleModal();}}>Done</button>
                </div>
                


                {/* <div className='flex justify-center my-4'>
                    <input type="file" ref={data_input} accept=".xlsx,.csv" style={{ display: 'none' }} />
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={click_data}>Upload Data File</button>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
