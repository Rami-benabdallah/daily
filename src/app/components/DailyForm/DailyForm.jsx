"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
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

const validationSchema = Yup.object().shape({
    'task-title': Yup.string().required('Title is required'),
    'task-description': Yup.string().required('Description is required'),
    'task-labels': Yup.array()
        .of(Yup.string().min(2, 'Each label must be at least 2 characters').max(20, 'Each label can be up to 20 characters'))
        .min(1, 'At least one label is required')
        .max(5, 'You can add up to 5 labels')
        .required('Labels are required'),
});

export const DailyForm = ({ fields, onSubmit, onCancel }) => {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: fields.reduce((acc, field) => {
            acc[field.name] = '';
            return acc;
        }, {}),
    });

    const onFormSubmit = (data) => {
        console.log('Form data:', data);
        if (onSubmit) {
            onSubmit(data);
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-4">
            {fields.map((field, index) => {
                const FieldComponent = fieldComponents[field.type];

                if (!FieldComponent) {
                    console.error(`Invalid field type: ${field.type}`);
                    return null;
                }

                return (
                    <div key={index} className="flex flex-col gap-2">
                        <FieldComponent
                            type={field.type}
                            id={field.id}
                            name={field.name}
                            label={field.label}
                            placeholder={field.placeholder}
                            register={register}
                            setValue={setValue} // Pass setValue
                            getValues={getValues}
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
                    onClick={() => {
                        reset(); // Reset form when cancel is clicked
                        if (onCancel) onCancel();
                    }}
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
