import '@/styles/components/form.scss';

interface Option {
    value: string;
    label: string;
}

interface RadioGroupProps {
    label: string;
    name: string;
    options: Option[];
    register?: any;
    error?: string;
}

export const RadioGroup = ({
    label,
    name,
    options,
    register,
    error,
}: RadioGroupProps) => {
    return (
        <fieldset className="form-group">
            <legend className="form-label">{label}</legend>
            {options.map((opt) => (
                <div className="form-radio" key={opt.value}>
                    <input
                        type="radio"
                        id={`${name}-${opt.value}`}
                        value={opt.value}
                        {...(register ? register(name) : {})}
                        name={name}
                    />
                    <label htmlFor={`${name}-${opt.value}`}>{opt.label}</label>
                </div>
            ))}
            {error && <p className="form-error">{error}</p>}
        </fieldset>
    );
};
