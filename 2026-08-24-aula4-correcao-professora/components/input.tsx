type InputProps = {
  placeholder?: string;
  type?: "text" | "password";
};

export default function Input({ type = "text", placeholder }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-2 border-2 border-gray-300 rounded-lg hover:border-black focus:border-blue-900 outline-none"
    />
  );
}
