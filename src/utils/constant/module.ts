interface Competency {
  title: string;
  description: string;
  link: string;
}

interface Course {
  title: string;
  description: string;
  competency: Competency[];
}

export const COURSES: Course[] = [
  {
    title: "Pemrograman",
    description: "Materi Kompetensi",
    competency: [
      {
        title:
          "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
        description:
          "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
        link: "/course/1",
      },
      {
        title:
          "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
        description:
          "Pemrograman Lanjutan adalah pemrograman paling bla bla paling bla bla...",
        link: "/course/2",
      },
      {
        title:
          "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
        description:
          "Pemrograman Expert adalah pemrograman paling bla bla paling bla bla...",
        link: "/course/3",
      },
    ],
  },
  {
    title: "Pemrograman",
    description: "Materi Kompetensi",
    competency: [
      {
        title:
          "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
        description:
          "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
        link: "/course/1",
      },
      {
        title:
          "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
        description:
          "Pemrograman Lanjutan adalah pemrograman paling bla bla paling bla bla...",
        link: "/course/2",
      },
      {
        title:
          "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
        description:
          "Pemrograman Expert adalah pemrograman paling bla bla paling bla bla...",
        link: "/course/3",
      },
    ],
  },
  {
    title: "Pemrograman",
    description: "Materi Kompetensi",
    competency: [
      {
        title:
          "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
        description:
          "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
        link: "/course/1",
      },
      {
        title:
          "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
        description:
          "Pemrograman Lanjutan adalah pemrograman paling bla bla paling bla bla...",
        link: "/course/2",
      },
      {
        title:
          "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
        description:
          "Pemrograman Expert adalah pemrograman paling bla bla paling bla bla...",
        link: "/course/3",
      },
    ],
  },
];
