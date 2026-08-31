// const nome : string = 'Duda';

// soma(7, 10);

// function soma(numA : number, numB : number) : number {
//     return numA + numB;
// }

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ onClick, className, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        border-2 border-gray-400 rounded
        text-blue-700 font-bold uppercase
        py-2 px-4
        hover:cursor-pointer
        hover:border-blue-700
        ${className}
        `}
    >
      {children}
    </button>
  );
}
