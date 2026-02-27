import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Input({ value, onChange, label, type, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className="text-[13px] text-slate-800">{label}</label>
      <div className="input-box">
        <input
          type={
            type == "password" ? (showPassword ? "text" : "password") : type
          }
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          className="w-full bg-transparent outline-none"
        />

        {type === "password" && (
          <>
            {showPassword ? (
              <AiOutlineEyeInvisible
                className="text-primary cursor-pointer"
                onClick={() => toggleShowPassword()}
                size={22}
              />
            ) : (
              <AiOutlineEye
                className="text-slate-400 cursor-pointer"
                onClick={() => toggleShowPassword()}
                size={22}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Input;
