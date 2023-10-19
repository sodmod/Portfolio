import foodApp from "./assests/foodApp.jpg";
import expenses from "./assests/expenses.jpg";
import toDo from "./assests/todoList.jpg";
import grammercetamol from "./assests/grammercetamol.jpg";
import paystack_testing from "./assests/paystack_testing.jpg";
import chat_ap from "./assests/chat_app.JPG";

export const getProjects = () => {
  const details = [
    {
      id: "1",
      title: "Grammercetamol",
      preview:
        "Grammercetamol is an E-Learning linguistic web application that focus on teaching people how to be proficient in English Language",
      message: "",
      images: grammercetamol,
      url: "https://grammercetamol.netlify.app/",
      github_repo: {
        frontend: "https://github.com/sodmod/grammercetamol-interface",
        backend: "https://github.com/sodmod/grammercetamol",
      },
      technologies: [
        { language: "Javascript", framework: "React Library" },
        { language: "Java", framework: "SpringBoot" },
        { language: "Databasee", framework: "Postgres" },
      ],
    },
    {
      id: "2",
      title: "Food Application",
      preview: "",
      message: "",
      images: foodApp,
      url: "https://badmus-food-order-app.netlify.app/",
      github_repo: {
        frontend: "https://github.com/sodmod/food-app",
        backend: "",
      },
      technologies: [{ language: "Javascript", framework: "React Library" }],
    },
    {
      id: "3",
      title: "ToDo Task",
      preview: "",
      message: "",
      images: toDo,
      url: "https://badmus-todo-list.netlify.app/",
      github_repo: {
        frontend: "https://github.com/sodmod/My-_React_ToDo_List",
        backend: "",
      },
      technologies: [{ language: "Javascript", framework: "React Library" }],
    },
    {
      id: "4",
      title: "Paystack Testing",
      preview: "",
      message: "",
      images: paystack_testing,
      url: "https://badmus-paystack-testing.netlify.app/",
      github_repo: {
        frontend: "https://github.com/sodmod/paystack-interface",
        backend: "https://github.com/sodmod/spring-paystack",
      },
      technologies: [
        { language: "Javascript", framework: "React Library" },
        { language: "Java", framework: "SpringBoot" },
      ],
    },
    {
      id: "5",
      title: "Expenses",
      preview: "",
      message: "",
      images: expenses,
      url: "https://sodiq-expenses.netlify.app/",
      github_repo: {
        frontend: "https://github.com/sodmod/FirstReactProject",
        backend: "",
      },
      technologies: [{ language: "Javascript", framework: "React Library" }],
    },
    {
      id: "6",
      title: "Web Chat Application",
      preview:
        "An application to show the implementation of Web Socket communication",
      message:
        "Olutan is a web-based chatting application that focuses on the implementation of Web Socket.",
      images: chat_ap,
      url: "https://olutan.netlify.app",
      github_repo: {
        frontend: "https://github.com/sodmod/chatting-application-interface",
        backend: "https://github.com/sodmod/chatting-application",
      },
      technologies: [
        { language: "Javascript", framework: "React Library" },
        { language: "Java", framework: "SpringBoot" },
      ],
    },
    {
      id: "7",
      title: "Blog App",
      preview: "Post your favourite moments here",
      message:
        "The application is build with NextJs Framework, It is my first Next Js application",
      images: chat_ap,
      url: "https://blog-app-gilt-alpha.vercel.app/",
      github_repo: {
        frontend: "https://github.com/sodmod/blog-app",
        backend: "https://github.com/sodmod/spring-blog-app",
      },
      technologies: [
        { language: "Javascript", framework: "Next Js" },
        { language: "Java", framework: "SpringBoot" },
      ],
    },
  ];
  return { details };
};

export const getProjectsDetails = ({ params }) => {
  const id = params.projectname;
  const { details } = getProjects();
  for (let i = 0, l = details.length; i < l; i++) {
    if (details[i].id === id) {
      const x = details[i];
      return x;
    }
  }
  return null;
};
