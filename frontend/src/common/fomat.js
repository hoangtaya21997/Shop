const formatDate = (isoString) => {
    if(!isoString) return "-"
    const date = new Date(isoString); 
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes(); 
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; 
    const year = date.getUTCFullYear();
    return `${hours}h:${minutes.toString().padStart(2, '0')} ${day}/${month}/${year}`;
};

const fomatPrice = (numberString) => {
    if(!numberString) return "-"
    return Number(numberString).toLocaleString();
};

export {formatDate, fomatPrice}
