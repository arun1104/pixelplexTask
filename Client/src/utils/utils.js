import * as XLSX from "xlsx";

export const commonUtils = {
  convertJsonToCsvOrExcel: ({ jsonArray, csvColumns, fileName, extension }) => {
    const csvHeader =
      csvColumns?.length > 0 && csvColumns?.map((col) => col?.Header);

    const csvContent = [
      csvHeader,
      ...jsonArray?.map(
        (row) =>
          csvColumns?.length > 0 && csvColumns?.map((col) => row[col?.accessor])
      ),
    ];

    const ws = XLSX.utils.aoa_to_sheet(csvContent);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
    XLSX.writeFile(wb, `${fileName}.${extension}`); // .csv, .xlsx
  },
};

export const convertUTCToLocal = (utcDateStr, offsetStr) => {
    const utcDate = new Date(utcDateStr); // Convert input to UTC Date object

    console.log("UTC Input:", utcDate.toISOString()); // Debugging
  
    // Extract sign, hours, and minutes from offset string
    const sign = offsetStr.startsWith("-") ? -1 : 1;
    const [hours, minutes] = offsetStr.slice(1).split(":").map(Number);
    const offsetMinutes = sign * (hours * 60 + minutes); // Convert to total minutes
  
    // Apply the offset in milliseconds
    const localDate = new Date(utcDate.getTime() + offsetMinutes * 60 * 1000);
  
    console.log("Local Date Object:", localDate.toISOString()); // Debugging
  
    // Format output as 'YYYY-MM-DD HH:mm:ss'
    return localDate.toISOString().replace("T", " ").slice(0, 19);
};

export const convertLocalToUTC = (localDateTimeStr) => {
  const localDate = new Date(localDateTimeStr); 
  const offsetMinutes = localDate.getTimezoneOffset(); 
  const utcDate = new Date(localDate.getTime() + offsetMinutes * 60 * 1000); 
  return utcDate.toISOString();
};
