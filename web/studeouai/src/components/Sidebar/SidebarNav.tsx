import { Stack } from "@chakra-ui/react";
import { RiArtboardLine, RiContactsLine, RiDashboardLine, RiNotificationLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
        return (
                <Stack spacing="12" align="flex-start">
                        <NavSection title="GERAL">
                                <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
                                <NavLink icon={RiContactsLine}>Usuários</NavLink>
                        </NavSection>
                        <NavSection title="NOTIFICAÇÕES">
                                <NavLink icon={RiNotificationLine}>Notificações</NavLink>
                        </NavSection>
                        <NavSection title="AULAS">
                                <NavLink icon={RiArtboardLine}>Flutter</NavLink>
                                <NavLink icon={RiArtboardLine}>ReactJS</NavLink>
                                <NavLink icon={RiArtboardLine}>Pneumática</NavLink>
                        </NavSection>
                </Stack>
        )
}