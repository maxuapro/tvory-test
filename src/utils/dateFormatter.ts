export const convertDate = (dateStr: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  try {
    const parsedDate = new Date(dateStr);
    const day = parsedDate.getDate();
    const month = months[parsedDate.getMonth()];
    const year = parsedDate.getFullYear();

    return `${day} ${month} ${year}`;
  } catch (error) {
    return "Invalid date format. Please provide a valid input.";
  }
};
