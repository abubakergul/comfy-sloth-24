interface Props {
  label: string;
  color?: string;
  width?: string;
}
const Button = ({ label, color, width }: Props) => {
  return (
    <button
      className={`bg-custom-brown text-white p-2 rounded-md tracking-wider ${color} ${width}`}
    >
      {label}
    </button>
  );
};
export default Button;
