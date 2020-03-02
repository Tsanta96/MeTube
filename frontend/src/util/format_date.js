export const convertDate = (date) => {
    let newDate = new Date(date);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getYear() + 1900;
    let newDateFormat = `${month}/${day}/${year}`

    return newDateFormat;
}

export default convertDate;