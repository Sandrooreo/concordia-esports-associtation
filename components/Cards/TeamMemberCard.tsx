import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export interface TeamMemberCardProps {
  name: string;
  role: string;
  icon: string;
}

export default function TeamMemberCard(props: TeamMemberCardProps) {
  return (
    <Card className="p-2">
      <CardHeader className="flex flex-col items-center space-y-1 pb-2">
        <Image
          src={props.icon}
          alt={props.name}
          width={100}
          height={100}
          className="rounded-full mb-1"
        />
        <CardTitle className="text-base text-center">{props.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-center">{props.role}</p>
      </CardContent>
    </Card>
  );
}
