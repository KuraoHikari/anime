import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { SiMyanimelist } from "react-icons/si";

import useConversation from "./useConversation";

const useRoutes = () => {
 const pathname = usePathname();

 const { conversationId } = useConversation();

 const routes = useMemo(
  () => [
   {
    label: "Anime-World",
    href: "/anime-world",
    icon: SiMyanimelist,
    active: pathname === "/anime-world",
   },
   {
    label: "Chat",
    href: "/conversations",
    icon: HiChat,
    active: pathname === "/conversations" || !!conversationId,
   },
  ],
  [pathname, conversationId]
 );

 return routes;
};

export default useRoutes;
