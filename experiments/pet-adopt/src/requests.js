const requestAllPets = async () => {
  const res = await fetch(`http://pets-v2.dev-apis.com/pets`);
  const json = await res.json();

  return json.pets;
};

export { requestAllPets };
