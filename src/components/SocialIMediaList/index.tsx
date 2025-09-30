import SocialMediaLink from "./SocialMediaLink";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";

export default function SocialMediaList() {
  const iconColor = "#0892a5";
  return (
    <ul className="border-t border-verde flex justify-center gap-4 p-4">
      <SocialMediaLink href="https://www.linkedin.com/in/joeljunior27">
        <LinkedIn sx={{ color: iconColor, fontSize: 40 }} />
      </SocialMediaLink>
      <SocialMediaLink href="https://github.com/JoelJR27">
        <GitHub sx={{ color: iconColor, fontSize: 40 }} />
      </SocialMediaLink>
    </ul>
  );
}
