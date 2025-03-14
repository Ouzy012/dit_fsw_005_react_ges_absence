
const InputField = ({type, name, placeholder, errors}) => {
  return (
    <>
      <input
        type={type}
        class="form-control form-control-user"
        placeholder={placeholder}
        name={name}
      />
      {errors[name] && <span className="small text-danger"> {errors[name]} </span>}
    </>
  );
};

export default InputField;
