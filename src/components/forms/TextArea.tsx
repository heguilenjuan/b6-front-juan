import React from 'react'
import '@/styles/components/form.scss';



interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
    register?: any;
    error?: string;
    hint?: string;
}

export const Textarea = ({
    label,
    name,
    register,
    error,
    hint,
    id,
    ...rest
}: TextareaProps) => {
    const textareaId = id || name;

    return (
        <div className="form-group">
            <label htmlFor={textareaId} className="form-label">
                {label}
            </label>
            <textarea
                id={textareaId}
                className={`form-textarea ${error ? 'has-error' : ''}`}
                aria-invalid={!!error}
                aria-describedby={error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined}
                {...(register ? register(name) : {})}
                {...rest}
            />
            {error ? (
                <p id={`${textareaId}-error`} className="form-error">
                    {error}
                </p>
            ) : (
                hint && (
                    <p id={`${textareaId}-hint`} className="form-hint">
                        {hint}
                    </p>
                )
            )}
        </div>
    );
};