const serializer = (type, data) => {
  return {
    type,
    attributes: data,
  };
};

export { serializer };
