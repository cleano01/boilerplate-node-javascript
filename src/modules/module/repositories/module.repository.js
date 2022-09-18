let repository_arry = [];

const mod_repository = () => {
  console.log("module.repository ");
  const mod = {
    name: {
      title: "mod_service",
      description: "mod_service",
      maxLength: 30,
      minLength: 1,
      required: true,
    },
    jobTitle: {
      title: "mod_service",
      type: "mod_service",
    },
  };

  repository_arry.push(mod);
  return repository_arry;
};

export { mod_repository };
