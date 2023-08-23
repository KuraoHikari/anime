import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { HiChat } from "react-icons/hi";
import { SiMyanimelist } from "react-icons/si";
import { IoMdChatboxes } from "react-icons/io";

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
    icon: IoMdChatboxes,
    active: pathname === "/conversations" || !!conversationId,
   },
  ],
  [pathname, conversationId]
 );

 return routes;
};

export default useRoutes;
