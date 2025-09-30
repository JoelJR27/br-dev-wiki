import Link from "next/link";

interface SocialMediaLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function SocialMediaLink({
  children,
  href,
}: SocialMediaLinkProps) {
  return (
    <li>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    </li>
  );
}
