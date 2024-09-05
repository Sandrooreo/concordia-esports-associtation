import Image from "next/image";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar = () => {
  return (
    <header className="bg-mcgill text-white">
      <div className="container mx-auto px-3 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center bg-gray-100 rounded-xl">
          <Image
            src="/mesa_zoomed.png"
            alt="MESA Logo"
            width={60}
            height={60}
          />
        </Link>
        <Menubar className="bg-mcgill border-none">
          <MenubarMenu>
            <MenubarTrigger className="text-white hover:bg-mcgill-vibrant">
              Teams
            </MenubarTrigger>
            <MenubarContent className="bg-mcgill">
              <MenubarItem>
                <Link href="/teams/rainbow-six-siege">Rainbow Six: Siege</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/teams/league-of-legends">League of Legends</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/teams/rocket-league">Rocket League</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/teams/valorant">Valorant</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/teams/overwatch-2">Overwatch 2</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/teams/apex">Apex Legends</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <Link
              href="https://linktr.ee/mcgillesports"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <MenubarTrigger className="text-white hover:bg-mcgill-vibrant">
                Linktree
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link
              href="https://discord.com/invite/AcuuPbQhAv"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <MenubarTrigger className="text-white hover:bg-mcgill-vibrant">
                Discord
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
};

export default Navbar;
