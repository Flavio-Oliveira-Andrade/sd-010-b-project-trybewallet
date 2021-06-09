const getCurrency = async () => {
  try {
    const res = await fetch('https://economia.awesomeapi.com.br/json/all');
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

export default getCurrency;
