import React from "react";
import PropTypes from "prop-types";

import { DailyIconButton } from "../DailyIconButton/DailyIconButton";
import { DailyButton } from "../DailyButton/DailyButton";

import DailyClose from "@/app/assets/icons/DailyClose";

export const DailyModal = ({ title, isOpen, closeModal, mainButtonLabel, showSecondaryButton, secondaryButtonLabel, children }) => {
    const handleBackgroundClick = (e) => {
        e.stopPropagation();
        closeModal();
      };
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-200 ease-in-out"
          onClick={(e) => handleBackgroundClick(e)}
          >
            <div
            className="bg-white rounded-lg p-6 w-96 min-h-96 transform transition-transform duration-300 ease-in-out flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
            >
            {/* Title Section */}
            <div className="flex justify-between items-center mb-10">
                <span className="text-3xl">{title}</span>
                <DailyIconButton
                mode="transparent"
                customPadding="p-0"
                icon={DailyClose}
                size="w-8 h-8"
                onClick={closeModal}
                />
            </div>

            {/* Content Section */}
            <div className="flex-1 mb-4 overflow-y-auto p-2">
                {children}
            </div>

            {/* Buttons Section */}
            <div className="flex justify-end gap-4">
                {showSecondaryButton && secondaryButtonLabel && (
                    <DailyButton
                        mode="light"
                        label={secondaryButtonLabel}
                        padding="py-2 px-4"
                        rounded="rounded-md"
                        onClick={closeModal}
                    />
                )}
                {mainButtonLabel && (
                    <DailyButton
                        mode="primary"
                        label={mainButtonLabel}
                        padding="py-2 px-4"
                        rounded="rounded-md"
                    />
                )}
            </div>
            </div>

        </div>
      )}
    </>
  );
};

DailyModal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.node,
  mainButtonLabel: PropTypes.string,
  secondaryButtonLabel: PropTypes.string,
  showSecondaryButton: PropTypes.boolean,
};

DailyModal.defaultProps = {
    title: '',
    isOpen: false,
    closeModal: undefined,
    children: undefined,
    mainButtonLabel: undefined,
    secondaryButtonLabel: undefined,
    showSecondaryButton: false,
  };