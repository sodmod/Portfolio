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
      preview: "Grammercetamol is an E-Learning web application ",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odio recusandae eaque? Sunt delectus voluptatibus dolores aut, assumenda provident molestias quidem nemo doloremque molestiae quos sequi harum accusamus veritatis deserunt  Blanditiis, dolore? Aliquid minus assumenda animi dignissimos id in ea dicta voluptate amet? Corporis nisi assumenda dicta explicabo ipsam obcaecati distinctio dignissimos sed nam? Totam iure quisquam beatae modi veritatis!  Accusantium, nulla. Voluptas natus quo facilis aspernatur odio sunt soluta saepe dolorum provident. Consequuntur, quisquam cum? Consequatur, iste obcaecati? Nam, eligendi autem provident non dolorem maxime est vero minus ea.Quam nihil sint hic ipsa, facilis eveniet quasi dolorem ducimus aspernatur, aut laborum quo saepe. Dolores unde fugiat vero blanditiis? Obcaecati odio maiores iusto dolorum inventore! Commodi earum aliquam nesciunt.Vero, totam odio pariatur voluptatibus fugiat quidem velit cupiditate doloremque architecto tempora obcaecati officia recusandae in dignissimos laborum dolor magnam asperiores ipsum! Mollitia necessitatibus, ad corporis consequatur cumque dolorum neque! Repudiandae reprehenderit cum beatae nobis! Dicta officia libero unde voluptatum qui, autem quod, nisi repellat tempore quasi, reiciendis ipsam! Perspiciatis vitae inventore, aspernatur consectetur sequi fugiat nobis ab et suscipit?",
      images: grammercetamol,
      url: "https://grammercetamol.netlify.app/",
      github_repo: {
        frontend: "https://github.com/sodmod/grammercetamol-interface",
        backend: "https://github.com/sodmod/grammercetamol",
      },
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
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odio recusandae eaque? Sunt delectus voluptatibus dolores aut, assumenda provident molestias quidem nemo doloremque molestiae quos sequi harum accusamus veritatis deserunt  Blanditiis, dolore? Aliquid minus assumenda animi dignissimos id in ea dicta voluptate amet? Corporis nisi assumenda dicta explicabo ipsam obcaecati distinctio dignissimos sed nam? Totam iure quisquam beatae modi veritatis!  Accusantium, nulla. Voluptas natus quo facilis aspernatur odio sunt soluta saepe dolorum provident. Consequuntur, quisquam cum? Consequatur, iste obcaecati? Nam, eligendi autem provident non dolorem maxime est vero minus ea.Quam nihil sint hic ipsa, facilis eveniet quasi dolorem ducimus aspernatur, aut laborum quo saepe. Dolores unde fugiat vero blanditiis? Obcaecati odio maiores iusto dolorum inventore! Commodi earum aliquam nesciunt.Vero, totam odio pariatur voluptatibus fugiat quidem velit cupiditate doloremque architecto tempora obcaecati officia recusandae in dignissimos laborum dolor magnam asperiores ipsum! Mollitia necessitatibus, ad corporis consequatur cumque dolorum neque! Repudiandae reprehenderit cum beatae nobis! Dicta officia libero unde voluptatum qui, autem quod, nisi repellat tempore quasi, reiciendis ipsam! Perspiciatis vitae inventore, aspernatur consectetur sequi fugiat nobis ab et suscipit?",
      images: foodApp,
      url: "https://badmus-food-order-app.netlify.app/",
      github_repo: {
        frontend: "https://github.com/sodmod/food-app",
        backend: "",
      },
      technologies: [{ language: "Javascript", framework: "React" }],
    },
    {
      id: "3",
      title: "ToDo Task",
      preview:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque temporibus nulla expedita earum aspernatur porro assumenda, explicabo consectetur blanditiis quibusdam eius voluptatem harum? Aliquam aliquid, repudiandae velit suscipit omnis eveniet.",

      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odio recusandae eaque? Sunt delectus voluptatibus dolores aut, assumenda provident molestias quidem nemo doloremque molestiae quos sequi harum accusamus veritatis deserunt  Blanditiis, dolore? Aliquid minus assumenda animi dignissimos id in ea dicta voluptate amet? Corporis nisi assumenda dicta explicabo ipsam obcaecati distinctio dignissimos sed nam? Totam iure quisquam beatae modi veritatis!  Accusantium, nulla. Voluptas natus quo facilis aspernatur odio sunt soluta saepe dolorum provident. Consequuntur, quisquam cum? Consequatur, iste obcaecati? Nam, eligendi autem provident non dolorem maxime est vero minus ea.Quam nihil sint hic ipsa, facilis eveniet quasi dolorem ducimus aspernatur, aut laborum quo saepe. Dolores unde fugiat vero blanditiis? Obcaecati odio maiores iusto dolorum inventore! Commodi earum aliquam nesciunt.Vero, totam odio pariatur voluptatibus fugiat quidem velit cupiditate doloremque architecto tempora obcaecati officia recusandae in dignissimos laborum dolor magnam asperiores ipsum! Mollitia necessitatibus, ad corporis consequatur cumque dolorum neque! Repudiandae reprehenderit cum beatae nobis! Dicta officia libero unde voluptatum qui, autem quod, nisi repellat tempore quasi, reiciendis ipsam! Perspiciatis vitae inventore, aspernatur consectetur sequi fugiat nobis ab et suscipit?",

      images: toDo,
      url: "https://badmus-todo-list.netlify.app/",
      github_repo: {
        frontend: "https://github.com/sodmod/My-_React_ToDo_List",
        backend: "",
      },
      technologies: [{ language: "Javascript", framework: "React" }],
    },
    {
      id: "4",
      title: "Paystack Testing",
      preview:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque temporibus nulla expedita earum aspernatur porro assumenda, explicabo consectetur blanditiis quibusdam eius voluptatem harum? Aliquam aliquid, repudiandae velit suscipit omnis eveniet.",

      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odio recusandae eaque? Sunt delectus voluptatibus dolores aut, assumenda provident molestias quidem nemo doloremque molestiae quos sequi harum accusamus veritatis deserunt  Blanditiis, dolore? Aliquid minus assumenda animi dignissimos id in ea dicta voluptate amet? Corporis nisi assumenda dicta explicabo ipsam obcaecati distinctio dignissimos sed nam? Totam iure quisquam beatae modi veritatis!  Accusantium, nulla. Voluptas natus quo facilis aspernatur odio sunt soluta saepe dolorum provident. Consequuntur, quisquam cum? Consequatur, iste obcaecati? Nam, eligendi autem provident non dolorem maxime est vero minus ea.Quam nihil sint hic ipsa, facilis eveniet quasi dolorem ducimus aspernatur, aut laborum quo saepe. Dolores unde fugiat vero blanditiis? Obcaecati odio maiores iusto dolorum inventore! Commodi earum aliquam nesciunt.Vero, totam odio pariatur voluptatibus fugiat quidem velit cupiditate doloremque architecto tempora obcaecati officia recusandae in dignissimos laborum dolor magnam asperiores ipsum! Mollitia necessitatibus, ad corporis consequatur cumque dolorum neque! Repudiandae reprehenderit cum beatae nobis! Dicta officia libero unde voluptatum qui, autem quod, nisi repellat tempore quasi, reiciendis ipsam! Perspiciatis vitae inventore, aspernatur consectetur sequi fugiat nobis ab et suscipit?",
      images: paystack_testing,
      url: "https://badmus-paystack-testing.netlify.app/",
      github_repo: {
        frontend: "https://github.com/sodmod/paystack-interface",
        backend: "https://github.com/sodmod/spring-paystack",
      },
      technologies: [
        { language: "Javascript", framework: "React" },
        { language: "Java", framework: "SpringBoot" },
      ],
    },
    {
      id: "5",
      title: "Expenses",
      preview:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque temporibus nulla expedita earum aspernatur porro assumenda, explicabo consectetur blanditiis quibusdam eius voluptatem harum? Aliquam aliquid, repudiandae velit suscipit omnis eveniet.",

      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odio recusandae eaque? Sunt delectus voluptatibus dolores aut, assumenda provident molestias quidem nemo doloremque molestiae quos sequi harum accusamus veritatis deserunt  Blanditiis, dolore? Aliquid minus assumenda animi dignissimos id in ea dicta voluptate amet? Corporis nisi assumenda dicta explicabo ipsam obcaecati distinctio dignissimos sed nam? Totam iure quisquam beatae modi veritatis!  Accusantium, nulla. Voluptas natus quo facilis aspernatur odio sunt soluta saepe dolorum provident. Consequuntur, quisquam cum? Consequatur, iste obcaecati? Nam, eligendi autem provident non dolorem maxime est vero minus ea.Quam nihil sint hic ipsa, facilis eveniet quasi dolorem ducimus aspernatur, aut laborum quo saepe. Dolores unde fugiat vero blanditiis? Obcaecati odio maiores iusto dolorum inventore! Commodi earum aliquam nesciunt.Vero, totam odio pariatur voluptatibus fugiat quidem velit cupiditate doloremque architecto tempora obcaecati officia recusandae in dignissimos laborum dolor magnam asperiores ipsum! Mollitia necessitatibus, ad corporis consequatur cumque dolorum neque! Repudiandae reprehenderit cum beatae nobis! Dicta officia libero unde voluptatum qui, autem quod, nisi repellat tempore quasi, reiciendis ipsam! Perspiciatis vitae inventore, aspernatur consectetur sequi fugiat nobis ab et suscipit?",
      images: expenses,
      url: "https://sodiq-expenses.netlify.app/",
      github_repo: {
        frontend: "https://github.com/sodmod/FirstReactProject",
        backend: "",
      },
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
