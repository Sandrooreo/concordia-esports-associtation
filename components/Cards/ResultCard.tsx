import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import DisableableLink from "../ui/DisableableLink";

export interface ResultCardProps {
  tournamentName: string;
  logo: string;
  result: string;
  link?: string;
}

export default function ResultCard(props: ResultCardProps) {
  return (
    <DisableableLink
      href={props.link ?? ""}
      disabled={!props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <Card className="p-2 cursor-pointer hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <CardHeader className="flex flex-col items-center space-y-1 pb-2">
          <Image
            src={props.logo}
            alt={props.tournamentName}
            width={100}
            height={100}
            className="mb-1"
          />
          <CardTitle className="text-base text-center line-clamp-2 h-12">
            {props.tournamentName}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex items-center justify-center">
          <p className="text-sm text-center">{props.result}</p>
        </CardContent>
      </Card>
    </DisableableLink>
  );
}
