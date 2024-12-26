"use client";
import React from 'react';
import { useForm } from 'react-hook-form'; // Import React Hook Form
import PropTypes from 'prop-types';

import { DailyInput } from '../DailyInputs/DailyInput/DailyInput';
import { DailyInputArea } from '../DailyInputs/DailyInputArea/DailyInputArea';
import { DailyInputLabel } from '../DailyInputs/DailyInputLabel/DailyInputLabel';
import { DailyButton } from '../DailyButton/DailyButton';

const fieldComponents = {
    text: DailyInput,
    description: DailyInputArea,
    labels: DailyInputLabel,
};

export const DailyForm = ({ fields, onSubmit, onCancel }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onFormSubmit = (data) => {
        console.log('Form data:', data);
        if (onSubmit) {
            onSubmit(data);
        }
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-4">
            {fields.map((field, index) => {
                const FieldComponent = fieldComponents[field.type];

                // Ensure that a valid field type is provided
                if (!FieldComponent) {
                    console.error(`Invalid field type: ${field.type}`);
                    return null;
                }

                return (
                    <div key={index}>
                        <FieldComponent
                            type={field.type}
                            id={field.id}
                            name={field.name}
                            label={field.label}
                            placeholder={field.placeholder}
                            {...register(field.name)} // Register input field with React Hook Form
                        />
                        {errors[field.name] && (
                            <span className="text-red-500 text-sm">{errors[field.name]?.message}</span>
                        )}
                    </div>
                );
            })}
            <div className="flex justify-end gap-4">
                <DailyButton
                    mode="light"
                    type="button"
                    label="Cancel"
                    padding="py-2 px-4"
                    rounded="rounded-md"
                    onClick={onCancel}
                />
                <DailyButton
                    mode="primary"
                    type="submit"
                    label="Submit"
                    padding="py-2 px-4"
                    rounded="rounded-md"
                />
            </div>
        </form>
    );
};

DailyForm.propTypes = {
    fields: PropTypes.array.isRequired,
    onSubmit: PropTypes.func,
    onCalcel: PropTypes.func,
};
