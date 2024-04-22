import Image from "next/image";
import { Card } from "./ui/card";

type CardSkillProps = {
  logo: string;
  title?: string;
  description?: string;
};

const CardSkill = ({ logo, title, description }: CardSkillProps) => {
  return (
    <Card className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Image
          src={logo}
          width={120}
          height={120}
          alt="logo"
          className="w-8 object-contain aspect-square"
        />
        <h2 className="font-semibold"> {title} </h2>
      </div>
      <p className="text-muted-foreground text-sm">
        { description }
      </p>
    </Card>
  );
};

export default CardSkill;
