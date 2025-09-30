interface DropdownContentProps {
  children: React.ReactNode;
}
export function DropdownContent({ children }: DropdownContentProps) {
  return (
    <div className="w-full bg-azul-escuro p-8">
      <ul className="flex flex-col gap-2 h3 text-branco">
        {children}
      </ul>
    </div>
  );
}
