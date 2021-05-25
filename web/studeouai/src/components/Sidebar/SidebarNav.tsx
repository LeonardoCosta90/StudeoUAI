import { Stack } from "@chakra-ui/react";
import { RiArtboardLine, RiContactsLine, RiDashboardLine, RiNotificationLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
        return (
                <Stack spacing="12" align="flex-start">
                        <NavSection title="GERAL">
                                <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                                <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
                                
                        </NavSection>
                        <NavSection title="NOTIFICAÇÕES">
                                <NavLink icon={RiNotificationLine} href="/notifications">Notificações</NavLink>
                        </NavSection>
                        <NavSection title="AULAS">
                                <NavLink icon={RiArtboardLine} href="classes/flutter">Flutter</NavLink>
                                <NavLink icon={RiArtboardLine} href="classes/reactjs">ReactJS</NavLink>
                                <NavLink icon={RiArtboardLine} href="classes/pneumatic">Pneumática</NavLink>
                        </NavSection>
                </Stack>
        )
}