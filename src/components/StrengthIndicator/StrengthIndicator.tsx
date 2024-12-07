interface StrengthIndicatorProps {
  strength: number;
}

export default function StrengthIndicator({
  strength,
}: StrengthIndicatorProps) {
  return (
    <div className="flex flex-col w-full items-center">
      <div
        className={`flex rounded-full h-2 transition-width duration-300 ${
          strength > 3
            ? "bg-green-500 w-11/12"
            : strength > 2
            ? "bg-yellow-500 w-1/2"
            : "bg-red-500 w-1/4"
        }`}
      ></div>
      <p
        className={`transition-text duration-300 ${
          strength > 3
            ? "text-green-500"
            : strength > 2
            ? "text-yellow-500"
            : "text-red-500"
        }`}
      >
        {strength > 3 ? "Strong" : strength > 2 ? "Medium" : "Weak"}
      </p>
    </div>
  );
}
