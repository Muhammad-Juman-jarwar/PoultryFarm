import { InputProps } from "../../types/types";
const Input: React.FC<InputProps> = ({
  className,
  label,
  labelText,
  error,
  ...rest
}) => {
  const id = rest.id || rest.name;

  return (
    <>
      <div className="grid gap-2">
        {label && labelText && (
          <label
            htmlFor={id}
            className={` text-sm lg:text-lg font-semibold ${className}`}
          >
            {labelText}
          </label>
        )}
        <div>
          <input
            className={`p-1 lg:p-3 rounded-md bg-white outline-none text-sm lg:text-lg font-semibold border-gray-500 border-2 ${className}`}
            id={id}
            {...rest}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
