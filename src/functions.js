import foodApp from "./assests/expenses.jpg";
import expenses from "./assests/expenses.jpg";
import toDo from "./assests/todoList.jpg";
import grammercetamol from "./assests/grammercetamol.jpg";
import paystack_testing from "./assests/paystack_testing.jpg";

export const getProjects = () => {
  const details = [
    {
      id: "1",
      title: "Grammercetamol",
      preview:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque temporibus nulla expedita earum aspernatur porro assumenda, explicabo consectetur blanditiis quibusdam eius voluptatem harum? Aliquam aliquid, repudiandae velit suscipit omnis eveniet.",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque temporibus nulla expedita earum aspernatur porro assumenda, explicabo consectetur blanditiis quibusdam eius voluptatem harum? Aliquam aliquid, repudiandae velit suscipit omnis eveniet.",
      images: grammercetamol,
      url: "",
      github_repo: "",
      technologies: [
        { language: "Javascript", framework: "React" },
        { language: "Java", framework: "SpringBoot" },
        { language: "Databasee", framework: "Postgres" },
      ],
    },
    {
      id: "2",
      title: "Food Application",
      preview:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque temporibus nulla expedita earum aspernatur porro assumenda, explicabo consectetur blanditiis quibusdam eius voluptatem harum? Aliquam aliquid, repudiandae velit suscipit omnis eveniet.",

      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque temporibus nulla expedita earum aspernatur porro assumenda, explicabo consectetur blanditiis quibusdam eius voluptatem harum? Aliquam aliquid, repudiandae velit suscipit omnis eveniet.",
      images: foodApp,
      url: "",
      github_repo: "",
      technologies: [{ language: "Javascript", framework: "React" }],
    },
    {
      id: "3",
      title: "ToDo Task",
      preview:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque temporibus nulla expedita earum aspernatur porro assumenda, explicabo consectetur blanditiis quibusdam eius voluptatem harum? Aliquam aliquid, repudiandae velit suscipit omnis eveniet.",

      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque temporibus nulla expedita earum aspernatur porro assumenda, explicabo consectetur blanditiis quibusdam eius voluptatem harum? Aliquam aliquid, repudiandae velit suscipit omnis eveniet.",
      images: toDo,
      url: "",
      github_repo: "",
      technologies: [{ language: "Javascript", framework: "React" }],
    },
    {
      id: "4",
      title: "Paystack Testing",
      preview:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque temporibus nulla expedita earum aspernatur porro assumenda, explicabo consectetur blanditiis quibusdam eius voluptatem harum? Aliquam aliquid, repudiandae velit suscipit omnis eveniet.",

      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque temporibus nulla expedita earum aspernatur porro assumenda, explicabo consectetur blanditiis quibusdam eius voluptatem harum? Aliquam aliquid, repudiandae velit suscipit omnis eveniet.",
      images: paystack_testing,
      url: "",
      github_repo: "",
      technologies: [
        { language: "Javascript", framework: "React" },
        { language: "Java", framework: "SpringBoot" },
      ],
    },
    {
      id: "5",
      title: "Paystack Testing",
      preview:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque temporibus nulla expedita earum aspernatur porro assumenda, explicabo consectetur blanditiis quibusdam eius voluptatem harum? Aliquam aliquid, repudiandae velit suscipit omnis eveniet.",

      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque temporibus nulla expedita earum aspernatur porro assumenda, explicabo consectetur blanditiis quibusdam eius voluptatem harum? Aliquam aliquid, repudiandae velit suscipit omnis eveniet.",
      images: expenses,
      url: "",
      github_repo: "",
      technologies: [{ language: "Javascript", framework: "React" }],
    },
  ];
  return { details };
};

export const getProjectsDetails = ({ params }) => {
  const id = params.projectname;
  const { details } = getProjects();
  for (let i = 0, l = details.length; i < l; i++) {
    console.log(details[i]);
    if (details[i].id === id) {
      const x = details[i];
      console.log(x);
      return x;
    }
  }
  return null;
};
