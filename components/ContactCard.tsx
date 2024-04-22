import Image from "next/image";
import { Card } from "./ui/card";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

type ContactCardProps = {
  imageProfile: string;
  logo?: string;
  title: string;
  subtitle?: string;
  link?: string;
};

const ContactCard = (props: ContactCardProps) => {
  return (
    <Card className="flex w-full sm:flex-1 overflow-hidden">
      <Link
        href={props.link || "/"}
        className="px-4 py-2 w-full h-full flex justify-between items-center cursor-pointer group bg-accent/30 hover:bg-accent"
      >
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12">
            <div className="w-full h-full rounded-full overflow-hidden border bg-primary-foreground">
              <Image
                src={props.imageProfile}
                alt="Profile"
                width={150}
                height={150}
                className="object-contain scale-125 w-full h-full"
              />
            </div>
            {props.logo && (
              <Image
                src={props.logo}
                alt="logo"
                width={120}
                height={120}
                className="w-5 h-5 absolute -right-1 -bottom-1 z-10"
              />
            )}
          </div>
          <div className="flex flex-col gap-1">
            <span> {props.title} </span>
            <span className="text-sm font-mono text-muted-foreground flex flex-wrap">
              {" "}
              {props.subtitle}{" "}
            </span>
          </div>
        </div>
        <div className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-125 transition-transform duration-500">
          <MdOutlineArrowOutward />
        </div>
      </Link>
    </Card>
  );
};

export default ContactCard;
