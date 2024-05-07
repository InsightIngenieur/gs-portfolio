import React from 'react';

interface CvModalProps {
    isOpen: boolean;
    onClose: () => void;
    actionType: 'view' | 'download'; // New prop to determine the action type
}

const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, actionType }) => {
    // Function to handle click on the backdrop to close the modal
    const handleBackdropClick = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent click from propagating further
        onClose(); // Close the modal
    };

    // Function to stop propagation for modal content clicks
    const handleModalContentClick = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent clicks on the modal content from closing the modal
    };

    // Function to open the CV in a new tab and close the modal
    const handleOpenCv = () => {
        const url = "https://drive.google.com/file/d/1O7a-mlVqTWhKvFdD4SV2xhW2D_sfgJRn/view?usp=sharing";
        window.open(url, "_blank");
        onClose(); // Close the modal after opening the link
    };

    // Function to download the CV and close the modal
    const handleDownloadCv = () => {
        const url = "https://drive.google.com/uc?export=download&id=1O7a-mlVqTWhKvFdD4SV2xhW2D_sfgJRn";
        window.open(url, "_blank");
        onClose(); // Close the modal after initiating the download
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onClick={handleBackdropClick} // Close modal when clicking outside
        >
            <div
                className="bg-gradient-to-r from-yellow-300 to-green-500 p-4 md:p-6 rounded-lg shadow-lg max-w-4xl w-full m-4 md:m-6 overflow-auto transform transition-transform duration-300 ease-in-out"
                style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)' }}
                onClick={handleModalContentClick} // Prevent clicks on the modal content from closing the modal
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white text-xl font-bold"
                >
                    X
                </button>
                <div className="text-center p-4 text-white">
                    <h2 className="text-lg font-semibold">{actionType === 'download' ? 'Download CV' : 'View CV'}</h2>
                    <p className="mb-4">You are about to {actionType === 'download' ? 'download' : 'open'} the CV in a new window. Do you want to proceed?</p>
                    <button
                        onClick={actionType === 'download' ? handleDownloadCv : handleOpenCv}
                        className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-200 transition duration-300"
                    >
                        {actionType === 'download' ? 'Download CV' : 'Open CV'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CvModal;