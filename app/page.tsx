import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const teams = [
  { name: "Staff and Creative Team", slug: "staff-and-creative-team" },
  { name: "Rainbow Six: Siege", slug: "rainbow-six-siege" },
  { name: "League of Legends", slug: "league-of-legends" },
  { name: "Rocket League", slug: "rocket-league" },
  { name: "Overwatch 2", slug: "overwatch-2" },
  { name: "Apex Legends", slug: "apex-legends" },
  { name: "CS2", slug: "counter-strike-2" },
  { name: "Valorant", slug: "valorant" },
  { name: "Smash Bro's", slug: "smash-bros" },
  { name: "Deadlock", slug: "deadlock" },
  { name: "Marvel Rivals", slug: "marvel-rivals" },
  { name: "Clash Royal", slug: "clash-royal" },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Welcome to the Concordia Esports Students Association
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>About CeSA</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
          The Concordia Esports Students Association (CeSA) is the hearbeat of Gaming at Concordia!
          We are dedicated to building an electrifying gaming culture at within our community 
          at Concordia University. We power up competitive teams, throw hype-filled events, and 
          create a space where casuals and grinders alike can squad up, compete, and rep their 
          school in style. Whether you are here to climb the ranks or just vibe with the community, 
          CeSA is where gaming lives!
          </p>
        </CardContent>
      </Card>

      <Separator className="my-8" />
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
           Our Concordia Esports teams are gearing up for an action-packed season with a
          lineup of exciting teams and events! Stay connected through our social media channels 
          for the latest updates and more event information. We look forward to seeing you there! 
          </p>
          <h3 className="font-semibold mb-2">The Events:</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Concordia Recruitment (Ongoing):</strong> Concordia Esports is on the hunt for new talent! We&apos;re 
              scouting players ready to step up and dominate on our teams. Squad up, show your skills, and leave the 
              competition in the dust. Click on the team links below for detailed information and to access the sign-up forms.
            </li>
            <li>
              <strong>Rocket League Canada: 1v1s (Oct 4th):</strong> Rocket League Canada hosting a 1v1 tournament at
               Sky Internet Cafe in Lachine. Hosted on October 4th at 4:30pm EST. Come support some of our players or watch it live
                on www.twitch.tv/shawngru Twitch!
            </li>
            <li>
              <strong>ETS R6 LAN (Oct 18-19):</strong> École de Technologie Supérieure is running a 
              small Montreal based Rainbow Six Siege LAN with Concordia, McGill, UDEM and some friendly Ontario schools.
               Last year they hosted a similar event and this year they&apos;re holding a bigger and better 2 day event.
              Come watch live at the ETS school or on the ETS Twitch!
            </li>
            <li>
              <strong>LOL Worlds 2025 (Nov 9th):</strong> League of Legends World Championships will be taking place
              in China this year. Last Worlds we hosted a watch party on Concordia campus. Join us again this year!
              Good food, good friends, good fun with our gaming community!
            </li>
            <li>
              <strong>Other Events (TBD):</strong> Our President of Concordia Esports wants to throw some more events
              this year, and is looking for opportunities to gather the gamers and celebrate that which brings us together!
              If you have any ideas or know of fun events happening, let us know! And keep tabs on the discord in CLUB-ANNOUNCEMNTS 
              for more details on our next coming events!
            </li>
          </ul>
        </CardContent>
      </Card>

      <Separator className="my-8" />
      <h2 className="text-2xl font-semibold mb-4">Our Teams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team) => (
          <Link href={`/teams/${team.slug}`} key={team.slug}>
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={`/games/${team.slug}.png`}
                      alt={`${team.name} logo`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <CardTitle>{team.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Learn more about our {team.name} team.
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
