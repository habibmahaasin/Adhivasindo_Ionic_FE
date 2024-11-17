interface MenuItem {
  label: string;
  link: string;
}

export const SIDEBARMENU: MenuItem[] = [
  {
    label: "Dashboard",
    link: "/",
  },
  {
    label: "Modul",
    link: "/modul",
  },
  {
    label: "Peserta",
    link: "/peserta",
  },
  {
    label: "Group Chat",
    link: "/group-chat",
  },
  {
    label: "Pemateri",
    link: "/pemateri",
  },
];
