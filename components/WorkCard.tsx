import Image from "next/image";

type WorkCardProps = {
  name: string;
  role: string;
  date: string;
  image: string;
  freelancing?: boolean;
};

const WorkCard = (props: WorkCardProps) => {
  const { date, image, name, role, freelancing } = props;

  return (
    <div className="flex flex-1 justify-between items-end">
      <div className="flex gap-3 items-center">
        <div className="relative w-10 h-10">
          <Image
            src={image}
            alt="logo"
            width={150}
            height={150}
            className="w-full h-full object-contain aspect-square"
          />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <h4 className="relative font-semibold flex">
            {name}
            {freelancing ? (
              <span className="absolute left-full -top-1 px-1 py-[2px] text-xs bg-accent rounded-sm">
                Freelance
              </span>
            ) : null}
          </h4>
          <p className="text-muted-foreground text-xs xs:text-sm lg:text-xs"> {role} </p>
        </div>
      </div>
      <span className="text-xs xs:text-sm lg:text-xs text-muted-foreground font-mono"> {date} </span>
    </div>
  );
};

export default WorkCard;
