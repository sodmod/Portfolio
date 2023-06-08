import pics from "./assests/Rectangle3.png";

export const getProjects = () => {
  const details = [
    {
      id: "1",
      title: "Grammercetamol",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque temporibus nulla expedita earum aspernatur porro assumenda, explicabo consectetur blanditiis quibusdam eius voluptatem harum? Aliquam aliquid, repudiandae velit suscipit omnis eveniet.",
      images: pics,
    },
    {
      id: "2",
      title: "Task Interface",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque temporibus nulla expedita earum aspernatur porro assumenda, explicabo consectetur blanditiis quibusdam eius voluptatem harum? Aliquam aliquid, repudiandae velit suscipit omnis eveniet.",
      images: pics,
    },
    {
      id: "3",
      title: "Food App",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque temporibus nulla expedita earum aspernatur porro assumenda, explicabo consectetur blanditiis quibusdam eius voluptatem harum? Aliquam aliquid, repudiandae velit suscipit omnis eveniet.",
      images: pics,
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
