import { ChevronDown } from "lucide-react";

interface DropdownButtonProps {
  title: string;
  isHandled: boolean;
  onClick: () => void;
}

export function DropdownButton({
  title,
  isHandled,
  onClick,
}: DropdownButtonProps) {
  return (
    <div
      className="flex items-center justify-between w-full divide-cinza p-6 cursor-pointer hover:bg-"
      onClick={onClick}
    >
      <h6 className="text-cinza h2">{title}</h6>{" "}
      <ChevronDown
        style={{
          transform: isHandled ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s ease-in-out",
        }}
        strokeWidth={3}
      />
    </div>
  );
}
